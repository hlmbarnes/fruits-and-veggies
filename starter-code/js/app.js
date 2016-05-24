var app = angular.module('MyApp', []);

//this file defines 2 arrays for you
app.controller('HomeCtrl', ['$scope', function($scope) {


$scope.fruit = false;

// $scope.pools = $scope.vegetables + concat($scope.fruit);
// $scope.pools = $scope.fruit.concat($scope.vegetables);

$scope.pools =[
  'Apple',
  'Apricot',
  'Banana',
  'Artichoke',
  'Arugula',
  'Asparagus'
];

// $scope.fruits = fruit.sort();
// $scope.vegetables = vegetables.sort();

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

// $scope.checkwin = function() {
// if ($scope.fruity.sort().toString() == $scope.fruits.sort().toString() && $scope.vegetables.sort().toString() == $scope.vegetables.sort().toString()) {
//   $scope.win=true;
//   }
// }
$scope.checkfruit = function(){
if($scope.pools.length === 0) {
  for(var i = 0; i < $scope.fruit.length; i++) {
    if($scope.fruit.indexOf($scope.fruit[i]) === -1 ) {
      $scope.incorrect = true;
      }
    }
  }
}

}]);




//debug stuff to show the app is loading and fruit / veggies are available
console.log('App Started');
console.log('Fruit count', fruit.length);
console.log('Veggie count', vegetables.length);