/* =================================================
   MODAL CONTENT HANDLER — FINAL FIXED VERSION
================================================== */

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

