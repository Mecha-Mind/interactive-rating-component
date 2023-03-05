const rate = document.querySelectorAll("span");
const submit = document.querySelector("button");
const rateArr = document.getElementById("rating");
const rateBox = document.querySelector(".rating-state");
const thankBox = document.querySelector(".thank-state");
const rated = document.querySelector(".rated");
rate.forEach((link) => {
  link.addEventListener("click", function () {
    rate.forEach((btn) => btn.classList.remove("active"));
    this.classList.add("active");
    rated.innerHTML = this.innerHTML;
  });
});
submit.addEventListener("click", () => {
  rateBox.style.display = "none";
  thankBox.style.display = "block";
});
