<template>
    <div class="top"  style="z-index: 500;">
        <div class="left">
          
            <h2 style="position: absolute;top: 50px;z-index: 999;left: 8px;">主题与构图风格</h2>
            <div class="blood1" style="z-index: 1;"></div>
             <p style="padding-left: 20px;padding-right: 20px;margin-top: 166px;line-height: 30px;font-size: 20px;font-weight: 300;">南方绘画常以山水画和花鸟画为主题，追求柔美、婉约的笔法和意境的表达。它注重表现自然景色和田园生活，以流畅、曲折的线条勾勒出山川河流的优美形态。相比之下，北方绘画更注重人物、宫殿和历史场景的描绘，追求形象的准确和壮丽的视觉效果。北方绘画注重结构感和气势磅礴，以简洁、直线的线条勾勒出人物的力量感和历史场景的庄严氛围。</p>
        </div>
        <div class="middle" style="position: relative;">
            <div class="to1"></div>
            <div class="to2"></div>
            <div class="to3"></div>
            <div class="to4"></div>
    <img src="../../../public/static/art/circle.png" style="width: 110%;height: 770px;position: absolute;top: -100px;left: -40px;z-index: 1;">
        </div>
        <div class="right">
          
            <h2 style="position: absolute;top: 10px;z-index: 999;left: 10px;">色彩运用与表现手法</h2>
            <div class="blood2"></div>
           <p style="padding-left: 20px;padding-right: 20px;margin-top: 115px;line-height: 30px;font-size: 20px;font-weight: 300;">南方绘画注重柔和、含蓄的色彩运用，以浅雅、温馨的色调营造出山水花鸟的静谧之美。它注重用色的层次感，通过细腻的笔墨表现自然景物的光影效果。相比之下，北方绘画注重鲜艳、对比强烈的色彩运用，以饱和、明亮的色彩塑造人物形象和历史场景的辉煌之美。北方绘画注重色彩的鲜明和对比，通过明快的色彩表现出人物的豪气和历史场景的壮丽。</p>
           <p style="position: absolute;right: 40px;bottom: 20px;font-weight: 100px;font-size: 18px;" class="pointer" @click="$router.push('/Draw2')">->查看详情</p>
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
            animation: scale 1.5s linear ;
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