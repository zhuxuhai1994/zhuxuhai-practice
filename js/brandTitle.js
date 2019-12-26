$(function() {
    $.ajax({
      url: "http://localhost:3000/api/getbrandtitle",
      type: "get",
      success: function(info) {
        console.log(info)
        $(".category").html(template("tpl", info));
      }
    });
});
