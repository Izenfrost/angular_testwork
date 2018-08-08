import './node_modules/angular/angular.min.js';

var newsApp=angular.module('newsApp', []);

const URL = 'https://newsapi.org/v2/top-headlines?';
const API_KEY = 'apiKey=94d80f877d70435eafbc7f57e02da2a5';
const COUNTRIES = [
    { code: 'ae', name: 'United Arab Emirates' },
    { code: 'ar', name: 'Argentina' },
    { code: 'at', name: 'Austria' },
    { code: 'au', name: 'Australia' },
    { code: 'be', name: 'Belgium' },
    { code: 'bg', name: 'Bulgaria' },
    { code: 'br', name: 'Brazil' },
    { code: 'ch', name: 'Switzerland' },
    { code: 'cn', name: 'China' },
    { code: 'co', name: 'Colombia' },
    { code: 'cu', name: 'Cuba' },
    { code: 'cz', name: 'Czech Rebuplic' },
    { code: 'de', name: 'Germany' },
    { code: 'eg', name: 'Egypt' },
    { code: 'fr', name: 'France' },
    { code: 'gb', name: 'Great Britain' },
    { code: 'gr', name: 'Greece' },
    { code: 'hk', name: 'Hong Kong' },
    { code: 'hu', name: 'Hungary' },
    { code: 'id', name: 'Indonesia' },
    { code: 'ie', name: 'Republic of Ireland' },
    { code: 'il', name: 'Israel' },
    { code: 'in', name: 'India' },
    { code: 'it', name: 'Italy' },
    { code: 'jp', name: 'Japan' },
    { code: 'kr', name: 'South Korea' },
    { code: 'lt', name: 'Lithuania' },
    { code: 'lv', name: 'Latvia' },
    { code: 'ma', name: 'Morocco' },
    { code: 'mx', name: 'Mexico' },
    { code: 'my', name: 'Malaysia' },
    { code: 'ng', name: 'Nigeria' },
    { code: 'nl', name: 'Netherlands' },
    { code: 'no', name: 'Norway' },
    { code: 'nz', name: 'New Zeland' },
    { code: 'ph', name: 'Philippines' },
    { code: 'pl', name: 'Poland' },
    { code: 'pt', name: 'Portugal' },
    { code: 'ro', name: 'Romania' },
    { code: 'rs', name: 'Republic of Serbia' },
    { code: 'ru', name: 'Russia' },
    { code: 'sa', name: 'Saudi Arabia' },
    { code: 'se', name: 'Sweden' },
    { code: 'sg', name: 'Singapore' },
    { code: 'si', name: 'Slovenia' },
    { code: 'sk', name: 'Slovakia' },
    { code: 'th', name: 'Thailand' },
    { code: 'tr', name: 'Turkey' },
    { code: 'tw', name: 'Taiwan' },
    { code: 'ua', name: 'Ukrain' },
    { code: 'us', name: 'United States' },
    { code: 've', name: 'Venezuela' },
    { code: 'za', name: 'South Africa' }
];
const CATEGORIES = [
    { code: 'business', name: 'Business' },
    { code: 'entertainment', name: 'Entertainment' },
    { code: 'general', name: 'Daily news' },
    { code: 'health', name: 'Health' },
    { code: 'science', name: 'Science' },
    { code: 'sports', name: 'Sports' },
    { code: 'technology', name: 'Technology' }
];

newsApp.controller('newsController', function($scope, $http) {
  $scope.countries = COUNTRIES;
  $scope.categories = CATEGORIES;

  $scope.getNews = function(q, cnt, ctg){
    if(!q && !cnt && !ctg) { cnt = 'Russia' }
    
    var requestUrl = URL;

    var country = COUNTRIES.find( e => e.name == cnt)
    var category = CATEGORIES.find( e => e.name == ctg)

    if (q) { requestUrl = requestUrl + 'q=' + q + '&' }
    if (country) { requestUrl = requestUrl + 'country=' + country.code + '&' }
    if (category) { requestUrl = requestUrl + 'category=' + category.code + '&' }

    requestUrl += API_KEY;
    console.log(requestUrl)
    $http({method: 'GET', url: requestUrl}).
        then(function success(response) {
            $scope.articles = response.data.articles
        });
  };
});