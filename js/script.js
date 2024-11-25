// click More button to display dropdown
let moreBtn = document.querySelector(
  ".nav-options ul.option-list li:nth-child(8)"
);
let moreBtndropdown = document.querySelector(
  ".nav-options ul.option-list li:nth-child(8) .dropdown"
);

moreBtn.addEventListener("click", () => {
  moreBtndropdown.classList.toggle("active");
});

// add black line under options buttons
let optionsBtns = document.querySelectorAll(
  ".nav-options ul.option-list li:not(.nav-options ul.option-list li:nth-child(8))"
);
// console.log(optionsBtns);

optionsBtns.forEach((e) => {
  if (e.innerHTML !== "Tools") {
    e.addEventListener("click", () => {
      optionsBtns.forEach((element) => {
        element.classList.remove("active");
      });
      e.classList.add("active");
    });
  }
});
// #################
// move quick info after box 2
let searchResultes = document.querySelector(".search-resultes");
let boxs = document.querySelectorAll(".search-resultes .box");
let quickInfo = document.querySelector("main .quick-info").cloneNode(true);

window.addEventListener("load", changeQuickInfoPlace);
window.addEventListener("resize", changeQuickInfoPlace);

function changeQuickInfoPlace() {
  let screenWidth = window.innerWidth;
  if (screenWidth < 993) {
    boxs[1].after(quickInfo);
    quickInfo.style.display = "block";
    document.querySelectorAll("main .quick-info")[1].style.display = "none";
  } else {
    if (document.querySelectorAll("main .quick-info")[1]) {
      document.querySelectorAll("main .quick-info")[1].style.display = "block";
      quickInfo.style.display = "none";
    }
  }
}
