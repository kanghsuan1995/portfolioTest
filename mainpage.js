var x, y;
var randomColor = Math.floor(Math.random() * 6);
var colorList = ["#FFFF00", "#FF0000", "#099FFF", "#9D00FF", "#FF00CC", "#00FF00"];
function handleMouse(e) {
  if (x && y) {
    window.scrollBy(e.clientX - x, 0);
  }
  x = e.clientX;
  y = e.clientY;
}
document.onmousemove = handleMouse;

setTimeout(function(){
  $(".start-animation").css("display","none")
},800);

$(".real-item-" + 1).mouseover(function() {
  $(".real-item-" + 1).addClass("text-animation");
})
$(".real-item-" + 1).mouseleave(function() {
  $(".real-item-" + 1).removeClass("text-animation");
})

$(".real-item-" + 2).mouseover(function() {
  $(".real-item-" + 2).addClass("text-animation");
})
$(".real-item-" + 2).mouseleave(function() {
  $(".real-item-" + 2).removeClass("text-animation");
})

$(".real-item-" + 3).mouseover(function() {
  $(".real-item-" + 3).addClass("text-animation");
})
$(".real-item-" + 3).mouseleave(function() {
  $(".real-item-" + 3).removeClass("text-animation");
})

$(".scrolling-title").mouseover(function() {
  $(".scrolling-title").addClass("text-animation");
})
$(".scrolling-title").mouseleave(function() {
  $(".scrolling-title").removeClass("text-animation");
})

$(".scrolling-title").click(function() {
  document.location.replace("index.html");
})

$(".real-item-1").click(function() {
  document.location.replace("about.html");
})

$(".real-item-2").click(function() {
  document.location.replace("work.html");
})

$(".real-item-3").click(function() {
  document.location.replace("contact.html");
})
