export const siteMarkup = `
    <a class="skip-link" href="#main-content">Skip to content</a>
    <div class="scroll-progress" aria-hidden="true"><span id="scroll-progress-bar"></span></div>
    <div class="ambient-field" aria-hidden="true"><span class="ambient-orb orb-apricot"></span><span class="ambient-orb orb-lime"></span><span class="ambient-orb orb-red"></span><i class="ambient-seed seed-one"></i><i class="ambient-seed seed-two"></i><i class="ambient-seed seed-three"></i></div>
    <div class="site-shell" id="top">
      <header class="site-header">
        <a class="brand-lockup restaurant-brand" href="#top" aria-label="Sarab Restaurant home">
          <span class="brand-wordmark">SARAB</span>
          <span class="brand-divider" aria-hidden="true"></span>
          <span class="brand-sub">RESTAURANT<br />FRESH · FAST · SARAB</span>
        </a>
        <nav class="desktop-nav" aria-label="Main navigation">
          <a href="#menu">Menu</a>
          <a href="#story">Our story</a>
          <a href="#team">Our team</a>
          <a href="#experience">How it works</a>
        </nav>
        <a class="nav-cta" href="#menu"><span>Order now</span><span aria-hidden="true">↗</span></a>
        <button class="menu-toggle" type="button" aria-expanded="false" aria-controls="mobile-menu"><span></span><span></span><span class="sr-only">Toggle navigation</span></button>
      </header>

      <div class="mobile-menu" id="mobile-menu" aria-hidden="true" inert>
        <a href="#menu">Menu</a><a href="#story">Our story</a><a href="#team">Our team</a><a href="#experience">How it works</a><a class="mobile-menu-cta" href="#menu">Order now <span>↗</span></a>
      </div>

      <main id="main-content">
        <section class="hero section-pad" aria-labelledby="hero-title">
          <div class="hero-copy reveal">
            <div class="eyebrow"><span class="eyebrow-dot"></span> Neighborhood kitchen · open daily</div>
            <p class="hero-kicker">Taste <span>•</span> Craft <span>•</span> Repeat</p>
            <h1 id="hero-title">Good food<br />for every<br /><em>moment.</em></h1>
            <p class="hero-intro">Bold flavors, fresh ingredients, and a table that always has room for one more.</p>
            <div class="hero-actions"><a class="button button-primary" href="#menu">Order your meal <span>↗</span></a><a class="text-link" href="#story">Our story <span>↓</span></a></div>
          </div>
          <div class="hero-visual reveal reveal-delay-1 parallax parallax-slow">
            <div class="visual-scribble scribble-top" aria-hidden="true">GOOD<br /><span>FOOD</span><br />GOOD MOOD</div>
            <div class="restaurant-mockup" aria-label="Sarab Restaurant menu preview">
              <div class="mockup-topbar"><span class="mockup-logo"><i></i>Sarab</span><span class="mockup-nav">Menu &nbsp;&nbsp; About &nbsp;&nbsp; Reviews &nbsp;&nbsp; Contact</span><span class="mockup-order">Order now ↗</span></div>
              <div class="mockup-content"><div class="mockup-copy"><span class="mockup-pill">FRESH · FAST · SARAB</span><h2>Delicious<br /><b>fast food</b><br />for every moment</h2><p>Bold flavors, crafted with care.</p><span class="mockup-button">Explore menu <b>↗</b></span></div><div class="mockup-dish"><div class="dish-shadow"></div><div class="dish-bun bun-top"></div><div class="dish-filling filling-one"></div><div class="dish-filling filling-two"></div><div class="dish-filling filling-three"></div><div class="dish-bun bun-bottom"></div><span class="dish-label">SARAB<br /><b>HOT</b></span></div></div>
              <div class="mockup-footer"><span>20 min delivery</span><span>4.9 / 5 rating</span><span>Made for hungry people</span></div>
            </div>
            <div class="visual-scribble scribble-bottom" aria-hidden="true">MAKE<br />THE<br /><span>HUNGRY</span></div><div class="hero-star" aria-hidden="true">✳</div>
          </div>
        </section>

        <section class="restaurant-strip" aria-label="Sarab Restaurant highlights"><div><strong>20 min</strong><span>average delivery</span></div><div><strong>4.9 / 5</strong><span>guest rating</span></div><div><strong>100%</strong><span>made fresh today</span></div><div><strong>7 days</strong><span>open every week</span></div></section>

        <section class="story-section section-pad" id="story" aria-labelledby="story-title">
          <div class="section-index reveal">01 <span>/</span> OUR STORY</div>
          <div class="story-grid"><div class="story-heading reveal"><h2 id="story-title">A table for<br />every <em>mood.</em></h2></div><div class="story-copy reveal reveal-delay-1"><p class="large-copy">Sarab is a neighborhood restaurant for big cravings, quick lunches, slow evenings, and the people you want to feed well.</p><p>We keep the menu focused, the ingredients honest, and the welcome warm. Every order is made to feel personal — from the first click to the last bite.</p><a class="text-link" href="#team">Meet the people behind the plate <span>↗</span></a></div></div>
          <div class="story-values"><article><span>01</span><h3>Kitchen-first</h3><p>Simple recipes, serious flavor, no shortcuts.</p></article><article><span>02</span><h3>Made with care</h3><p>Fresh prep, generous portions, and little details.</p></article><article><span>03</span><h3>Always personal</h3><p>Good food is better when it feels like yours.</p></article></div>
        </section>

        <section class="menu-section section-pad" id="menu" aria-labelledby="menu-title">
          <div class="section-index light reveal">02 <span>/</span> THE MENU</div>
          <div class="menu-heading"><div><h2 id="menu-title" class="reveal">Order a little<br /><span>more Sarab.</span></h2></div><p class="menu-intro reveal reveal-delay-1">Choose a favorite, customize your mood, and watch the kitchen bring it to life.</p></div>
          <div class="menu-tabs reveal" role="tablist" aria-label="Menu categories"><button class="menu-tab is-active" type="button" data-category="all" role="tab" aria-selected="true">All plates</button><button class="menu-tab" type="button" data-category="mains" role="tab" aria-selected="false">Mains</button><button class="menu-tab" type="button" data-category="sides" role="tab" aria-selected="false">Sides</button><button class="menu-tab" type="button" data-category="drinks" role="tab" aria-selected="false">Drinks</button></div>
          <div class="order-layout"><div class="menu-grid">
            <article class="menu-item reveal" data-category="mains" data-name="Sarab Smash" data-price="1250"><div class="food-art food-burger"><span></span></div><div class="menu-item-meta"><div><span class="menu-tag">HOUSE FAVORITE</span><h3>Sarab Smash</h3><p>Double patty · Sarab sauce · crisp greens</p></div><strong>KSh 1,250</strong></div><button class="add-item" type="button">Add to order <span>+</span></button></article>
            <article class="menu-item reveal reveal-delay-1" data-category="mains" data-name="Fire Chicken" data-price="1400"><div class="food-art food-chicken"><span></span></div><div class="menu-item-meta"><div><span class="menu-tag">HOT RIGHT NOW</span><h3>Fire Chicken</h3><p>Charred chicken · chili glaze · cool slaw</p></div><strong>KSh 1,400</strong></div><button class="add-item" type="button">Add to order <span>+</span></button></article>
            <article class="menu-item reveal reveal-delay-2" data-category="sides" data-name="Golden Fries" data-price="550"><div class="food-art food-fries"><span></span></div><div class="menu-item-meta"><div><span class="menu-tag">HOUSE FAVORITE</span><h3>Golden Fries</h3><p>Sea salt · smoked paprika · Sarab dip</p></div><strong>KSh 550</strong></div><button class="add-item" type="button">Add to order <span>+</span></button></article>
            <article class="menu-item reveal" data-category="sides" data-name="Chili Lime Wings" data-price="950"><div class="food-art food-wings"><span></span></div><div class="menu-item-meta"><div><span class="menu-tag">SHAREABLE</span><h3>Chili Lime Wings</h3><p>Eight wings · lime salt · hot honey</p></div><strong>KSh 950</strong></div><button class="add-item" type="button">Add to order <span>+</span></button></article>
            <article class="menu-item reveal reveal-delay-1" data-category="drinks" data-name="Sarab Limeade" data-price="450"><div class="food-art food-drink"><span></span></div><div class="menu-item-meta"><div><span class="menu-tag">COOL DOWN</span><h3>Sarab Limeade</h3><p>Fresh lime · mint · a little sparkle</p></div><strong>KSh 450</strong></div><button class="add-item" type="button">Add to order <span>+</span></button></article>
            <article class="menu-item reveal reveal-delay-2" data-category="drinks" data-name="House Cold Brew" data-price="500"><div class="food-art food-coffee"><span></span></div><div class="menu-item-meta"><div><span class="menu-tag">SLOW MORNING</span><h3>House Cold Brew</h3><p>Bold roast · vanilla cloud · ice</p></div><strong>KSh 500</strong></div><button class="add-item" type="button">Add to order <span>+</span></button></article>
          </div><aside class="order-panel reveal reveal-delay-1" aria-label="Your order"><div class="order-panel-head"><span class="card-eyebrow">YOUR ORDER</span><span class="order-count" id="order-count">0 items</span></div><div class="order-lines" id="order-lines"><p class="empty-order">Your table is empty.<br /><strong>Start with something delicious.</strong></p></div><div class="fulfillment"><span class="card-eyebrow">HOW DO YOU WANT IT?</span><div class="fulfillment-options"><button type="button" class="fulfillment-option is-selected" data-fulfillment="Delivery">Delivery</button><button type="button" class="fulfillment-option" data-fulfillment="Pickup">Pickup</button></div></div><div class="order-total"><span>Total</span><strong id="order-total">KSh 0</strong></div><button class="place-order button button-light" type="button" id="place-order">Place order <span>↗</span></button><div class="order-status" id="order-status" aria-live="polite"><span class="status-dot"></span><span>Add an item to see your kitchen status.</span></div></aside></div>
        </section>

        <section class="staff-section section-pad" id="team" aria-labelledby="staff-title">
          <div class="section-index reveal">03 <span>/</span> OUR TEAM</div>
          <div class="staff-heading"><div><h2 id="staff-title" class="reveal">Meet the<br /><em>Sarab team.</em></h2></div><p class="staff-intro reveal reveal-delay-1">The food is only half the story. Meet the people, rituals, and tiny decisions behind every order.</p></div>
          <div class="staff-grid"><article class="staff-card staff-card-red reveal"><div class="staff-portrait portrait-morris"><span>EM</span></div><span class="card-eyebrow">GRILL SPECIALIST</span><h3>Chef Morris</h3><p>“I make the sauce everyone comes back for.”</p><button class="staff-pick" type="button" data-staff-pick="Sarab Smash">Staff pick: Sarab Smash <span>↗</span></button></article><article class="staff-card staff-card-lime reveal reveal-delay-1"><div class="staff-portrait portrait-aisha"><span>AK</span></div><span class="card-eyebrow">GUEST EXPERIENCE</span><h3>Aisha K.</h3><p>“A great order should feel like a warm welcome.”</p><button class="staff-pick" type="button" data-staff-pick="Golden Fries">Staff pick: Golden Fries <span>↗</span></button></article><article class="staff-card staff-card-paper reveal reveal-delay-2"><div class="staff-portrait portrait-dan"><span>DN</span></div><span class="card-eyebrow">FLAVOR CURATOR</span><h3>Dan Njoroge</h3><p>“Balance the bite, then add one more layer.”</p><button class="staff-pick" type="button" data-staff-pick="Chili Lime Wings">Staff pick: Chili Lime Wings <span>↗</span></button></article></div>
          <div class="staff-note reveal"><span class="note-mark">✦</span><span>Human food.<br /><strong>Human stories.</strong></span><span class="staff-note-line"></span><span class="staff-note-small">Tap a staff pick to add it to your order</span></div>
        </section>

        <section class="experience-section section-pad" id="experience" aria-labelledby="experience-title"><div class="section-index reveal">04 <span>/</span> HOW IT WORKS</div><div class="experience-heading"><h2 id="experience-title" class="reveal">From click<br />to <em>comfort.</em></h2><p class="reveal reveal-delay-1">A better restaurant experience should feel easy from the first scroll to the first bite.</p></div><div class="experience-steps"><article class="experience-step reveal"><span>01</span><div><h3>Choose your mood</h3><p>Find a favorite, browse the menu, or let the team surprise you.</p></div></article><article class="experience-step reveal reveal-delay-1"><span>02</span><div><h3>We cook it fresh</h3><p>Your order goes straight to the kitchen. No waiting around, no mystery.</p></div></article><article class="experience-step reveal reveal-delay-2"><span>03</span><div><h3>You enjoy the moment</h3><p>Delivery to your door or pickup at the counter — always warm, always Sarab.</p></div></article></div></section>

        <section class="join-section section-pad" id="order" aria-labelledby="join-title"><div class="join-art" aria-hidden="true"><span class="join-star">✳</span><span class="join-circle"></span><span class="join-line"></span></div><div class="join-content reveal"><div class="eyebrow"><span class="eyebrow-dot"></span> Your table is waiting</div><h2 id="join-title">Come hungry.<br /><em>Leave happy.</em></h2><p>Good food, good people, and one more reason to make tonight a little better.</p><a class="button button-light" href="#menu">Start your order <span>↗</span></a></div><div class="join-side-note reveal reveal-delay-1"><span>SARAB</span><span>FRESH FOOD<br />FOR EVERY MOMENT</span></div></section>
      </main>

      <footer class="site-footer"><div class="footer-brand"><span class="footer-mark">SARAB</span><span class="footer-rule"></span><span>Fresh food<br />for every moment</span></div><div class="footer-center"><span class="footer-tagline">Taste the idea</span><span class="footer-dot"></span><span>Made with care</span></div><div class="footer-credit"><span class="footer-credit-label">Developed by</span><strong>Lord Eagle</strong><span>·</span><strong>Zynex Tech Dev</strong></div><div class="footer-socials" aria-label="Social links"><a href="#top" aria-label="Facebook">f</a><a href="#top" aria-label="X">𝕏</a><a href="#top" aria-label="Instagram">◎</a><a href="#top" aria-label="TikTok">♪</a></div></footer>
    </div>
    <script type="module" src="/main.js"></script>
  `;
