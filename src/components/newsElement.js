var newsElement = {
    bindings: {
        article: '<'
    },
    controller: [function(){
        var $ctrl = this;
    }],
    template: `
    <hr>
    <table>
        <caption>
            <a href="{{$ctrl.article.url}}" target="_blank">
                <h2>{{$ctrl.article.title}}</h2>
            </a>
        </caption>
        <tr>
            <td>
                <img src="{{$ctrl.article.urlToImage}}" width="500"></img>
            </td>
            <td>
                <p><big>{{$ctrl.article.description}}</big></p>
            </td>
        </tr>
    </table>
    `
};

export default newsElement;
