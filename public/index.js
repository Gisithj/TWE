$(window).on("load", function () {

  $(".navbar").addClass("hidden");

  setTimeout(function () {
    $(".navbar").slideDown("slow");
  }, 50);

  getCurrentLinkFrom($(".navbar-nav a"));
});

function getCurrentLinkFrom(links) {
  var curPage = document.URL;
  curPage = curPage.substr(curPage.lastIndexOf("/"));

  links.each(function () {
    var linkPage = $(this).attr("href");
    linkPage = linkPage.substr(linkPage.lastIndexOf("/"));

    if (curPage == linkPage) {
      $(this).addClass("active");
      return $(this);
    }
  });
}

$(".album-carousel").slick({
  
  slidesToShow: 4,
  slidesToScroll: 2,
  autoplay: true,
  autoplaySpeed: 4000,
  infinite: true,
  centerPadding: "20px",
  nextArrow:
    '<button class="carousel-control-next" type="button" data-bs-target="#testimonialCarousel"> <span class="carousel-control-next-icon" aria-hidden="true"></span> <span class="visually-hidden">Next</span></button>',
  prevArrow:
    '<button  class="carousel-control-prev"  type="button"  data-bs-target="#testimonialCarousel"  data-bs-slide="prev">  <span class="carousel-control-prev-icon" aria-hidden="true"></span>  <span class="visually-hidden">Previous</span></button>',
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});


$('.testimonial-carousel').slick({
  centerMode: true,
  centerPadding: '5px',
  slidesToShow: 3,
  adaptiveheight:false,
  autoplay: true,
  autoplaySpeed: 4000,
  infinite: true,
  nextArrow:
  '<button class="carousel-control-next" type="button" data-bs-target="#testimonialCarousel"> <span class="carousel-control-next-icon" aria-hidden="true"></span> <span class="visually-hidden">Next</span></button>',
prevArrow:
  '<button  class="carousel-control-prev"  type="button"  data-bs-target="#testimonialCarousel"  data-bs-slide="prev">  <span class="carousel-control-prev-icon" aria-hidden="true"></span>  <span class="visually-hidden">Previous</span></button>',
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
});

function animateFrom(elem) {
  // direction = direction || 1;
  var x = 0;
  var y = 0;
  // y = direction * 100;
  if (elem.classList.contains("fadein-up")) {
    x = 0;
    y = 150;
  } else if (elem.classList.contains("fadein-LTR")) {
    x = -200;
    y = 0;
  } else if (elem.classList.contains("fadein-up-text")) {
    x = 0;
    y = 250;
  }
  elem.style.transform = "translate(" + x + "px, " + y + "px)";
  elem.style.opacity = "0";

  if (elem.matches(".fade-in.fadein-LTR")) {
    gsap.to(elem, {
      duration: 2.5,
      x: 0,
      y: 0,
      autoAlpha: 1,
      ease: "power1",

      // overwrite: "auto"
    });
  } else if (elem.matches(".fade-in.fadein-up-text")) {
    gsap.to(elem, {
      duration: 2.5,
      x: 0,
      y: 0,
      autoAlpha: 1,
      ease: "expo",

      // overwrite: "auto"
    });
  } else {
    gsap.to(elem, {
      duration: 2.5,
      x: 0,
      y: 0,
      autoAlpha: 1,
      ease: "expo",
      // overwrite: "auto"
    });
  }
}

function hide(elem) {
  gsap.set(elem, { autoAlpha: 0 });
}

document.addEventListener("DOMContentLoaded", function () {
  gsap.registerPlugin(ScrollTrigger);

  gsap.utils.toArray(".fade-in").forEach(function (elem) {
    hide(elem); // assure that the element is hidden when scrolled into view

    ScrollTrigger.create({
      trigger: elem,
      markers: true,
      start: "top 80% ",
      end: "+=100",
      once: true,
      onEnter: function () {
        animateFrom(elem);
      },
      // onEnterBack: function() { animateFrom(elem, -1) },
      // onLeave: function() { hide(elem) } // assure that the element is hidden when scrolled into view
    });
  });
});
