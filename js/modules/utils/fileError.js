const showFileError = (message) => {
  const template = document
    .querySelector('#file-error')
    .content
    .cloneNode(true);

  const errorElement = template.querySelector('.file-error');
  const messageElement = template.querySelector('.file-error__message');
  const closeButton = template.querySelector('.file-error__button');

  messageElement.textContent = message;

  document.body.appendChild(template);

  function closeModal() {
    errorElement.remove();
    document.removeEventListener('keydown', onEscKeyDown);
    errorElement.removeEventListener('click', onOverlayClick);
    if (closeButton) {
      closeButton.removeEventListener('click', closeModal);
    }
  }

  function onEscKeyDown(evt) {
    if (evt.key === 'Escape') {
      evt.preventDefault();
      evt.stopPropagation();
      closeModal();
    }
  }

  function onOverlayClick(evt) {
    if (evt.target === errorElement) {
      closeModal();
    }
  }

  document.addEventListener('keydown', onEscKeyDown);
  errorElement.addEventListener('click', onOverlayClick);

  if (closeButton) {
    closeButton.addEventListener('click', closeModal);
  }
};

export { showFileError };
