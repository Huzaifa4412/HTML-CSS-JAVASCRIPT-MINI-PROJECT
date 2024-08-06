let elem = [
  {
    dp: "images/Babar Azam 1.jpeg",
    story:
      "https://img.freepik.com/free-vector/pakistan-day-illustration-with-badshahi-mosque_23-2148836429.jpg?t=st=1722954289~exp=1722957889~hmac=4fc803ca73327f5293a6dc4069a67408c8ec78d9a163bae469542501d0fb3b93&w=740",
  },
  {
    dp: "images/Men_profile_pic.jpg",
    story: "images/Men_profile_pic.jpg",
  },
  {
    dp: "images/Kane Willam Son.jpg",
    story: "images/Kane Willam Son1.jpg",
  },
  {
    dp: "images/Rohit Sharma.jpeg",
    story: "images/Rohit Sharma.jpeg",
  },
  {
    dp: "images/Virat Kohli.jpg",
    story: "images/Virat Kohli1.jpeg",
  },
  {
    dp: "images/Kane Willam Son.jpg",
    story: "images/Kane Willam Son1.jpg",
  },
  {
    dp: "images/JamesAnderson.jpeg",
    story: "images/JamesAnderson1.jpeg",
  },
  {
    dp: "images/Babar Azam 1.jpeg",
    story: "images/Babar Azam.jpeg",
  },
];
let storiyan = document.querySelector("#storiyan");
clutter = "";
elem.forEach((currVal, index) => {
  clutter += `<div class="story">
                <img src="${currVal.dp}" id= "${index}" alt="">
            </div>`;
});
storiyan.innerHTML = clutter;
let flag = 0;
storiyan.addEventListener("click", function (dets) {

  // console.log(elem[dets.target.id].story);
  document.querySelector("#full-screen").style.display = "block";
  document.querySelector("#full-screen").style.background = `url('${
    elem[dets.target.id].story
  }') no-repeat center center/cover`;
  document.querySelector("#full-screen").addEventListener("click", function(){
    document.querySelector("#full-screen").style.display = "none";

  })
  setTimeout(() => {
    document.querySelector("#full-screen").style.display = "none";
  }, 2000);
});
