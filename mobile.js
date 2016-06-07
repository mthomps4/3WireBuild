var button = document.getElementById('menuButton');
button.addEventListener('click', function(event) {
    var target = document.getElementById('main-nav');
    if (target.style.display == "none"){
        target.style.display = "flex";
    } else {
        target.style.display = "none";
    }
});
