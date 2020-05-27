$(".phone").mouseover(function(){
  $(".phone").text("+1 312-647-1222   +1 312-647-1222   +1 312-647-1222 +1 312-647-1222 +1 312-647-1222 +1 312-647-1222 +1 312-647-1222 +1 312-647-1222 +1 312-647-1222");
  $(".phone").addClass("track");
});

$(".phone").mouseleave(function(){
  $(this).text("Phone");
  $(this).removeClass("track");
})

$(".mail").mouseover(function(){
  $(".mail").text("kanghsuan1995@gmail.com kanghsuan1995@gmail.com kanghsuan1995@gmail.com kanghsuan1995@gmail.com kanghsuan1995@gmail.com kanghsuan1995@gmail.com kanghsuan1995@gmail.com");
  $(".mail").addClass("track");
});

$(".mail").mouseleave(function(){
  $(this).text("Mail");
  $(this).removeClass("track");
})

$(".address").mouseover(function(){
  $(".address").text("/ New York / New Jersey / New York / New Jersey / New York / New Jersey / New York / New Jersey / New York / New Jersey /");
  $(".address").addClass("track");
});

$(".address").mouseleave(function(){
  $(this).text("Address");
  $(this).removeClass("track");
})
