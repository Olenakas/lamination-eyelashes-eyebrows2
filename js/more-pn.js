function showMorePn() {
  let moreText = document.getElementById("more");
  let btnText = document.getElementById("btn");
  if (moreText.style.display === "none") {
    btnText.innerHTML = "Czytaj mniej";
    moreText.style.display = "block";
  } else {
    btnText.innerHTML = "Czytaj więcej";
    moreText.style.display = "none";
  }
}
