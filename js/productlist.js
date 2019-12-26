$(function() {
  var href = location.search.replace(/\?/gi, "");
  var hrefTow = href.split("&");
  var categoryid = hrefTow[0].replace("categoryid=", "");
  var pageid = hrefTow[1].replace("pageid=", "");
  var category = decodeURI(hrefTow[2].replace("category=", ""));


  function render() {
    // let pageid= 1
    
    // console.log(categoryid)
    // console.log(pageid)
    $.ajax({
      url: "http://localhost:3000/api/getproductlist",
      type: "get",
      data: {
        categoryid: categoryid,
        pageid: pageid
      },
      success: function(info) {
        console.log(info);
        $(".yyqq").text(category);
        $(".category").html(template("tpl", info));
        // $(".fenyeqi").html(template("tpl2", info));

        // 分页器
        window.index = Math.ceil(info.result.count / 10);
        if ($(".fenyeqi select").children().length === 0) {
          for (var i = 1; i <= index; i++) {
            $(".fenyeqi select").append(`<option data-id='${i}' value='${i}'>第${i}页</option>`)
          }
        }

        $(".category").on("click", ".bdf", function() {
          var hrf = $(this).attr("href");
          var hrft = hrf + "&category=" + category;
          $(this).attr("href", hrft);
        });
        // var hrf =$(".bdf").attr("href")
        // var hrft = hrf+"&category="+category
        // $(".bdf").attr("href",hrft)
        //
      }
    });
  }
  render();

  

  $(".fenyeqi").on("click", ".goye", function() {
    var yemaMin = $(this).data("min");
    // pageid--;
    // if (pageid >yemaMin) {
    //   pageid = yemaMin;
    // }
    if(pageid>1){
      pageid--;
      $(`option[data-id=${pageid}]`).prop("selected",true).siblings().prop("selected",false)
      render();

    }
  
    // $(".yema").text("123");
    // console.log(pageid)
  });
  $(".fenyeqi").on("click", ".backye", function() {
    if (pageid < index) {
      pageid++;
      $(`option[data-id=${pageid}]`).prop("selected",true).siblings().prop("selected",false)
      render();
    }
   
    // console.log(pageid);
  });
  $(".fenyeqi").on("change", "select", function() {
    pageid =  parseInt($(this).val())
    console.log(pageid);
    render();
  });
});
