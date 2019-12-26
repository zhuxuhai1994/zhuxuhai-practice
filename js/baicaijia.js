$(function() {
  let id ;
  $.ajax({
    url: "http://localhost:3000/api/getbaicaijiatitle",
    type: "get",
    success: function(info) {
      // console.log(info);
      $(".search-bar ul").html(template("tpl", info));
      var liWidth = $(".search-bar ul li").outerWidth(true);
      var ulWidth= 0;
      for(var i = 0 ;i<info.result.length;i++){
        ulWidth +=$(".search-bar ul li").eq(i).outerWidth(true);
      }
      $(".search-bar ul").css("width", ulWidth);
      id = $(".search-bar ul li").eq(0).data("id")
      console.log(id)
      redner()
    }
  })
  function redner(){
    $.ajax({
      url:"http://localhost:3000/api/getbaicaijiaproduct?",
      type:"get",
      data:{
        titleid:id
      },
      success:function(info){
        console.log(info)
        $(".article ul").html(template("tplt", info))
        var tt = $(".article .baicaijia-jindu em").text().split("%")[0]
        console.log(tt)
        $(".article .baicaijia-jindu p").css("width",tt+'%')
      }
    })
  }
  $(".search-bar ul").on('click','li',function(){
    id  = $(this).data("id")
    redner()
  })

  
});
