const refs = {
  openModalBtnDiscount: document.querySelector(
    '[data-action="open-modal-discount"]'
  ),
  closeModalBtnDiscount: document.querySelector(
    '[data-action="close-modal-discount"]'
  ),
  backdropDiscount: document.querySelector(".js-backdrop-discount"),
};

refs.openModalBtnDiscount.addEventListener("click", onOpenModalDiscount);
refs.closeModalBtnDiscount.addEventListener("click", onCloseModalDiscount);
refs.backdropDiscount.addEventListener("click", onBackdropClickDiscount);

function onOpenModalDiscount() {
  document.body.style.overflow = "hidden";

  window.addEventListener("keydown", onEscKeyPress);
  refs.backdropDiscount.classList.add("show-modal");
}

function onCloseModalDiscount() {
  document.body.style.overflow = "";
  
  window.removeEventListener("keydown", onEscKeyPress);
  refs.backdropDiscount.classList.remove("show-modal");
}

function onBackdropClickDiscount(event) {
  if (event.currentTarget === event.target) {
    onCloseModalDiscount();
  }
}

function onEscKeyPress(event) {
  const ESC_KEY_CODE = "Escape";
  if (event.code === ESC_KEY_CODE) {
    onCloseModalDiscount();
  }
}

