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
