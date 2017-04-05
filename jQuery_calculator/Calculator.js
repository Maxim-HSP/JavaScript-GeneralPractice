$(document).ready(function(){
    //运算按键绑定计算函数
    $('.CalContainer .btn_main:not(.btn_CT,.btn_CB,.btn_Auto)').click(calculator);
    //点击背景图时变清晰
    $('#BG_mask').click(function(){
        $('#BG_mask').fadeOut(300);
    })
    //绑定auto按键（自动更换主题和背景模糊）函数
    $('.btn_Auto').click(autoChange);
})
//显示计算器模块
function launch(GotBtn){
    $(GotBtn).hide(500,function(){
        $('#main_container').fadeIn(500,function(){
            $('.CalContainer').show(500);
            $('#introduce').show(600);
        });
    })
    
}
//改变计算器主题色
function ChangeTheme(){
    $('#Maskcolor').fadeOut('normal',function(){
        $('#Maskcolor').css({background:'linear-gradient(to bottom,transparent,RGB('+Math.floor(Math.random()*256)+','+ Math.floor(Math.random()*256)+','+Math.floor(Math.random()*256)+'))'})
    });
    $('#Maskcolor').fadeIn('normal');
}
//切换背景图并使其变清晰
function ChangeBG(){
    $('#BG_mask').fadeOut(300,function(){
        $('#BG_mask').attr('src','img/img_'+Math.floor(Math.random()*20+1)+'.jpg');
        $('#BG_img').fadeOut(300,function(){
            $('#BG_img').attr('src', $('#BG_mask').attr('src'));
        })
        $('#BG_img').fadeIn(300);
    })
}
//自动更换主题色及背景模糊
function autoChange(){
    if($(this).attr("isAct")=='true'){
        $(this).attr("isAct",false);
        $(this).toggleClass('btn_Auto_active');
        $('.CalContainer').unbind('mouseenter');
        $('.CalContainer').unbind('mouseleave')
        console.log($(this).attr("isAct"));
    }else{
        $(this).attr("isAct",true);
        $(this).toggleClass('btn_Auto_active');
        //激活时给计算器区域绑定mouseover事件
        $('.CalContainer').mouseenter(function(){
            $('#BG_mask').fadeIn(300);
            ChangeTheme();
        });
        $('.CalContainer').mouseleave(function(){
            $('#BG_mask').fadeOut(300);
        });
        console.log($(this).attr("isAct"));
    }
  
}
//运算函数部分
var index=0;
function calculator(){
    //当按下任何运算键时模糊背景图片，以防图片使计算器本体看不清
    $('#BG_mask').fadeIn(300);
    //按键逻辑
    if(/[0-9\.]/.test(this.value)){
        if($('#screen_down').val()==0 || index!==0){
            if(/^[\.]$/.test(this.value)){
                $('#screen_down').val($('#screen_down').val());
                index=0;
            }else if($('#screen_down').val()!=='0'+'.'){
                $('#screen_down').val('');
                index=0;
            }
        }
        if(/[\.]/.test($('#screen_down').val())){
            if(/^[\.]$/.test(this.value)){
                return;
            }  
        }
        $('#screen_down').val($('#screen_down').val()+$(this).val());
    }
    else if(this.value=='Clear'){
        $('#screen_up').val('');
        $('#screen_down').val(0);
    }
    else if(this.value=='='){
        if(/\^/.test($('#screen_up').val())){
            var runStr=$('#screen_up').val();
            num_x=runStr.replace( /\d/ + ' ^ ' + /\d/)
        }
        $('#screen_down').val(eval($('#screen_up').val()+$('#screen_down').val()));
        $('#screen_up').val('');
        index++;
    }
    else{
        $('#screen_up').val($('#screen_up').val()+' '+$('#screen_down').val()+' '+$(this).val());
        index++;
    }
    
}