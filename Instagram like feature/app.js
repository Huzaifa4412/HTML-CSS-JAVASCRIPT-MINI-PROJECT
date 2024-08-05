let image = document.querySelector("#image");
let heart = document.querySelector("#heart");
let smallHeart1 = document.querySelector("#feature .sheart1");
let smallHeart2 = document.querySelector("#feature .sheart2");
console.log(smallHeart1, smallHeart2);
let liked_status = document.querySelector("#like_status");
let liked_status_text = document.querySelector("#like_status span");
let flag = 0;
console.log(heart, image);
image.addEventListener("dblclick", () => {
  if (flag === 0) {
    // smallHeart1.style.display = "block"
    smallHeart2.style.display = 'none';
    smallHeart1.style.display = "inline-block";
    liked_status_text.innerHTML = "Liked"
    liked_status.style.visibility = "visible";
    setTimeout(()=> {
      liked_status.style.visibility = "hidden";
    },1000)
    heart.style.transform = "translate(-50%,-50%) scale(10)";
    heart.style.opacity = "0.8";
    // heart.style.color = "red";

    setTimeout(() => {
      heart.style.transform = "translate(-50%,-50%) scale(0)";
    }, 500);
    flag = 1;
  }
  else {
    smallHeart2.style.display = "inline-block";
    smallHeart1.style.display = "none";
    liked_status_text.innerHTML = "Dis Liked"
    liked_status.style.visibility = "visible";
    setTimeout(() => {
      liked_status.style.visibility = "hidden";
    }, 1000);
    heart.style.transform = "translate(-50%,-50%) scale(10)";
    heart.style.opacity = "0.8";
    setTimeout(() => {
      heart.style.opacity = "0";
    }, 500);
    flag = 0;
  }
});
