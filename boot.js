// Get the modal
var modal = document.getElementById("modalin");

// Get the button that opens the modal
var btn = document.getElementById("modall");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// quando cliacar no <span> (x), fecha o modal
span.onclick = function() {
  modal.style.display = "none";
}

var apare = document.getElementById("aparecer")


