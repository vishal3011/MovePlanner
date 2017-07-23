
function loadData() {

    var $body = $('body');
    var $wikiElem = $('#wikipedia-links');
    var $nytHeaderElem = $('#nytimes-header');
    var $nytElem = $('#nytimes-articles');
    var $greeting = $('#greeting');

    // clear out old data before new request
    $wikiElem.text("");
    $nytElem.text("");

    // load streetview
    var $streetStr = $('#street').val()
    var $cityStr = $('#city').val()
    var $value = $streetStr + "," + $cityStr ;

    $greeting.text('So, you want to live at' + $value + '?');
    // console.log($value);
    var $address = "http://maps.googleapis.com/maps/api/streetview?size=600x300&location="+ $value;
    // console.log($address)
    // console.log($streetStr);
    // console.log($cityStr);
    var $bgimg = "\"bgimg\""
    var $total = '\'<img class =' + $bgimg+" src=" + "\"" + $address + "\"" +">\'";
    // console.log($total);
    $body.append($total);

    var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
    url += '?' + cityStr + '&sort=newest&api-key=033c2bb0023b43b0ab129c94e222e3e1';

    $.getJSON(url, function(data){
        $nytHeaderElem.text('New York Times Articles About ' + cityStr);

        articles = data.response.docs;
        for(var i = 0; i<articles.length; i++) {
            var article = articles[i];
            $nytElem.append('<li class = "article">' + '<a href="'+ article.web_url+'">'+article.headline.main+'</a>'+ '<p>' + article.snippet + '</p>' + '</li>');
        };
    })

// var resp = $.ajax({
//   url: url,
//   method: 'GET',
// }).done(function(result) {
//   console.log(result);
// }).fail(function(err) {
//   throw err;
// });

// console.log(resp);



    // YOUR CODE GOES HERE!

    return false;
};

$('#form-container').submit(loadData);
