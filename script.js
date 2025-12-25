const modalOverlay = document.getElementById("modalOverlay");
const modalContent = document.getElementById("modalContent");
const cardDetails = document.getElementById("cardDetails");

/* OPEN MODAL */
function openCardModal(cardId) {
  const source = cardDetails.querySelector(`[data-id="${cardId}"]`);
  modalContent.innerHTML = source ? source.innerHTML : "<p>Not found</p>";
  modalOverlay.classList.add("active");
  resetCertView();
}

/* CLOSE MODAL */
function closeModal() {
  modalOverlay.classList.remove("active");
  setTimeout(() => modalContent.innerHTML = "", 200);
}

/* CERT SWITCH */
function openCert(type) {
  const categories = modalContent.querySelector("#certCategories");
  const hr = modalContent.querySelector("#cert-hr");
  const tech = modalContent.querySelector("#cert-tech");

  if (!categories || !hr || !tech) return;

  categories.classList.add("hidden");
  hr.classList.remove("active");
  tech.classList.remove("active");

  if (type === "hr") hr.classList.add("active");
  if (type === "tech") tech.classList.add("active");
}

/* BACK */
function backToCertCategories() {
  const categories = modalContent.querySelector("#certCategories");
  const hr = modalContent.querySelector("#cert-hr");
  const tech = modalContent.querySelector("#cert-tech");

  categories.classList.remove("hidden");
  hr.classList.remove("active");
  tech.classList.remove("active");
}

/* RESET */
function resetCertView() {
  const categories = modalContent.querySelector("#certCategories");
  const hr = modalContent.querySelector("#cert-hr");
  const tech = modalContent.querySelector("#cert-tech");

  if (!categories) return;
  categories.classList.remove("hidden");
  hr?.classList.remove("active");
  tech?.classList.remove("active");
}

/* IMAGE MODAL */
function openImageModal(src) {
  modalContent.innerHTML = `<img src="${src}" style="max-width:100%;border-radius:16px">`;
  modalOverlay.classList.add("active");
}

/* ESC */
document.addEventListener("keydown", e => {
  if (e.key === "Escape") closeModal();
});

/* RESUME DROPDOWN */
const resumeBtn = document.getElementById("resumeBtn");
const resumeMenu = document.getElementById("resumeMenu");

resumeBtn.onclick = e => {
  e.stopPropagation();
  resumeMenu.classList.toggle("show");
};

document.onclick = () => resumeMenu.classList.remove("show");
