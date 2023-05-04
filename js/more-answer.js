function readMoreAnswer() {
  let moreText = document.getElementById("answer");
  let arrowIconLink = document.getElementById("arrow-icon-link");

  if (moreText.style.display === "none") {
    moreText.style.display = "block";
    arrowIconLink.setAttribute("href", "./images/icons.svg#icon-right-arrow");
    arrowIconLink.classList.add("right");
  } else {
    moreText.style.display = "none";
    arrowIconLink.setAttribute("href", "./images/icons.svg#icon-arrow-down2");
    arrowIconLink.classList.remove("right");
  }
}
