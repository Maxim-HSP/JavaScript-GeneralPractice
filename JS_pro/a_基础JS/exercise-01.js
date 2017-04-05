function test01(){
    var year=parseInt(window.prompt("输入一个年份",""));
    if(year % 400 == 0){
        alert(year + '是闰年');
    }
    else if(year % 4 == 0 && year % 100 >0){
        alert(year + '是闰年');
    }
    else{
        alert(year + '不是闰年')
    }
}
function test02(){
    var num=parseInt(window.prompt("输入一个五位数",""));
    var first=parseInt(num/10000);
    var last=num%10;
    if(first == last && 
       parseInt((num-first*10000)/1000) == parseInt((num-last)/10)%10){
        alert(num + '是回文数');
    }else{
        alert(num + '不是回文数');
    }
}
function test03(){
    var num=parseInt(window.prompt("输入一个整数",""));
/*    if(num % 4 == 0 && num % 5 == 0){
        alert(num + '可以被4和5整除')
    }else{
        alert(num + '不能被4和5整除')
    }
    */
//    使用三目运算符
    var result= num % 4 == 0 && num % 5 == 0 ? "能被4和5整除" : "不能被4和5整除";
    alert(result);
}
function test04(){
    var num1=parseInt(window.prompt("输入第1个数",""));
    var num2=parseInt(window.prompt("输入第2个数",""));
    var num3=parseInt(window.prompt("输入第3个数",""));
    var num4=parseInt(window.prompt("输入第4个数",""));
    var num5=parseInt(window.prompt("输入第5个数",""));
    var avg=(num1+num2+num3+num4+num5)/5;
    alert(num1+','+num2+','+num3+','+num4+','+num5+'的平均数为'+avg);
}
function test05(){
    var num=parseInt(window.prompt("输入一个三位数",""));
    var n1=parseInt(num/100);
    var n2=parseInt(num/10)%10;
    var n3=parseInt(num%10);
    var fir=n1;
    var sec=n2;
    var thi=n3;
    if(fir<n2){
        fir=n2;
        sec=n1;
    }
    if(fir<=n3){
        thi=sec;
        sec=fir;
        fir=n3;
    }
    else if(n2<n3){
        sec=n3;
        thi=n2;
    }
    alert('最大组合为' + fir + sec + thi);
}