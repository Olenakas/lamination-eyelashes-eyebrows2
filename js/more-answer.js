const btnAnswers = document.querySelectorAll(".btn-answers");

btnAnswers.forEach((btn) => {
  const answer = btn.nextElementSibling;
  const arrowIcon = btn.querySelector(".arrow-icon");

  btn.addEventListener("click", () => {
    if (answer.style.display === "none") {
      answer.style.display = "block";
      arrowIcon.classList.add("active");
    } else {
      answer.style.display = "none";
      arrowIcon.classList.remove("active");
    }
  });
});
