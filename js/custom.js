$('.navbar-nav .nav-item').click(function () {
    $('.navbar-nav .nav-item').removeClass('active');
    $(this).addClass('active');
})

var wow = new WOW();
  wow.init();
