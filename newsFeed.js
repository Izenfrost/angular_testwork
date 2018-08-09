export var newsFeed = newsApp.component('newsFeed', {
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
});
