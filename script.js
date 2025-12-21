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
function closeModal(){
  const overlay = document.getElementById('modalOverlay');
  overlay.style.display = 'none';
  const content = document.getElementById('modalContent');
  content.innerHTML = '';
}

/* Clicking the overlay (outside modal-card) closes it: handled by markup (onclick on overlay) */
document.getElementById('modalOverlay').addEventListener('click', closeModal);

/* Prevent overlay click when clicking inside modal card (already handled inline using event.stopPropagation())
   but add a listener to modal card in case of different browsers */
document.getElementById('modalCard').addEventListener('click', function(e){ e.stopPropagation(); });


/* ================= DYNAMIC CARD MODAL LOGIC ================= */
/* The HTML includes a hidden container (#cardDetails) with detail blocks.
   When a front card is clicked we find the matching detail block and copy it into the modal.
   This keeps content in HTML for easy editing later. */

function openCardModal(cardId){
  const overlay = document.getElementById('modalOverlay');
  const content = document.getElementById('modalContent');
  const detailsRoot = document.getElementById('cardDetails');
  const detailBlocks = detailsRoot.querySelectorAll('.detail-block');

  // find the matching detail block by data-id
  let block = null;
  detailBlocks.forEach(b => {
    if(b.getAttribute('data-id') === cardId) block = b;
  });

  if(!block){
    content.innerHTML = '<h3>Coming soon</h3><p class="muted">Content will be added here later.</p>';
  } else {
    // clone the block into modal
    content.innerHTML = block.innerHTML;
  }

  overlay.style.display = 'flex';
}

/* Attach helper functions on window so inline onclick in HTML finds them */
window.openCardModal = openCardModal;
window.openImageModal = openImageModal;
window.closeModal = closeModal;
