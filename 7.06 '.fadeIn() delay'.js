var main = function() {
  $(".btn").click(function(event) {
    $(".container").hide().fadeIn(700);
  });
};

$(document).ready(main);
