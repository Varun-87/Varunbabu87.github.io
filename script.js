// Function to open specific modal
function openModal(modalId) {
    const overlay = document.getElementById('modal-overlay');
    const allContents = document.querySelectorAll('.modal-content');
    
    // Hide all modal contents first
    allContents.forEach(content => content.style.display = 'none');
    
    // Show overlay and the specific content
    overlay.style.display = 'flex';
    document.getElementById(modalId).style.display = 'block';
    
    // Prevent scrolling on background
    document.body.style.overflow = 'hidden';
}

// Function to close modal when clicking background
function closeAllModals() {
    const overlay = document.getElementById('modal-overlay');
    overlay.style.display = 'none';
    
    // Re-enable scrolling
    document.body.style.overflow = 'auto';
}

// Close modal on Escape key
window.addEventListener('keydown', (e) => {
    if (e.key === "Escape") closeAllModals();
});
