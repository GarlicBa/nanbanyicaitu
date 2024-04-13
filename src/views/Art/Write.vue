<template>
    <div class="top"  style="z-index: 500;">
        <div class="left">
          
            <h2 style="position: absolute;top: 50px;z-index: 999;left: 8px;">笔画结构与书写风格</h2>
            <div class="blood1" style="z-index: 1;"></div>
             <p style="padding-left: 20px;padding-right: 20px;margin-top: 150px;line-height: 30px;font-size: 20px;font-weight: 300;">南方书法注重气韵生动、苍劲有力，追求字体的规范和工整。南方书法注重笔画的起伏和变化，通过线条的生动表现传递出书法作品的活力与韵味。相比之下，北方书法注重笔画的刚健有力，追求字体的严谨和稳重。北方书法常使用有力、粗犷的笔画，给人以雄浑、豪放的感觉。注重笔画的结构和稳定，通过线条的刚直表现传递出书法作品的力量与庄重。</p>
        </div>
        <div class="middle" style="position: relative;">
            <div class="to1"></div>
            <div class="to2"></div>
            <div class="to3"></div>
            <div class="to4"></div>
    <img src="../../../public/static/art/circle.png" style="width: 110%;height: 770px;position: absolute;top: -100px;left: -40px;z-index: 1;">
        </div>
        <div class="right">
          
            <h2 style="position: absolute;top: 10px;z-index: 999;left: 10px;">气韵与艺术意境</h2>
            <div class="blood2"></div>
           <p style="padding-left: 20px;padding-right: 20px;margin-top: 120px;line-height: 30px;font-size: 20px;font-weight: 300;">南方书法注重气韵的生动和艺术意境的表现。它以柔美、流畅的笔画展示书法作品的灵动之美，通过舒展的线条表现出书法作品的优雅之情。相比之下，北方书法注重气势的凛然和艺术意境的塑造。它以刚健、有力的笔画展示书法作品的雄奇之美，通过粗犷的线条表现出书法作品的豪放之情。北方书法在表现气韵时更注重震撼和振奋，追求一种激昂、壮丽的艺术意境。</p>
           <p style="position: absolute;right: 40px;bottom: 15px;font-weight: 100px;font-size: 18px;" class="pointer" @click="$router.push('/Write2')">->查看详情</p>
        </div>
       </div>
</template>


<style lang="less" scoped>
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
h2,p{
    animation: appear 1.5s ease;
}
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
            animation: scale 1.5s linear ;
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