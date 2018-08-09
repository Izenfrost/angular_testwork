//import '../node_modules/angular/angular.min.js';
import angular from "angular";
import mainController from './controllers/mainController'
import newsFeed from './components/newsFeed'
import newsElement from './components/newsElement'

var newsApp = angular.module('newsApp', []);

newsApp.controller('mainController', ['$scope', '$http', mainController]);
newsApp.component('newsFeed', newsFeed);
newsApp.component('newsElement', newsElement);