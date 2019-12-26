$(function(){
  var href = location.search.replace(/\?/gi, "");
  var hrefTow = href.split("=");
  var productid = hrefTow[1];
  console.log(productid)
  function rennder(){
    console.log("成功调入函数了")
    $.ajax({
      // http://localhost:3000/api/getmoneyctrlproduct?productid=1
      url:"http://localhost:3000/api/getmoneyctrlproduct",
      type:"get",
      data:{
        productid:productid
      },
      success:function(info){
        console.log(info)
       
        $("article").html(template("tpl",info))
        var inpo = {
          arr:info.result.productCity
        }
        $(".moneyproduct-area ul").html(template("tpl2",inpo))
        // $(".fenyeqi").html(template("tpl2", info));
      }
    })
  }
  rennder()
})
