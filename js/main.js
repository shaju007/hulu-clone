const modal = document.querySelector('.modal');
const loginBtn = document.querySelector('.login-btn');
const closeBtn = document.querySelector('.modal-close');
const modalBox = document.querySelector('.modal-box');

loginBtn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);
window.addEventListener('click', outsideClick);

function openModal() {
  modal.style.display = 'block';
}
function closeModal() {
  modalBox.classList.add('close-animation');
  setTimeout(() => {
    modal.style.display = 'none';
    modalBox.classList.remove('close-animation');
  }, 980);
}
function outsideClick(e) {
  if (e.target == modal) {
    closeModal();
  }
}
