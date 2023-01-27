// 首页使用的js

// 引入公共css
import "../common/reset.css";
import "./index.less";
import "@/assets/global.less";

// 引入页面公共部分的js
import "../common/header";
import "../common/footer";


$("a.read").on("click", function () {
    const id = $(this).data().id;
    const func = $(this).data().func;
    $(".popup-view .text").html("");
    if($(".popup-view .text").html()){
      $(".popup-view .text").html("");
    }
    $.ajax({
      type: "POST",
      dataType: "json",
      url: `/api.php/content/${id}`,
      success:function(rs){
          const content = rs.data.content;
          $(".popup-view .text").html(content);
          $(".popup-container").fadeIn();
      }
    });
  });
  
  $("a.close").on("click", function () {
    $(".popup-container").fadeOut();
  });
  