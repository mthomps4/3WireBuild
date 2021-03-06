var button = document.getElementById('menuButton');
var nav1 = document.getElementById('main-nav');
var nav2 = document.getElementById('main-nav2');

//Makes sure appropriate menu is loaded "onload"
window.onload = function(){
  if(window.innerWidth < 489){
    nav1.style.display = "none";
    button.style.display = "block";
    nav2.style.display = "none";
  }

  if(window.innerWidth > 489){
    button.style.display = "none";
    nav1.style.display = "none";
    nav2.style.display = "flex";
    }
}

//Swaps Mobile Menu with Desktop Menu on Resize
window.onresize = function(){
    if(window.innerWidth < 489){
      nav1.style.display = "none";
      button.style.display = "block";
      nav2.style.display = "none";
    }

    if(window.innerWidth > 489){
      button.style.display = "none";
      nav1.style.display = "none";
      nav2.style.display = "flex";

      }
}

//Mobile Menu Button Toggle
button.addEventListener('click', function(event) {
    if (nav1.style.display == "none"){
        nav1.style.display = "flex";
    } else {
        nav1.style.display = "none";
    }
});
