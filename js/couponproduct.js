$(function() {
  var href = location.search.replace(/\?/gi, "");
  var hrefTow = href.split("&")
  var couponid = hrefTow[0].replace("couponid=", "");
  var name = decodeURI(hrefTow[1].replace("name=", ""));
  // console.log(hrefTow,couponid)
  $.ajax({
    url:"http://localhost:3000/api/getcouponproduct",
    type:'get',
    data:{
      couponid:couponid
    },
    success:function(info){
      console.log(info)
      $(".article ul").html(template("tpl",info))
      // couponid
    }
    
  })

  
});
