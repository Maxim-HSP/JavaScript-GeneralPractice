function test01(){
    var str='';
    for(var l=1;l<=9;l++){
        for(var h=1;h<=l;h++){
            str+= l + '*' + h + '=' + (l*h)+' ';
        }
        str+='\n';
    }
    alert(str);
}
function test02(){
    for(var str='',a=1,count=0;a<=200;a++){
        if(a%6==0){
            count++;
            if(count<=5){
                str+= a+',';
                
            }else{
                str+= a;
            } 
        }
        if(count==6){
            break;   
        }
    }
    alert(str);
}

function test03(){
//    使用for循环----------
//    for(var sum=0,num=100;num<=200;num++){
//        if(num%2==0){
//            sum+=num;
//        }
//    }
//    alert(sum);
//    使用while循环---------
    var num=100;
    var sum=0;
    while(num<=200){
        if(num%2==0){
            sum+=num;
        }
        num++;   
    }
    alert(sum);
}

function test04(){
    var fir,sec,thi;
    for(var str='',num=100;num<=999;num++){
        fir=parseInt(num/100);
        sec=parseInt(num/10)%10;
        thi=parseInt(num%10);
        if(fir*fir*fir+sec*sec*sec+thi*thi*thi==num){
            str += num + ' ';
        } 
    }
    alert(str);
}

function test05(){
    var a=2;
    var b=1;
    var sum=0;
    var temp;
    var n=20;//改变n的值定义取前多少项的和
    for(var count=0;count<n;count++){
        sum+= a/b;//开始累积和（如此语句放在循环的最后，则需将a和b的值设为1，否则分数列第一项就会变为3/2）
        
        temp=a;//将分子的值给一个容器
        
        a+= b;//将下一个分子的增益量设为分母（即使下一个分子值为当前分子分母的和）
        
        b=temp;//将容器的值（即当前分子的值）给下一个分母
        //结束本次循环，回到判定条件重新开始循环，累积和
    }
    alert(sum);
}