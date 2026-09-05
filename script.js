const form = document.querySelector('#newsletter-form');
const note = document.querySelector('#form-note');

form?.addEventListener('submit', (event) => {
  if (form.dataset.provider === 'pending') {
    event.preventDefault();
    note.textContent = 'Almost ready — newsletter signup will be activated before launch.';
    note.setAttribute('role', 'status');
  }
});
