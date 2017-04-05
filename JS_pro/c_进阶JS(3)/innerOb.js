function test01(){
    var Ndate=new Date();
    
    console.log('当前系统时间为：'+Date())
    console.log('当前小时为'+Ndate.getHours());
    console.log('当前分钟为'+Ndate.getMinutes());
    console.log('当前秒为'+Ndate.getSeconds());
    console.log('当前月份为'+(Ndate.getMonth()+1));//注意月份是从0开始，实际要+1
    console.log('当前日期为'+Ndate.getDate());
    console.log('当前年份为'+(Ndate.getYear()+1900));//ie直接返回当前年份，非IE从1900开始计算，所以要+1900
    console.log('1970.1.1到今日的毫秒数为'+Ndate.getTime());
    console.log('今日是周'+Ndate.getDay());
}
 var img_t2;
 var btn_t2;
 var date_t2;
 var date_on;
window.onload=function(){
    test02();
}
function test02(){
    img_t2=document.getElementsByTagName('img')[0];
    btn_t2=document.getElementById('btn_t2');
    date_t2=new Date();
    date_on=date_t2.getTime()+1000*60*2;//以当前时间7顺延2min单独赋值
    console.log(date_on);
    window.setInterval(test02_1(),500);
}
function test02_1(){
    date_t2=date_t2.getTime();//赋值现在时间;
    console.log(date_t2);
    btn_t2.innerHTML=date_on-date_t2;
    if(date_t2==date_on){
        document.getElementById('mask').style.display='none';
        btn_t2.innerHTML='购买';
    }
}