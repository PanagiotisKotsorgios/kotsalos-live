(function () {
  const $ = (selector, parent = document) => parent.querySelector(selector);
  const $$ = (selector, parent = document) => Array.from(parent.querySelectorAll(selector));

  const header = $('.site-header');
  const menuToggle = $('.menu-toggle');
  const navigation = $('.main-navigation');
  const navLinks = $$('.nav-link');

  const closeMenu = () => {
    if (!navigation || !menuToggle) return;
    navigation.classList.remove('is-open');
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.setAttribute('aria-label', 'Άνοιγμα μενού');
  };

  if (menuToggle && navigation) {
    menuToggle.addEventListener('click', () => {
      const isOpen = navigation.classList.toggle('is-open');
      menuToggle.setAttribute('aria-expanded', String(isOpen));
      menuToggle.setAttribute('aria-label', isOpen ? 'Κλείσιμο μενού' : 'Άνοιγμα μενού');
    });
  }
  navLinks.forEach((link) => link.addEventListener('click', closeMenu));

  const setScrolledHeader = () => { if (header) header.classList.toggle('is-scrolled', window.scrollY > 42); };
  setScrolledHeader();
  window.addEventListener('scroll', setScrolledHeader, { passive: true });

  const slides = $$('.hero-slide');
  const slideCount = $('.slide-count strong');
  const progress = $('.slider-progress span');
  let activeSlide = 0;
  let sliderTimer;
  const renderSlide = (index) => {
    activeSlide = (index + slides.length) % slides.length;
    slides.forEach((slide, slideIndex) => slide.classList.toggle('is-active', slideIndex === activeSlide));
    if (slideCount) slideCount.textContent = String(activeSlide + 1).padStart(2, '0');
    if (progress) progress.style.width = `${((activeSlide + 1) / slides.length) * 100}%`;
  };
  const restartSlider = () => {
    window.clearInterval(sliderTimer);
    sliderTimer = window.setInterval(() => renderSlide(activeSlide + 1), 6500);
  };
  $$('.slider-button').forEach((button) => button.addEventListener('click', () => {
    renderSlide(activeSlide + (button.dataset.direction === 'next' ? 1 : -1));
    restartSlider();
  }));
  if (slides.length) {
    renderSlide(0);
    restartSlider();
  }

  const revealItems = $$('.reveal-on-scroll');
  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -35px' });
    revealItems.forEach((item, index) => {
      item.style.transitionDelay = `${Math.min((index % 4) * 80, 240)}ms`;
      revealObserver.observe(item);
    });
  } else {
    revealItems.forEach((item) => item.classList.add('is-visible'));
  }

  const modal = $('.service-modal');
  const modalTitle = $('#modal-title');
  const modalDetail = $('#modal-detail');
  const closeModal = () => {
    if (!modal) return;
    modal.classList.remove('is-open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('modal-open');
  };
  $$('.service-trigger').forEach((trigger) => trigger.addEventListener('click', () => {
    if (!modal) return;
    const card = trigger.closest('.service-card');
    modalTitle.textContent = `Ασφάλιση ${card.dataset.service}`;
    modalDetail.textContent = card.dataset.detail;
    modal.classList.add('is-open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('modal-open');
  }));
  if (modal) {
    $('.modal-close', modal).addEventListener('click', closeModal);
    $('.modal-backdrop', modal).addEventListener('click', closeModal);
  }
  document.addEventListener('keydown', (event) => { if (event.key === 'Escape') closeModal(); });
  $$('.modal-card a').forEach((link) => link.addEventListener('click', closeModal));

  const cookieBanner = $('#cookie-banner');
  const cookieKey = 'kotsalos-cookie-consent';
  if (cookieBanner) {
    if (!localStorage.getItem(cookieKey)) window.setTimeout(() => cookieBanner.classList.add('is-visible'), 900);
    $$('.cookie-accept, .cookie-dismiss').forEach((button) => button.addEventListener('click', () => {
      localStorage.setItem(cookieKey, button.classList.contains('cookie-accept') ? 'accepted' : 'declined');
      cookieBanner.classList.remove('is-visible');
    }));
  }

  const form = $('#contact-form');
  const formStatus = $('.form-status');
  if (form) {
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const data = Object.fromEntries(new FormData(form).entries());
      const requests = JSON.parse(localStorage.getItem('kotsalos_requests') || '[]');
      requests.push({ ...data, createdAt: new Date().toISOString() });
      localStorage.setItem('kotsalos_requests', JSON.stringify(requests));
      form.reset();
      if (formStatus) formStatus.textContent = 'Ευχαριστούμε — θα επικοινωνήσουμε μαζί σας σύντομα.';
    });
  }

  const backToTop = $('.back-to-top');
  if (backToTop) {
    backToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
    window.addEventListener('scroll', () => backToTop.classList.toggle('is-visible', window.scrollY > 550), { passive: true });
  }
  const year = $('#year');
  if (year) year.textContent = new Date().getFullYear();
})();
