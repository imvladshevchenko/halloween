var getBonus = document.getElementById("getBonus");
var popup = document.getElementById("popup");
var overlay = document.getElementById("overlay");
var step1 = document.getElementById("step1");
var step2 = document.getElementById("step2");
var step3 = document.getElementById("step3");

AOS.init();

getBonus.onclick = function() {
  overlay.style.display = "block";
  popup.style.display = "flex";
};

overlay.onclick = function() {
  overlay.style.display = "none";
  popup.style.display = "none";
};

if (window.innerWidth <= 768) {
  step1.setAttribute("data-aos", "fade-right");
  step2.setAttribute("data-aos", "fade-right");
  step3.setAttribute("data-aos", "fade-right");
  setTimeout(() => {
    AOS.refreshHard();
  }, 500)
}
