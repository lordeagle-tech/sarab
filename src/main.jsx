import React, { useEffect, useRef, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { siteMarkup } from './siteMarkup';
import './styles.css';

function SarabApp() {
  const shellRef = useRef(null);
  const [order, setOrder] = useState(new Map());
  const orderRef = useRef(order);

  useEffect(() => {
    const shell = shellRef.current;
    if (!shell) return;
    const menuButton = shell.querySelector('.menu-toggle');
    const mobileMenu = shell.querySelector('.mobile-menu');
    const toggleMenu = () => {
      const open = menuButton?.getAttribute('aria-expanded') === 'true';
      menuButton?.setAttribute('aria-expanded', String(!open));
      mobileMenu?.classList.toggle('open', !open);
      mobileMenu?.setAttribute('aria-hidden', String(open));
      if (mobileMenu) mobileMenu.inert = open;
    };
    menuButton?.addEventListener('click', toggleMenu);
    const closeMenu = () => { menuButton?.setAttribute('aria-expanded', 'false'); mobileMenu?.classList.remove('open'); mobileMenu?.setAttribute('aria-hidden', 'true'); if (mobileMenu) mobileMenu.inert = true; };
    shell.querySelectorAll('.mobile-menu a').forEach((link) => link.addEventListener('click', closeMenu));

    const revealItems = shell.querySelectorAll('.reveal');
    const observer = 'IntersectionObserver' in window ? new IntersectionObserver((entries, current) => entries.forEach((entry) => { if (entry.isIntersecting) { entry.target.classList.add('is-visible'); current.unobserve(entry.target); } }), { threshold: .12 }) : null;
    revealItems.forEach((item) => observer ? observer.observe(item) : item.classList.add('is-visible'));

    const renderOrder = (nextOrder = order) => {
      const lines = shell.querySelector('#order-lines');
      const countEl = shell.querySelector('#order-count');
      const totalEl = shell.querySelector('#order-total');
      const place = shell.querySelector('#place-order');
      const status = shell.querySelector('#order-status');
      const items = [...nextOrder.values()];
      const count = items.reduce((sum, item) => sum + item.quantity, 0);
      const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
      const money = (value) => `KSh ${Math.round(value).toLocaleString('en-KE')}`;
      if (!lines || !countEl || !totalEl || !place) return;
      countEl.textContent = `${count} ${count === 1 ? 'item' : 'items'}`;
      totalEl.textContent = money(total);
      place.disabled = count === 0;
      lines.innerHTML = items.length ? items.map((item) => `<div class="order-line"><span class="order-line-name"><button type="button" data-remove-item="${item.name}" aria-label="Remove ${item.name}">−</button><span>${item.name} ×${item.quantity}</span></span><span class="order-line-price">${money(item.price * item.quantity)}</span></div>`).join('') : '<p class="empty-order">Your table is empty.<br /><strong>Start with something delicious.</strong></p>';
      if (status) status.querySelector('span:last-child').textContent = items.length ? `${items[0].name} is ready for the kitchen.` : 'Add an item to see your kitchen status.';
      lines.querySelectorAll('[data-remove-item]').forEach((button) => button.addEventListener('click', () => {
        const updated = new Map(nextOrder); const item = updated.get(button.dataset.removeItem); if (!item) return; item.quantity -= 1; if (item.quantity <= 0) updated.delete(item.name); orderRef.current = updated; setOrder(updated); renderOrder(updated);
      }));
    };

    const addItem = (name, price, button) => {
      const updated = new Map(orderRef.current); const current = updated.get(name); updated.set(name, { name, price, quantity: current ? current.quantity + 1 : 1 }); orderRef.current = updated; setOrder(updated); renderOrder(updated);
      if (button) { button.innerHTML = 'Added to order <span>✓</span>'; window.setTimeout(() => { button.innerHTML = 'Add to order <span>+</span>'; }, 900); }
      shell.querySelector('#menu')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };
    shell.querySelectorAll('.add-item').forEach((button) => button.addEventListener('click', () => { const item = button.closest('.menu-item'); addItem(item.dataset.name, Number(item.dataset.price), button); }));
    shell.querySelectorAll('[data-staff-pick]').forEach((button) => button.addEventListener('click', () => { const item = shell.querySelector(`.menu-item[data-name="${button.dataset.staffPick}"]`); if (item) addItem(item.dataset.name, Number(item.dataset.price)); }));
    shell.querySelectorAll('.menu-tab').forEach((tab) => tab.addEventListener('click', () => { const category = tab.dataset.category; shell.querySelectorAll('.menu-tab').forEach((item) => { const active = item === tab; item.classList.toggle('is-active', active); item.setAttribute('aria-selected', String(active)); }); shell.querySelectorAll('.menu-item').forEach((item) => item.classList.toggle('is-hidden', category !== 'all' && item.dataset.category !== category)); }));
    shell.querySelectorAll('.fulfillment-option').forEach((option) => option.addEventListener('click', () => { shell.querySelectorAll('.fulfillment-option').forEach((item) => item.classList.remove('is-selected')); option.classList.add('is-selected'); }));
    shell.querySelector('#place-order')?.addEventListener('click', () => { if (!orderRef.current.size) return; const button = shell.querySelector('#place-order'); button.disabled = true; button.innerHTML = 'Order received <span>✓</span>'; const status = shell.querySelector('#order-status span:last-child'); if (status) status.textContent = 'Order received · Chef Morris is preparing your plate.'; });

    const progressBar = shell.querySelector('#scroll-progress-bar'); const parallax = shell.querySelectorAll('.parallax'); let frame;
    const motion = () => { const scrollable = document.documentElement.scrollHeight - window.innerHeight; if (progressBar) progressBar.style.width = `${scrollable > 0 ? Math.min(window.scrollY / scrollable, 1) * 100 : 0}%`; parallax.forEach((item) => item.style.setProperty('--parallax-y', `${Math.min(window.scrollY * -.045, 0)}px`)); frame = null; };
    const onScroll = () => { if (!frame) frame = requestAnimationFrame(motion); }; window.addEventListener('scroll', onScroll, { passive: true }); window.addEventListener('resize', motion); motion(); renderOrder(order);
    return () => { menuButton?.removeEventListener('click', toggleMenu); shell.querySelectorAll('.mobile-menu a').forEach((link) => link.removeEventListener('click', closeMenu)); observer?.disconnect(); window.removeEventListener('scroll', onScroll); window.removeEventListener('resize', motion); };
  }, []);

  return <div ref={shellRef} dangerouslySetInnerHTML={{ __html: siteMarkup }} />;
}

createRoot(document.getElementById('root')).render(<SarabApp />);
