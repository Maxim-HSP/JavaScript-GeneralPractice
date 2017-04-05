var div_t1;
var btn_div;
var index=0; //表格开始遍历JSON位置的变量
var lastIndex=0; //相对于index的末页，由JSON文件中content数组长度-5(如果显示6行则-6)确定;
window.onload=function(){
    div_t1=document.getElementById('div_t1');
    btn_div=document.getElementById('btn_div');
}

function GetJson(statu){
    if(statu=='change'){  //如果点击了页码按钮(传参)，则先删除旧表格
        div_t1.innerHTML='';
    }
    var XHR=new XMLHttpRequest();
    XHR.open('get','students.json',true);
    XHR.send();
    XHR.onreadystatechange=function(){
        if(XHR.readyState==4&&XHR.status==200){
            //请求成功后执行以下代码
            btn_div.style.display='block';//显示页码按钮
            var SendJson=JSON.parse(XHR.responseText);//解析后准备传参
            var GotTable=CreTable(SendJson);
            console.log(GotTable);
            document.getElementById('div_t1').appendChild(GotTable);//放入表格到div_t1
        }
    }
}

function CreTable(GotJson){
    var table=document.createElement('table');
    table.border='1px';
    var content=GotJson.content;
    lastIndex=content.length; //依据content数组长度定义全局变量lastIndex方便“末页”按钮调用
    for(var i=0;i<5;i++){ //固定创建5行tr
        var tr=table.insertRow(i); 
        //fo in循环创建单格td，列数依据content键值数组中单项的键值对数量决定
        //根据index的值决定从数组中的哪一个单项开始遍历(如按下一页时index值变为5，每按一次+5，即index+=5)(如果显示6行则+6)，以实现表格内容的改变
        for(var key in content[i+index]){ 
            tr.insertCell(0).innerHTML=content[i+index][key];
        }
        //已知bug：insertCell(0)会导致创建的单格倒序（因为一直在往0这个索引位置放入）
    }
    return table;
}

//再创建一个函数，将所有按钮绑定点击事件到这个函数
//使用switch case匹配，4个按钮分别使index的值改变，如下一页按钮，每点击一次使index+=5,并再次运行GetJson函数(GetJson会再次创建图表)

function PageChange(GotBtn){
    switch(GotBtn){
        case'first':
            index=0;
            break;
        case'last':
            index=lastIndex-5;
            break;
        case'next':  //前进后退按钮为方便理解，不写成index+=5；
            index= index<lastIndex-5? index+5 : index; //三目运算，前进时如果index大于lastIndex-5(意味着已遍历完毕)则不改变(如果显示6行则index+6)
            break;
        case'previous':
            index= index>0? index-5 : index; //三目运算，后退时如果index小于0则不改变(如果显示6行则index-6)
            break;
    }
    GetJson('change');
}