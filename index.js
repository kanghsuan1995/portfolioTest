const circleType = new CircleType(
  document.getElementById("rotated")).radius();

  $(window).scroll(function(){
    var offset = $(window).scrollTop();
    offset = offset * 0.5;

    $(".circularPlate").css({
      "-moz-transform": "rotate(" + offset + "deg)",
      "-webkit-transform": "rotate(" + offset + "deg)",
      "-o-transform": "rotate(" + offset + "deg)",
      "-ms-transform": "rotate(" + offset + "deg)",
      transform: "rotate(" + offset + "deg)"
    });
  });

$(document).click(function(){
  document.location.replace("mainpage.html");
})
