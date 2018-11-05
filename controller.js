app.controller('controller', function($scope,$http) {
  $http.get('https://dog.ceo/api/breeds/list/all').then(function(response){
    var stat = response.data.status; // use it to show error
    if(stat == "success"){
      var json_response = response.data.message;
      var breeds_names = [];
      for(var key in json_response){
        breeds_names.push(key);
      }
      $scope.breeds = breeds_names;
    }else{
      $scope.breeds = ""; 
    }
  });
});
