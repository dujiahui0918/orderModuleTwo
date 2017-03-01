$(function(){
  //对象move存放所有变量,所有的函数修改的都是move对象里的属性值，draw()最后用的是move里的属性值。
    var move={
      top:200,//左边距
      left:300,//上边距
      direction:1,//（0-左  1-上  2-右  3-下）
      current:0//当前角度
    }
    //方向变化
    function rotate(dir){
      switch(dir){
        case "left":
          move.current=(move.current-90)%360;
          draw();
          move.direction-=1;
          break;
        case "right":
          move.current=(move.current+90)%360;
          draw();
          move.direction+=1;
          break;
        case "back":
          move.current=(move.current+180)%360;
          draw();
          move.direction+=2;
          break;
        case "go":
          go();
          break;
        case "lef":
          move.current=-90;
          draw();
          move.direction=0;
          break;
        case "rig":
          move.current=90;
          draw();
          move.direction=2;
          break;
        case "top":
          move.current=0;
          draw();
          move.direction=1;
          break;
        case "bot":
          move.current=180;
          draw();
          move.direction=3;
          break;
      }
    }
    //前进
    function go(){
      move.direction=move.direction%4+(move.direction%4<0?4:0);
      if(move.direction==0&&move.left>0){
        move.left-=50;
        draw();
      }else if(move.direction==1&&move.top>0){
        move.top-=50;
        draw();
      }else if(move.direction==2&&move.left<450){
        move.left+=50;
        draw();
      }else if(move.direction==3&&move.top<450){
        move.top+=50;
        draw();
      }else{
        alert("移动超出范围");
      }
    }
    //移动
    function movee(dir){
      if(dir=="left"&&move.left>0){
        move.left-=50;
        draw();
      }else if(dir=="right"&&move.left<450){
        move.left+=50;
        draw();
      }else if(dir=="top"&&move.top>0){
        move.top-=50;
        draw();
      }else if(dir=="bottom"&&move.top<450){
        move.top+=50;
        draw();
      }else{
        alert("移动超出范围");
      }
    }

    $("#go").on("click",function(){
      go();
    })
    $("#tunLef").on("click",function(){
      rotate("left");
    })
    $("#tunRig").on("click",function(){
      rotate("right");
    })
    $("#tunBac").on("click",function(){
      rotate("back");
    })
    //移动，方向不变
    $("#tralef").on("click",function(){
      movee("left");
    })
    $("#trarig").on("click",function(){
      movee("right");
    })
    $("#tratop").on("click",function(){
      movee("top");
    })
    $("#trabot").on("click",function(){
      movee("bottom");
    })

    //移动，方向改变
    $("#movlef").on("click",function(){
      rotate("lef");
      movee("left");
    })
    $("#movrig").on("click",function(){
      rotate("rig");
      movee("right");
    })
    $("#movtop").on("click",function(){
      rotate("top");
      movee("top");
    })
    $("#movbot").on("click",function(){
      rotate("bot");
      movee("bottom");
    })
    //重画

    function draw(){
      $("#box").css("transform",'rotate('+ (move.current) +'deg)');
      $("#box").css("left",move.left +'px');
      $("#box").css("top",move.top +'px');
    }
    draw();
})