var main = function() {
  $(".btn").click(function(event) {
    $(".container").show().fadeOut(1000);
  });
};

$(document).ready(main);
