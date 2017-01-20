  var $hamburger = $(".hamburger");
  $hamburger.on("mouseover", function(e) {
    $hamburger.addClass("is-active");
  });
  $hamburger.on("mouseout", function(e) {
    $hamburger.removeClass("is-active");
  });

    $hamburger.on("click", function(e) {
      $('.content').animate({left: '47%'}, 400);
    });

    var $close = $('.close')
    $close.on('click', function(e){
      $('.content').animate({left: '100vw'}, 400);
    });
