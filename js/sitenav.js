$(function() {
  $.ajax({
    url:" http://localhost:3000/api/getsitenav",
    type:"get",
    success:function(info){
      console.log(info)
      $(".article ul").html(template("tpl",info))

    }
  })

 
});
