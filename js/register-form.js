// const form = document.querySelector(".js-register-form");
// const closeButtonForm = document.querySelector(".button-send-modal-form");

// form.addEventListener("submit", onFormSubmit);

// function onFormSubmit(event) {
//   event.preventDefault();

//   const formData = new FormData(event.currentTarget);
//   formData.forEach((value, name) => {
//     console.log("onFormSubmit -> name:", name);
//     console.log("onFormSubmit -> value:", value);
//   });

//   // Создание поп-апа благодарности
//   const popup = document.createElement("div");
//   popup.classList.add("popup");
//   popup.innerHTML = `
//     <div class="popup__content">
//       <h2 class="popup__title">Спасибо за регистрацию!</h2>
//       <p class="popup__text">Мы свяжемся с вами в ближайшее время.</p>
//       <button class="popup__button">Закрыть</button>
//     </div>
//     <div class="popup__overlay"></div>
//   `;
//   document.body.appendChild(popup);

//   // Закрытие поп-апа при нажатии на кнопку "Закрыть"
//   const closeButton = popup.querySelector(".popup__button");
//   closeButton.addEventListener("click", () => {
//     popup.remove();
//   });
// }

//________________________________________________________
