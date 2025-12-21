function toggleCard(card) {
  const details = card.querySelector(".details");
  details.style.display = details.style.display === "block" ? "none" : "block";
}
function openImage() {
  document.getElementById("imageModal").style.display = "flex";
}

function closeImage() {
  document.getElementById("imageModal").style.display = "none";
}
