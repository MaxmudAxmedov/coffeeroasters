let hiddens = document.querySelector(".nav__link");
let hodisa = document.querySelector(".head__iconDropdown");
console.log("hiddens");
hodisa.toggleAttribute("click", function(){
  hiddens.removeAttribute("target");
})
