// Create custom press effect for the submit button
let btn = document.querySelector("button");

btn.addEventListener(
  "mousedown",
  (e) => (e.target.style.background = "#51b810"),
);

btn.addEventListener(
  "mouseup",
  (e) =>
    (e.target.style.background =
      "linear-gradient(0deg, #1b7c24 0%, #51b810 80%)"),
);

btn.addEventListener(
  "mouseover",
  (e) => (e.target.style.background = "#1b7c24"),
);

btn.addEventListener(
  "mouseout",
  (e) =>
    (e.target.style.background =
      "linear-gradient(0deg, #1b7c24 0%, #51b810 80%)"),
);
