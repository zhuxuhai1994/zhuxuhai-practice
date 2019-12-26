// 适配rem
// js写法
// window.onresize  =  function(){
//   let width =  window.innerWidth;
//   console.log(width)
// }
$(window).resize(function(){
  // console.log(111)
  let width =  $(window).width()
  width = Math.max(width,320)
  width = Math.min(width,750)
  let fontSize = width/15
  $("html").css("fontSize",fontSize.toFixed(2)+"px")
}).trigger('resize')
