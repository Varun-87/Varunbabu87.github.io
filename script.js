/* ================= BASIC UTILS ================= */

/* Open image in simple fullscreen modal (profile image) */
function openImageModal(src){
  // reuse global modal overlay but show an image inside
  const overlay = document.getElementById('modalOverlay');
  const content = document.getElementById('modalContent');
  content.innerHTML = '<div style="text-align:center;"><img src="'+src+'" style="max-width:85%;height:auto;border-radius:10px;"/></div>';
  overlay.style.display = 'flex';
}

/* Close modal (overlay) */
/* ================= MODAL OPEN / CLOSE ================= */

function openCardModal(cardId){
  const overlay = document.getElementById('modalOverlay');
  const content = document.getElementById('modalContent');
  const detailsRoot = document.getElementById('cardDetails');
  const detailBlocks = detailsRoot.querySelectorAll('.detail-block');

  let block = null;
  detailBlocks.forEach(b => {
    if(b.getAttribute('data-id') === cardId) block = b;
  });

  content.innerHTML = block
    ? block.innerHTML
    : '<h3>Coming Soon</h3><p class="muted">Content will be added later.</p>';

  overlay.classList.add('active');
}

/* Image modal reuse */
function openImageModal(src){
  const overlay = document.getElementById('modalOverlay');
  const content = document.getElementById('modalContent');
  content.innerHTML = `
    <div style="text-align:center;">
      <img src="${src}" style="max-width:85%;border-radius:12px;">
    </div>`;
  overlay.classList.add('active');
}

function closeModal(){
  const overlay = document.getElementById('modalOverlay');
  overlay.classList.remove('active');
}

/* ESC key support */
document.addEventListener('keydown', function(e){
  if(e.key === "Escape"){
    closeModal();
  }
});

/* Attach helper functions on window so inline onclick in HTML finds them */
window.openCardModal = openCardModal;
window.openImageModal = openImageModal;
window.closeModal = closeModal;

