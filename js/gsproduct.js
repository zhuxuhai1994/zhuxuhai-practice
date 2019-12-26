$(function() {
  let id;
  var arr = ["京东", "华北", "全部价格"];
  $(".search-bar ul").html(template("tpl", { arr: arr }));
  // var text = $(".search-bar li:last").text()
  // console.log(text)
  $(".search-bar ul li").on("click", function() {
    var cvid = $(this).data("id");
    // console.log(cvid);
    if (cvid == 0) {
      $.ajax({
        url: "http://localhost:3000/api/getgsshop",
        type: "get",
        success: function(info) {
          // console.log(info);
          $(".showban ul").html(template("tpl2", info));
          $(".search-bar li:last").attr("data-sd", info.result[0].shopId);
        }
      });
      $(".showban").show();
    }
    if (cvid == 1) {
      $.ajax({
        url: "http://localhost:3000/api/getgsshoparea",
        type: "get",
        success: function(info) {
          // console.log(info);
          $(".showban ul").html(template("tpl2", info));
          $(".search-bar li:last").attr("data-ad", info.result[0].areaId);
        }
      });
      $(".showban").show();
    }
    if (cvid == 2) {
      $(".showban ul").html(`<li>全部价格</li>`);
      $(".showban").show();
    }
  });

  function render() {
    $.ajax({
      url: "    http://localhost:3000/api/getgsproduct",
      type: "get",
      data: {
        shopid: shopid,
        areaid: areaid
      },
      success: function(info) {
        // console.log(info);
        $(".article ul").html(template("tpl3", info));
      }
    });
  }
  $(".search-bar ul li").click();
  // $(".search-bar ul li").eq(1).click();
  window.shopid = 0;
  window.areaid = 0;
  render();
  $(".showban").hide();

  $(".showban ul").on("click", "li", function() {
    $(".showban").hide();
    var sd = $(this).data("sd");
    var ad = $(this).data("ad");
    // console.log(sd,ad)
    if (sd >= 0) {
      $('.search-bar ul li').eq(0).text($(this).text())
      console.log(sd);
      window.shopid = sd;
    }
    if (ad >= 0) {

      $('.search-bar ul li').eq(1).text($(this).text().slice(0,2))
      console.log(ad);
      window.areaid = ad;
    }
    if ($(this).text() === "全部价格") {
      window.shopid = 0;
      window.areaid = 0;
    }
    render();
  });
});
