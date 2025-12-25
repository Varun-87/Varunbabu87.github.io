/* =================================================
   MODAL CONTENT HANDLER — FINAL FIXED VERSION
================================================== */
/* ================= MODAL OPEN ================= */
function openCardModal(cardId) {
  const overlay = document.getElementById("modalOverlay");
  const modalContent = document.getElementById("modalContent");

  const source = document.querySelector(
    `#cardDetails [data-id="${cardId}"]`
  );

  if (!source) return;

  modalContent.innerHTML = source.innerHTML;
  overlay.classList.add("active");

  // Reset certification view every time modal opens
  resetCertView();
}

/* ================= MODAL CLOSE ================= */
function closeModal() {
  document.getElementById("modalOverlay").classList.remove("active");
}

/* ================= CERT CATEGORY LOGIC ================= */

/* OPEN HR or TECH */
function openCert(type) {
  const categories = document.getElementById("certCategories");
  const hr = document.getElementById("cert-hr");
  const tech = document.getElementById("cert-tech");

  if (!categories || !hr || !tech) return;

  // Hide category cards
  categories.classList.add("hidden");

  // Hide both sections first
  hr.classList.remove("active");
  tech.classList.remove("active");

  // Show selected section
  if (type === "hr") {
    hr.classList.add("active");
  } else if (type === "tech") {
    tech.classList.add("active");
  }
}

/* BACK BUTTON */
function backToCertCategories() {
  const categories = document.getElementById("certCategories");
  const hr = document.getElementById("cert-hr");
  const tech = document.getElementById("cert-tech");

  if (!categories || !hr || !tech) return;

  categories.classList.remove("hidden");
  hr.classList.remove("active");
  tech.classList.remove("active");
}

/* RESET WHEN MODAL OPENS */
function resetCertView() {
  const categories = document.getElementById("certCategories");
  const hr = document.getElementById("cert-hr");
  const tech = document.getElementById("cert-tech");

  if (!categories || !hr || !tech) return;

  categories.classList.remove("hidden");
  hr.classList.remove("active");
  tech.classList.remove("active");
}

/* ESC KEY CLOSE */
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeModal();
});


const modalOverlay = document.getElementById("modalOverlay");
const modalContent = document.getElementById("modalContent");
const cardDetails = document.getElementById("cardDetails");

/* ---------- OPEN CARD MODAL ---------- */
function openCardModal(cardId) {
  // find matching detail block
  const detail = cardDetails.querySelector(
    `[data-id="${cardId}"]`
  );

  // safety fallback
  if (!detail) {
    modalContent.innerHTML = "<p>Content not found.</p>";
  } else {
    modalContent.innerHTML = detail.innerHTML;
  }

  modalOverlay.classList.add("active");
}

/* ---------- OPEN PROFILE IMAGE ---------- */
function openImageModal(src) {
  modalContent.innerHTML = `
    <img src="${src}" style="
      max-width: 100%;
      border-radius: 16px;
    ">
  `;
  modalOverlay.classList.add("active");
}

/* ---------- CLOSE MODAL ---------- */
function closeModal() {
  modalOverlay.classList.remove("active");

  // clean content after close animation
  setTimeout(() => {
    modalContent.innerHTML = "";
  }, 200);
}
// ===================== RESUME DROPDOWN LOGIC =====================

const resumeBtn = document.getElementById("resumeBtn");
const resumeMenu = document.getElementById("resumeMenu");

resumeBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  resumeMenu.classList.toggle("show");
});

// Close dropdown when clicking outside
document.addEventListener("click", () => {
  resumeMenu.classList.remove("show");
});

// Prevent closing when clicking inside menu
resumeMenu.addEventListener("click", (e) => {
  e.stopPropagation();
});


/* ---------- ESC KEY SUPPORT ---------- */
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeModal();
});





