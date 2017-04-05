window.onload=function(){
   var GotDiv=document.getElementById('div_t01');
   GotDiv.onmousemove=test01;
}
function test01(){
    console.log(event.clientX);
}