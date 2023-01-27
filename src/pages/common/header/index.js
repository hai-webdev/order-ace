// 头部的js代码
import "./index.less";
import $ from "jquery";

$(".menu").on("click", function(){
  $(this).toggleClass("active");
  $(".m-head .body").slideToggle();
})

$(document).on("scroll", function(){
  const scrollTop = $(this).scrollTop();
  const headHeight = $("header").outerHeight();
  if(scrollTop >= headHeight){
    $("header").addClass("on");
  } else {
    $("header").removeClass("on");
  }
})