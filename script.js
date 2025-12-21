// Function to handle the Expanding Cards
function toggleCard(card) {
    // Close other cards (optional, comment out if you want multiple open)
    const allCards = document.querySelectorAll('.expand-card');
    allCards.forEach(c => {
        if (c !== card) c.classList.remove('active');
    });

    // Toggle current card
    card.classList.toggle('active');
    
    // Change plus to minus icon effect
    const plus = card.querySelector('.plus');
    if (card.classList.contains('active')) {
        plus.textContent = '-';
    } else {
        plus.textContent = '+';
    }
}

// Profile Image Modal Logic
function openImage() {
    document.getElementById("imageModal").style.display = "flex";
}

function closeImage() {
    document.getElementById("imageModal").style.display = "none";
}

// Smooth scrolling for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
