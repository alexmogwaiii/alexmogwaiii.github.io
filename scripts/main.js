'use strict';

$(document).ready(function () {

  $('.bg-content').hover(function () {
    $(this).children('div').stop(false, true).fadeIn(600);
    $(this).children('div').css({
      'visibility': 'visible'
    });
  }, function () {
    $(this).children('div').stop(false, true).fadeOut(600, function () {
      $(this).children('div').css({
        'visibility': 'hidden'
      });
    });
  });

  // ToDO red line
  function changeLine(className) {
    var countBlockTop = $("." + className).offset().top;
    var windowHeight = window.innerHeight;
    var show = true;

    $(window).scroll(function () {
      if (show && (countBlockTop < $(window).scrollTop() + windowHeight)) {
        show = false;
        $('.' + className).width(70);
      }
    });
  }

  $(function () {
    changeLine('red_line-small', $('.red_line-small'));
  });

  // !

  // ToDO accordeon
  $('.features-desc dt:first').children('i').addClass('active');
  $('.features-desc dd:not(:first)').hide();
  $('.features-desc dt').click(function () {
    $(this).next('dd').slideToggle('slow').siblings('dd:visible').slideUp('slow');
    $(this).children('i').toggleClass('active');
    $(this).siblings('dt').children('i').removeClass('active');
  });


  // !numbers
  function countup(className) {
    var countBlockTop = $("." + className).offset().top;
    var windowHeight = window.innerHeight;
    var show = true;

    $(window).scroll(function () {
      if (show && (countBlockTop < $(window).scrollTop() + windowHeight)) {
        show = false; 

        $('.' + className).spincrement({
          from: 1, 
          duration: 4000, 
        });
      }
    });
  }

  $(function () {
    countup("number1", $(".number1").text());
    countup("number2", $(".number2").text());
    countup("number3", $(".number3").text());
    countup("number4", $(".number4").text());
    countup("number5", $(".number5").text());
  });

  // ! slider

  var slideWidth = 1128; 
  var sliderTimer = 1; 

  $('.slidewrapper').width($('.slidewrapper').children().length * slideWidth);
  
  sliderTimer = setInterval(nextSlide, 6000);

  
  function nextSlide() {
    var currentSlide = parseInt($('.slidewrapper').data('current')); 
    currentSlide++; 
    if (currentSlide >= $('.slidewrapper').children().length)
    {
      setInterval(6000);
      currentSlide = 0;
    }
    
    $('.slidewrapper').animate({
      left: -currentSlide * slideWidth
    }, 1000).data('current', currentSlide);
  }

  $('.viewport').hover(function () {
    clearInterval(sliderTimer);
  }, function () {
    sliderTimer = setInterval(nextSlide, 6000);
  });

  $('.arrow-left').click(function () {
    var currentSlide = parseInt($('.slidewrapper').data('current'));
    currentSlide--;
    if (currentSlide < 0) {
      currentSlide = 0;
    } else {
      $('.slidewrapper').animate({
        left: -currentSlide * slideWidth
      }, 1000).data('current', currentSlide);
    }
  });

  $('.arrow-right').click(function () {
    var currentSlide = parseInt($('.slidewrapper').data('current'));
    currentSlide++;
    if (currentSlide > 4) {
      currentSlide = 4;
    } else {
      $('.slidewrapper').animate({
        left: -currentSlide * slideWidth
      }, 1000).data('current', currentSlide);
    }
  });


  // Fade in/out galerry

  $('.gallery-wrapper').hover(function () {
    $(this).children('div').stop(false, true).fadeIn(600);
  }, function () {
    $(this).children('div').stop(false, true).fadeOut(600);
  });


  // slider two

  let slides = document.querySelectorAll('#slides .slider-two__slide');
  let currentSlider = 0;
  let slideInterval = setInterval(nextSlider, 6000);

  function nextSlider() {
    slides[currentSlider].className = 'slider-two__slide';
    currentSlider = (currentSlider + 1) % slides.length;
    slides[currentSlider].className = 'slider-two__slide showing';
  }

  function prevSlider() {
    slides[currentSlider].className = 'slider-two__slide';
    currentSlider = currentSlider - 1;
    slides[currentSlider].className = 'slider-two__slide showing';
  }


  $('.slider-two__slide .arrow-right').click(function() {
    if(currentSlider != slides.length) {
      nextSlider();
    }
  });

  $('.slider-two__slide .arrow-left').click(function() {
    if(currentSlider != 0) {
      prevSlider();
    }
  });
});