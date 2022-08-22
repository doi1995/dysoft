$(document).ready(function () {
  var s_round = ".s_round";
  var s_round_2 = ".s_round_2";
  var s_round_3 = ".s_round_3";

  $(s_round).hover(function () {
    $(".b_round").toggleClass("b_round_hover");
    return false;
  });

  $(s_round_2).hover(function () {
    $(".b_round_2").toggleClass("b_round_hover");
    return false;
  });

  $(s_round_3).hover(function () {
    $(".b_round_3").toggleClass("b_round_hover");
    return false;
  });

  $(s_round).click(function () {
    $(".flip_box").toggleClass("flipped");
    $(this).addClass("s_round_click");
    $(".s_arrow").toggleClass("s_arrow_rotate");
    $(".b_round").toggleClass("b_round_back_hover");
    return false;
  });

  $(s_round_2).click(function () {
    $(".flip_box_2").toggleClass("flipped");
    $(this).addClass("s_round_click");
    $(".s_arrow_2").toggleClass("s_arrow_rotate");
    $(".b_round_2").toggleClass("b_round_back_hover");
    return false;
  });

  $(s_round_3).click(function () {
    $(".flip_box_3").toggleClass("flipped");
    $(this).addClass("s_round_click");
    $(".s_arrow_3").toggleClass("s_arrow_rotate");
    $(".b_round_3").toggleClass("b_round_back_hover");
    return false;
  });

  $(s_round).on("transitionend", function () {
    $(this).removeClass("s_round_click");
    $(this).addClass("s_round_back");
    return false;
  });

  $(s_round_2).on("transitionend", function () {
    $(this).removeClass("s_round_click");
    $(this).addClass("s_round_back");
    return false;
  });

  $(s_round_3).on("transitionend", function () {
    $(this).removeClass("s_round_click");
    $(this).addClass("s_round_back");
    return false;
  });
});
