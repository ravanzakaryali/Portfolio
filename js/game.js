// Cursor Point

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

// Nav Bar

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




//-----------------------Start Make Bubble ----------------------------

let section = document.querySelector(".game-area");
let startbtn = document.querySelector(".start");
let widthGame = document.querySelector(".game-area").offsetWidth;
let heightGame = document.querySelector(".game-area").offsetHeight;
let score = document.getElementById("score");
let boomSound = new Audio("audio/boom.mp3");
let falseSound = new Audio("audio/nooboom.wav");
let countDown = new Audio("audio/countdown.wav");
let win = new Audio("audio/win.wav");
let gameover = new Audio("audio/gameover.mp3");

$(document).ready(function () {


  let time;

  //-----START CLICK-------

  let second = 60;
  $(".start").click(function () {
    time = second;
    Start();
    $(".start").css({
      transform: "translateY(70px)",
      opacity: "0"
    })
    count = 0;
    score.innerText = "Score: " + count;
    $("#time").removeClass("d-none");
    StartTimer();
  });
  //----------------------



  //------TIMER-------
  function Timer() {
    time--;
    $("#time").text("Time: " + time);
    //-----IF-TIME==0---------
    if (time == 0) {
      StopTimer();
      gameover.play();
      $(".start").css({
        transform: "translateY(0px)",
        opacity: "1"
      })
      $("#time").addClass("d-none");
      $('#game-over-alert').removeClass('d-none');
      $('.game-main').css({
        'filter': 'blur(14px)'
      });
      Stop();
      $(document).ready(function () {
        $(".game-area").empty();
      });
    }
    //----------------------


    //-------SECOND == 10------
    if (time < 10) {
      countDown.play();
    }
    //-------------------------
  }
  //-----------------








  //-------NORMAL_BUBBLE_MAKE---------------

  let count = 0;
  let scoreCount = 5
  let bubbleNumber = 250;
  let bubbleBlackNumber = 50;
  let BlackBubbleSecond = 900;
  function BubbleMake() {
    let bubble = document.createElement('div');
    bubble.classList.add("ball");
    bubble.style.backgroundColor = colorRandomGeneration();
    let a = numberRandomGeneration(30, bubbleNumber);
    bubble.style.width = a + "px";
    bubble.style.height = a + "px";
    bubble.style.top = numberRandomGeneration(0, (heightGame - a)) + "px";
    bubble.style.left = numberRandomGeneration(0, (widthGame - a)) + "px";
    section.appendChild(bubble);

    bubble.addEventListener("click", function () {
      this.style.transform = 'Scale(1.5)';
      setTimeout(()=>{
      this.remove();
      boomSound.play();
      },100)
      score.innerText = "Score: " + ++count;
      if (count == scoreCount) {
        win.play();
        countDown.load();
        $('#game-winner-alert').removeClass('d-none');
        $('.game-main').css({
          'filter': 'blur(14px)'
        });
        Stop();
        StopTimer();
        $(".start").css({
          transform: "translateY(0px)",
          opacity: "1"
        })
        $(document).ready(function () {
          $(".game-area").empty();
        });
      }
    });
  }
  //----------------------------------------

  //--------START_TIMER------

  let startTimer;
  function StartTimer() {
    startTimer = setInterval(Timer, 1000)
  }

  function StopTimer() {
    clearInterval(startTimer);
  }

  let startVar;
  let startBlackTimer;

  function Start() {
    startVar = setInterval(BubbleMake, 300);
    startBlackTimer = setInterval(BlackBubble, BlackBubbleSecond);
  }

  function Stop() {
    clearInterval(startVar);
    clearInterval(startBlackTimer);
  }
  //--------------------------


  //-------BLACK_BUBBLE_MAKE----------------



  function BlackBubble() {

    let a = numberRandomGeneration(40, bubbleBlackNumber);

    let blackBubble = document.createElement('div');

    blackBubble.classList.add("ball");

    $(blackBubble).css({
      backgroundColor: 'black',
      width: a + "px",
      height: a + "px",
      border: "0.1px solid white"

    });

    blackBubble.style.top = numberRandomGeneration(0, (heightGame - a)) + "px";
    blackBubble.style.left = numberRandomGeneration(0, (widthGame - a)) + "px";

    section.appendChild(blackBubble);

    blackBubble.addEventListener('click', function () {
      gameover.play();
      countDown.load();
      countDown.currentTime = 0;
      Stop();
      StopTimer();
      $('#game-over-alert').removeClass('d-none');
      $('.game-main').css({
        'filter': 'blur(14px)'
      });
      $(".start").css({
        transform: "translateY(0px)",
        opacity: "1"
      })
      $(document).ready(function () {
        $(".game-area").empty();
      });

    })

  }
  //---------------------------------------


  //-----------BACKGROUND_RESET-----------
  function BackReset() {
    $('.game-main').css({
      'filter': 'blur(0px)',
    });
    $('#game-over-alert').addClass('d-none');
    $('#game-winner-alert').addClass('d-none');
  }
  //--------------------------------------


  //--------------PLAY_AGAIN_YES_NO------------
  //___YES___
  $('.boll-yes').click(function () {
    BackReset()
  });
  //____NO___
  $('.boll-no').click(function () {
    BackReset()
  });

  //____NEXT____

  let level = 0;
  let back = 0;
  let key = 1;
  let keyg = 1;
  let shadow = 0;
  let lvlCont = 0;
  let levelPlus = 0;

  $('.next-level').click(function () {
    bubbleNumber = bubbleNumber - 12;
    bubbleBlackNumber = bubbleBlackNumber + 12;
    BlackBubbleSecond = BlackBubbleSecond - 20;
    BackReset();
    let levelStyle = document.querySelectorAll('.level-style');
    let dataScore = levelStyle[level++].getAttribute('data-score');
    scoreCount = dataScore;
    $(levelStyle[++back]).addClass('level-win');
    $(levelStyle[shadow++]).addClass('level-win-shadow');
    levelStyle[key++].firstElementChild.classList.remove('d-none');
    levelStyle[keyg++].previousElementSibling.classList.add('d-none');
    let levelContent = $('.level-content');
    $(levelContent[lvlCont++]).html(`<h3 class="level-title"> Səviyyə ${++levelPlus} </h3><h5>Xal: ${scoreCount}<br>Vaxt: ${time}</h5>`);
  })

  //----------------------------------------------
  $('.score-result').text(scoreCount);


  //--------COLOR_GENERATION--------------
  function colorRandomGeneration() {
    let symbols = "0123456789abcdef".split("");
    let color = "#";
    for (let i = 0; i < 8; i++) {
      color += symbols[numberRandomGeneration(0, 15)];
    }
    return color;
  }
  //--------------------------------------


  //------------NUMBER_GENERATION---
  function numberRandomGeneration(min, max) {
    return (min + Math.round(Math.random() * (max - min)));
  }
  //--------------------------------

});

