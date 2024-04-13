<template>
    <div class="box-container" style="position: relative;">
       
        <div class="left" >
       <div class="author" >
         <div class="pic">
            <img :src="picL[indexL-1].pic1" style="margin-left: 20px;height:250px;cursor: pointer;object-fit: cover;" />
         </div>
         <div class="intro">
            <div style="font-size: 25px;font-weight:  570;margin-top: 15px;font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;">{{ picL[indexL-1].author }}</div>
           <div style="margin-top: 14px;font-size: 18px;font-weight: 500;">{{ picL[indexL-1].intro }}</div> 
        </div>
       </div>
       <div class="feat" style="width: 450px;line-height: 25px;font-size: 18px;font-family:Verdana, Geneva, Tahoma, sans-serif;margin-left: 20px;"><span style="font-size: 25px;">画风:</span>{{ picL[indexL-1].fet }}</div>
       <div class="work" style="width: 490px;height: 200px;display:flex;margin-top: 70px;align-items: center;justify-content: center;">
        <div class="pic1">
            <img :src="picL[indexL-1].pic2" style="margin-left: 10px;height:300px;cursor: pointer; flex: 0 0 auto;" @click="openLightbox(picL[indexL-1].pic2)"/>
        </div>
        <div class="pic2" v-if="picL[indexL-1].pic3">
            <img :src="picL[indexL-1].pic3" style="margin-left: 20px;cursor: pointer; width: 330px;object-fit: cover;flex:1" @click="openLightbox(picL[indexL-1].pic3)" />
        </div>
       </div>

        </div>
       
      <div class="middle">  
        <div class="bamboo">
           
        </div>
        <!-- 南方绘画 -->
        <div class="first"  :class="{ activeL: indexL === '1' }" @click="toOne"><span>董源</span></div>
        <div class="second" :class="{ activeL: indexL === '2' }" @click="toTwo"><span>巨然</span></div>
        <div class="third" :class="{ activeL: indexL === '3' }" @click="toThird"><span>米芾</span></div>
       <!-- 北方绘画 -->
        <div class="forth"  :class="{ activeR: indexR === '1' }" @click="toForth"><span>荆浩</span></div>
        <div class="fifth"  :class="{ activeR: indexR === '2' }" @click="toFifth"><span>关仝</span></div>
        <div class="sixth"  :class="{ activeR: indexR === '3' }" @click="toSixth"><span>李成</span></div>
        <div class="seventh"  :class="{ activeR: indexR === '4' }" @click="toSeventh"><span>范宽</span></div>
    </div> 
    <div class="right"  >
        <div class="author">
       
         <div class="intro" >
            <div style="font-size: 25px;font-weight:  570;margin-top: 15px;font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;margin-left: 80px;">{{ picR[indexR-1].author }}</div>
           <div style="margin-top: 14px;font-size: 18px;font-weight: 500;">{{ picR[indexR-1].intro }}</div> 
        </div>
        <div class="pic">
            <img :src="picR[indexR-1].pic1" style="margin-left: 10px;height:270px;cursor: pointer;object-fit: cover;" />
         </div>
       </div>
       <div class="feat" style="margin-top: 19px;width: 450px;line-height: 25px;font-size: 18px;font-family:Verdana, Geneva, Tahoma, sans-serif;margin-left: 20px;"><span style="font-size: 25px;">画风:</span>{{ picR[indexR-1].fet }}</div>
       <div class="work" style="width: 300px;height: 200px;margin-top: 45px;display: flex;justify-content: center;align-items: center;margin-left: 50px;">
        <div class="pic1">
            <img :src="picR[indexR-1].pic2" style="margin-left: 10px;height: 270px;cursor: pointer;" @click="openLightbox(picR[indexR-1].pic2)"/>
        </div>
        <div class="pic2" v-if="picR[indexR-1].pic3">
            <img :src="picR[indexR-1].pic3" style="margin-left: 20px;cursor: pointer;height: 280px;" @click="openLightbox(picR[indexR-1].pic3)"/>
        </div>
       </div>

    </div>
    <div class="flag" v-if="show5" :key="animationKey"></div>
    <div class="bottom" @click="open">

    </div>
        <div class="tohome">
                <label  for="name" class="label"  @click="$router.push('/Draw')" >
                  <svg t="1710914231707" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1832" width="45" height="45"><path d="M653.1 305.1H182.7l139.9-139.9c14-14 14-35 0-49s-35-14-49 0L74.3 313.8c-7 7-10.5 15.7-10.5 24.5s3.5 17.5 10.5 24.5l197.6 197.6c14 14 35 14 49 0s14-35 0-49L184.5 375h468.6c131.1 0 236.1 104.9 236.1 236.1s-104.9 236-236.1 236H294.7c-19.2 0-35 15.7-35 35 0 19.2 15.7 35 35 35h358.5c169.6 0 306-136.4 306-306-0.1-169.6-136.5-306-306.1-306z" p-id="1833" fill="#707070"></path></svg>
                </label>
                </div>

                 <!-- 图片查看器 -->
    <div class="lightbox" v-if="showLightbox">
        <div class="tohome1">
                <label  for="name" class="label1" @click="closeLightbox" >
                    <svg t="1712817521156" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3518" width="35" height="35"><path d="M86.016 0l-83.968 70.656c149.504 111.616 288.768 239.616 411.136 367.616-187.392 188.928-334.336 374.784-411.648 449.536l159.744 133.632c56.832-117.248 180.224-294.912 345.6-481.28 165.376 187.392 289.28 366.08 346.112 483.84 0 0 155.648-165.376 169.472-139.776C962.56 816.64 816.128 620.032 619.52 418.816c112.64-115.712 239.104-230.4 374.272-331.264l-36.864-68.608c-153.088 76.288-299.008 189.44-430.08 309.76-132.096-125.44-281.6-244.736-440.832-328.704z" p-id="3519" fill="#ffffff"></path></svg>
                </label>
                </div>
      
      <img :src="src" :alt="'Enlarged Image'">
    </div>
    <div class="lightbox1" v-if="showLightbox1" style="display: flex;">
        <div class="tohome2">
                <label  for="name" class="label2" @click="closeLightbox1" >
                    <svg t="1712817521156" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3518" width="35" height="35"><path d="M86.016 0l-83.968 70.656c149.504 111.616 288.768 239.616 411.136 367.616-187.392 188.928-334.336 374.784-411.648 449.536l159.744 133.632c56.832-117.248 180.224-294.912 345.6-481.28 165.376 187.392 289.28 366.08 346.112 483.84 0 0 155.648-165.376 169.472-139.776C962.56 816.64 816.128 620.032 619.52 418.816c112.64-115.712 239.104-230.4 374.272-331.264l-36.864-68.608c-153.088 76.288-299.008 189.44-430.08 309.76-132.096-125.44-281.6-244.736-440.832-328.704z" p-id="3519" fill="#ffffff"></path></svg>
                </label>
                </div>
       <div class="lefta">
        <div class="drawer">
          <div class="pic4"></div>
          <div class="name">黄公望</div>
          <div class="into" >
           （1269年9月12日—1354年11月10日） ，元代画家。自称浙江平阳人。陶宗仪《辍耕录》称其“本姓陆”，出继温州平阳黄氏为义子，因改姓黄，名公望，字子久，号一峰、大痴道人等。
          </div>
          
        </div>
        <div class="fit">黄公望工书法，通音律，善诗词散曲。尤擅画山水.水墨、浅绛俱作，以草籀奇字法入画，气势雄秀，笔简神完，自成一家，得“峰峦浑厚，草木华滋”之评。名列“元四家”之首。</div>
        <div class="fit1"><span style="font-size: 22px;">画风：</span>在绘画风格上，黄公望崇尚自然，讲求写意。他重视对景写生，强调对实际景物的观察以及生活中的真实感受，故其所画的山水有着很强的生机和活力。他的画笔墨简远逸迈，风格苍劲高旷。他创浅绛山水，画风雄秀对明清山水画影响甚大。</div>
     
       </div>
        <div class="righta">
            <div class="title">
                《富春山居图》
            </div>
            <div class="wr">
               <div class="left2"></div>
               <div class="right2"></div>
            </div>
         </div>
         <div class="total"></div>
         <div class="word1">前半卷：剩山图，现收藏于浙江省博物馆</div>
         <div class="word2">后半卷：无用师卷，现藏台北故宫博物院</div>
    </div>
     </div>
</template>


<style lang="less" scoped>
 @keyframes appear3{
  0%{
    transform: translateY(-100px);
    
    opacity: 0;
  }
100%{
  
  transform: translateY(0px);
  opacity: 1;
}
 }
 .flag{
  width: 60px;
  height: 60px;
  background: url('/public/static/flag.png') no-repeat center;
  background-size: 100% 100%;
  position: absolute;
  bottom:20px;
  left:720px;
  z-index: 999;
  animation: appear3 2s;
 }
.word1{
    font-size: 20px;
    font-weight: 570;
    position: absolute;
    top:50px;right: 50px;
    margin-top: 140px;
    color: rgb(220, 208, 208);
}
.word2{
    font-size: 20px;
    font-weight: 570;
    position: absolute;
    top:300px;right: 150px;
    margin-top: 140px;
    color: rgb(220, 208, 208);
}
.name{
    position: absolute;
    top:60px;
    left: 270px;
    height: 30px;
    font-size: 30px;
    font-weight: 570;
    color:rgb(220, 208, 208);
}
.wr{
    width: 800px;
    height: 470px;
    margin-top: 40px;
 .left2{
    width: 560px;
    height: 130px;
    background: url('/public/static/fu/zhe.jpeg') no-repeat center ;
    background-size: 100% 100%;
    float: left;
    object-fit: cover;
    margin-left: 5px;
    margin-top: 10px;
 }
 .right2{
    position: absolute;
    top:280px;
    right: 530px;
    width: 360px;
    height: 340px;
    background: url('/public/static/fu/tai.jpeg') no-repeat center ;
    background-size: 100% 100%;
    float: left;
    object-fit: cover;
    margin-left: 50px;
    
 }
}
.title{
    font-size: 40px;
    font-weight: 570;
    margin-top: 15px;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    margin-left: 80px;
    z-index:999;
    color:rgb(218, 218, 205);
}
.total{
    position: absolute;
    bottom: 25px;
    width: 95%;
    margin-left: 30px;

    height: 10%;
    background: url('/public/static/fu/total.png') no-repeat center;
    background-size: 100% 100%;
}
.righta{
    width: 800px;
    height: 700px;
    
    margin-top: 20px;
}
.drawer{
    width: 500px;
    height: 370px;
    
    margin-left: 40px;
    margin-top: 40px;
    
    display: flex;
    .pic4{
        width: 200px;
        height: 300px;
        background: url('/public/static/writer/5v.png') no-repeat center;
    background-size: 100% 100%;
    }
    .into{
        width: 200px;
        height: 370px;
        font-size: 18px;
        font-weight: 500;
        margin-left: 20px;
        color:rgb(220, 208, 208);
        margin-top: 70px;
    }

}
.fit{
       position: absolute;
       bottom: 180px;
        width: 400px;
        margin-left: 100px;
        height: 180px;
        font-size: 18px;
        font-weight: 500;
        color:rgb(220, 208, 208);
    }
.fit1{
    position: absolute;
       bottom: 70px;
        width: 400px;
        margin-left: 100px;
        height: 180px;
        font-size: 18px;
        font-weight: 500;
        color:rgb(220, 208, 208);
}

.bottom{
    width: 200px;
    height: 200px;
    background: url('/public/static/bottom.png') no-repeat center;
    background-size: 100%;
    position: absolute;
    bottom:-80px;
    left: 640px;
    cursor: pointer;
    &:hover{
        
        scale:1.1;
    }
}
.lightbox{
    position: fixed;
    left:0px;
    top:0px;
    width: 100%;
    height: 100vh;
    background-color: rgba(82, 80, 80, 0.8);
     z-index:969;
     display: flex;
     align-items: center;
     justify-content: center;
}

.lightbox img {
  max-width: 90%;
  max-height: 90%;
  
  z-index: 890;
}

.closeBtn {
  position: absolute;
  top: 20px;
  right: 20px;
  cursor: pointer;
  color: white;
  width: 50px;
  height: 50px;
  font-size: 20px;
  z-index:999;
}
.lightbox1{
    position: fixed;
    left:0px;
    top:0px;
    width: 100%;
    height: 100vh;
    background-color: rgba(82, 80, 80, 0.8);
     z-index:969;

}
@keyframes appear1{
    0%{
        transform: translateX(300px);
        opacity: 0;
        scale: 0.8;
        transform: scaleX(-1); /* 水平翻转 */
    }
    100%{
        transform: translateX(0);
        opacity: 1;
        scale: 1;
        transform: scaleX(-1); /* 水平翻转 */
    }
}
@keyframes appear2{
    0%{
        transform: translateX(100px);
        opacity: 0;
        scale: 0.8;
      
    }
    100%{
        transform: translateX(0);
        opacity: 1;
        scale: 1;
      
    }
}
@keyframes appear{
    0%{
        transform: translateY(200px);

    }
    100%{
        transform: translateY(0);
    }
}
.work{

  animation: appear 1s ease-in-out;
}

.activeL{
    scale: 1.1;
    color: #db8607;
}
.activeR{
    scale: 1.1;
    color: #db8607;
}

.tohome1{
    position:absolute;
    top: 140px;
    right:410px;
         width: 50px;
         height: 50px;
         border-radius: 50%;
         margin-left: 20px; 
        padding-top: 10px;
        padding-left: 14px;
         border:1px solid #dfd8d8;
         transition: transform 0.3s ease;
      &:hover{
      transform: scale(1.2);
      }
      label{
        cursor: pointer;
      }
        }
 .tohome2{
    position:absolute;
    top: 40px;
    right:40px;
         width: 50px;
         height: 50px;
         border-radius: 50%;
         margin-left: 20px; 
        padding-top: 10px;
        padding-left: 14px;
         border:1px solid #dfd8d8;
         transition: transform 0.3s ease;
      &:hover{
      transform: scale(1.2);
      }
      label{
        cursor: pointer;
      }
        }
.tohome{
    position:absolute;
    right: 20px;
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
        .left{
            width: 570px;
            height: 700px;
            padding-left: 10px;
            .author{
               
                margin-left: 20px;
                width: 450px;
                height: 270px;
                display: flex;
                .pic{
                    
                    height: 270px;
                    
                   
                }
                .intro{
                    
                    width: 200px;
                    margin-left: 10px;
                    font-size: 15px;
                    padding: 10px;
                    font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
                    line-height: 25px;
                    
                
                }
                
            }
        }
        .right{
            width: 490px;
            height: 700px;
           
            margin-left: 540px;
            .author{
                margin-left: 20px;
                width: 450px;
                height: 270px;
                display: flex;
                .pic{
                    width: 270px;
                    height: 270px;
                    
                   
                }
                .intro{
                    margin-left: 30px;
                    
                    width: 200px;
                   
                    font-size: 15px;
                    padding: 10px;
                    font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
                    line-height: 25px;
                    
                
                }
                
            }
            
        }
    .bamboo{
        position: absolute;
        width: 300px;
        height: 600px;
        left: 540px;
        top:90px;
        background:url('/public/static/draw/bamboo.png') no-repeat center;
        background-size: 100% 100%;
      
        
    }
    .first{
        animation: appear1 1s ease-in-out;
        position: absolute;
            width: 230px;
            height: 70px;
            left: 540px;
            top: 250px; 
            
            background: url('/public/static/draw/dot.png') no-repeat center;
            background-size: 100% 100%;
            transform: scaleX(-1); /* 水平翻转 */
            cursor: pointer;
            &:hover{
               scale: 1.1;
               span{color: #db8607;}
            }

            span{
                color:white;
                position: absolute;
                left: 50px;
                top: 17px;
                font-size: 30px;
                font-weight: 700;
                font-family: 'Courier New', Courier, monospace;
                transform: scaleX(-1);
          
            }
        }
        
        .second{
            animation: appear1 1s ease-in-out;
            position: absolute;
            width: 230px;
            height: 70px;
            left: 510px;
            top: 390px; 
            background: url('/public/static/draw/dot.png') no-repeat center;
            background-size: 100% 100%;
            transform: scaleX(-1); /* 水平翻转 */
            cursor: pointer;
            &:hover{
               scale: 1.1;
               span{color: #db8607;}
            }
            span{
                color: white;
                position: absolute;
                left: 50px;
                top: 17px;
                font-size: 30px;
                font-weight: 700;
                font-family: 'Courier New', Courier, monospace;
                transform: scaleX(-1);
               
            }
        }
        .third{
            animation: appear1 1s ease-in-out;
            position: absolute;
            width: 230px;
            height: 70px;
            left: 510px;
            top: 550px; 
            background: url('/public/static/draw/dot.png') no-repeat center;
            background-size: 100% 100%;
            transform: scaleX(-1); /* 水平翻转 */
            cursor: pointer;
            &:hover{
               scale: 1.1;
               span{color: #db8607;}
            }
            span{
                color: white;
                position: absolute;
                left: 50px;
                top: 17px;
                font-size: 30px;
                font-weight: 700;
                font-family: 'Courier New', Courier, monospace;
                transform: scaleX(-1);
               
            }
          
        }

        .forth{
            animation: appear2 1s ease-in-out;
            position: absolute;
            width: 230px;
            height: 70px;
            left: 850px;
            top: 100px; 
            background: url('/public/static/draw/dot.png') no-repeat center;
            background-size: 100% 100%;
            cursor: pointer;
            &:hover{
               scale: 1.1;
               span{color: #db8607;}
            }
            span{
                color: white;
                position: absolute;
                left: 50px;
                top: 17px;
                font-size: 30px;
                font-weight: 700;
                font-family: 'Courier New', Courier, monospace;
          
            }
        }
        
        .fifth{
            animation: appear2 1s ease-in-out;
            position: absolute;
            width: 230px;
            height: 70px;
            left: 860px;
            top: 240px; 
            background: url('/public/static/draw/dot.png') no-repeat center;
            background-size: 100% 100%;
            cursor: pointer;
            &:hover{
               scale: 1.1;
               span{color: #db8607;}
            }
            span{
                color: white;
                position: absolute;
                left: 50px;
                top: 17px;
                font-size: 30px;
                font-weight: 700;
                font-family: 'Courier New', Courier, monospace;
          
            }
        }
        .sixth{
            animation: appear2 1s ease-in-out;
            position: absolute;
            width: 230px;
            height: 70px;
            left: 820px;
            top: 360px; 
            background: url('/public/static/draw/dot.png') no-repeat center;
            background-size: 100% 100%;
            cursor: pointer;
            &:hover{
               scale: 1.1;
               span{color: #db8607;}
            }
            span{
                color: white;
                position: absolute;
                left: 50px;
                top: 17px;
                font-size: 30px;
                font-weight: 700;
                font-family: 'Courier New', Courier, monospace;
               
               
            }
        }
        .seventh{
            animation: appear2 1s ease-in-out;
            position: absolute;
            width: 230px;
            height: 70px;
            left: 820px;
            top: 530px; 
            background: url('/public/static/draw/dot.png') no-repeat center;
            background-size: 100% 100%;
            rotate: 16deg;
            cursor: pointer;
            &:hover{
               scale: 1.1;
               span{color: #db8607;}
            }
            span{
                color: white;
                position: absolute;
                left: 50px;
                top: 17px;
                font-size: 30px;
                font-weight: 700;
                font-family: 'Courier New', Courier, monospace;
            
               
            }
        }

  }

</style>

<script>

export default{
    
    data(){
        return{
            animationKey: 0,
            show5:false,
            indexL:'1',
            indexR:'3',
            showLightbox1:false,
            showLightbox: false, // 控制图片查看器的显示状态
             src: '' ,// 当前显示的图片索引
            picL:[
                {id:1,author:'董源',intro:'（约937—约962），字叔达，洪州钟陵（今江西省南昌市进贤县钟陵乡）人。五代绘画大师，南派山水画开山鼻祖，与李成、范宽，并称“北宋三大家”。',fet:'善于山水画，兼工人物、禽兽。其山水初师荆浩，笔力沉雄，后以江南真山实景入画，不为奇峭之笔。山头苔点细密，水色江天，云雾显晦，峰峦出没，汀渚溪桥，率多真意。',
                pic1:'../../../static/draw/first/author.png',pic2:'../../../static/draw/first/pic1.png',pic3:'../../../static/draw/first/pic2.png'
            },
            {id:2,author:'巨然',intro:'生卒年不详，钟陵（今江西南昌）人，一说江宁（江苏南京）人。五代至北宋初画家，僧人。淳化（990-995年）年间，他在学士院北壁画烟岚晓景，受到士大夫称许。',fet:'擅画山水，师法董源，专画江南山水，所画峰峦 ，置之细径危桥茅屋，得野逸清静之趣，深受文人喜爱。以长披麻皴画山石，笔墨秀润，为董源画风之嫡传，并称“董巨”,对元明清以至近代的山水画发展有极大影响。',
            pic1:'../../../static/draw/second/author.png',pic2:'../../../static/draw/second/pic1.png'
        },{
            id:3,author:'米芾',intro:'(1051年-1107年)，初名黻，后改芾，字元章，祖籍太原，出生于襄阳。时人号海岳外史，又号鬻熊后人、火正后人。北宋书法家、画家、书画理论家。与蔡襄、苏轼、黄庭坚并称“宋四家”。',fet:'米芾的山水画风格强调“以诗入画”，在画作中融入诗意，追求意境与形象的和谐统一。他的山水画多采用淡墨，线条流畅，着重表现山水的灵动与生机。',
            pic1:'../../../static/draw/third/author.png',pic2:'../../../static/draw/third/pic1.png'
        }
            ],
            picR:[
            {id:1,author:'荆浩',intro:'（约850-911年），字浩然，号洪谷子，河内沁水（一说河南济源人 ，一说山西沁水县人，)唐末五代时期著名画家，北方山水画派之祖。',fet:'善于山水画，师从于张璪，吸取北方山水雄峻气格，作画“有笔有墨，水晕墨章”，勾皴之笔坚凝挺峭，表现出一种高深回环、大山堂堂的气势。',
                pic1:'../../../static/draw/forth/author.png',pic2:'../../../static/draw/forth/pic1.png'
            },
            {id:1,author:'关仝',intro:'(约907-960年)，字号不详，京兆长安（陕西西安）人。五代时期杰出画家，与荆浩、董源、巨然并称“四大山水画家”。',fet:'工画山水，喜作秋山寒林、村居野渡、，不复有市朝抗尘走俗之状。笔法简劲，气势极壮，石体坚凝，山峰峭拔，杂树丰茂，有枝无干，时称“关家山水”。',
                pic1:'../../../static/draw/fifth/author.png',pic2:'../../../static/draw/fifth/pic1.png',pic3:'../../../static/draw/fifth/pic2.png'
            },
            {id:1,author:'李成',intro:'（919~967年），字咸熙，号营丘，京兆长安（今陕西省西安市）人。五代宋初画家，与董源、范宽并称“北宋三大家”，苏州刺史李鼎的孙子。',fet:'擅山水，多画郊野平远旷阔之景。多作平远寒林，画法简练，笔势锋利，好用淡墨，有“惜墨如金”之称；这种“石如云动”的形象成为以后画家用李成笔法作画的重要风格标记。',
                pic1:'../../../static/draw/sixth/author.png',pic2:'../../../static/draw/sixth/pic1.png',pic3:'../../../static/draw/sixth/pic2.png'
            },
            {id:1,author:'范宽',intro:'(约950—约1032)，又名中正，字中立，陕西华原人，宋代绘画大师。因为性情宽厚豁达，时人称之为“宽”，遂以范宽自名。',fet:'其画峰峦浑厚端庄，气势壮阔伟岸，令人有雄奇险峻之感。用笔强健有力，皴多雨点、豆瓣、钉头，山顶好作密林，常于水边置大石巨岩，屋宇笼染黑色。作雪景亦妙。',
                pic1:'../../../static/draw/seventh/author.png',pic2:'../../../static/draw/seventh/pic1.png',pic3:'../../../static/draw/seventh/pic2.png'
            },

            ]
        }
    },
    methods:{
        open() {
    this.show5 = true;
    this.animationKey++;
    setTimeout(() => {
        this.showLightbox1 = true;
        this.show5 = false;
    }, 2400)
},
        toOne(){
            this.indexL='1';
          
        },
        toTwo(){
            this.indexL='2';
       
        },
        toThird(){
            this.indexL='3';
        
        },
        toForth(){
            this.indexR='1';
    
        },
        toFifth(){
            this.indexR='2';
    
        },
        toSixth(){
            this.indexR='3';
      
        },
      
        toSeventh(){
            this.indexR='4';
           
        },
         // 打开图片查看器
    openLightbox(index) {
      this.src = index;
      this.showLightbox = true;
      
    },
    // 关闭图片查看器
    closeLightbox() {
      this.showLightbox = false;
      
    },
    closeLightbox1() {
      this.showLightbox1 = false;
      
    }
  },
 
        
    }


</script>