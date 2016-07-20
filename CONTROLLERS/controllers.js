app.controller('HomeController', function($scope) {
});

app.controller('AboutController', function($scope) {
});

app.controller('ProjectsController', function($scope) {
});

app.controller('ResourcesController', function($scope) {
});

app.controller('BlogController', function($scope, $window, $http, $document) {

// "http://nurelm.com/bring-flickr-to-your-website-using-json-and-jquery/"
// "https://www.viget.com/articles/pulling-your-flickr-feed-with-jquery"

var flickr = function() {
  $.getJSON('https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=b2f9fdabc92cc6e24742ae3ec7eb67e8&user_id=79639273%40N05&text=%233WireBuild&format=json&nojsoncallback=1&auth_token=72157668371811484-3f7fd72369c395bc&api_sig=fb9ed9ffd8ca8c6b95ea0afedd184eb4',
  function(data){
    $.each(data.photos.photo, function(i, photo ,id, farm, server, secret){
    $("<img class='flickerPic'/>").attr("src",
    'https://farm' + photo.farm + '.staticflickr.com/' +
    photo.server + '/' + photo.id + '_' + photo.secret + '_m.jpg'
  ).appendTo("#3WireFlickr");

  if(i == 8){return false;}
    });
  });
};//flickr Function

flickr();


console.log("merpBlog");
});//BlogController

app.controller('ContactController', function ($scope) {
});

app.controller('BuildController', function ($scope) {
});

app.controller('active', function($scope, $location){
        $scope.isActive = function (viewLocation) {
        var active = (viewLocation === $location.path());
        return active;
        };
        console.log($location.path());
    });

app.controller('active2', function($scope, $location){
            $scope.isActive = function (viewLocation) {
            var active = (viewLocation === $location.path());
            return active;
            };
            console.log($location.path());
        });

app.controller('NavController', function($scope,$window,$document, $location){

    var button = document.getElementById('menuButton');
    var nav1 = document.getElementById('main-nav');
    var nav2 = document.getElementById('main-nav2');
    var header = document.getElementById('');

    if(window.innerWidth < 489){
      // alert("Window < 489");
      nav1.style.display = "none";
      button.style.display = "block";
      nav2.style.display = "none";
    }

    if(window.innerWidth > 489){
      // alert("Window > 489");
      button.style.display = "none";
      nav1.style.display = "none";
      nav2.style.display = "flex";
      }

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
        }
        else {
            nav1.style.display = "none";
        }
        });

    nav1.addEventListener('click', function(event){
      this.style.display = "none";
    });

    document.addEventListener('click', function(event){
      var button = document.getElementById('menuButton');
      if(event.target !== button){
        nav1.style.display = "none";
      }
    });

    // document.addEventListener('touchstart', function(event){
    //   var button = document.getElementById('menuButton');
    //   var nav1 = document.getElementById('main-nav');
    //
    //   if(event.target !== nav1){
    //     nav1.style.display = "none";
    //   }
    // });

}); //END NAV CONTROLLER
