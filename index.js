var newsApp=angular.module('newsApp', []);

const url = 'https://newsapi.org/v2/top-headlines?';
const apiKey = 'apiKey=94d80f877d70435eafbc7f57e02da2a5';

newsApp.controller('newsController', function($scope, $http) {
  $scope.countries = ['ae', 'ar', 'at', 'au', 'be', 'bg', 'br', 'ca', 'ch', 'cn', 'co', 'cu', 'cz', 'de', 'eg', 'fr', 'gb', 'gr', 'hk', 'hu', 'id', 'ie', 'il', 'in', 'it', 'jp', 'kr', 'lt', 'lv', 'ma', 'mx', 'my', 'ng', 'nl', 'no', 'nz', 'ph', 'pl', 'pt', 'ro', 'rs', 'ru', 'sa', 'se', 'sg', 'si', 'sk', 'th', 'tr', 'tw', 'ua', 'us', 've', 'za'];
  $scope.categories = ['business', 'entertainment', 'general', 'health', 'science', 'sports', 'technology'];
  $scope.getNews = function(q, country, category){
    var request = url;
    if (q) {
        request = request + 'q=' + q + '&'
    }
    if (country) {
        request = request + 'country=' + country + '&'
    }
    if (category) {
        request = request + 'category=' + category + '&'
    }
    request += apiKey;
    console.log(request)
    $http({method: 'GET', url: request}).
        then(function success(response) {
            $scope.articles = response.data.articles
        });
  };
});