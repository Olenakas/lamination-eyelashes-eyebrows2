const refs = {
  openModalBtn: document.querySelector('[data-action="open-modal"]'),
  closeModalBtn: document.querySelector('[data-action="close-modal"]'),
  backdrop: document.querySelector(".js-backdrop"),
  mobileCallBtn: document.getElementById("mobileCallBtn"),
  priceEyelashesCallBtn: document.getElementById("priceEyelashesCallBtn"),
  priceEyebrowsCallBtn: document.getElementById("priceEyebrowsCallBtn"),
};

refs.openModalBtn.addEventListener("click", onOpenModal);
refs.mobileCallBtn.addEventListener("click", onOpenModal); 
refs.priceEyelashesCallBtn.addEventListener("click", onOpenModal); 
refs.priceEyebrowsCallBtn.addEventListener("click", onOpenModal); 
refs.closeModalBtn.addEventListener("click", onCloseModal);
refs.backdrop.addEventListener("click", onBackdropClick);

function onOpenModal() {
  document.body.style.overflow = "hidden";
  window.addEventListener("keydown", onEscKeyPress);
  refs.backdrop.classList.add("show-modal");
}
function onCloseModal() {
  document.body.style.overflow = "";
  window.removeEventListener("keydown", onEscKeyPress);
  refs.backdrop.classList.remove("show-modal");
}

function onBackdropClick(event) {
  if (event.currentTarget === event.target) {
    onCloseModal();
  }
}
function onEscKeyPress(event) {
  const ESC_KEY_CODE = "Escape";
  const isEscey = event.code === ESC_KEY_CODE;
  if (isEscey) {
    onCloseModal();
  }
}

