var button = document.getElementById('menuButton');
var target = document.getElementById('main-nav');

//Makes sure appropriate menu is loaded "onload"
window.onload = function(){
  if(window.innerWidth < 489){
    target.style.display = "none";
    button.style.display = "block";
  }

  if(window.innerWidth > 489){
    button.style.display = "none";
    target.style.display = "flex";
    }
}

//Swaps Mobile Menu with Desktop Menu on Resize
window.onresize = function(){
    if(window.innerWidth < 489){
      target.style.display = "none";
      button.style.display = "block";
    }

    if(window.innerWidth > 489){
      button.style.display = "none";
      target.style.display = "flex";
      }
}

//Mobile Menu Button Toggle 
button.addEventListener('click', function(event) {
    if (target.style.display == "none"){
        target.style.display = "flex";
    } else {
        target.style.display = "none";
    }
});
