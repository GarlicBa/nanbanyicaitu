
import { RouterView } from 'vue-router';
<template>
    <div class="box-container">
       <RouterView></RouterView>
       <div class="buttom" style="z-index: 999;">
        <div class="first" @click="$router.push('/artmain')">音乐</div>
        <div class="second" @click="$router.push('/Literal')">诗歌</div>
        <div class="third" @click="$router.push('/Draw')">绘画</div>
        <div class="fourth" @click="$router.push('/Write')">书法</div>
        <div class="tohome">
                <label  for="name" class="label"  @click="$router.push('/')" >
                  <svg t="1710914231707" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1832" width="45" height="45"><path d="M653.1 305.1H182.7l139.9-139.9c14-14 14-35 0-49s-35-14-49 0L74.3 313.8c-7 7-10.5 15.7-10.5 24.5s3.5 17.5 10.5 24.5l197.6 197.6c14 14 35 14 49 0s14-35 0-49L184.5 375h468.6c131.1 0 236.1 104.9 236.1 236.1s-104.9 236-236.1 236H294.7c-19.2 0-35 15.7-35 35 0 19.2 15.7 35 35 35h358.5c169.6 0 306-136.4 306-306-0.1-169.6-136.5-306-306.1-306z" p-id="1833" fill="#707070"></path></svg>
                </label>
                </div>
       </div>
    </div>
</template>

<style lang="less" scoped>
  
    @keyframes appear {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }
   .box-container{
    background: url('/public/static/data/bk.jpg') no-repeat center center;
 background-size: 100% 100%;
   padding: 0%;
  
   .buttom{
    animation: appear 1s ease;
    margin-top: 70px;
       width: 100%;
    height: 100px;  
    display: flex;
    position: relative;
    justify-content: space-around;
    align-items: center;
    z-index: 1;
    .tohome{

       position: absolute;
       bottom: 5px;
       right: 50px;
         width: 50px;
         height: 50px;
         border-radius: 50%;
         margin-left: 20px; 
        
         border:1px solid #000;
         transition: transform 0.3s ease;
      &:hover{
      transform: scale(1.2);
      }
      label{
        cursor: pointer;
      }
        }
    .first{
        z-index: 999;
        width: 130px;
        height: 130px;
        padding-top: 20px;
        background: url('/public/static/art/motuan.png') no-repeat center center;
        background-size: 100% 100%;
        margin-left: 140px;
       transition: transform 0.3s ease;
       cursor: pointer;
       text-align: center;
       line-height: 120px;
       color: #fff;
       font-size: 20px;
       font-weight: 700;
       
       &:active{
           transform: scale(0.9);
       }
    &:hover{
    transform: scale(1.2);
    }
}
    .second{
        z-index: 999;
        width: 130px;
        height: 130px;
        padding-top: 20px;
        background: url('/public/static/art/motuan.png') no-repeat center center;
        background-size: 100% 100%;
       padding-right: 5px;
       margin-left: 10px;
       transition: transform 0.3s ease;
       cursor: pointer;
       text-align: center;
       line-height: 120px;
       color: #fff;
       font-size: 20px;
       font-weight: 700;
       
       &:active{
           transform: scale(0.9);
       }
    &:hover{
    transform: scale(1.2);
    }
}
    .third{
        z-index: 999;
        width: 130px;
        height: 130px;
        padding-top: 20px;
        background: url('/public/static/art/motuan.png') no-repeat center center;
        background-size: 100% 100%;
       padding-right: 5px;
       transition: transform 0.3s ease;
       cursor: pointer;
       text-align: center;
       line-height: 120px;
       color: #fff;
       font-size: 20px;
       font-weight: 700;
       
       &:active{
           transform: scale(0.9);
       }
    &:hover{
    transform: scale(1.2);
    }
}
    .fourth{
        z-index: 999;
        width: 130px;
        height: 130px;
        padding-right: 5px;
        padding-top: 20px;
        background: url('/public/static/art/motuan.png') no-repeat center center;
        background-size: 100% 100%;
        margin-right: 140px;
       transition: transform 0.3s ease;
       cursor: pointer;
       text-align: center;
       line-height: 120px;
       color: #fff;
       font-size: 20px;
       font-weight: 700;
       
       &:active{
           transform: scale(0.9);
       }
    &:hover{
    transform: scale(1.2);
    }
}
   }
   }
</style>