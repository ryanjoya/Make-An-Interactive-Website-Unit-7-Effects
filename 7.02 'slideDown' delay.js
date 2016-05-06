var main = function() {
  $(".btn").click(function(event) {
    $(".container").hide().slideDown(800);
  });
};

$(document).ready(main);
