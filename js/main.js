"use strict"

//-----------FACE-------------

$(document).mousemove(function (event) {
  var eye = $(".eye");
  var x = (eye.offset().left) + (eye.width() / 2);
  var y = (eye.offset().top) + (eye.height() / 2);
  var rad = Math.atan2(event.pageX - x, event.pageY - y);
  var rot = (rad * (180 / Math.PI) * -1) + 270;
  eye.css({
    '-webkit-transform': 'rotate(' + rot + 'deg)',
    '-moz-transform': 'rotate(' + rot + 'deg)',
    '-ms-transform': 'rotate(' + rot + 'deg)',
    'transform': 'rotate(' + rot + 'deg)'
  });
});


//------------HEADER_BACKGROUND_SCROLL----------

document.addEventListener('scroll', function () {
  let windowposition = window.scrollY > 0;
  this.getElementById('header').classList.toggle("header-black", windowposition);
})


//--------------WALVE--------------------------
let walve1 = document.getElementById('walve1');
let walve2 = document.getElementById('walve2');
let walve3 = document.getElementById('walve3');
let walve4 = document.getElementById('walve4');

window.addEventListener('scroll', function () {
  let scrolled = window.scrollY;

  wave1.style.backgroundPositionX = 400 + scrolled * 4 + "px"
  wave2.style.backgroundPositionX = 300 + scrolled * -4 + "px"
  wave3.style.backgroundPositionX = 200 + scrolled * 2 + "px"
  wave4.style.backgroundPositionX = 100 + scrolled * -2 + "px"
})

//-----------ANIMATE_TEXT------

let width = window.innerWidth;

let b = 1;
let a = setInterval(function () {
  let text1 = document.querySelector(".text1");
  b--
  if (b == -width) {
    b = width;
  }
  text1.style.transform = `translate3d(${b}px, 0, 0)`;
}, 2);
//--------NAV_BAR_MOBILE----------------

$(document).ready(function () {
  $('.menu-btn').click(function () {
    $('.navbar-mobile').slideToggle('slow');
    $('.menu-btn').toggleClass("open");
  });
});

$(document).ready(function () {
  $('.nav-li').click(function () {
    $('.navbar-mobile').slideUp('slow');
    $('.menu-btn').toggleClass("open");
  });
});

//---------HEADER_STYLE_TOP-BUTTOM----------------


let lastScrollTop = 0;
let navbar = document.querySelector('.header-style');

window.addEventListener('scroll', function () {
  let a = window.scrollY;
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  if (scrollTop > lastScrollTop) {
    navbar.style.top = "-80px";

  } else if (a == 0) {
    navbar.style.top = "0px";
  }
  else {
    navbar.style.top = "0px";
  }
  lastScrollTop = scrollTop;
})

//-----------------SEND_EMAIL-------------------
$(document).ready(function () {
  function sendMail() {
    var tempParams = {
      from_name: document.getElementById('name').value,
      to_name: document.getElementById('subject').value,
      message: document.getElementById('message').value,
      from_mail: document.getElementById('email').value,

    };
    if ($(`.name`).val() == '') {
      $('.warning-name').addClass('d-block');
      $('.warning-name').removeClass('d-none');

    } else {
      $('.warning-name').addClass('d-none');
      if ($(`.email`).val() == '') {
        $('.warning-email').addClass('d-block');
        $('.warning-email').removeClass('d-none');

      } else {
        $('.warning-email').addClass('d-none');
        if ($(`.subject`).val() == '') {
          $('.warning-subject').addClass('d-block');
          $('.warning-subject').removeClass('d-none');

        } else {
          $('.warning-subject').addClass('d-none');
          if ($(`.message`).val() == '') {
            $('.warning-message').addClass('d-block');
            $('.warning-message').removeClass('d-none');

          } else {
            $('.warning-message').addClass('d-none');
            let warn = /.+@.+\.+./;
            if (!warn.test($('.email').val())) {
              $(`.warning-write`).addClass('d-block');
              $(`.warning-write`).removeClass('d-none');
            } else {
              $(`.warning-write`).addClass('d-none');
              $('.lg-cont').removeClass('d-none');
              $("main").css({
                "filter": "blur(18px)",
                "transition": "0.1s"
              });

              emailjs.send('service_22r4s68', 'template_zz9j22m', tempParams)
                .then(function (res) {
                  $('.lg-cont').addClass('d-none');
                  $('.alert-footer').removeClass('d-none');
                }, function (error) {
                  $('.lg-cont').addClass('d-none');
                  alert("Bir problem yarandı. 🤔 Zəhmət olmasa daha sonra cəhd edin. Anlayışınz üçün təşəkkürlər. 🙂");
                  $("main").css({
                    "filter": "blur(0px)"
                  });
                });
            }
          }
        }
      }
    }
  }

  //---------ENTER_BUTTON------------

  $(document).keydown(function (e) {
    if (e.which == 13) {
      $('#button').click();
    }
  });
  $("#button").click(function () {
    sendMail();
  })

  //---------VALUE_REMOVE-----------

  $('.alert-oky').click(function () {
    $("main").css({
      "filter": "blur(0px)"
    });
    $('.alert-footer').addClass('d-none');
    $('.name').val("");
    $('.email').val("");
    $('.subject').val("");
    $('.message').val("");

  })


});

//--------------CURSOR_STYLE-------------------

$(document).ready(function () {
  $(document).mousemove(function (e) {
    // values: e.clientX, e.clientY, e.pageX, e.pageY
    let x = e.pageX;
    let y = e.pageY;
    $('.cursor').css({ "left": `${x}px`, "top": `${y}px` });
    $('p , li , h1 , h2 , h3 , span , a , img.flag').mousemove(function () {
      $('.cursor').css({ "width": "40px", "height": "40px" });
    })
    $('p , li , h1 , h2 , h3 , span , a , img.flag').mouseout(function () {
      $('.cursor').css({ "width": "20px", "height": "20px" });
    })

  });
  $(document).click(function () {
    $('.cursor').addClass('click-style');
    setTimeout(() => {
      $('.cursor').removeClass('click-style');
    }, 200);
  })
  $('.top-up').click(function () {
    $("html, body").animate({ scrollTop: 0 }, "slow");
  });

});









