function showAlert() {
  alert("¡Hola, no estas enviando nada");
}

document
  .querySelector("button.button-menu-toggle")
  .addEventListener("click", function () {
    document
      .querySelector(".nav-links")
      .classList.toggle("nav-links-responsive");
  });
