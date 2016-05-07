var main = function() {
  $(".btn").click(function(event) {
    $(".container").show().slideUp(1100);
  });
};

$(document).ready(main);
