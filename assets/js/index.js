const btn = document.getElementById("btn");

const clickHandler = function (e) {
  const btn = document.getElementById("btn");
  btn.setAttribute("style", "color: yellow; background: green");

  const img = document.querySelector(".imgSection");
  (img.src =
    "https://cdn.pixabay.com/photo/2015/11/16/14/43/cat-1045782_1280.jpg"),
    (img.alt = "cat");
  img.style.width = "300px";
  img.style.height = "200px";
  img.objectFit = "cover";

  btn.textContent = "Login";
};
btn.addEventListener("click", clickHandler);
