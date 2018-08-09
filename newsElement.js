export var newsElement = newsApp.component('newsElement', {
    bindings: {
        article: '<'
    },
    controller: [function(){
        var $ctrl = this;
    }],
    templateUrl: './newsElement.html'
});

