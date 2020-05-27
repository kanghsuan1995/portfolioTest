$("#profile-pic").mouseover(function() {
  $("#profile-pic").attr("src", "didi.jpg");
  $(".talk").text("Oh hi, I'm Didi.")
})

$("#profile-pic").mouseleave(function() {
  $(this).attr("src", "profilePic.jpg");
  $(".talk").text("Hit me up!");
})

var toTop = document.getElementById("to-top");

toTop.addEventListener("click", function() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
})
