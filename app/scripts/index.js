var $ = require("jquery");
var handlebars = require('handlebars');

    var image;
    var price;
    var title;
    var currency_code;
    var manufacturer;
    var cat;
    var q = "tacos";
    var url_key = "https://api.etsy.com/v2/listings/active.js?api_key=cdwxq4soa7q4zuavbtynj8wx&keywords=";
    var url;

    $( ".search" ).on("click", function() {
      $(".category-list").empty();

      q = $("#search").val();
      startProgram();

    });

    startProgram();
    function startProgram(){

      url = url_key+q+"&includes=Images,Shop";
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
          arrayData.forEach(function(value, index, thisArray){
            var context = {
              // cat: thisArray[index].category_path[0],
              image: thisArray[index].Images[0].url_fullxfull,
              price: thisArray[index].price,
              title: thisArray[index].title,
              currency_code: thisArray[index].currency_code,
              manufacturer: thisArray[index].Shop.shop_name,
            }
            console.log(context)

            $(".category-list").append(template(context));
          });
      }
      fetchJSONP(url, logData);
}
