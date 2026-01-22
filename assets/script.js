window.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (event) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        event.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  const form = document.querySelector('[data-rsvp-form]');
  const msg = document.getElementById('confirmacao-msg');
  if (form && msg) {
    form.addEventListener('submit', function (event) {
      event.preventDefault();
      msg.textContent = 'Presença confirmada! Obrigado pelo carinho e até breve.';
      msg.classList.remove('hidden');
      form.reset();
    });
  }

  const navbar = document.getElementById('navbar');
  const handleScroll = () => {
    if (window.scrollY > 10) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  };
  handleScroll();
  window.addEventListener('scroll', handleScroll);

  const revealItems = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });

    revealItems.forEach((item, index) => {
      const delay = item.dataset.delay ? parseFloat(item.dataset.delay) : index * 0.08;
      item.style.setProperty('--delay', `${delay}s`);
      observer.observe(item);
    });
  } else {
    revealItems.forEach(item => item.classList.add('is-visible'));
  }
});
