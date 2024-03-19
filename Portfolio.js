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


function AfficheSmallButtonCert1() {
  const contain = document.querySelector('.contain-Affiche-small-cert1');
  contain.style.opacity = '1';  // Changez l'opacité pour afficher lentement
  contain.style.display = 'block';
  
  const overlay = document.querySelector('.container-via-button-small-cert1');
  overlay.style.opacity = '1';  // Changez l'opacité pour afficher lentement
  overlay.style.display = 'block';
}

function FermerContainerSmallCert1() {
  const contain = document.querySelector('.contain-Affiche-small-cert1');
  contain.style.opacity = '0';  // Changez l'opacité pour masquer lentement
  contain.style.display = 'none';

  const overlay = document.querySelector('.container-via-button-small-cert1');
  overlay.style.opacity = '0';  // Changez l'opacité pour masquer lentement
  overlay.style.display = 'none';
}

function AfficheSmallButtonCert2() {
  const contain = document.querySelector('.contain-Affiche-small-cert2');
  contain.style.opacity = '1';  
  contain.style.display = 'block';
  
  const overlay = document.querySelector('.container-via-button-small-cert2');
  overlay.style.opacity = '1';  
  overlay.style.display = 'block';
}

function FermerContainerSmallCert2() {
  const contain = document.querySelector('.contain-Affiche-small-cert2');
  contain.style.opacity = '0';  
  contain.style.display = 'none';

  const overlay = document.querySelector('.container-via-button-small-cert2');
  overlay.style.opacity = '0';  
  overlay.style.display = 'none';
}
function AfficheSmallButtonCert3() {
  const contain = document.querySelector('.contain-Affiche-small-cert3');
  contain.style.opacity = '1';  // Changez l'opacité pour afficher lentement
  contain.style.display = 'block';
  
  const overlay = document.querySelector('.container-via-button-small-cert3');
  overlay.style.opacity = '1';  // Changez l'opacité pour afficher lentement
  overlay.style.display = 'block';
}

function FermerContainerSmallCert3() {
  const contain = document.querySelector('.contain-Affiche-small-cert3');
  contain.style.opacity = '0';  // Changez l'opacité pour masquer lentement
  contain.style.display = 'none';

  const overlay = document.querySelector('.container-via-button-small-cert3');
  overlay.style.opacity = '0';  // Changez l'opacité pour masquer lentement
  overlay.style.display = 'none';
}

function AfficheSmallButtonCert4() {
  const contain = document.querySelector('.contain-Affiche-small-cert4');
  contain.style.opacity = '1';  
  contain.style.display = 'block';
  
  const overlay = document.querySelector('.container-via-button-small-cert4');
  overlay.style.opacity = '1';  
  overlay.style.display = 'block';
}

function FermerContainerSmallCert4() {
  const contain = document.querySelector('.contain-Affiche-small-cert4');
  contain.style.opacity = '0';  
  contain.style.display = 'none';

  const overlay = document.querySelector('.container-via-button-small-cert4');
  overlay.style.opacity = '0';  
  overlay.style.display = 'none';
}
function AfficheSmallButtonCert5() {
  const contain = document.querySelector('.contain-Affiche-small-cert5');
  contain.style.opacity = '1';  // Changez l'opacité pour afficher lentement
  contain.style.display = 'block';
  
  const overlay = document.querySelector('.container-via-button-small-cert5');
  overlay.style.opacity = '1';  // Changez l'opacité pour afficher lentement
  overlay.style.display = 'block';
}

function FermerContainerSmallCert5() {
  const contain = document.querySelector('.contain-Affiche-small-cert5');
  contain.style.opacity = '0';  // Changez l'opacité pour masquer lentement
  contain.style.display = 'none';

  const overlay = document.querySelector('.container-via-button-small-cert5');
  overlay.style.opacity = '0';  // Changez l'opacité pour masquer lentement
  overlay.style.display = 'none';
}

function AfficheSmallButtonCert6() {
  const contain = document.querySelector('.contain-Affiche-small-cert6');
  contain.style.opacity = '1';  
  contain.style.display = 'block';
  
  const overlay = document.querySelector('.container-via-button-small-cert6');
  overlay.style.opacity = '1';  
  overlay.style.display = 'block';
}

function FermerContainerSmallCert6() {
  const contain = document.querySelector('.contain-Affiche-small-cert6');
  contain.style.opacity = '0';  
  contain.style.display = 'none';

  const overlay = document.querySelector('.container-via-button-small-cert6');
  overlay.style.opacity = '0';  
  overlay.style.display = 'none';
}
function AfficheSmallButtonCert7() {
  const contain = document.querySelector('.contain-Affiche-small-cert7');
  contain.style.opacity = '1';  // Changez l'opacité pour afficher lentement
  contain.style.display = 'block';
  
  const overlay = document.querySelector('.container-via-button-small-cert7');
  overlay.style.opacity = '1';  // Changez l'opacité pour afficher lentement
  overlay.style.display = 'block';
}

function FermerContainerSmallCert7() {
  const contain = document.querySelector('.contain-Affiche-small-cert7');
  contain.style.opacity = '0';  // Changez l'opacité pour masquer lentement
  contain.style.display = 'none';

  const overlay = document.querySelector('.container-via-button-small-cert7');
  overlay.style.opacity = '0';  // Changez l'opacité pour masquer lentement
  overlay.style.display = 'none';
}

function AfficheSmallButtonCert8() {
  const contain = document.querySelector('.contain-Affiche-small-cert8');
  contain.style.opacity = '1';  
  contain.style.display = 'block';
  
  const overlay = document.querySelector('.container-via-button-small-cert8');
  overlay.style.opacity = '1';  
  overlay.style.display = 'block';
}

function FermerContainerSmallCert8() {
  const contain = document.querySelector('.contain-Affiche-small-cert8');
  contain.style.opacity = '0';  
  contain.style.display = 'none';

  const overlay = document.querySelector('.container-via-button-small-cert8');
  overlay.style.opacity = '0';  
  overlay.style.display = 'none';
}


function AfficheButtonStage1() {
  const contain = document.querySelector('.contain-Affiche-stage1');
  contain.style.opacity = '1';  // Changez l'opacité pour afficher lentement
  contain.style.display = 'block';
  
  const overlay = document.querySelector('.container-via-button-stage1');
  overlay.style.opacity = '1';  // Changez l'opacité pour afficher lentement
  overlay.style.display = 'block';
}

function FermerContainerStage1() {
  const contain = document.querySelector('.contain-Affiche-stage1');
  contain.style.opacity = '0';  // Changez l'opacité pour masquer lentement
  contain.style.display = 'none';

  const overlay = document.querySelector('.container-via-button-stage1');
  overlay.style.opacity = '0';  // Changez l'opacité pour masquer lentement
  overlay.style.display = 'none';
}


function AfficheButtonStage2() {
  const contain = document.querySelector('.contain-Affiche-stage2');
  contain.style.opacity = '1';  // Changez l'opacité pour afficher lentement
  contain.style.display = 'block';
  
  const overlay = document.querySelector('.container-via-button-stage2');
  overlay.style.opacity = '1';  // Changez l'opacité pour afficher lentement
  overlay.style.display = 'block';
}

function FermerContainerStage2() {
  const contain = document.querySelector('.contain-Affiche-stage2');
  contain.style.opacity = '0';  // Changez l'opacité pour masquer lentement
  contain.style.display = 'none';

  const overlay = document.querySelector('.container-via-button-stage2');
  overlay.style.opacity = '0';  // Changez l'opacité pour masquer lentement
  overlay.style.display = 'none';
}

function stopPropagation(event) {
  event.stopPropagation();
}


let prevScrollpos = window.pageYOffset;

window.onscroll = function() {
  let currentScrollPos = window.pageYOffset;
  const nav = document.getElementById("nav");

  if (prevScrollpos > currentScrollPos) {
    nav.style.top = "0";
  } else {
    nav.style.top = "-10vh";  // Réglez la hauteur de retrait de votre navbar ici
  }
  prevScrollpos = currentScrollPos;
}

let currentProjectGroup = 1;
const projectsPerPage = 3;
const totalProjects = 10;

function showProjects() {
    const startProject = (currentProjectGroup - 1) * projectsPerPage;
    const endProject = Math.min(startProject + projectsPerPage, totalProjects);

    for (let i = 1; i <= totalProjects; i++) {
        const project = document.getElementById(`project${i}`);
        project.style.display = i >= startProject + 1 && i <= endProject ? 'block' : 'none';
    }
}

function nextProjects() {
    currentProjectGroup = (currentProjectGroup % Math.ceil(totalProjects / projectsPerPage)) + 1;
    showProjects();
}

function prevProjects() {
    currentProjectGroup = (currentProjectGroup - 2 + Math.ceil(totalProjects / projectsPerPage)) % Math.ceil(totalProjects / projectsPerPage) + 1;
    showProjects();
}


document.addEventListener('DOMContentLoaded', function () {
    showProjects();
});


function AfficheSmallButtonProj1() {
  const contain = document.querySelector('.contain-Affiche-small-proj1');
  contain.style.opacity = '1';  
  contain.style.display = 'block';
  
  const overlay = document.querySelector('.container-via-button-small-proj1');
  overlay.style.opacity = '1';  
  overlay.style.display = 'block';
}

function FermerContainerSmallProj1() {
  const contain = document.querySelector('.contain-Affiche-small-proj1');
  contain.style.opacity = '0';  
  contain.style.display = 'none';

  const overlay = document.querySelector('.container-via-button-small-proj1');
  overlay.style.opacity = '0';  
  overlay.style.display = 'none';
}


function AfficheSmallButtonProj2() {
  const contain = document.querySelector('.contain-Affiche-small-proj2');
  contain.style.opacity = '1';  
  contain.style.display = 'block';
  
  const overlay = document.querySelector('.container-via-button-small-proj2');
  overlay.style.opacity = '1';  
  overlay.style.display = 'block';
}

function FermerContainerSmallProj2() {
  const contain = document.querySelector('.contain-Affiche-small-proj2');
  contain.style.opacity = '0';  
  contain.style.display = 'none';

  const overlay = document.querySelector('.container-via-button-small-proj2');
  overlay.style.opacity = '0';  
  overlay.style.display = 'none';
}


function AfficheSmallButtonProj3() {
  const contain = document.querySelector('.contain-Affiche-small-proj3');
  contain.style.opacity = '1';  
  contain.style.display = 'block';
  
  const overlay = document.querySelector('.container-via-button-small-proj3');
  overlay.style.opacity = '1';  
  overlay.style.display = 'block';
}

function FermerContainerSmallProj3() {
  const contain = document.querySelector('.contain-Affiche-small-proj3');
  contain.style.opacity = '0';  
  contain.style.display = 'none';

  const overlay = document.querySelector('.container-via-button-small-proj3');
  overlay.style.opacity = '0';  
  overlay.style.display = 'none';
}


function AfficheSmallButtonProj4() {
  const contain = document.querySelector('.contain-Affiche-small-proj4');
  contain.style.opacity = '1';  
  contain.style.display = 'block';
  
  const overlay = document.querySelector('.container-via-button-small-proj4');
  overlay.style.opacity = '1';  
  overlay.style.display = 'block';
}

function FermerContainerSmallProj4() {
  const contain = document.querySelector('.contain-Affiche-small-proj4');
  contain.style.opacity = '0';  
  contain.style.display = 'none';

  const overlay = document.querySelector('.container-via-button-small-proj4');
  overlay.style.opacity = '0';  
  overlay.style.display = 'none';
}


function AfficheSmallButtonProj5() {
  const contain = document.querySelector('.contain-Affiche-small-proj5');
  contain.style.opacity = '1';  
  contain.style.display = 'block';
  
  const overlay = document.querySelector('.container-via-button-small-proj5');
  overlay.style.opacity = '1';  
  overlay.style.display = 'block';
}

function FermerContainerSmallProj5() {
  const contain = document.querySelector('.contain-Affiche-small-proj5');
  contain.style.opacity = '0';  
  contain.style.display = 'none';

  const overlay = document.querySelector('.container-via-button-small-proj5');
  overlay.style.opacity = '0';  
  overlay.style.display = 'none';
}


function AfficheSmallButtonProj6() {
  const contain = document.querySelector('.contain-Affiche-small-proj6');
  contain.style.opacity = '1';  
  contain.style.display = 'block';
  
  const overlay = document.querySelector('.container-via-button-small-proj6');
  overlay.style.opacity = '1';  
  overlay.style.display = 'block';
}

function FermerContainerSmallProj6() {
  const contain = document.querySelector('.contain-Affiche-small-proj6');
  contain.style.opacity = '0';  
  contain.style.display = 'none';

  const overlay = document.querySelector('.container-via-button-small-proj6');
  overlay.style.opacity = '0';  
  overlay.style.display = 'none';
}


function AfficheSmallButtonProj7() {
  const contain = document.querySelector('.contain-Affiche-small-proj7');
  contain.style.opacity = '1';  
  contain.style.display = 'block';
  
  const overlay = document.querySelector('.container-via-button-small-proj7');
  overlay.style.opacity = '1';  
  overlay.style.display = 'block';
}

function FermerContainerSmallProj7() {
  const contain = document.querySelector('.contain-Affiche-small-proj7');
  contain.style.opacity = '0';  
  contain.style.display = 'none';

  const overlay = document.querySelector('.container-via-button-small-proj7');
  overlay.style.opacity = '0';  
  overlay.style.display = 'none';
}


function AfficheSmallButtonProj8() {
  const contain = document.querySelector('.contain-Affiche-small-proj8');
  contain.style.opacity = '1';  
  contain.style.display = 'block';
  
  const overlay = document.querySelector('.container-via-button-small-proj8');
  overlay.style.opacity = '1';  
  overlay.style.display = 'block';
}

function FermerContainerSmallProj8() {
  const contain = document.querySelector('.contain-Affiche-small-proj8');
  contain.style.opacity = '0';  
  contain.style.display = 'none';

  const overlay = document.querySelector('.container-via-button-small-proj8');
  overlay.style.opacity = '0';  
  overlay.style.display = 'none';
}


function AfficheSmallButtonProj9() {
  const contain = document.querySelector('.contain-Affiche-small-proj9');
  contain.style.opacity = '1';  
  contain.style.display = 'block';
  
  const overlay = document.querySelector('.container-via-button-small-proj9');
  overlay.style.opacity = '1';  
  overlay.style.display = 'block';
}

function FermerContainerSmallProj9() {
  const contain = document.querySelector('.contain-Affiche-small-proj9');
  contain.style.opacity = '0';  
  contain.style.display = 'none';

  const overlay = document.querySelector('.container-via-button-small-proj9');
  overlay.style.opacity = '0';  
  overlay.style.display = 'none';
}


function AfficheSmallButtonProj10() {
  const contain = document.querySelector('.contain-Affiche-small-proj10');
  contain.style.opacity = '1';  
  contain.style.display = 'block';
  
  const overlay = document.querySelector('.container-via-button-small-proj10');
  overlay.style.opacity = '1';  
  overlay.style.display = 'block';
}

function FermerContainerSmallProj10() {
  const contain = document.querySelector('.contain-Affiche-small-proj10');
  contain.style.opacity = '0';  
  contain.style.display = 'none';

  const overlay = document.querySelector('.container-via-button-small-proj10');
  overlay.style.opacity = '0';  
  overlay.style.display = 'none';
}