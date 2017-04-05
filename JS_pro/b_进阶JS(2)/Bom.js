function test01(){
    //window.screen在IE中不可用
    console.log(window.screenX);
    console.log(window.screenY);
    //left和top可在ie中使用
    console.log(window.screenLeft);
    console.log(window.screenTop);
}
function test02(){
    //查看文档区域大小（IE同样不支持）
    console.log(window.innerHeight);
    console.log(window.innerWidth);
    //IE支持的方法
    console.log(window.document.documentElement.clientHeight);
    console.log(window.document.documentElement.clientWidth);
}
function test03(){
    //只对ie支持
    //窗口的移动,moveTo移动到某个坐标
    //window.moveTo(x,y);
    window.moveTo(300,300);
}
function test04(){
    //只对ie支持
    //窗口的移动,moveBy以当前位置为起始位置移动
    //window.moveBy(x,y);
    window.moveBy(20,10);
}
function test05(){
    //只对IE支持
    window.resizeTo(100,100);
//    window.resizeBy(100,100);
}
function test06(){
    //所有浏览器都支持
    //window.scrollBy(x,y)
    //效果和move函数类似，但对象是滚动条
    window.scrollTo(10,20);
    window.scrollBy(20,10);
}

function test07(){
    alert('点击确定，两秒后显示Welcome');
    //setTimeout('函数',时间以毫秒为单位);
    setTimeout('test_timeOut()',2000);
}
function test_timeOut(){
    alert('Welcome');
}
function test08(){
    var b=function(){setInterval('test_timeOut()',1000);}
    b();
    clearInterval(b);
}
function test09(){
    console.log(location.href);
    console.log(location.hostname);
    console.log(location.pathname);
    console.log(location.port);
    console.log(location.search);
    alert('已在console中显示');
}
function test10(){
    location.reload();
}
function test11(){
    location.replace('替换的网页URL');
}
function test12(){
    console.log('avail前缀会减去系统任务栏的占用宽高');
    console.log(screen.availHeight);
    console.log(screen.availWidth);
    console.log(screen.height);
    console.log(screen.width);
}
function test13(){
    //appCodeName代码名；appName浏览器名；appVersion浏览器平台及版本信息；platform 运行浏览器的系统平台信息
    console.log(navigator.appCodeName);
    console.log(navigator.appName);
    console.log(navigator.appVersion);
    console.log(navigator.platform);
}