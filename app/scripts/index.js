var $ = require("jquery");
var handlebars = require('handlebars');

var source   = $("#entry-template").html();
var template = handlebars.compile(source);

var context = {title: "My New Post", body: "This is my first post!"};
var html    = template(context);
