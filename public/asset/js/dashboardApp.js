angular.module("app", ["ui.bootstrap", "chart.js"]).controller("BarCtrl", function($scope, $http) {
    $scope.labels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
    $scope.series = ['Series A', 'Series B'];

    $scope.data = [
        [65, 59, 80, 81, 56, 55, 40],
        [28, 48, 40, 19, 86, 27, 90]
    ];

    $http.get('https://jsonplaceholder.typicode.com/todos').
    then(function(response) {
        var todo = response.data,
            cmpltd = [],
            ncmpltd = [];
        for (var i = 0; i < todo.length; i++) {
            if (todo[i].completed == true) {
                console.log(todo[i])
                cmpltd.push(todo[i]);
            } else {
                ncmpltd.push(todo[i]);
            }
        }
        $scope.completed = cmpltd;
        $scope.notcompleted = ncmpltd;
    });


    $http.get('https://jsonplaceholder.typicode.com/users').
    then(function(response) {
        var alldata = response.data;
        // console.log($scope.alldata);
        $scope.totalItems = alldata.length;
        $scope.currentPage = 1;
        $scope.itemsPerPage = 5;

        $scope.$watch("currentPage", function() {
            setPagingData($scope.currentPage);
        });

        function setPagingData(page) {
            var pagedData = alldata.slice(
                (page - 1) * $scope.itemsPerPage,
                page * $scope.itemsPerPage
            );
            $scope.aCandidates = pagedData;
        }
    });


    $http.get('https://jsonplaceholder.typicode.com/photos').
    then(function(response) {
        var photos = response.data;
        $scope.photos = photos;
    });




});