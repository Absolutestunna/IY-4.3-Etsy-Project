var $ = require("jquery");
var handlebars = require('handlebars');

var source   = $("#image-template").html();
var template = handlebars.compile(source);

var context = {
  img:"http://unsplash.it/500/200"
};
var html = template(context);
$(".img1").html(html);
