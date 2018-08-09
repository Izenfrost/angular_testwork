var newsFeed = {
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
            if(articles.articles.currentValue){
                $ctrl.articles = articles.articles.currentValue.filter(a => a.urlToImage != null);
            }
        };
    }],
    template: `
    <div ng-repeat="article in $ctrl.articles" align="center">
        <news-element article="article"></news-element>
    </div>
    `
};

export default newsFeed;
