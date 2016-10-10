  var $hamburger = $(".hamburger");
  $hamburger.on("mouseover", function(e) {
    $hamburger.addClass("is-active");
  });
  $hamburger.on("mouseout", function(e) {
    $hamburger.removeClass("is-active");
  });

    $hamburger.on("click", function(e) {
      $('.content').animate({left: '-30%'}, 600);
      $('h1').animate({left: '-23%'},600);
      $('.menu-btn').animate({right: '46%'},600)
    });
