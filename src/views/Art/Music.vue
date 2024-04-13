<template>
    <div class="top" style="z-index: 500;">
        <div class="left">
          
            <h2 style="position: absolute;top: 50px;z-index: 999;left: 8px;">风格特征</h2>
            <div class="blood1" style="z-index: 1;"></div>
             <p style="padding-left: 20px;padding-right: 20px;margin-top: 170px;line-height: 30px;font-size: 20px;font-weight: 300;">南方音乐注重细腻、柔美的旋律，强调情感表达和意境的追求。它常采用流畅、抑扬顿挫的音符，给人以温暖、舒缓的感觉。而北方音乐则更加雄浑、豪放，注重节奏的铿锵有力和气势磅礴的效果。它多采用大胆、富有张力的音符，给人以激昂、壮丽的感觉。</p>
        </div>
        <div class="middle" style="position: relative;">
            <div class="to1"></div>
            <div class="to2"></div>
            <div class="to3"></div>
            <div class="to4"></div>
    <img src="../../../public/static/art/circle.png" style="width: 110%;height: 770px;position: absolute;top: -100px;left: -40px;z-index: 1;">
        </div>
        <div class="right">
          
            <h2 style="position: absolute;top: 10px;z-index: 999;left: 10px;">演奏技法与表现方式</h2>
            <div class="blood2"></div>
           <p style="padding-left: 20px;padding-right: 20px;margin-top: 120px;line-height: 30px;font-size: 20px;font-weight: 300;">南方音乐常使用柔和、轻盈的演奏技法，以产生优美、恬静的音效。南方音乐注重表达内心情感，通过细致而含蓄的演奏方式传递出情感的柔和与温馨。相比之下，北方音乐常使用有力、豪放的演奏技法，如鼓点击打、弦乐强奏等，以产生力量感和激情澎湃的效果。北方音乐注重表达力量和紧张感，通过激烈而激昂的演奏方式传递出情感的豪放与震撼。</p>
           <p style="position: absolute;right: 40px;bottom: 30px;font-weight: 100px;font-size: 18px;" class="pointer" @click="$router.push('/Music2')">->查看详情</p>
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
            animation: around 1.5s linear ;
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