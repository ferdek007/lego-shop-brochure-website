$(document).ready(() => {
  $("#toggle-nav").click(() => {
    $("#toggle-nav i").toggleClass("fa-xmark fa-bars");
    $("nav ul li").slideToggle("slow");
  });
});
