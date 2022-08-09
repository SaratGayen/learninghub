  // function for blink
  function textblink() {
    $(".ptag-div").fadeOut(1000);
    $(".ptag-div").fadeIn(1000);
  }
  setInterval(textblink, 1000);

  // cards fadein animation

  $(document).ready(function () {
      $("#card-1").fadeIn(1000);
      $("#card-3").fadeIn(2000);
      $("#card-5").fadeIn(3000);
      $("#card-2").fadeIn(1000);
      $("#card-4").fadeIn(2000);
      $("#card-6").fadeIn(3000);
  });