$(function(){
  
  $.ajax({
    url:'http://localhost:3000/api/getinlanddiscount',
    type:'get',
    success:function(info){
      console.log(info)
      $(".inlanddiscount ul").html(template("tpl",info))
    }
  })

})