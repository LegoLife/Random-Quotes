function tweet(a){window.open("https://twitter.com/intent/tweet?&text="+encodeURIComponent(a))}function RandomNumberGen(){return 1+Math.floor(25*Math.random())}function SetQuote(){var a=RandomNumberGen();$("#quote").html(""),$("#auth").html(""),$.getJSON("https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]="+a+"&callback=",function(a){var b=a[0].content,c=a[0].title;$("#quote").html(b),$("#auth").html("-"+c)})}$(document).ready(function(){SetQuote(),$("#b1").click(function(){SetQuote(),e.preventDefault()}),$("#tweeter").click(function(){var a=$("#quote").text()+$("#auth").text();tweet(a)})});