import './node_modules/angular/angular.min.js';
import { URL, API_KEY, COUNTRIES, CATEGORIES} from './constants.js';
// import { newsFeed } from './newsFeed.js'
// import { newsElement } from './newsElement.js'

var newsApp=angular.module('newsApp', []);

newsApp.controller('newsController', function($scope, $http) {
    $scope.countries = COUNTRIES;
    $scope.categories = CATEGORIES;

    $scope.getArticles = function (requestUrl) {
        $http({method: 'GET', url: requestUrl}).
            then(function success(response) {
                $scope.articles = response.data.articles
            });
    };

    $scope.getFilteredNews = function(q, cnt, ctg){
        if(!q && !cnt && !ctg) { return $scope.getDefaultNews() }
        
        var requestUrl = URL;

        var country = COUNTRIES.find( e => e.name == cnt)
        var category = CATEGORIES.find( e => e.name == ctg)

        if (q) { requestUrl = requestUrl + 'q=' + q + '&' }
        if (country) { requestUrl = requestUrl + 'country=' + country.code + '&' }
        if (category) { requestUrl = requestUrl + 'category=' + category.code + '&' }

        requestUrl += API_KEY;

        $scope.getArticles(requestUrl)
    };

    $scope.getDefaultNews = function () {
        var requestUrl = URL;
        requestUrl = requestUrl + 'country=' + 'ru' + '&'
        requestUrl += API_KEY;

        $scope.getArticles(requestUrl)
    };
});

// newsFeed;
// newsElement;

newsApp.component('newsFeed', {
    bindings: {
        articles: '<',
        init: '&'
    },
    controller: [function(){
        var $ctrl = this;
        $ctrl.$onInit = function () {
            $ctrl.init()
        };
        $ctrl.$onChanges = function(articles) {
            if (articles.articles.currentValue && articles.articles.previousValue){
                alert("News successfully updated");
            }
        };
    }],
    templateUrl: './newsFeed.html'
})

newsApp.component('newsElement', {
    bindings: {
        article: '<'
    },
    controller: [function(){
        var $ctrl = this;
    }],
    templateUrl: './newsElement.html'
})