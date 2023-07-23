(() => {
    const refs = {
      openModalBtn: document.querySelector("[data-modal-back-call-open]"),
      closeModalBtn: document.querySelector("[data-modal-back-call-close]"),
      modal: document.querySelector("[data-modal-back-call]"),
    };
  
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle("is-hidden");
    }
  })();
