app.controller('HomeController', function($scope) {
});

app.controller('AboutController', function($scope) {
});

app.controller('ProjectsController', function($scope) {
});

app.controller('ResourcesController', function($scope) {
});

app.controller('BlogController', function($scope, $window, $http) {
  // jsFlickrBadge(document.getElementById('3WireFlickr'), {
  //     // your Flickr ID (find it here)
  //     flickrId: '79639273@N05',
  //     // feed type. user, group, contacts, etc.
  //     feed: 'user',
  //     // optional comma-delimited tags to filter by, only used with 'user' feed
  //     tags: '3WireBuild',
  //     // number of rows to display
  //     rows: 4,
  //     // number of columns to display
  //     columns: 4,
  //     // size of each thumbnail (any bigger than 75 will cause pixelization)
  //     size: 75,
  //     // animation to use.
  //     // one of: vscroll, random, vscroll, shuffle, zoom, scroll, flipX, flipY
  //     animation: 'vscroll',
  //     // seconds each animation takes
  //     animationSpeed: 1,
  //     // seconds between each animation
  //     animationPause: 2
  //   });

// 'https://www.flickr.com/services/api/explore/flickr.photos.search'

  var flickr = function() {
  $.getJSON('https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=b2f9fdabc92cc6e24742ae3ec7eb67e8&user_id=79639273%40N05&text=%233WireBuild&format=rest&auth_token=72157668371811484-3f7fd72369c395bc&api_sig=bf5222e30e76d667bac09e22509d48bc',
    function(data){
      $('#3WireFlickr').innerHTML("<p>" + data + "</p>"); 
    });//getJSON
      console.log("Hmmm");


    };//flickr Function

    flickr();

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
