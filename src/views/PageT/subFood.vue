<template>
    <div class="Building">
       <div class="left">
       <div class="pic">
 
       </div>
      
       </div>
       <div class="right"  @click="$router.push('/Eat')">
        <div class="word1">茶，一片叶，一方风。南国烟雨，北域苍松。</div>
        <div class="word2">南方茶文化细腻柔情，如茶香袅袅的翠绿，如晨曦般的清新；北方茶道则沉稳雄浑，如松涛般的澄澈，如寒潭般的深邃。南方人饮茶淡雅清香，细品其中的情意；北方人饮茶厚重深邃，感受其中的坚毅。</div>
        <div class="word3">而在口味上，南方酸甜可口，如江南糖水般的温柔；北方咸鲜醇厚，如黄河汤羊般的浓烈。南北饮食，不仅在于味觉体验，更映射出地域文化与气候习俗的奇妙融合。
          <div class="word4">让我们共饮一杯，品味南北茶香，感受中华饮食的多元魅力。</div>
            <div  style="position:absolute;top:320px;left:720px;width: 400px;margin-bottom: 20px;font-size: 20px;">>>>></div>
</div>
    </div>
    </div>
</template>


<style lang="less" scoped>
.word1{
    font-size: 23px;
    font-weight: 600;
    color: #787753;
    margin-top: 20px;
    margin-left: 20px;
    font-family: 'Courier New', Courier, monospace;
}
.word2{
    margin-top: 20px;
    margin-left: 10px;
    width: 650px;
    font-size: 20px;
    font-weight: 400;
    color: #4b4b43;
}
.word3{
    font-size: 22px;
    font-weight: 600;
    width: 670px;
    color: #4b4b43;
    margin-top: 40px;
    margin-left: 160px;
    font-family: 'Courier New', Courier, monospace;
}
.word4{
    position: absolute;
    top:250px;
    left: 120px;
    width: 337px;
    font-size: 22px;
    font-weight: 600;
    color: #787753;
    margin-left: 400px;
    margin-bottom: 30px;
    font-family: 'Courier New', Courier, monospace;
}
  .right{
    cursor: pointer;
    position: relative;
    &:hover{
        border: 1px solid #696743;
        border-radius: 10px;
        box-shadow: 0 0 10px #696743;
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
           background:url(/public/static/circle/food.png);
          background-size: 100% 100%;
           background-repeat: no-repeat;
           animation: circle 4s ease-in-out;
       }
    }
    .right{
        border-radius: 10px;
        background: url(/public/static/border/food.png);
        background-size: 100% 100%;
        margin-left: 40px;
    
        width: 60%;
        height: 55%;
        margin-top: 105px;
       
        animation: box 4s ease-in-out;
    }
   
}
</style>