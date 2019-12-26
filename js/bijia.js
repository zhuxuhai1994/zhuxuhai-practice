$(function(){
  var href = location.search.replace(/\?/gi, "");
  var hrefTow = href.split("&");
  var productid = hrefTow[0].replace("productId=", "");
  var category = decodeURI(hrefTow[1].replace("category=", ""));
  function render(){
    $.ajax({
      url:"http://localhost:3000/api/getproduct",
      type:"get",
      data:{
        productid:productid,
      },
      success:function(info){
        console.log(info)
        $(".category").html(template("tpl",info))
        var nameSx = info.result.productName.split(" ")[0]
        $(".twoshaoxuan").text(nameSx)
        $(".yyqq").text(category)
        window.productid = info.result.productid
        rennder()
      }
    })
  }
  render()
  function rennder(){
    $.ajax({
      url:"http://localhost:3000/api/getproductcom",
      type:"get",
      data:{
        productid:productid
      },
      success:function(info){
        console.log(info)
        $(".category-bottom").html(template("tpl2",info))
      }
    })
  }


})