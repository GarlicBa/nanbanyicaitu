<template>
    <div class="top"  style="z-index: 500;">
        <div class="left">
          
            <h2 style="position: absolute;top: 50px;z-index: 999;left: 8px;">题材与表现手法</h2>
            <div class="blood1" style="z-index: 1;"></div>
             <p style="padding-left: 20px;padding-right: 20px;margin-top: 163px;line-height: 30px;font-size: 20px;font-weight: 300;">南方文学倾向于田园诗、咏物诗、爱情诗等题材，强调对自然景色和人情风俗的热爱。它以细腻、含蓄的笔墨描绘自然景物，以优美、婉约的叙述方式展现人情风景。相比之下，北方文学更多关注历史、英雄和宫廷政治等题材，强调结构和韵味。北方文学注重气势磅礴的叙事，以雄奇、壮丽的笔墨描摹历史场景，以严谨、庄重的叙述方式展现时代风貌。</p>
        </div>
        <div class="middle" style="position: relative;">
            <div class="to1"></div>
            <div class="to2"></div>
            <div class="to3"></div>
            <div class="to4"></div>
    <img src="../../../public/static/art/circle.png" style="width: 110%;height: 770px;position: absolute;top: -100px;left: -40px;z-index: 1;">
        </div>
        <div class="right">
          
            <h2 style="position: absolute;top: 10px;z-index: 999;left: 10px;">叙事风格与情感表达</h2>
            <div class="blood2"></div>
           <p style="padding-left: 20px;padding-right: 20px;margin-top: 120px;line-height: 30px;font-size: 20px;font-weight: 300;">南方文学偏向柔美、恬静的叙事风格，通过细致入微的描写和柔和的语言表达，营造出一种静谧、优雅的情感氛围。以浪漫的文字对话展现内心世界。北方文学偏向雄奇、壮丽的叙事风格，通过铿锵有力的描写和豪放的语言表达，展现出一种慷慨激昂、奋发向上的情感氛围。它注重理性思考和英雄主义精神，以激情、激励的文字对话展示时代风云。</p>
           <p style="position: absolute;right: 40px;bottom: 23px;font-weight: 100px;font-size: 18px;" class="pointer" @click="$router.push('/Literal2')">->查看详情</p>
        </div>
       </div>
</template>


<style lang="less" scoped>
h2,p{
    animation: appear 1.5s ease;
}
 @keyframes scale {
    0%,100% {
        scale: 1;
    }
    50% {
        scale: 1.2;
    }
}
@keyframes around{
    0%,100%{
        transform: rotate(0deg);
    }
    50%{
        transform: rotate(30deg);
    }
}
@keyframes appear {
  0% {
     opacity: 0;
  }
  100% {
    opacity: 1;
}}
.top{
    width: 100%;
    height: 510px;
    display: flex;
    padding: 10px;
    .left{
        margin-left: 30px;
        width: 24%;
        height: 520px;
        background-color: rgba(204, 204, 204, 1);;
        margin-top: 30px;
        border-radius: 10px;
        position: relative;
        opacity: 0.9;
        .blood1{
            
            position: absolute;
            top: 20px;
            
            width: 110px;
            height: 130px;
            background: url('/public/static/art/blood.png') no-repeat center center;
            background-size: 100% 100%;
            animation: appear 2s ;
        }
    }
    .middle{
         
        margin-left: 30px;
        width: 44%;
        height: 570px;
       
        margin-right: 10px;
        z-index: 999;
        .to1{
            opacity: 0.95;
            position: absolute;
            bottom: -60px;
            right: 60px;
            width: 300px;
            height: 300px;
            background: url('/public/static/art/to1.png') no-repeat center center;
            background-size: 100% 100%;
            z-index: 999;
            &:hover{
                animation: around 1.5s linear infinite;
            }
        }
        .to2{
            
            position: absolute;
            bottom: 60px;
            right: -9px;
            width: 300px;
            height: 300px;
            background: url('/public/static/art/to2.png') no-repeat center center;
            background-size: 100% 100%;
            z-index: 998;
            animation: scale 1.5s linear ;
            &:hover{
               animation: scale 1.5s linear infinite;
              
            }
        }
        .to3{
            
            position: absolute;
           bottom: 0px;
            left: -9px;
            width: 300px;
            height: 300px;
            background: url('/public/static/art/to3.png') no-repeat center center;
            background-size: 100% 100%;
            z-index: 998;
            &:hover{
               animation: scale 1.5s linear infinite;
               
            }
        }
        .to4{
            
            position: absolute;
           bottom: 100px;
         
            left: 150px;
            width: 400px;
            height: 300px;
            background: url('/public/static/art/to4.png') no-repeat center center;
            background-size: 100% 100%;
            z-index: 997;
            &:hover{
               animation: scale 1.5s linear infinite;
               
            }
        }
    }
    .right{
        opacity: 0.9;
        border-radius: 10px;
        margin-top: 10px;
        margin-left: 10px;
        height: 520px;
        width: 24%;
        background-color: rgba(204, 204, 204, 1);;
        margin-top: 30px;
        border-radius: 10px;
        position: relative;
        opacity: 0.9;
        .pointer{

            cursor: pointer;
            &:hover{
                color: rgb(95, 132, 139);
                font-weight: 700;
                text-decoration: underline;
                transform: scale(1.1);
            }
        }
        .blood2{
            
            position: absolute;
            top: -40px;
            width: 110px;
            height: 130px;
            background: url('/public/static/art/blood.png') no-repeat center center;
            background-size: 100% 100%;
            animation: appear 2s ;
        }}
   }
</style>