$(function(){
  // console.log(productid)
  $.ajax({
    url:"http://localhost:3000/api/getmoneyctrl",
    type:"get",
    success:function(info){
      console.log(info)
      $(".recommen ul").html(template("tpl",info))
      $(".fenyeqi").html(template("tpl2", info));
    }
  })
  // function rennder(){
  //   $.ajax({
  //     url:"http://localhost:3000/api/getmoneyctrlproduct",
  //     type:"get",
  //     data:{
  //       productid:id
  //     },
  //     success:function(info){
  //       console.log(info)
  //       $(".recommen ul").html(template("tpl",info))
  //       $(".fenyeqi").html(template("tpl2", info));
  //     }
  //   })
  // }

  $(".fenyeqi").on("click", ".goye", function() {
    var yemaMin = $(this).data("min");
    pageid--;
    if (pageid <= yemaMin) {
      pageid = yemaMin;
    }
    render();
    $(".yema").text("123");
    // console.log(pageid)
  });
  $(".fenyeqi").on("click", ".backye", function() {
    var yemaMax = Math.ceil($(this).data("max"));
    pageid++;
    if (pageid >= yemaMax) {
      pageid = yemaMax;
    }
    render();
    console.log(pageid);
  });
  // $(".fenyeqi").on("change","select",function(){
  //   console.log(3)
  // })
})