/* =================================================
   MODAL & CERTIFICATION HANDLER — FIXED
================================================== */

const modalOverlay = document.getElementById("modalOverlay");
const modalContent = document.getElementById("modalContent");
const cardDetails = document.getElementById("cardDetails");

/* ================= OPEN CARD MODAL ================= */
function openCardModal(cardId) {
  if (!modalOverlay || !modalContent || !cardDetails) return;

  const source = cardDetails.querySelector(`[data-id="${cardId}"]`);

  modalContent.innerHTML = source
    ? source.innerHTML
    : "<p>Content not found.</p>";

  modalOverlay.classList.add("active");

  resetCertView();
}

/* ================= CLOSE MODAL ================= */
function closeModal() {
  modalOverlay.classList.remove("active");

  setTimeout(() => {
    modalContent.innerHTML = "";
  }, 200);
}

/* ================= CERT SWITCH ================= */
function openCert(type) {
  const categories = document.getElementById("certCategories");
  const hr = document.getElementById("cert-hr");
  const tech = document.getElementById("cert-tech");

  if (!categories || !hr || !tech) return;

  // always reset first
  categories.classList.add("hidden");
  hr.classList.remove("active");
  tech.classList.remove("active");

  if (type === "hr") {
    hr.classList.add("active");
  }

  if (type === "tech") {
    tech.classList.add("active");
  }
}

/* ================= BACK ================= */
function backToCertCategories() {
  const categories = document.getElementById("certCategories");
  const hr = document.getElementById("cert-hr");
  const tech = document.getElementById("cert-tech");

  if (!categories || !hr || !tech) return;

  categories.classList.remove("hidden");
  hr.classList.remove("active");
  tech.classList.remove("active");
}

/* ================= RESET ================= */
function resetCertView() {
  const categories = document.getElementById("certCategories");
  const hr = document.getElementById("cert-hr");
  const tech = document.getElementById("cert-tech");

  if (!categories || !hr || !tech) return;

  categories.classList.remove("hidden");
  hr.classList.remove("active");
  tech.classList.remove("active");
}

/* ================= IMAGE MODAL ================= */
function openImageModal(src) {
  modalContent.innerHTML = `
    <img src="${src}" style="max-width:100%; border-radius:16px;">
  `;
  modalOverlay.classList.add("active");
}

/* ================= ESC ================= */
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeModal();
});

/* ================= RESUME DROPDOWN ================= */
const resumeBtn = document.getElementById("resumeBtn");
const resumeMenu = document.getElementById("resumeMenu");

if (resumeBtn && resumeMenu) {
  resumeBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    resumeMenu.classList.toggle("show");
  });

  document.addEventListener("click", () => {
    resumeMenu.classList.remove("show");
  });

  resumeMenu.addEventListener("click", (e) => {
    e.stopPropagation();
  });
}
