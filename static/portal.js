(function () {
  const form = document.getElementById('partner-login-form');
  const status = document.querySelector('.portal-status');
  const password = document.getElementById('partner-password');
  const toggle = document.querySelector('.portal-password-toggle');

  if (toggle && password) {
    toggle.addEventListener('click', () => {
      const visible = password.type === 'text';
      password.type = visible ? 'password' : 'text';
      toggle.setAttribute('aria-label', visible ? 'Εμφάνιση κωδικού' : 'Απόκρυψη κωδικού');
      toggle.innerHTML = `<i class="fa-solid ${visible ? 'fa-eye' : 'fa-eye-slash'}"></i>`;
    });
  }

  if (form && status) {
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      status.className = 'portal-status is-success';
      status.innerHTML = '<i class="fa-solid fa-circle-check"></i> Demo σύνδεση — η λειτουργία είναι εικονική.';
    });
  }
})();
