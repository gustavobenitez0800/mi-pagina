const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

if (hamburger && navLinks) {
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
  });
}

document.addEventListener('DOMContentLoaded', () => {
  const banner = document.getElementById('cookie-banner');
  const acceptBtn = document.getElementById('accept-cookies');
  const declineBtn = document.getElementById('decline-cookies');

  if (!banner || !acceptBtn || !declineBtn) return;

  const userChoice = localStorage.getItem('veltronik_cookies');

  banner.style.display = userChoice ? 'none' : 'flex';

  acceptBtn.addEventListener('click', () => {
    localStorage.setItem('veltronik_cookies', 'accepted');
    banner.style.display = 'none';
    console.log('✅ Cookies aceptadas');
  });

  declineBtn.addEventListener('click', () => {
    localStorage.setItem('veltronik_cookies', 'declined');
    banner.style.display = 'none';
    console.log('❌ Cookies rechazadas');
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contactForm');
  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    try {
      const res = await fetch(form.action, {
        method: 'POST',
        body: formData,
        headers: { 'Accept': 'application/json' }
      });

      if (res.ok) {
        alert('✅ Mensaje enviado. ¡Gracias por contactarte con Veltronik!');
        form.reset();
      } else {
        alert('⚠️ Hubo un error al enviar el mensaje. Intentalo de nuevo.');
      }
    } catch (error) {
      console.error('❌ Error:', error);
      alert('❌ Error de red o conexión. Verificá tu internet.');
    }
  });
});
