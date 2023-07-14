function showMore() {
  let moreText = document.getElementById("more");
  let btnText = document.querySelector(".btn-text");
  let arrowIconLink = document.querySelector(".arrow-icon-link");
  document.getElementById("btn").classList.toggle("active");
  if (moreText.style.display === "none") {
    btnText.innerHTML = "Read less";
    moreText.style.display = "block";
    arrowIconLink.setAttribute("href", "./images/icons.svg#icon-arrow-up2");
  } else {
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
    arrowIconLink.setAttribute("href", "./images/icons.svg#icon-arrow-down2");
  }
}
