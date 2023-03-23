$('.ask').on('click', function () {
    
    $('.ask').not(this).removeClass('active').next().slideUp(500)
    $(this).toggleClass('active').next().slideToggle(500)

})



$(window).on('scroll', function () {
  
    if ($(window).scrollTop() >= 300) {
      $('.js-btn-top').addClass('show')
    } else {
      $('.js-btn-top').removeClass('show')
    }
    
  })
  
  $('.js-btn-top').on('click', function () {
    
    $('html').animate({
      
      scrollTop: 0
      
    }, 1500)
    
  })


  $('.read-more').on('click', function () {
  
    $('.text-hidden').toggleClass('hidden')
    
    if ($('.text-hidden').hasClass('hidden')) {
      $('.read-more').html('Read More')
    } else {
      $('.read-more').html('Hidden')
    }
    
  })