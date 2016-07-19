app.controller('HomeController', function($scope) {
});

app.controller('AboutController', function($scope) {
});

app.controller('ProjectsController', function($scope) {
});

app.controller('ResourcesController', function($scope) {
});

app.controller('BlogController', function($scope) {
  var feed = new Instafeed({
      get: 'tagged',
      tagName: '3WireBuild',

      // userId: 921849005,
      clientId: 'f138e4254bd645b9920b3744224a6e66'
      // accessToken: '921849005.1677ed0.41e55590d8164368bbcd08d77b21f942'
  });
  feed.run();


  // var feed = new Instafeed({
  // get: 'user',
  // userId: 921849005,
  // clientId: 'f138e4254bd645b9920b3744224a6e66',
  // accessToken: '921849005.1677ed0.41e55590d8164368bbcd08d77b21f942',
  // });
  // feed.run();

      // var userFeed = new Instafeed({
      //     get: 'user',
      //     userId: '921849005',
      //     accessToken: '921849005.1677ed0.41e55590d8164368bbcd08d77b21f942',
      //     filter:'3WireBuild'
      //
      // });
      // userFeed.run();

//       #instafeed img {
// padding:5px;
// opacity:0.8;
// filter:alpha(opacity=80);
// }
//
// #instafeed img:hover {
// opacity:1;
// filter:alpha(opacity=100);
// }

      //http://tutvid.com/html-css-wordpress-tutorials/instagram-feed-onto-website-dreamweaver/
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
