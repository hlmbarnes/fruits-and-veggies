var app = angular.module('MyApp', []);

//this file defines 2 arrays for you
app.controller('HomeCtrl', ['$scope', function($scope) {

$scope.fruit = false;

$scope.pools =[
  'Apple',
  'Apricot',
  'Banana',
  'Artichoke',
  'Arugula',
  'Asparagus'
];

$scope.fruits = [
  // 'Apple',
  // 'Apricot',
  // 'Banana'
  ];

$scope.vegetables = [
  // 'Artichoke',
  // 'Arugula',
  // 'Asparagus'
  ];


$scope.removeFruit = function(index) { 
  var fruit = $scope.pools.splice(index, 1);  
  var fruit = fruit.toString();
  $scope.fruits.push(fruit);
}

$scope.removeVegetable = function(index) { 
  var vegetable = $scope.pools.splice(index, 1);
  var vegetable = vegetable.toString();
  $scope.vegetables.push(vegetable);
}

$scope.removePoolV = function(index){
  var pool = $scope.vegetables.splice(index, 1);
  pool = pool.toString();
  $scope.pools.push(pool);
}

$scope.removePoolF = function(index){
  var pool = $scope.fruits.splice(index, 1);
  pool = pool.toString();
  $scope.pools.push(pool);
}

}]);




//debug stuff to show the app is loading and fruit / veggies are available
console.log('App Started');
console.log('Fruit count', fruit.length);
console.log('Veggie count', vegetables.length);