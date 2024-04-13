<template>
    <div class="Building">
       <div class="left">
       <div class="pic">
 
       </div>
      
       </div>
       <div class="right" @click="$router.push('/artmain')">
         <div class="word" style="position: relative;padding-top: 20px;padding-left: 20px;">
            <span class="word1" style="font-weight:bolder;margin-left:80px;font-size: 24px;font-family: 'Courier New', Courier, monospace;">南国情韵，北国雄风。南浦闻雁，北林送秋。</span>
          <div class="word2"> <span>南方艺术如江南细雨，柔情婉转，如杜牧笔下的诗篇.北方艺术则似壮士之歌，挺拔豪迈，如李白豪情壮志。</span></div>
           <div class="word3"><span>南音潺潺流水，北画壮丽山川。南方音乐弹拨轻柔，如琵琶箫管，唤起深情。北方音乐鼓号雄壮，如战鼓擂鸣，扣人心弦；</span></div>
          <div class="word4"><span>南方书法绘画婉约细腻，如水墨山水，流露思绪。北方书法绘画刚健豪迈，如长城千里，气吞山河。</span></div>
          <div class="word5"><span>南北之别，不仅技艺风格，更显气候地形文化特色。让我们共赏南北艺术差异，感受中华文化千姿百态。</span></div>
          <div  style="position:absolute;top:370px;left:670px;width: 400px;margin-bottom: 20px;font-size: 20px;">>>>></div>
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
 .word2{
    position: absolute;
    height: 330px;
    width: 500px;
    top: 90px;
    left: 200px;
    font-size: 20px;
    
    font-family: 'Courier New', Courier, monospace;
   
 }
 .word3{
    position: absolute;
    width: 500px;
    top: 160px;
    left: 200px;
    font-size: 20px;
    
    font-family: 'Courier New', Courier, monospace;
   
 }
 .word4{
    position: absolute;
    width: 500px;
    top: 250px;
    left: 210px;
    font-size: 20px;
    
    font-family: 'Courier New', Courier, monospace;
   
 }
 .word5{
    position: absolute;
    width: 500px;
    top: 320px;
    left: 230px;
     font-size: 21px;
    font-weight:bolder;
    font-family: 'Courier New', Courier, monospace;
   
 }
@keyframes box {
    0%{
        opacity: 0;
    }
    80%{
        opacity: 0.01;
    }
    100%{
        opacity: 1;
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
           background:url(/public/static/circle/art.png);
          background-size: 100% 100%;
           background-repeat: no-repeat;
           animation: circle 4s ease-in-out;
       }
    }
    .right{
        background: url(/public/static/border/art.png);
        background-size: 100% 100%;
        border-radius: 10px;
        margin-left: 40px;
        cursor: pointer;
        width: 60%;
        height: 55%;
        margin-top: 105px;
        background-color: #cccccc;
        animation: box 4s ease-in-out;
    }
   
}
</style>