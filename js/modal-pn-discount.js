const refsdiscount = {
  openModalBtnDiscount: document.querySelector('[data-action="open-modal-discount"]'),
  closeModalBtnDiscount: document.querySelector('[data-action="close-modal-discount"]'),
  backdropDiscount: document.querySelector(".js-backdrop-discount"),
};

refsdiscount.openModalBtnDiscount.addEventListener("click", onOpenModalDiscount);
refsdiscount.closeModalBtnDiscount.addEventListener("click", onCloseModalDiscount);
refsdiscount.backdropDiscount.addEventListener("click", onBackdropClickDiscount);

function onOpenModalDiscount() {
  window.addEventListener("keydown", onEscKeyPress);
  document.body.classList.add("show-modal");
}
function onCloseModalDiscount() {
  window.removeEventListener("keydown", onEscKeyPress);
  document.body.classList.remove("show-modal");
}

function onBackdropClickDiscount(event) {
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
