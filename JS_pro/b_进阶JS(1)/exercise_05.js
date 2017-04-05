var changeColorInterval;
window.onload=function(){
    //第一题
    var div_t1=document.getElementById('div_t1');
    changeColorInterval=setInterval("changeColor(div_t1)",2000);
}
function changeColor(GotDiv){
    console.log('使用的RGB值：');
    var numArr=[];
    for(var i=0;i<3;i++){
        numArr.push(Math.floor(Math.random()*255))
    }
    GotDiv.style.background='RGB('+numArr[0]+','+numArr[1]+','+numArr[2]+')';
    console.log(GotDiv.style.background);
}

function AJAX_table(){
    //AJAX代码
    var XHR=new XMLHttpRequest();
    XHR.open('get','JTable_W1.json',true);
    XHR.send();
    XHR.onreadystatechange=function(){
        if(XHR.readyState==4&&XHR.status==200){
            //第二题
            var label=document.createElement('label');
            var MyJson=JSON.parse(XHR.responseText);//解析test.json
            label.innerHTML=MyJson.c1;
            document.getElementsByTagName('body')[0].appendChild(label);
            
            //第三题
            var GotTable=JTable(MyJson);//把test.json传参运行JTable函数生成table
            
            console.log(GotTable);
            
            document.getElementsByTagName('body')[0].appendChild(GotTable);//将table放入body
        }
    }
}
function JTable(GotJson){
    //新建table图表
    var table=document.createElement('table');
    table.border='1px';
    //添加标题
    var tr=document.createElement('tr');//新建一行
    var titleArr=GotJson.title;//将JSON中的title键取出
    for(var n=0;n<titleArr.length;n++){
        var th=document.createElement('th');//单格标题
        th.innerHTML=titleArr[n];
        tr.appendChild(th);
    }
    table.appendChild(tr);
    //添加内容
    var contentArr=GotJson.content//将JSON中的content键取出
    for(var h=0;h<contentArr.length;h++){ //行数由GotJson中内容数组长度决定
        tr=document.createElement('tr')//重起一行
        for(var i=0;i<titleArr.length;i++){  //列数由标题数组长度决定
            var td=document.createElement('td');//单格内容
            switch(i){
                case 0:
                    td.innerHTML=contentArr[h].name;
                    break;
                case 1:
                    td.innerHTML=contentArr[h].class;
                    break;
                case 2:
                    td.innerHTML=contentArr[h].age;
                    break;
                case 3:
                    td.innerHTML=contentArr[h].tel;
                    break;
            }
            tr.appendChild(td)
        }
    table.appendChild(tr);
    }
    return table;
}