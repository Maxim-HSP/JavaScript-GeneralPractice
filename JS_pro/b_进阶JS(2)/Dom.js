function test01(){
    console.log(document.title);
    console.log(document.URL);
    console.log(document.backgroundColor);
    console.log(document.floodColor);
}
//ById获取元素
function test02(){
    var GotBtn=document.getElementById('btn02');
    GotBtn.innerHTML='已改变';
}
//ByTagName获取元素组
function test03(){
    var GotSpan=document.getElementsByTagName('span');
    console.log('获取到的元素为：');
    console.log(GotSpan);
}
//ByName获取元素组（IE会有兼容性问题）
function test04(){
    var GotName=document.getElementsByName('sdd');
    console.log('获取到的name为ssd的元素为：');
    console.log(GotName);
}
function test05(){
    var GotClass=document.getElementsByClassName('ccd');
    console.log('获取到的class为ccd的元素为：');
    console.log(GotClass);
}
function test06(){
    var GotText=document.getElementById('test_input');
    return GotText;
    console.log(GotText.value);
}
function test07(){
    test06().value='赋予的值';
}
function test08(){
    console.log(ComGetByCN('testClass'));
}
function ComGetByCN(CN){
    if(document.getElementsByClassName){
        var GotElm=document.getElementsByClassName(CN);
        return GotElm;
    }else{
        var elmArr=[];
        var AllElm=document.getElementsByTagName('*');
        for(var i=0;i<AllElm.length;i++){
            if(AllElm[i].className==CN){
                elmArr.push(AllElm[i]);
            }
        }
        return elmArr;
    }
}
function test09(){
    console.log('获取所有对象集合');
    console.log(document.all);//获取所有对象集合
    console.log('获取所有表单集合');
    console.log(document.forms);//获取所有表单集合
    console.log('获取对应索引的表单');
    console.log(document.forms[1]);//获取对应索引的表单
    console.log('获取对应name的表单集合');
    console.log(document.forms['testForm']);//获取对应name的表单集合
    //注：定义索引和name是通用方法，all对象也可以使用
}
function test10(){
    var GotElm=document.getElementById('test10');
    console.log('innerHtml获取标签对中所有内容（包含其他标签等）');
    console.log(GotElm.innerHTML);
    console.log('innerHtml获取标签对中文本内容-针对IE');
    console.log(GotElm.innerText);
    console.log('innerHtml获取标签对中文本内容-FF、CH（IE不支持）');
    console.log(GotElm.textContent);
}
function test11(){
    var GotLab=document.getElementsByName('testLabel');
    GotLab.innerHTML='';
    var GotDiv=document.getElementById('testDiv');
    GotDiv.innerHTML='';
}
function test12(){
    var GotImg=document.getElementById('img_t12');
//    GotImg.src=ChangeImg(GotImg.src);
    while(true){//这个循环是为了保证两次替换之间不相同
        var temp=ChangeImg();
        if(GotImg.getAttribute('src')==temp){
            continue;
        }
        GotImg.setAttribute('src',temp);
        break;
    } 
    console.log(GotImg.getAttribute('src'));
}
function ChangeImg(){
    var i= parseInt((Math.random()*20)+1);
    LGotSrc='img/img_'+i+'.jpg';//此处也可用数组，然后将路径加入数组
    return LGotSrc;
}
function test13(){
    window.setInterval(test12,1000);
}
function test14(GotSelf){
    GotSelf.style.width='50px';
    GotSelf.style.border='1px solid red';
    GotSelf.innerHTML='已改变样式';
}
function test15(){
    var GotImg=document.getElementById('img_t15');
    console.log(GotImg);
    if(GotImg.style.visibility=='hidden'){
        GotImg.style.visibility='visible';
    }
    else{
        GotImg.style.visibility='hidden';
    }
    console.log(GotImg.style.visibility);
}
function test16(){
    var gotCss=document.styleSheets[1].cssRules[2].style;
    //styleSheets定位到具体的样式表，cssRules定位到具体的选择器
    //注意，rules是ie专用的（实测ch也支持）；cssRules是非ie通用的
    gotCss.width='80px';
    gotCss.height='90px';
    gotCss.border='3px dashed red';
    gotCss.backgroundColor='#FBBD78';
}
function test17(){
    //insertRule('选择器{样式语句}',索引(index));
    //insertRule是非ie通用ie不兼容，addRule是ie兼容的;
    //且格式变为addRule('选择器','样式语句',索引(index));
    document.styleSheets[0].insertRule('#btn_t17{background:red;}',0);
    
}
function test18(){
    //deleteRule(索引index);
    //deleteRule是非ie通用ie不兼容,removeRule是ie兼容的;
    document.styleSheets[0].deleteRule(0);
}
function test19(){
    var GotElm=document.getElementById('btn_t17');
  //ie通用：
    console.log(window.getComputedStyle(GotElm,null).background);
}
function test20(){
    //父容器.createElement(要创建的子标签)
    //采用for循环为创建的select中再创建option并赋与inner内容
    var CreSel=document.createElement('select');
    var TextArr=['北京','上海','广州','深圳','浙江','湖南','江苏','贵州']
    var CreOpt;
    for(var i=0;i<8;i++){
        CreOpt=document.createElement('option');
        CreOpt.innerHTML=TextArr[i];
        CreSel.appendChild(CreOpt);
    }
    document.getElementById('span_t20').appendChild(CreSel);
}
function test21(){
    //父容器.createElement(要创建的子标签)
    var CreInp=document.createElement('img');
    CreInp.src='img/img_18.jpg';
    CreInp.style.width='500px';
    document.getElementById('div_t21').appendChild(CreInp); 
}
function test22(){
    //父容器.removeChild(要删除的子标签)
    //注意，此处发现获取函数可以混用，具体地获取到某个标签中的子元素
    var Gotimgs=document.getElementById('div_t21').getElementsByTagName('img');
    document.getElementById('div_t21').removeChild(Gotimgs[0]);
}
var index_t23=0;
function test23(){
    //要克隆的标签.cloneNode(true|false);此处属性值为bol值，true则会讲克隆对象中的子内容（包括子标签的属性等）一起复制
    var GotBtn=document.getElementById('btn_t22');
    var NewBtn=GotBtn.cloneNode(true);
    NewBtn.id='btn_new'+index_t23;
    index_t23++;
    document.getElementById('div_t21').appendChild(NewBtn);
}
function test24(){
    //父容器.replaceChild(新组件,准备替换的现有组件);
    var GotElms=document.getElementById('div_t21').getElementsByTagName('img');
    var NewElm=document.createElement('p');
    NewElm.innerHTML='这是替换过后的新的p标签';
    document.getElementById('div_t21').replaceChild(NewElm,GotElms[0])
}
function test25(){
    var GotChls=document.getElementById('div_t21').children;
    console.log(GotChls);
}
function test26(){
    var CreTab=document.createElement('table');
    for(var i=1;i<=9;i++){
        var CreTr=document.createElement('tr');
        for(var n=1;n<=i;n++){
            var CreTh=document.createElement('th');
            CreTh.innerHTML=i+'*'+n+'='+(i*n);
            CreTr.appendChild(CreTh);
            CreTh.style.border='1px double green';
        }
        CreTab.appendChild(CreTr);
    }
    CreTab.style.border='1px double green';
    document.getElementById('div_t26').appendChild(CreTab);
}