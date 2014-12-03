function CustomerController ($scope) {
$scope.sortBy = 'name';
$scope.reverse = false;
$scope.people=[
{name:'Moussi',city:'Tunis',joined : '2000-12-02', orderTotal :9.9956},
{name:'Aymen',city:'Paris',joined : '2014-12-02', orderTotal :19.9956},
{name:'Achref',city:'Italy',joined : '2012-12-02', orderTotal :29.9956},
{name:'Anis',city:'oman',joined : '2000-12-02', orderTotal :14.9956}
];

$scope.doSort = function (propName) {
	$scope.sortBy = propName;
	$scope.reverse = !$scope.reverse;
}
}