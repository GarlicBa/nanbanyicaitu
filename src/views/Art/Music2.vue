<template>
   <div class="box-container">
     
       <div class="title">
        <div class="left">
          <div class="word1">南北方音乐特点云图</div>
          
          
       <e-charts :option="option1" style="width: 360px;height: 400px;"></e-charts>
          <!-- <h2 style="margin-left: 100px;">南方音乐</h2>
            <p style="font-family: 'Courier New', Courier, monospace;font-size: 20px;font-weight: 100px;color: black;margin-left: 20px;"><b style="font-size: 22px;">特点:    </b>含蓄、内在，善用比、兴；其旋律多表现得婉转、流畅、细腻、抒情</p>
           <p style="font-family: 'Courier New', Courier, monospace;font-size: 20px;font-weight: 600px;color: black;margin-left: 20px;"><b style="font-size:22px;">代表作品：</b>江南丝竹《紫竹调》
《浏阳河》
广东的小调民歌《落水天》
海南山歌《风吹山上树叶飘》

</p>
        -->
   
        </div>
        <div class="video">
          <iframe class="video2" src="//player.bilibili.com/player.html?aid=833891155&bvid=BV1H34y1F7wj&cid=1344413985&p=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
        </div>
        <div class="right" style="position: relative;">
          <div class="word2">南北方音乐代表作品</div>
          <!-- <h2 style="margin-left: 100px;">北方音乐</h2>
            <p style="font-family: 'Courier New', Courier, monospace;font-size: 20px;font-weight: 100px;color: black;margin-left: 20px;"><b style="font-size: 22px;">特点:    </b>小调柔美，哀怨欢快，刚健有力、憨直幽默,俨然一种雄浑酣畅的宽广格局</p>
           <p style="font-family: 'Courier New', Courier, monospace;font-size: 20px;font-weight: 600px;color: black;margin-left: 20px;"><b style="font-size:22px;">代表作品：</b>《夜深沉》
《百鸟朝凤》
《鄂伦春的生活是艳阳天》
《喜相逢》 
《荫中鸟》 


</p> -->
       <e-charts :option="option2" style="width: 350px;height:300px;"></e-charts>
        </div>
       </div>
       <div class="main">
      <div class="line1">
        <div class="box1" @click="playAudio1" style="position:relative;font-size: 30px;font-weight: 200px;font-family: 'Courier New', Courier, monospace;">
          <p style="color:white;position: absolute;top: -20px;left: 7px;background-color: black;border-radius: 10px;">南音</p>
        
        </div>
        <div class="box2" @click="playAudio2" style="position:relative;font-size: 30px;font-weight: 200px;font-family: 'Courier New', Courier, monospace;">
          <p style="position: absolute;top: -21px;left: 7px;background-color: black;border-radius: 10px;color:white">琵琶</p>
      </div>
        <div class="box3" @click="playAudio3" style="color: #fff;position:relative;font-size: 30px;font-weight: 900px;font-family: 'Courier New', Courier, monospace;">
        <p style="position: absolute;bottom: -20px;right: 10px;background-color: black;border-radius: 10px;">京剧</p>
        </div>
        <div class="box4" @click="playAudio4" style="position:relative;color:white;font-size: 30px;font-weight: 200px;font-family: 'Courier New', Courier, monospace;">
        <p style="background-color: black;border-radius: 10px;width: 30px;position: absolute;right: 5px;top:2px;">评弹</p>
        </div>
      </div>
      <div class="line2">
        <div class="box1" @click="playAudio5" style="color:#fff;font-size: 30px;font-weight: 200px;font-family: 'Courier New', Courier, monospace;">
          <p style="position: absolute;left: 0px;top: -20px;background-color: black;border-radius: 10px;">古筝</p>
        </div>
        
        <div class="box2" @click="playAudio6" style="color:#fff;font-size: 30px;font-weight: 200px;font-family: 'Courier New', Courier, monospace;" >
          <p style="position: absolute;right: 0px;bottom: -20px;background-color: black;border-radius: 10px;">胡琴</p>
        </div>
        
      </div>
      <div class="logo"></div>
      <div class="bar" style="opacity: 1;width: 800px;">
        <audio  ref="audioPlayer1" controls>
  <source src="../../../public/static/music/nanyin.ogg" type="audio/ogg">
  
</audio>
<audio  ref="audioPlayer2" controls>
  <source src="../../../public/static/music/pipa.ogg" type="audio/ogg">
  
</audio>
<audio  ref="audioPlayer3" controls>
  <source src="../../../public/static/music/jinju.ogg" type="audio/ogg">
  
</audio>
<audio  ref="audioPlayer4" controls>
  <source src="../../../public/static/music/pintan.ogg" type="audio/ogg">
  
</audio>
<audio  ref="audioPlayer5" controls>
  <source src="../../../public/static/music/guzhen.ogg" type="audio/ogg">
  
</audio>
<audio  ref="audioPlayer6" controls>
  <source src="../../../public/static/music/huqin.ogg" type="audio/ogg">
  
</audio>

      </div>
      <div class="tohome">
                <label  for="name" class="label"  @click="$router.push('/artmain')" >
                  <svg t="1710914231707" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1832" width="45" height="45"><path d="M653.1 305.1H182.7l139.9-139.9c14-14 14-35 0-49s-35-14-49 0L74.3 313.8c-7 7-10.5 15.7-10.5 24.5s3.5 17.5 10.5 24.5l197.6 197.6c14 14 35 14 49 0s14-35 0-49L184.5 375h468.6c131.1 0 236.1 104.9 236.1 236.1s-104.9 236-236.1 236H294.7c-19.2 0-35 15.7-35 35 0 19.2 15.7 35 35 35h358.5c169.6 0 306-136.4 306-306-0.1-169.6-136.5-306-306.1-306z" p-id="1833" fill="#707070"></path></svg>
                </label>
                </div>
       </div>
       
   </div>
</template>


<style lang="less" scoped>
.word1{
  position: absolute;
  top:-3px;
  left: 40px;
    font-size: 25px;
    font-weight: 200px;
    font-family: 'Courier New', Courier, monospace;
    margin-left: 20px;
    
    color: black;
}
.word2{
   position: absolute;
   top:10px;
   right:6px;
   font-size: 25px;
    font-weight: 200px;
    font-family: 'Courier New', Courier, monospace;
    writing-mode: vertical-lr;
}
/* 自定义滚动条样式 */
::-webkit-scrollbar {
  width: 0; /* 将滚动条宽度设为0 */
  height: 0; /* 将滚动条高度设为0 */
}
 .video{
  width: 680px;
  height: 380px;
  .video2{
    width: 670px;
    height: 430px;
  }
  
  
 }

 audio{
        width: 700px;
        height: 30px;
        position: absolute;
        left: 30px;
        top: 25px;
        display: none;
        
    }


  
 audio::-webkit-media-controls-timeline {
        width: 900px; /* 设置进度条的高度 */
    }

    audio::-webkit-media-controls-current-time-display {
        color: black;
        /* 设置当前时间的颜色 */
    }

    audio::-webkit-media-controls-time-remaining-display {
        color: #fff; /* 设置剩余时间的颜色 */
    }
    .bar{
      position: relative;
    audio{
        width: 700px;
        height: 30px;
        position: absolute;
        left: 30px;
        top: 25px;
        display: none;
        
    }
  }
 @keyframes rotate {
     0%,100%{
         transform: rotate(18deg);
     }
     50%{
         transform: rotate(0deg);
     }
 }
.box-container{
    width: 100%;
    height: 100%;
    background: url('/public/static/data/bk.jpg') no-repeat center center;
    background-size: 100% 100%;
    padding: 10px;
    overflow: auto; /* 设置溢出时显示滚动条 */
      border: 1px solid #ccc; /* 添加边框样式 */
    .title{
        height:400px;
       display:flex;
        width:100%;
        margin-top: 40px;
        .left{ 
        
            width:360px;
            margin-left: 30px;
            position: relative;
        }
     
        .right{
            width: 330px;
            height:400px;
            margin-left: 10px;
            background-color: rgb(194, 190, 185);
            border-radius: 10px;
            display: flex;
            align-items: center;
        }
    }
    .main{
        width: 100%;
        height: 500px;
      position: relative;
        .line1{
          margin-top: 65px;
            height:230px;
            width:100%;
            display:flex;
            align-items: center;
            justify-content: space-between;
            .box1{
                height:220px;
                width:220px;
               
                margin-left: 40px;
                background: url('/public//static/music/nanyin.jpeg') no-repeat center center;
               background-size: 100% 100%;
               transition: transform 0.3s ease;
               border-radius: 10px;
               cursor: pointer;
      &:hover{
      transform: scale(1.2);
      }
   

            }
            .box2{
                height:220px;
                width:220px;
               
                margin-right: 180px;
                background: url('/public//static/music/pipa.webp') no-repeat center center;
               background-size: 100% 100%;
               transition: transform 0.3s ease;
               border-radius: 10px;
               cursor: pointer;
      &:hover{
      transform: scale(1.2);
      }
   
            }
            .box3{
                height:220px;
                width:220px;
                background: url('/public//static/music/jinju.webp') no-repeat center center;
               background-size: 100% 100%;
               transition: transform 0.3s ease;
               border-radius: 10px;
               cursor: pointer;
      &:hover{
      transform: scale(1.2);
      }
   
            }
            .box4{
                margin-right: 40px;
                height:220px;
                width:220px;
                background: url('/public//static/music/pintan.jpg') no-repeat center center;
               background-size: 100% 100%;
               transition: transform 0.3s ease;
               border-radius: 10px;
               cursor: pointer;
      &:hover{
      transform: scale(1.2);
      }
   
                 
            }
        }
        .line2{
            height:230px;
            width:100%;
            display:flex;
            align-items: center;
            margin-top: 18px;
          
            position: relative;
            .box1{
                position: absolute;
                left: -140px;
                bottom: 0px;
                margin-left: 170px;
                height:240px;
                width:240px;
                background: url('/public//static/music/guzheng.webp') no-repeat center center;
               background-size: 100% 100%;
               transition: transform 0.3s ease;
               border-radius: 10px;
               cursor: pointer;
      &:hover{
      transform: scale(1.2);
      }
                
            }
            .box2{
                position: absolute;
                right: -150px;
                bottom: 0px;
                margin-right: 180px;
                height:240px;
                width:240px;
                background: url('/public//static/music/huqin.jpeg') no-repeat center center;
               background-size: 100% 100%;
               transition: transform 0.3s ease;
               border-radius: 10px;
               cursor: pointer;
      &:hover{
      transform: scale(1.2);
      }
            }
        }
        .logo{
            position: absolute;
            top: -10px;
            left: 550px;
            height:370px;
            width:370px;
            background: url('/public/static/art/logo.png') no-repeat center center;
            background-size: 100% 110%;
            margin-top: 70px;
            opacity: 0.8;
            transform: rotate(18deg);
            animation: rotate 2s infinite linear;
        }
        .bar{
            position: absolute;
            bottom:10px;
            
            height:50px;
            margin-left: 360px;
            width:50%;
            .audio{
                margin-left: 50px;
            }
        }
        .tohome{
    position:fixed;
    right: 26px;
    top:20px;
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
    }
}


</style>


<script>


let nameList = ["含蓄", "内在", "婉转", "流畅", "细腻", "抒情", "小调柔美", "哀怨欢快", "刚健有力", "憨直幽默","雄浑酣畅"];
let valueList = [30, 50, 60, 65, 70, 80, 90, 100, 120, 150,11];

let colorList = ['#14A8FF', '#397EF0']
let fontSizeList = [12, 18, 11, 20,23,16,14,20,13,19,23]
let data = [];

nameList.map((item, index) => {
   let i = parseInt(index / 6);
   data.push(
      {
         name: item,
         value: valueList[i],
         label: {
            color: colorList[i],
            fontSize: fontSizeList[index]
         }
      }
   )
})


  export default {
    data() {
    return {
      audioSrc: '',
      option1:{
        color:colorList,
   graphic: [
      {
         id: "baPng",
         type: "image",
         left: "center",
         top: "center",
         style: {
            image:"../../../static/back1.png",
            width:"340",
            height:"340"
         }
      }
   ],

   series: [
      {
         type: 'graph',
         layout: 'force',
         force: {
            repulsion: 85,// 节点之间的斥力因子
            edgeLength: 85, //边的两个节点之间的距离
            layoutAnimation: true,
            friction: 0.3
         },
         roam: false,
         symbol: '',
         symbolSize: 0,
         label: {
            show: true,
            position: 'inside',
           
            fontSize: 16,
            color: '#fff'
         },
         
         draggable: false,
         data: data
      }
   ]
},option2:{
      tooltip: {
        trigger: 'item',
        triggerOn: 'mousemove'
      },
      series: [
        {
          type: 'tree',
          data: [
            {name:"南北音乐",
             children:[
              {
            name:'南方音乐',
            children:[
              {
                name:"江南丝竹",
                children:[{
                  name:'《紫竹调》'
                },
               {
                name:'《浏阳河》'
               }
              ]
              },
              {
                name:"广东的小调民歌",
                children:[{
                  name:'《落水天》'
                },
              
              ]
              },
              {
                name:"海南山歌",
                children:[{
                  name:'《风吹山上树叶飘》'
                },
              
              ]
              }
            ]
          },
          {
            name:'北方音乐',
            children:[
            {
                name:"《鄂伦春的生活是艳阳天》",

              },
              {
                name:"《喜相逢》 ",

              },
              {
                name:"《荫中鸟》",

              },
               
              ]
              }
            ]
          },
        
        ],
        left: '2%',
          right: '2%',
          top: '6%',
           bottom:'54%',
          symbol: 'emptyCircle',
          orient: 'vertical',
          expandAndCollapse: true,
          label: {
            position: 'top',
            rotate: 0,
            verticalAlign: 'middle',
            align: 'right',
            fontSize: 13
          },
          leaves: {
            label: {
              position: 'bottom',
              rotate: -90,
              verticalAlign: 'middle',
              align: 'left'
            }
          },
          animationDurationUpdate: 750
          }
            ],
      
      
        }
      
    }

    }
  ,
    methods: {
        playAudio1() {
          this.$refs.audioPlayer1.style.display = 'block';
          this.$refs.audioPlayer2.style.display = 'none';
          this.$refs.audioPlayer6.style.display = 'none';    
          this.$refs.audioPlayer3.style.display = 'none';
          this.$refs.audioPlayer4.style.display = 'none';
          this.$refs.audioPlayer5.style.display = 'none';
         
            this.$refs.audioPlayer1.load();
            this.$refs.audioPlayer1.play();
            this.$refs.audioPlayer2.pause();
            this.$refs.audioPlayer3.pause();
            this.$refs.audioPlayer4.pause();
            this.$refs.audioPlayer5.pause();
            this.$refs.audioPlayer6.pause();
        
    },
    playAudio2() {
      this.$refs.audioPlayer2.style.display = 'block';
          this.$refs.audioPlayer1.style.display = 'none';
          this.$refs.audioPlayer6.style.display = 'none';    
          this.$refs.audioPlayer3.style.display = 'none';
          this.$refs.audioPlayer4.style.display = 'none';
          this.$refs.audioPlayer5.style.display = 'none';
         
            this.$refs.audioPlayer2.load();
            this.$refs.audioPlayer2.play();
            this.$refs.audioPlayer1.pause();
            this.$refs.audioPlayer3.pause();
            this.$refs.audioPlayer4.pause();
            this.$refs.audioPlayer5.pause();
            this.$refs.audioPlayer6.pause();
        
    },
    playAudio3() {
      this.$refs.audioPlayer3.style.display = 'block';
          this.$refs.audioPlayer2.style.display = 'none';
          this.$refs.audioPlayer6.style.display = 'none';    
          this.$refs.audioPlayer1.style.display = 'none';
          this.$refs.audioPlayer4.style.display = 'none';
          this.$refs.audioPlayer5.style.display = 'none';
         

            this.$refs.audioPlayer2.pause();
            this.$refs.audioPlayer1.pause();
            this.$refs.audioPlayer4.pause();
            this.$refs.audioPlayer5.pause();
            this.$refs.audioPlayer6.pause();
            this.$refs.audioPlayer3.load();
            this.$refs.audioPlayer3.play();
           
    },
    playAudio4() {
      this.$refs.audioPlayer4.style.display = 'block';
          this.$refs.audioPlayer2.style.display = 'none';
          this.$refs.audioPlayer6.style.display = 'none';    
          this.$refs.audioPlayer3.style.display = 'none';
          this.$refs.audioPlayer1.style.display = 'none';
          this.$refs.audioPlayer5.style.display = 'none';

            this.$refs.audioPlayer2.pause();
            this.$refs.audioPlayer3.pause();
            this.$refs.audioPlayer1.pause();
            this.$refs.audioPlayer5.pause();
            this.$refs.audioPlayer6.pause();
                     
            this.$refs.audioPlayer4.load();
            this.$refs.audioPlayer4.play();
        
    },
    playAudio5() {
      this.$refs.audioPlayer5.style.display = 'block';
          this.$refs.audioPlayer2.style.display = 'none';
          this.$refs.audioPlayer6.style.display = 'none';    
          this.$refs.audioPlayer3.style.display = 'none';
          this.$refs.audioPlayer4.style.display = 'none';
          this.$refs.audioPlayer1.style.display = 'none';
         

            this.$refs.audioPlayer2.pause();
            this.$refs.audioPlayer3.pause();
            this.$refs.audioPlayer4.pause();
            this.$refs.audioPlayer1.pause();
            this.$refs.audioPlayer6.pause();
            this.$refs.audioPlayer5.load();
            this.$refs.audioPlayer5.play();
        
    },
    playAudio6() {
      this.$refs.audioPlayer6.style.display = 'block';
          this.$refs.audioPlayer2.style.display = 'none';
          this.$refs.audioPlayer1.style.display = 'none';    
          this.$refs.audioPlayer3.style.display = 'none';
          this.$refs.audioPlayer4.style.display = 'none';
          this.$refs.audioPlayer5.style.display = 'none';
          this.$refs.audioPlayer2.pause();
            this.$refs.audioPlayer3.pause();
            this.$refs.audioPlayer4.pause();
            this.$refs.audioPlayer5.pause();
            this.$refs.audioPlayer1.pause();
            this.$refs.audioPlayer6.load();
            this.$refs.audioPlayer6.play();

        
    },
  }}
</script>