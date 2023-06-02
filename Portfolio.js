/*////////////
//  REVEAL  //
////////////*/
function reveal() {
  var reveals = document.querySelectorAll(".reveal");
  
  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;
  
    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}
  
window.addEventListener("scroll", reveal);

/*//////////////
//   BURGER   //
//////////////*/
function openBtn() {
  document.getElementById("burgerMenu").style.width = "100vw";
}

function closeBtn() {
  document.getElementById("burgerMenu").style.width = "0";
}

/* Panels (projets) */

$(document).on("click", ".panel", function() {
  $(this).addClass("panel actif").siblings().removeClass("panel actif").addClass("panel")
})