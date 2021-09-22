"use strict"

//------------HEADER_BACKGROUND_SCROLL----------

document.addEventListener('scroll', function () {
  let windowposition = window.scrollY > 0;
  this.getElementById('header').classList.toggle("header-black", windowposition);
})

//----TOP UP----

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
  b--;
  if (b == -width) {
    b = width;
  }
  text1.style.transform = `translate3d(${b}px, 0, 0)`;
}, 1);
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

$(document).ready(function () {
  $(document).scroll(function () {
    $('.menu-btn').removeClass("open");
    $('.navbar-mobile').slideUp("slow");
  });
});

//---------HEADER_STYLE_TOP-BUTTOM----------------


let lastScrollTop = 0;
let navbar = document.querySelector('.header-style');

window.addEventListener('scroll', function () {
  let WindowScrollY = window.scrollY;
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  if (scrollTop > lastScrollTop) {
    navbar.style.top = "-80px";

  } else if (WindowScrollY == 0) {
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
    if ($(`.name`).val().trim() == '') {
      $('.warning-name').addClass('d-block');
      $('.warning-name').removeClass('d-none');

    } else {
      $('.warning-name').addClass('d-none');
      if ($(`.email`).val().trim() == '') {
        $('.warning-email').addClass('d-block');
        $('.warning-email').removeClass('d-none');

      } else {
        $('.warning-email').addClass('d-none');
        if ($(`.subject`).val().trim() == '') {
          $('.warning-subject').addClass('d-block');
          $('.warning-subject').removeClass('d-none');

        } else {
          $('.warning-subject').addClass('d-none');
          if ($(`.message`).val().trim() == '') {
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

  $('.top-up').click(function () {
    $("html, body").animate({ scrollTop: 0 }, "fast");
  });
  //Loader
  function Loader() {
  }
  window.addEventListener('load', () => {
    $('.loader-container').addClass('d-none');
  })

});









