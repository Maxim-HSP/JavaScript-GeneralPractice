function outlink() {
    alert('外链方式');
}

function cal(){
    var x=1;
    var y=4;
    while(x <= 5){
        y=x*y;
        x=++x + 3;
    }
    alert(x)
}

function test05(){
    var num=parseInt(window.prompt("请输入一个6位数",""));
    var n1=parseInt(num/100000);
    var n2=(parseInt(num/10000))%10;
    var n3=(parseInt(num/1000))%10;
    var n4=(parseInt(num/100))%10;
    var n5=(parseInt(num/10))%10;
    var n6=num%10;
    var max=n1;
    if(max<n2){
        max=n2;
    }
    if(max<n3){
        max=n3;
    }
    if(max<n4){
        max=n4;
    }
    if(max<n5){
        max=n5;
    }
    if(max<n6){
        max=n6;
    }
    alert('最大数为'+max);
}
function test06(){
    var lte=window.prompt("请输入一个字母","");
    if(lte=="a"){
        alert('A')
    }else if(lte=="b"){
        alert('B')
    }else if(lte=="c"){
        alert('C')
    }else if(lte=="d"){
        alert('D')
    }else if(lte=="e"){
        alert('E')
    }else if(lte=="f"){
        alert('F')
    }else if(lte=="g"){
        alert('G')
    }
    else{
        alert('输入错误')
    }
}
function test07(){
    var score=parseInt(window.prompt("输入分数1-100",""));
    if(score<=100 && score>=90){
        alert('成绩分级为A');
    }
    else if(score>=80 && score<90){
        alert('B');
    }
    else if(score>=70 && score<80){
        alert('C');
    }
    else if(score>=60 && score<70){
        alert('D');
    }
    else if(score>=0 && score<60){
        alert('E');
    }
    else{
        alert('你乱输个香蕉炒番茄，滚');
    }
}
//三目运算，输入值a如果能被5整除，则打印10，如果不能，打印0
function test08(){
    var a=parseInt(window.prompt("输入一个值",""));
    var c= a%5==0 ? 10 : 0;
    alert('（10为能被5整除，若否为0）值为'+c)
}
//switch case语句
function test09(){
    var num=parseInt(window.prompt("输入一个1-10的数字",""));
    switch(num){
        case(1):alert('你输入了1');break;
        case(2):alert('你输入了2');break;
        case(3):alert('你输入了3');break;
        default:alert('你什么都没有输入');break;
        case(4):alert('你输入了'+ num);break;
    }
}
//while循环
function test10(){
    var a= 0;
    var b= 2;
    while(b<=100){
        a=a+b;
        b += 2;
    }
    alert('0+2+4+6...+100的结果为'+a)
}
function test11(){
    var a = 0;
    var b = '';
    while(a <= 50){
        if(a % 3 == 0){
            b += a + ',';
        }
        a++;
    }
    alert(b);
}
function test12(){
    var num=0;
    var sum=0;
    do{
        if(num%2 != 0){
            sum= sum+num;
        }
        num++;
    }while(num<=50);
    alert(sum);
}
function test13(){
    var num=0;
    var sub='';
    do{
        if(num%2==0){
            sub += num + ','
        }
        num++;
    }while(num<=50);
    alert(sub);
}
function test14(){
    for(var a=80,b='';a>=40;a--){
        if(a==40){
            b+=a;
        }
        else{
            b+=a+',';
        }
    }
    alert(b);
}
function test15(){
    var num=parseInt(window.prompt("输入一个长宽值",""));
    var str='';
    for(var l=0; l<num;l++){
        for(var h=0; h<num;h++){
            if(h!=0 && h!=num-1 && l!=0 && l!=num-1){
                str+='-'; 
            }else{
                str+='*';
            }
        } 
        str += '\n';
    }
    alert(str);
}
function test16(){
    for(var a=1,i=0,str='';a<=100;a++){
        if(a%3==0 && a%5==0){
            i++;
            if (i<=3){
                str+=a+',';
            }else{
                str+=a;
            }
        }
        if(i==4){
            break;
        }
    }
    alert(str);
}
function test17(){
    for(var a=0,str='';a<=50;a++){
        if(a%7!=0){
            continue;
        }
        else{
           str+=a+','; 
        }
    }
    alert(str);
}
//九九乘法表
function test18(){
    var str='';
    for(var l=1;l<=9;l++){
        for(var h=1;h<=l;h++){
            str+= l + '*' + h + '=' + (l*h)+' ';
        }
        str+='\n';
    }
    alert(str);
}

//------------------------------
//使用输入的数作为底边长画等边三角形
function test19(){
    var num;
    var str='';
        while(true){
            num=parseInt(window.prompt("请输入一个奇数作为底边长",""));
            if(num%2 != 0){
                break;
            }
            alert('输入错误，请输入奇数');
        }
        var line=(num+1)/2;
        for(var l=1;l<=line;l++){
            for(var h=1;h<=line-l;h++){
                str+=' ';
            }
            for(var n=1;n<=2*l-1;n++){
                str+='*'; 
            }
            str+='\n';
        }
        alert(str);
}

//使用输入的数作为行数（三角形的高）画等腰三角形
function test20(){
    var line;
    var str='';
    while(true){
        line=parseInt(window.prompt("请输入奇数行数（高）",""));
        if(line%2 !=0){break;}
        alert('输入错误，请输入奇数');
    }
    for(var h=1;h<=line;h++){
        for(var k=1;k<=line-h;k++){
            str+=' ';
        }
        for(var x=1;x<=h*2-1;x++){
            str+='*';
        }
        str+='\n';
    }
    alert(str);
}
function test21(){
    var arr=[];
    arr[0]="数组序列1";
    arr[1]='数组序列2';
    arr[2]='数组序列3';
    arr[3]='数组序列4';
    console.log('数组长度为：'+arr.length);
    console.log('打印数组中第二个arr[2]:'+arr[2]);
    arr.push('push新增的最后一项');
    console.log('push后最后一项arr[4]：'+arr[4]);
    console.log(arr)
    arr.shift()
    console.log('shift删除首项:'+arr);
    arr.pop()
    console.log('pop删除末尾项：'+arr);
    arr.unshift('unshift新增的首项');
    console.log('unshift后：'+arr);
}
function test22(){
    var mathArray=[];
    var sum=0;
    for(var num=0,sum=0,count=0;num<201;num++){
        if(num%5==0){
            mathArray.push(num);
            sum+=mathArray[count];
            count++;//计数放在if条件内，才能成为1++。
        }
    }
//    单独使用for循环计算和。
//    for(var count=0;count<mathArray.length;count++){
//        sum+=mathArray[count];
//    }
    console.log(mathArray);
    console.log('和为：'+sum);
}
function test23(){
    var arr=[];
    var num;
    var sum=0;
    while(true){
        num=parseInt(window.prompt("请输入数字，输入0开始运算",""));
        if(num==0){
            alert('开始运算，请在控制台console查看结果')
            break;
        }
        arr.push(num);
    }
    for(var count=0;count<arr.length;count++){
        if (arr[count]%2 != 0){
            arr.splice(count,1);
        }
    }
    for(var i=0;i<arr.length;i++){
        sum+=arr[i];
    }
    console.log('以下为处理过后的数组：');
    console.log(arr);
    console.log('和为：'+ sum);
}
//-----------------------------------------------------
function test24(){
    var str='一二三四五六七八九九九十';
    alert('请于console中查看过程');
    console.log('str数组为：'+str);
    console.log('charAt返回第三个字符：'+str.charAt(2));
    console.log('indexOf查找“八”的索引：'+str.indexOf('八'));
    console.log('indexOf查找“九”的索引，只返回第一个“九”的索引：'+str.indexOf('九'));
    console.log('lastIndexOf查找“九”的索引，只返回最后一个“九”的索引：'+str.lastIndexOf('九'));
    console.log('substring截取(3,5)字符串：'+ str.substring(3,5));
    console.log('字符串长度（lenth）为：'+str.length);
    console.log('slice截取(3,5)字符串：'+str.slice(3,5));
    var str2='15/15/8/5/6/66/99/25/65';
    var strArr=str2.split('/');
    console.log('这是新定义的字符串：'+str2);
    console.log('split定义“/”作为分隔，拆分字符串并生成为数组：');
    console.log(strArr);
    var NewStr=str.replace('九九九','-这是替换内容-');
    console.log('replace替换字符串内容并生成一个新字符串：'+NewStr);
}

function test25(){
    var str=window.prompt('请输入一段含有感叹号的文字','');
    for(var i=0;i<str.length;i++){
        str=str.replace('!','(已替换)');
    }
    alert('以下是处理过后的字符串：'+str)
}

function test26(){
    var num=window.prompt('请输入一组数字，用空格分隔开','');
    alert(num);
    var numArr=num.split(' ');
    var sum=0;
    for(var i=0;i<numArr.length;i++){
        sum+=parseInt(numArr[i]);
    }
    console.log('生成数组：');
    console.log(numArr);
    console.log('数组和为'+sum);
    alert('请于console中查看过程');
}

function test27(){
    var arr=[10,5,8,0,1,61,43,2,3];
    var temp;
    for(var i=0;i<arr.length;i++){
        for(var n=i+1;n<arr.length;n++){
            if(arr[i]<arr[n]){
                temp=arr[i];
                arr[i]=arr[n];
                arr[n]=temp;
            }
        }
    }
    console.log('排序过后的数组为');
    console.log(arr);
}

function test28(){
    var num;
    var numArr=[];
    //直接输入一个数组用/隔开的方式
//    num=window.prompt('请输入一个数组，用/隔开','');
//    numArr=num.split('/');
//    for(var count=0;count<numArr.length;count++){
//        numArr[count]=parseInt(numArr[count]);
//    }
    //不断输一个数加入数组的方式
    while(true){
        num=parseInt(window.prompt('请输入数字生成数组，输入0开始排序',''));
        if(num==0){break;}
        numArr.push(num);
    }
    console.log('生成的数组为');
    console.log(numArr);
    for(var i=0;i<numArr.length;i++){
        for(var n=0;n<numArr.length-(i+1);n++){
            if(numArr[n]>numArr[n+1]){
                temp=numArr[n+1];
                numArr[n+1]=numArr[n];
                numArr[n]=temp;
            }
        }
    }
    console.log('排序过后的数组：');
    console.log(numArr);
}

function test29(){
    var num;
    var temp;
    var n;
    var sum=0;
    while(true){
        num=window.prompt('请输入一个五位数','');
        temp=parseInt(num);
        if(isNaN(temp)==true){
            alert('请勿输入非数字内容！');
            continue;
        }
        else if(num.length!=5){
            alert('输入数字不是五位！请重新输入');
            continue;
        }
        else{
            alert('输入正确，开始判定，请于console中查看')
//            num=parseInt(num);
            console.log('输入的数字为：'+num);
            break;
        }
    }
    for(var i=0;i<num.length;i++){
        n=parseInt(num.substring(i,i+1));
        sum+=n*n*n*n*n;
        console.log('第'+i+'个数为：');
        console.log(n);
    }
    console.log('和为'+sum);
    if(sum==temp){
        console.log('该数为五角星数');
    }else{
        console.log('该数不是五角星数');
    }
}
//------------------------------------
function test30(){
    var num;
    var numArr=[];
    while(true){
        num=parseFloat(window.prompt('请输入数字，输入0结束',''));
        if(num==0){
            break;
        }
        numArr.push(num);
    }
    for(var i=0;i<numArr.length;i++){
        for(var n=i+1;n<numArr.length;n++){
            if(numArr[i]<numArr[n]){
                temp=numArr[i];
                numArr[i]=numArr[n];
                numArr[n]=temp;
            }
        }
    }
    console.log('排序过后的数组为：')
    console.log(numArr);
}
function test31(){
    var str='';
    for(var num=100;num<200;num++){
        if(num%5!==0){
            str+=num+' '
        }
    }
    console.log('所有不能被5整除的数有：'+str)
}
function test32(){
    var str='';
    for(var i=1;i<10;i++){
        for(var n=1;n<=i;n++){
            str+=i+'*'+n+'='+(i*n)+' ';
        }
        str+='\n';
    }
    console.log(str);
}
function test33(){
    var num=parseInt(window.prompt('请输入行数',''));
    var str='';
    for(var i=0;i<num+1;i++){
        for(var n=0;n<i;n++){
            str+='*';
        }
        str+='\n';
    }
    console.log(str)
}
//--------函数使用方法:返回和传参
//
function test34_1(){
    alert(test34_2(3,12));
}
//此处的传参就相当于接入一个公式"a*b",在函数名后的括号中声明a和b变量，return返回值sum（也就是输出结果到函数test34_1）
function test34_2(a,b){
    alert('在注释中查看说明');
    var sum=a*b;
    return sum;
}

function test35(){
    var num;
    var numArr=[];
    while(true){
        num=window.prompt("请输入数字，输入end结束",'');
        if(num=='end'){
            break;
        }
        numArr.push(parseInt(num));
    }  
    alert('传参到sortArr函数进行排序，请于console中查看')
    console.log('输入的数组为：');
    console.log(numArr);
    sortArry(numArr);
}

function sortArry(numArrS){
    var temp;
    for(var i=0;i<numArrS.length;i++){
        for(var n=i+1;n<numArrS.length;n++){
            if(numArrS[i]>numArrS[n]){
                temp=numArrS[i];
                numArrS[i]=numArrS[n];
                numArrS[n]=temp;
            }
        }
    }
    console.log('排序过后的数组为：');
    console.log(numArrS);
}
//-------
function test36(){
    var count=parseInt(Math.random()*100);
    var numArr=[];
    for(var i=0;i<count;i++){
        num=parseInt(Math.random()*i);
        numArr.push(num);
    }
    console.log('生成的数组为：');
    console.log(numArr);
    var numArrS2=cutNum(numArr);
    var numArrS3=getValue(numArrS2);
    if(checkNum(numArrS3)){
        console.log('返回值为false，该值为偶数');
    }else{
        console.log('返回值为true，该值为偶数');
    }
}
function cutNum(numArrS){
    for(var i=0;i<numArrS.length;i++){
        if(numArrS[i]%2==0){
            numArrS.splice(i,1);
            i--;
        }
    }
    console.log('调用cutNum删除偶数之后：');
    console.log(numArrS)
    return numArrS;
}
function getValue(Arr_del){
    var sum=0;
    for(var i=0;i<Arr_del.length;i++){
        sum+=Arr_del[i];
    }
    console.log('调用getValue计算和为：'+sum);
    return sum;
}
function checkNum(Arr_sum){
    if(Arr_sum%2==0){
        return false;
    }else{
        return true;
    }
}
