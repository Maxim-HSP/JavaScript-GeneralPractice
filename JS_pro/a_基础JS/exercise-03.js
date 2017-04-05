function test01(){
    var arr=[];
    var num;
    var sum=0;
    while(true){
        num=parseInt(window.prompt('请输入数值，输入0时开始运算',''));
        if(num==0){
            break;
        }
        arr.push(num);
    }
    console.log('以下是输入的数组');
    console.log(arr);
    alert('已打印输入的数组，开始处理');
    for(var delCount=0;delCount<arr.length;delCount++){
        if(arr[delCount]%2 !== 0){
            arr.splice(delCount,1);
            delCount=0;//重新从0索引开始循环判定if(否则在删除一个数之后数组长度会缩小,下次判定会跳过之前删除的数的下一个数)
        }
        
    }
    console.log('以下是处理（删除奇数）过后的数组');
    console.log(arr);
    alert('已打印处理过后的数组');
    for(var sumCount=0;sumCount<arr.length;sumCount++){
        sum+=arr[sumCount];
    }
    console.log('以下是处理过后的数组之和');
    console.log('偶数和为'+sum);
    alert('已求和，处理完成，请于console查看');
}
//----------------------------------------------------
function test02(){
    var arr=['欢迎注册','欢迎登录','已修改密码','已找回密码','谢谢登录，欢迎下次再来'];
    var num;
    while(true){
        num=parseInt(window.prompt('请输入指令：1、注册游戏 2、登陆游戏 3、修改密码 4、找回密码 5、退出游戏',''));
        alert(arr[num-1]);
        if(num==5){
            break;
        }
    }
}
//----------------------------------------------------
function test03(){
    var arr=[];
    for(var i=0;i<=100;i++){
        arr[i]=i;
    }
    for(var delCount=0;delCount<arr.length;delCount++){
        if(arr[delCount]==20){
            arr.splice(delCount,21);
        }
    }
    console.log(arr);
    alert('数组已生成，请在console中查看');
}
//-----------------------------------------------------
function test04(){
    var str='';
    var arr=[];
    for(var h=0;h<10;h++){
        for(var l=1;l<(h+1);l++){
            str= h + '*' + l + '=' + (h*l) + ' ';
            //此处取消str的增量，不叠加赋值字符串，每赋一个算式的字符就push到数组中。
            arr.push(str);
        } 
    }
    alert('生成完成，在console中可查看数组中的所有算式');
    console.log(arr);
    while(true){
        var num=parseInt(window.prompt('请输入一个索引值索引算式，输入负数则结束查找',''));
        if(num<0){
            alert('结束查找！');
            break;
        }
        alert('在数组中第'+num+'个算式为：'+arr[num]);
    }   
}
