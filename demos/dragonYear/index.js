document.addEventListener("DOMContentLoaded", () => {
  const btn = document.querySelector("button");
  fillDragon();

  if (btn)
    btn.addEventListener("click", () => {
      clearDragon();
    });
});

function fillDragon() {
  const paths = document.querySelectorAll("svg path");
  paths.forEach((path) => {
    path.classList.add("animation");
  });
}
function clearDragon() {
  const paths = document.querySelectorAll("svg path");
  paths.forEach((path) => {
    path.classList.remove("animation");
  });
  setTimeout(() => {
    fillDragon();
  }, 500);
}
