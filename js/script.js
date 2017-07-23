
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
    console.log($value);
    var $address = "http://maps.googleapis.com/maps/api/streetview?size=600x300&location="+ $value;
    console.log($address)
    console.log($streetStr);
    console.log($cityStr);
    var $bgimg = "\"bgimg\""
    var $total = '\'<img class =' + $bgimg+" src=" + "\"" + $address + "\"" +">\'";
    console.log($total);
    $body.append($total);

    // YOUR CODE GOES HERE!

    return false;
};

$('#form-container').submit(loadData);
