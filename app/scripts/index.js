var $ = require("jquery");
var handlebars = require('handlebars');

var source   = $("#image-template").html();
var template = handlebars.compile(source);

var context = {
  img:"https://unsplash.it/170/135"
};
var html = template(context);
$(".img1").html(html);
$(".img2").html(html);
