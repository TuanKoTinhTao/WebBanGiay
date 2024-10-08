const hrt = document.querySelectorAll(".heart-button").forEach((button) => {
  button.addEventListener("click", (e) => {
    e.target.dataset.id;
    if (e.target.classList.contains("like")) {
      e.target.classList.remove("like");
    } else {
      e.target.classList.add("like");
    }
  });
});
