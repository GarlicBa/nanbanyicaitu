<template>
    <div class="Building">
       <div class="left">
       <div class="pic">
 
       </div>
      
       </div>
       <div class="right" @click="$router.push('/build1')">
       <div class="word1" style="width: 500px;padding-top: 20px;padding-left: 20px;">
        <span class="t1" style="font-size: 26px;font-family:'Courier New', Courier, monospace;color:#696743">南国烟雨，墨绿间瓦，静谧清雅；北国冰雪，红墙青瓦，雄浑沉稳。南方的建筑，如一幅淡雅清新的水墨画，以灰白青色相间，轻盈通透，屋顶陡峭，翘角如琴，萦绕着热带气息与山水之灵。</span>
       </div>
       <div class="word2" style="position: relative;width: 500px;margin-left: 360px;margin-top: 20px;">
        <span class="t2"  style="font-size: 26px;font-family:'Courier New', Courier, monospace;color:#696743">而北方的建筑，则承载着庄严厚重的文化底蕴，红墙黄瓦，沉稳而雄浑，代表着大地的坚毅与深沉。南北之别，不仅仅在于色彩与造型，更蕴含着气候、地形与文化的交融，展现着中华大地千年建筑之美……</span>
         <div style="position:absolute;top:160px;left:430px;width: 400px;margin-bottom: 20px;font-size: 20px;">>>>></div>   
    </div>
</div>
    </div>
</template>


<style lang="less" scoped>

  .right{
    &:hover{
        border: 1px solid #696743;
        border-radius: 10px;
        box-shadow: 0 0 10px #696743;
    }
  }
 .t1{
    &::first-line {
    text-indent: 20px; /* 设置首行缩进的大小 */
  }
 }
@keyframes box {
    0%{
        opacity: 0;
    }
    80%{
        opacity: 0.01;
    }
    100%{
        opacity: 0.8;
    }
}


@keyframes circle {
    0%{
        transform: scale(1.2) translate(400px,0px);
    }
    40%{
        transform: scale(1.19) translate(399px,0px);
    }
    100%{
        transform: scale(1) translate(0px,0px);
    }
}

.Building{
    margin-top: 40px;
    width: 100%;
    height: 100vh;
    display: flex;
    .left{
        width: 480px; 
        height: 70%;
        padding-top: 30px;
       .pic{
           width: 600px;
           height: 550px;
           background:url(/public/static/circle/build.png);
          background-size: 100% 100%;
           background-repeat: no-repeat;
           animation: circle 4s ease-in-out;
       }
    }
    .right{
        
        background: url(/public/static/border/build.png);
        background-size: 100% 100%;
        margin-left: 40px;
        border-radius: 10px;
        opacity: 0.8;
        width: 60%;
        height: 55%;
        margin-top: 105px;
        background-color: #cccccc;
        animation: box 4s ease-in-out;
        position: relative;
        cursor: pointer;
        .bottom{
            position: absolute;
            left: 0;
            bottom: 0;
            width: 200px;
            height: 200px;
           
        }
    }
   
}
</style>