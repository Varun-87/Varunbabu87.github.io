function openModal(modalId) {
    document.getElementById('modal-overlay').style.display = 'flex';
    document.querySelectorAll('.modal-content').forEach(m => m.style.display = 'none');
    document.getElementById(modalId).style.display = 'block';
}

function closeAllModals() {
    document.getElementById('modal-overlay').style.display = 'none';
}
