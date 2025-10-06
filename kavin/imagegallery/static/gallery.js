
function openImage(imgElement) {
  const popup = document.getElementById("popup");
  const popupImage = document.getElementById("popupImage");
  
  popupImage.src = imgElement.src;
  popup.style.display = "flex";
}

function closeImage() {
  document.getElementById("popup").style.display = "none";
}
