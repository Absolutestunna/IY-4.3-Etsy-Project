var $ = require("jquery");
var handlebars = require('handlebars');


var url = "https://api.etsy.com/v2/listings/active.js?api_key=cdwxq4soa7q4zuavbtynj8wx&keywords=soccer&includes=Images,Shop";

function fetchJSONP(url, callback) {
    var callbackName = 'jsonp_callback_' + Math.round(100000 * Math.random());
    var script = document.createElement('script');

    window[callbackName] = function(data) {
        delete window[callbackName];
        document.body.removeChild(script);
        callback(data);
    };

    script.src = url + (url.indexOf('?') >= 0 ? '&' : '?') + 'callback=' + callbackName;
    document.body.appendChild(script);
}
var source   = $("#category-template").html();
var template = handlebars.compile(source);

function logData(data){
    var arrayData = data.results;
    console.log(arrayData)
    arrayData.forEach(function(value, index, thisArray){
      var context = {
        image: thisArray[index].Images[0].url_fullxfull,
        price: thisArray[index].price,
        title: thisArray[index].title,
        currency_code: thisArray[index].currency_code,
        manufacturer: thisArray[index].Shop.shop_name,
      }
      $(".main-body").append(template(context));
    });
}
fetchJSONP(url, logData);
