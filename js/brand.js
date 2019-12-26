$(function(){
  var href = location.search.replace(/\?/gi, "");
  var hrefTow = href.split("&");
  var brandtitleid = hrefTow[0].replace("brandtitleid=", "");
  var category = decodeURI(hrefTow[1].replace("category=", ""));
  var brandTitle =  decodeURI(hrefTow[2].replace("brandTitle=", ""));
    $.ajax({
      url: "http://localhost:3000/api/getbrand",
      type: "get",
      data:{
        brandtitleid:brandtitleid
      },
      success: function(info) {
        console.log(info)
        $(".category").html(template("tpl", info));
        $(".yyqq").text(brandTitle)
      }
  })
})