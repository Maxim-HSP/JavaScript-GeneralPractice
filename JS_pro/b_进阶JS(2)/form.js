function test01(){
    var GotForm=document.getElementById('form1_t1');
    GotForm.submit();
}
window.onload=function(){
    var input1_t1=document.getElementById('input1_t1');
    var input2_t1=document.getElementById('input2_t1');
    input1_t1.value='点击文本框获取文本框内容和长度（console中查看），并自动选择文本';
    input2_t1.value='使用JS绑定当此文本框获取焦点时自动选择文本';
    input1_t1.onclick=function(){
        console.log(input1_t1.value.length);
        console.log(input1_t1.value);
        input1_t1.select();
    }
    input2_t1.onfocus=function(){
        input2_t1.select();
    }
    function checkRaido(){
    var MaleRadio=document.getElementById('male');
    var FemaleRadio=document.getElementById('female');
    console.log(MaleRadio.checked);
    }
}

function test02(){
    var slt1_t2=document.getElementById('slt1_t2');
    var slt2_t2=document.getElementById('slt2_t2');
    //选中转移
    while(slt1_t2.selectedIndex!= -1){
      slt2_t2.appendChild(slt1_t2.options[slt1_t2.selectedIndex]); 
    }
    //全部转移
//    while(slt1_t2.options.length>0){
//      slt2_t2.appendChild(slt1_t2.options[0]); 
//    }
}
function test03(){
    var ra1=document.getElementById('male');
    var ra2=document.getElementById('female');
    console.log('“男”单选按钮的状态：');
    console.log('是否为默认选择-'+ra1.defaultChecked);
    console.log('是否已被选择-'+ra1.checked);
}
function test03_2(){
    var ra1=document.getElementById('male');
    var ra2=document.getElementById('female');
    ra2.click();
}
function selectAll(checkStatus){
    var ckb_t4_Arr=document.getElementsByName('ckb_t4');
    for(var i=0;i<ckb_t4_Arr.length;i++){
        ckb_t4_Arr[i].checked=checkStatus;
    }
}