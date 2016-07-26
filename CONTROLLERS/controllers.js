app.controller('HomeController', function($scope) {
});

app.controller('AboutController', function($scope) {
});

app.controller('ProjectsController', function($scope) {

var projImg = document.getElementsByClassName('projectLink');
// .css("background", "url(../IMAGES/PROJECTS/project" + i + ".jpg)")
  $(projImg).each(function(i) {
    ++i;
    $(this)
    .css({backgroundImage: "url(../IMAGES/PROJECTS/project" + i + ".jpg)",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover"});

    if(i==24){return false}
  });

    console.log("merpProject Controller End");
  });



app.controller('ResourcesController', function($scope) {
});

app.controller('BlogController', function($scope, $window, $http, $document) {


  $.getJSON('https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=460a175621f03f602db68da359637fb1&user_id=79639273%40N05&text=%233WireBuild&format=json&nojsoncallback=1')
    .then(function(data){
    $.each(data.photos.photo, function(i, photo, id, farm, server, secret){
    $("<img class='flickrPic'/>").attr("src",
    'https://farm' + photo.farm + '.staticflickr.com/' +
    photo.server + '/' + photo.id + '_' + photo.secret + '_m.jpg'
  ).appendTo("#Flickr");
  if(i == 20){return false;}
    });
  });
//flickr Function

  // flickr();

console.log("merpBlog");

});//BlogController

app.controller('postController',function($scope, $http){

    $http.get('Posts.json', {headers:{'Cache-Control' : 'no-cache'}}).success(function(data){
       $scope.posts = {};
       $scope.posts = data;
       var pages = function(){
           return Math.ceil($scope.posts.length/$scope.pageSize);
       };

       $scope.currentPage = 0;
       $scope.pageSize = 3;
       $scope.numberOfPages = pages;
    });

      console.log("merpBlog Post");
});

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
