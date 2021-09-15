//scroll up

document.getElementById("button-up").addEventListener("click", scrollUp);

function scrollUp() {
  var currentScroll = document.documentElement.scrollTop;

  if (currentScroll > 0) {
    window.requestAnimationFrame(scrollUp);
    window.scrollTo(0, currentScroll - (currentScroll / 10));


  }
}






















/*
$(document).ready(function () {

  $('.fas').click(function () {
    $('body, html').animate({
      scrollTop: '0px'


    }, 300);


  });



}); */