/*() => {
  container = document.getElementById("cube-container");
  colors = ["red", "green", "blue", "purple", "gray", "orange", "black"];

  for (let index = 1; index < 8; index++) {
    cubeImg = document.createElement("img");
    cubeImg.id = "cube" + index;
    cubeImg.className = ".cube-img";
    cubeImg.src = "./images/cube.png";

    cubeImg.style.cssText = "position: absolute; width: 100%; transition-delay: 2s";

    cubeImg.style.border = "5px solid " + colors[index - 1];

    cubeImg.style.zIndex = 8 - index;

    degree = - (360 / 7) * (index - 1);

    cubeImg.style.transform = "rotate(" + degree + "deg)";
    cubeImg.style.transition = "";

    console.log(
      cubeImg.id +
        ", rotated: " +
        degree +
        "deg, index: " +
        cubeImg.style.zindex
    );
    container.appendChild(cubeImg);
  }
};
*/