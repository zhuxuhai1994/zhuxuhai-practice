$(function() {
  $.ajax({
    url:"http://localhost:3000/api/getcoupon",
    type:'get',
    success:function(info){
      console.log(info)
      $(".article ul").html(template("tpl",info))
      // couponid
    }
    
  })

  
});
