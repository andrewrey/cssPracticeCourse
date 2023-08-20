let backdrop = document.querySelector(".backdrop");
let modal = document.querySelector(".modal");
let selectPlanButton = document.querySelectorAll(".plan button");
let modalNo = document.querySelector(".modal__action--negative");

let backdropAndModalShowOrHide = () => {
  if (backdrop.style.display === "block") {
    backdrop.style.display = "none";
    modal.style.display = "none";
  } else {
    backdrop.style.display = "block";
    modal.style.display = "block";
  }
};

selectPlanButton.forEach((btn) => {
  btn.addEventListener("click", backdropAndModalShowOrHide);
});

backdrop.addEventListener("click", backdropAndModalShowOrHide);

modalNo.addEventListener("click", backdropAndModalShowOrHide);
