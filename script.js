// Navegação sticky e scroll suave
window.addEventListener('DOMContentLoaded', function() {
  // Scroll suave para links internos
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // Microinteração de confirmação
  const form = document.querySelector('form');
  const msg = document.getElementById('confirmacao-msg');
  if(form && msg) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      msg.textContent = 'Presença confirmada! Obrigado pelo carinho 💜';
      msg.classList.remove('hidden');
      form.reset();
    });
  }

  // Navbar efeito ao rolar
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', function() {
    if(window.scrollY > 10) {
      navbar.classList.add('shadow-lg');
    } else {
      navbar.classList.remove('shadow-lg');
    }
  });
});
