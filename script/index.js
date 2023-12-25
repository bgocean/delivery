const modal = document.querySelector(".cart-modal__overlay");
const cartBtn = document.querySelector("#cart-button");

const openModal = () => {
  modal.classList.add("open");
};

const closeModal = () => {
  modal.classList.remove("open");
};

cartBtn.addEventListener("click", () => {
  openModal();
});

modal.addEventListener("click", (e) => {
  if (
    e.target.classList.contains("cart-modal__overlay") ||
    e.target.closest(".cart-modal__header--close")
  ) {
    closeModal();
  }
});

// lesson11 28.00