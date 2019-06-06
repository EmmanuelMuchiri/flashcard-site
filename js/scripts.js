$(document).ready(function() {
  $("li").click(function() {
    $("#clickme").fadeIn();
    $("#paraOne").fadeIn();
  });
  $(".takeMeBack").click(function() {
    $("#clickme").toggle();
    $("#paraOne").toggle();
  });
  $("li").click(function() {
    $("#clickme").toggle();
    $("#paraTwo").toggle();
  });
  $(".takeMeBack").click(function() {
    $("#clickme").toggle();
    $("#paraTwo").toggle();
  });
});
