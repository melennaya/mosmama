$(document).ready(function(){$(".title").each(function(o,e){var t,a,d,l=$(e);t=l.html().split(/\s+/),a=t.pop(),d=t.join(" "),l.html([d,' <span class="title--word-color">',a,"</span>"].join(""))}),$(window).scroll(function(){var o=$(document).scrollTop();o>0?$(".header__top").addClass("header__top--fixed"):$(".header__top").removeClass("header__top--fixed")})});