$(function() {
  $(".category").on("click", "")
  function render() {
    $.ajax({
      url: "http://localhost:3000/api/getcategorytitle",
      type: "get",
      success: function(info) {
        // console.log(info)
        $(".category").html(template("tpl", info));
      }
    });
    $(".category").on("click", "a", function() {
      var tid = $(this).data("id")
      // console.log(tid)
      var that = $(this)
      $.ajax({
        url: "http://localhost:3000/api/getcategory?titleid=" + tid,
        type: "get",
        success: function(info) {
          console.log(info)
          that.parent().find(".categorybbq").html(template("tpl2",info))
          that.parent().find(".categorybbq").toggleClass("xianyin")
          // $(".categorybbq").on("click","a",function(){
          //   var id = $(this).data("id")
          //   // console.log(id)
          //   var that= $(this)
          //   // console.log(id)
          //   $.ajax({
          //     url: " http://localhost:3000/api/getcategorybyid?categoryid=" + id,
          //     type: "get",
          //     success: function(info) {
          //       console.log(info)
          //     }
          //   })
          // })
        }
      })
      
    })
   
  }
  render()
});
