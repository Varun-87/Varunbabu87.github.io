/* =========================================================
   PORTFOLIO MODAL & INTERACTION SCRIPT
   Author: Varun Babu B
   Purpose: Clean center-expand cards + image modal
========================================================= */

/* ---------- ELEMENT REFERENCES ---------- */
const modalOverlay = document.getElementById("modalOverlay");
const modalContent = document.getElementById("modalContent");
const cardDetailsRoot = document.getElementById("cardDetails");

/* ---------- OPEN CARD MODAL ---------- */
function openCardModal(cardId) {
  // Find matching hidden content block
  const detailBlock = cardDetailsRoot.querySelector(
    `[data-id="${cardId}"]`
  );

  // Load content or fallback
  if (detailBlock) {
    modalContent.innerHTML = detailBlock.innerHTML;
  } else {
    modalContent.innerHTML = `
      <h3>Coming Soon</h3>
      <p class="muted">Content will be added here later.</p>
    `;
  }

  // Show modal
  modalOverlay.classList.add("active");
}

/* ---------- OPEN PROFILE IMAGE MODAL ---------- */
function openImageModal(imageSrc) {
  modalContent.innerHTML = `
    <div style="text-align:center;">
      <img 
        src="${imageSrc}" 
        alt="Profile Image" 
        style="max-width:85%; border-radius:14px; box-shadow:0 20px 60px rgba(0,0,0,0.8);"
      >
    </div>
  `;

  modalOverlay.classList.add("active");
}

/* ---------- CLOSE MODAL ---------- */
function closeModal() {
  modalOverlay.classList.remove("active");

  // Clear content after animation
  setTimeout(() => {
    modalContent.innerHTML = "";
  }, 300);
}

/* ---------- ESC KEY SUPPORT ---------- */
document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    closeModal();
  }
});

/* ---------- PREVENT MODAL CLOSE WHEN CLICKING INSIDE ---------- */
document.getElementById("modalCard").addEventListener("click", function (e) {
  e.stopPropagation();
});

/* ---------- BACKGROUND CLICK CLOSE ---------- */
modalOverlay.addEventListener("click", closeModal);

/* ---------- EXPOSE FUNCTIONS TO HTML ---------- */
window.openCardModal = openCardModal;
window.openImageModal = openImageModal;
window.closeModal = closeModal;
