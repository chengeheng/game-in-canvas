/**
 * @type {HTMLCanvasElement}
 */
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const image = new Image();
image.src = "dragon.jpeg";
image.onload = () => {
  canvas.width = image.width;
  canvas.height = image.height;
  ctx.drawImage(image, 0, 0);

  const imageData = ctx.getImageData(0, 0, image.width, image.height).data;
  ctx.fillStyle = "#ffffff";
  ctx.fillRect(0, 0, image.width, image.height);

  const gap = 6;

  for (let h = 0; h < image.height; h += gap) {
    for (let w = 0; w < image.width; w += gap) {
      const position = (image.width * h + w) * 4;
      const r = imageData[position],
        g = imageData[position + 1],
        b = imageData[position + 2];
      if (r + g + b === 0) {
        ctx.fillStyle = "#000000";
        ctx.fillRect(w, h, 4, 4);
      }
    }
  }

  const dragonContainer = document.getElementById("container");
  const dragonScale = 2;

  for (let h = 0; h < image.height; h += gap) {
    for (let w = 0; w < image.width; w += gap) {
      const position = (image.width * h + w) * 4;
      const r = imageData[position];
      const g = imageData[position + 1];
      const b = imageData[position + 2];
      if (r + g + b === 0) {
        const bubble = document.createElement("img");
        bubble.src = "bubble.jpeg";
        bubble.setAttribute("class", "bubble");

        const bubbleSize = Math.random() * 10 + 20;
        bubble.style.left = w * dragonScale - bubbleSize / 2 + "px";
        bubble.style.top = h * dragonScale - bubbleSize / 2 + "px";
        bubble.style.width = bubble.style.height = bubbleSize + "px";
        bubble.style.animationDuration = Math.random() * 6 + 4 + "s";
        dragonContainer.appendChild(bubble);
      }
    }
  }
};
