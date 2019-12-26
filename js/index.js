$(function(){
  $(".menu ul ").on("click",".now",function(e){
    e.preventDefault()
    // $(".menu").find("li:nth-child(n+9)").toggleClass("active");
    $(this).nextAll().toggleClass('active')
  })
  // 渲染首页ajax
  // <!-- <li><a href="#"><img src="./img/ic_search.png" alt=""><p>比价搜索</p></a></li>
 function render(){
   $.ajax({
     url:"http://localhost:3000/api/getindexmenu",
     type:"get",
     success:function(info){
      console.log(info)
      $(".menu ul").html(template("tpl",info))
     }
   })
   $.ajax({
    url:"http://localhost:3000/api/getmoneyctrl",
    type:"get",
    success:function(info){
      console.log(info)
      $(".recommen ul").html(template("tpl2",info))
    }
  })
   
 }
 render()

 $(".mmm-tract").on("click",function(){
  render()
 })
})