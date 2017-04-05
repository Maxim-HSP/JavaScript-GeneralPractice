//coded_by_Maxime3244
var PageArr=[];
var index=0;
//将接收组件的变量声明为全局变量，方便函数调用
var btn_lt;
var btn_l;
var page_text;
var btn_r;
var btn_rb;
window.onload=function(){
    for(var i=0;i<80;i++){
        PageArr.push(i+1);
    }
    console.log(PageArr);
 document.getElementById('page_all').innerHTML='/'+PageArr.length;
    //窗口载入完成后获取组件（变量声明为全局变量）
    btn_lt=document.getElementById('btn_lt');
    btn_l=document.getElementById('btn_l');
    page_text=document.getElementById('page_text');
    btn_r=document.getElementById('btn_r');
    btn_rb=document.getElementById('btn_rb');
    //为组件使用JS绑定事件
    btn_lt.onclick=To_lt;//转到页码数组首项
    btn_rb.onclick=To_rb;//转到页码数组末项
    page_text.onchange=Input_page;//用户输入页码
    btn_l.onclick=pre;//后退页码
    btn_r.onclick=next;//前进页码
    //限制输入框只能输入数字，使用onkeyup句柄
    page_text.onkeyup=num_limit
}
//转到页码数组首项
function To_lt(){
    page_text.value=1;
    index=0;
    console.log('index的值为'+index);
    btn_lt.style.display='none'; 
    btn_rb.style.display='inline-block';
}
//转到页码数组末项
function To_rb(){
    page_text.value=PageArr[PageArr.length-1];
    index=PageArr.length-1;
    console.log('index的值为'+index);
    btn_rb.style.display='none';
    btn_lt.style.display='inline-block';
}
//用户输入页码
function Input_page(){
    if(parseInt(page_text.value)<=1){
        To_lt();
        btn_lt.style.display='none';
        btn_rb.style.display='inline-block';
    }
    else if(parseInt(page_text.value)>PageArr.length){
        To_rb();
        btn_lt.style.display='inline-block';
        btn_rb.style.display='none';
    }
    else{
        btn_lt.style.display='inline-block';
        btn_rb.style.display='inline-block';
    }
    index=parseInt(page_text.value)-1;//将页码数字-1以匹配索引值
}
//后退页码
function pre(){
    if(index>1){
        btn_rb.style.display='inline-block';
        page_text.value=PageArr[--index];
    }
    else if(index==1){
        page_text.value=PageArr[--index];
        btn_lt.style.display='none'; 
    }
    console.log('使用的index值为'+index);
}
//前进页码
function next(){
    if(index<PageArr.length-2){
        btn_lt.style.display='inline-block';
        page_text.value=PageArr[++index];
    }
    else if(index==PageArr.length-2){
        page_text.value=PageArr[++index];
        btn_rb.style.display='none';
    }
    console.log('使用的index值为'+index);
}
//限制输入框只能输入数字，使用onkeyup句柄
function num_limit(){
    page_text.value=page_text.value.replace(/[^0-9-]+/,'');
}
//--------------------------------------------------
//第二题,实现方式核心--selectedIndex属性如没有已被选择的option则返回-1
var sel_t1;
var sel_t2;
function to_right(){
    sel_t1=document.getElementById('sel_t1');
    sel_t2=document.getElementById('sel_t2')
    var sel_t1Index=sel_t1.selectedIndex;
    while(sel_t1Index!=-1){
        sel_t2.appendChild(sel_t1.options[sel_t1Index]);
        sel_t1Index=sel_t1.selectedIndex;
    }
}
function to_left(){
    var sel_t2Index=sel_t2.selectedIndex;
    while(sel_t2Index!=-1){
        sel_t1.appendChild(sel_t2.options[sel_t2Index]);
        sel_t2Index=sel_t2.selectedIndex;
    }
}