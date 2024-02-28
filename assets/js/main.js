$(document).ready(function () {
  $(".carousel").carousel({
    interval: 5000,
  });

  $(".nav-link").click(function () {
    //console.log("Clicked");
    $(".nav-link.active").removeClass("active");
    $(this).addClass("active");
  });

  const glide1 = new Glide(".glide", {
    type: "carousel",
    perView: 2,
    focusAt: "center",
    gap: 20,
    autoplay: 5000,
    breakpoints: {
      800: {
        perView: 1,
      },
    },
  }).mount();

  const glide2 = new Glide(".glide2", {
    type: "carousel",
    perView: 4,
    startAt: 1,
    gap: 20,
    autoplay: 1000,
    breakpoints: {
      800: {
        perView: 3,
      },
      576: {
        perView: 2,
      },
    },
  }).mount();
});
