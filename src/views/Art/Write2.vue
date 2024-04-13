<template>
    <div class="box-container">
        <div class="name1"></div>
        <div class="name2"></div>
        <div class="name3"></div>
        <div class="name4"></div>
       <div class="left">
        <div class="first" :key="animationKey">
           <img :src="word1[index1-1].src" alt="" class="word1">
          
        </div>
        <div class="second"  :key="animationKey">
            <img :src="word2[index2-1].src" alt="" class="word2">
        
        </div>
       </div>
       <div class="middle">
        <div class="cloud"></div>
        <div class="pen"  :key="animationKey"></div>
        <div class="kuang">
          <input type="text"  class="input" placeholder="南北异彩" value="南北异彩" v-model="svalue">
         </div>
        <div class="dot" @click="check"></div>
        <div class="cloud2"  :key="animationKey"></div>
       </div>
       <div class="right">
        <div class="third"  :key="animationKey">
            <img :src="word3[index3-1].src" alt="" class="word3">
           
        </div>
        <div class="forth"  :key="animationKey">
            <img :src="word4[index4-1].src" alt="" class="word4">
           
        </div>
       </div>
       <div class="tohome">
                <label  for="name" class="label"  @click="$router.push('/Write')" >
                  <svg t="1710914231707" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1832" width="45" height="45"><path d="M653.1 305.1H182.7l139.9-139.9c14-14 14-35 0-49s-35-14-49 0L74.3 313.8c-7 7-10.5 15.7-10.5 24.5s3.5 17.5 10.5 24.5l197.6 197.6c14 14 35 14 49 0s14-35 0-49L184.5 375h468.6c131.1 0 236.1 104.9 236.1 236.1s-104.9 236-236.1 236H294.7c-19.2 0-35 15.7-35 35 0 19.2 15.7 35 35 35h358.5c169.6 0 306-136.4 306-306-0.1-169.6-136.5-306-306.1-306z" p-id="1833" fill="#707070"></path></svg>
                </label>
                </div>
    </div>
</template>

<style lang="less" scoped>
input[type="text"]:focus {
    outline: none; /* 取消默认的轮廓样式 */
  border-color: initial; /* 恢复默认的边框颜色 */
  box-shadow: none; /* 取消阴影效果 */
}
.input{
   position: absolute;
   border: none;
   top:60px;
   left: 135px;
   z-index: 999;
   width: 180px;
   height: 160px;
   font-size: 37px;
   
}
@keyframes cloud{
    0%{
        opacity: 0;
    }
    50%{
        opacity: 0.2;
    }
    55%{
        opacity: 0.3;
    }
    65%{
        opacity: 0.4;
    }
    70%{
        opacity: 0.5;
    }
    80%{
        opacity: 0.7;
    }
    90%{
        opacity: 0.8;
    }
    95%{
        opacity: 0.9;
    }
    100%{
        opacity: 1;
    }
}
@keyframes pen {
    0%{
        transform: translateX(0);
        rotate: 0;
    }
    25%{
        rotate: -10deg;
    }
    50%{
        rotate: 0;
    }
    75%{
        rotate: 10deg;
    }
    100%{
        transform: translateX(130px);
        rotate: 0;
    }
}
@keyframes appear{
    0%{
        opacity: 0;
        scale: 0.5;
    }
    50%{
        opacity: 1;
        scale: 1.2;
    }
    100%{
        opacity: 1;
        scale: 1;
    }   
}
@keyframes big{
    0%{
        scale: 1;
    }
    100%{
        scale: 1.2;
    }
}
@keyframes appear1{
    0%{
        opacity: 0;
        
    }
    50%{
        opacity: 1;
       
    }
    100%{
        opacity: 1;
        
    }
}
.tohome{
    position:absolute;
    right: 40px;
    bottom:40px;
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
.box-container{
    width: 100%;
    height: 100vh;
    background: url('/public/static/pageTb.jpg') no-repeat center center fixed;
    background-size: 100% 100%;
    display: flex;
    .name1{
            width: 200px;
            height: 70px;
            
            position: absolute;
            top:300px;
            left: 150px;
             background: url('/public/static/writer/1v.png') no-repeat center;
              background-size: 100% 340%;
           animation: appear1 3s ease-in-out;

           }
                      
     .name2{
            width: 200px;
            height: 70px;
           
            position: absolute;
            top:635px;
            left: 155px;
            background: url('/public/static/writer/2v.png') no-repeat center;
              background-size: 100% 230%;
           animation: appear1 3s ease-in-out;
           }
           .name3{
            width: 200px;
            height: 70px;
            
            position: absolute;
            top:340px;
            right: 140px;
            background: url('/public/static/writer/3v.png') no-repeat center;
              background-size: 100% 240%;
           animation: appear1 3s ease-in-out;
           }
           .name4{
            width: 200px;
            height: 70px;
            
            position: absolute;
            top:660px;
            right: 130px;
            background: url('/public/static/writer/4v.png') no-repeat center;
              background-size: 100% 300%;
           animation: appear1 3s ease-in-out;
           }
    .left{
        width: 400px;
        height: 600px;
        
        margin-right: 50px;
        margin-left: 60px;
        margin-bottom: 10px;
        .first{
            width: 330px;
            height: 320px;
            position: relative;
            background: url('/public/static/write/circle.png') no-repeat center;
            background-size: 100% 100%;
            position: relative;
            animation:  appear 1s;
            .word1{
                position: absolute;
                top:0px;
                left: 56px;
                width: 250px;
                height: 300px;

            }
  
        }
        .second{
            width: 330px;
            height: 320px;
            background: url('/public/static/write/circle.png') no-repeat center;
            background-size: 100% 100%;
            margin-top: 10px;
            position: relative;
            animation:  appear 1s;
            .word2{
                position: absolute;
                top:0px;
                left: 45px;
                width: 270px;
                height: 290px;
              
            }
        }
    }
    
    .middle{
        width: 600px;
        height: 700px;
        
        margin-right: 10px;
        position: relative;
        .cloud{
            width: 500px;
            height: 500px;
            background: url('/public/static/write/cloud.png') no-repeat center;
            background-size: 100% 100%;
            position: absolute;
            top: 30px;
            left: -190px;
            z-index: 1;
            
        }
        .kuang{
            width: 420px;
            height: 300px;
            background: url('/public/static/write/kuang.png') no-repeat center;
            background-size: 100% 100%;
            position: absolute;
            top: 250px;
            left: 50px;
        }
        .dot{
            width: 130px;
            height: 130px;
            background: url('/public/static/write/dot.png') no-repeat center;
            background-size: 100% 100%;
            position: absolute;
            top: 510px;
            left: 200px;
            z-index: 998;
            transition: transform 0.3s ease;
            cursor: pointer;
      &:hover{
      transform: scale(1.2);
      }
      
        }
        .pen{
            width: 240px;
            height: 240px;
            background: url('/public/static/write/pen.png') no-repeat center;
            background-size: 100% 100%;
            position: absolute;
            top: 350px;
            left: 297px;
            z-index:11;
            animation: pen 2s;
            
            animation-timing-function: ease-in-out
        }
        .cloud2{
           opacity: 0;
            width: 300px;
            height: 270px;
            background: url('/public/static/write/cloud.png') no-repeat center;
            background-size: 100% 100%;
            position: absolute;
            top: 440px;
            left: 180px;
            z-index: 1;
            rotate: 60deg;
            animation: cloud 2s;
            animation-timing-function: ease-in-out;
            
        }
    }
    .right{
        width: 400px;
        height: 700px;
       
        .third{
            margin-top: 40px;
            width: 330px;
            height: 320px;
            background-color: pink;
            background: url('/public/static/write/circle.png') no-repeat center;
            background-size: 100% 100%;
            position: relative;
            animation:  appear 1s;
            .word3{
                position: absolute;
                top:40px;
                right: 22px;
                width: 250px;
                height: 250px;
                
            }
        }
        .forth{
            width: 330px;
            height: 320px;
            background-color: pink;
            background: url('/public/static/write/circle.png') no-repeat center;
            background-size: 100% 100%;
            position: relative;
            animation:  appear 1s;
            .word4{
                position: absolute;
                top:40px;
                right: 22px;
                width: 250px;
                height: 250px;
                
            }
        }
    }
}

</style>

<script>

export default{
    data(){
        return{
            animationKey: 0,
            svalue:'',
            index1:1,
            index2:1,
            index3:1,
            index4:1,
            word1:[
                {id:1,src:"../../../static/word/w1.1.png"},
                {id:2,src:"../../../static/word/w1.2.png"},
                {id:3,src:"../../../static/word/w1.3.png"}
            ],
            word2:[
                {id:1,src:"../../../static/word/w2.1.png"},
                {id:2,src:"../../../static/word/w2.2.png"},
                {id:3,src:"../../../static/word/w2.3.png"}
            ],
            word3:[
                {id:1,src:"../../../static/word/w3.1.png"},
                {id:2,src:"../../../static/word/w3.2.png"},
                {id:3,src:"../../../static/word/w3.3.png"}
            ],
            word4:[
                {id:1,src:"../../../static/word/w4.1.png"},
                {id:2,src:"../../../static/word/w4.2.png"},
                {id:3,src:"../../../static/word/w4.3.png"}
            ]
           
        }
    },
methods:{

    check(){
            // 每次点击按钮时，更新 animationKey，以重新触发动画
            this.animationKey += 1;
        console.log(this.svalue);
      if(this.svalue=='南北异彩'){
            this.index1=1;
            this.index2=1;
            this.index3=1;
            this.index4=1;
      }
      if(this.svalue=="团结统一"){
           this.index1=2;
           this.index2=2;
           this.index3=2;
           this.index4=2;
      }
      if(this.svalue=="民族文化"){
           this.index1=3;
           this.index2=3;
           this.index3=3;
           this.index4=3;
      }
    },
 
    
}
}
</script>