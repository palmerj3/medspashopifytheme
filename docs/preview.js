document.addEventListener('DOMContentLoaded', () => {
  const yearElement = document.getElementById('preview-year');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  const newsletterForm = document.querySelector('.preview-form');
  if (newsletterForm) {
    const successMessage = newsletterForm.querySelector('.form-success');

    newsletterForm.addEventListener('submit', (event) => {
      event.preventDefault();
      newsletterForm.reset();
      if (successMessage) {
        successMessage.hidden = false;
        successMessage.focus?.();
        setTimeout(() => {
          successMessage.hidden = true;
        }, 6000);
      }
    });
  }
});
