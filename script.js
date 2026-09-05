const form = document.querySelector('#newsletter-form');
const thanks = document.querySelector('#signup-thanks');

form?.addEventListener('submit', () => {
  form.hidden = true;
  if (thanks) {
    thanks.hidden = false;
    thanks.focus();
  }
});
