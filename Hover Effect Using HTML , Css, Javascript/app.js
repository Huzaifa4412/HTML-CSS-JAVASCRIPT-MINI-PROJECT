let element = document.querySelectorAll(".element");
console.log(element);
element.forEach((currVal) => {
  currVal.addEventListener("mouseenter", () => {
    currVal.childNodes[3].style.opacity = 1;
  });
  currVal.addEventListener("mousemove", (dets) => {
    currVal.childNodes[3].style.left = dets.x + "px";
  });
  currVal.addEventListener("mouseleave", () => {
    currVal.childNodes[3].style.opacity = 0;
  });
});
