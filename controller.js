app.controller('controller_list', function($scope,$http) {
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

app.controller('controller_mosaic', function($scope,$http) {
  $scope.$watch('selectedBreed',function(){
    //const params = new HttpParams().set('breed', $scope.selectedBreed);
    $http.get('https://dog.ceo/api/breed/'+$scope.selectedBreed+'/images').then(function(response){
      $scope.stats = response.data.status;
      var json_response = response.data.message;
      $scope.images = json_response;
    });
  });
});
