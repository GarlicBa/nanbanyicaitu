<template>
  <div class="box-container">

      <div class="left" style="width: 250px;">
        <!-- 左侧界面 -->
     
          


      
      <div class="bar" style="margin-top: 40px;">
        <div class="six" @click="$router.push('/pic10')" style="background-color: #bc9f80ed;">
    布局
   </div>
        <div class="first" @click="$router.push('/Build2sihe')" style="background-color: #bc9f80ed;">
    屋檐
   </div>
   <div class="second" @click="$router.push('/pic5')"  style="background-color: #bc9f80ed;">
垂花门
   </div>
   <div class="third" @click="$router.push('/pic6')"  style="background-color: #bc9f80ed;">
影壁
   </div>
   <!-- <div class="forth" @click="$router.push('/pic7')"  style="background-color: #bc9f80ed;">
内部
   </div>
   <div class="fifth" @click="$router.push('/pic8')"  style="background-color: #bc9f80ed;">
屋檐
   </div> -->
      </div>
       
      </div>
          
             <!-- main界面 -->
             <div class="main">
          <div class="title">
          图片资料库
          </div>
          <div class="area">
            <div class="title1">
              北京四合院建筑
            </div>
            <div class="tohome">
              <label  for="name" class="label"  @click="$router.push('/build1')" >
                <svg t="1710914231707" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1832" width="45" height="45"><path d="M653.1 305.1H182.7l139.9-139.9c14-14 14-35 0-49s-35-14-49 0L74.3 313.8c-7 7-10.5 15.7-10.5 24.5s3.5 17.5 10.5 24.5l197.6 197.6c14 14 35 14 49 0s14-35 0-49L184.5 375h468.6c131.1 0 236.1 104.9 236.1 236.1s-104.9 236-236.1 236H294.7c-19.2 0-35 15.7-35 35 0 19.2 15.7 35 35 35h358.5c169.6 0 306-136.4 306-306-0.1-169.6-136.5-306-306.1-306z" p-id="1833" fill="#707070"></path></svg>
              </label>
              </div>
            <div class="tohome">
              <label  for="name" class="label"  @click="$router.push('/')" >
  <svg t="1710724141479" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4917" width="50" height="50"><path d="M716.8 384v358.4c0 49.1008-37.9648 76.8-87.04 76.8H243.328C194.2784 819.2 153.6 792.1408 153.6 742.4v-102.4h128V281.6c0-49.1008 37.9136-76.8 87.6288-76.8H768a69.376 69.376 0 0 1 76.8 76.8v102.784z m76.8-102.4c0-20.0192-31.1808-25.6-51.2-25.6a20.736 20.736 0 0 0-25.6 25.6v51.2h76.8v-51.2z m-102.4-25.6H384a67.0464 67.0464 0 0 0-51.2 51.2l0.2816 333.0816L563.2 640v102.4a20.736 20.736 0 0 0 25.6 25.6h51.2a20.736 20.736 0 0 0 25.6-25.6V307.2c0-12.2624-0.5632-49.8688 25.6-51.2zM204.8 742.4a20.736 20.736 0 0 0 25.6 25.6h307.2c-21.4528 0-25.6-38.9376-25.6-51.2v-25.6H204.8v51.2z" fill="#707070" p-id="4918"></path></svg>
</label>
            </div>
          </div>
          <!-- 主体区域 -->
          <div class="main-area">
            <div class="box" style="width:1000px">
         <div class="left" style="padding: 10px;width: 1000px;">
    <RouterView></RouterView>
         </div>
 
         <div class="right">
       <e-charts :option="option"></e-charts>
         </div>
      </div>
       </div>
</div>
<div class="word4">
  北京地区近年总降水量
</div>
  </div>
</template>

<style scoped lang="less">

.word4{
  font-size: 20px;
  position: absolute;
  color:black;
  bottom: 20px;
  right:33px;
}
.box-container{
display: flex;
  .word{
      margin-left: 40px;
    margin-top: 20px;
      background-color: pink;
      width: 200px;
      height: 100px;
  }
  background: url(/public/static/data/bk.jpg) no-repeat center center;
 background-size: 100% 100%;
   padding: 0%;
   position: relative;
   .bar{
  position: absolute;
  top:110px;
  left: 65px;
  border-radius: 10px;
  margin-top: 40px;
    width: 150px;
    height: 500px;
    background-color: #c2a983;
    .six{
  font-weight: bold;
  position: absolute;
  left: 7px;
 text-align: center;
  height: 40px;
  line-height: 40px;
  width: 90%;
  margin-top: 50px;
  border-radius: 5px;
  cursor: pointer;
  transition: transform 0.3s ease;
  &:hover{
  transform: scale(1.2);
  background-color: #eec08ff7 !important;
  }
}
    .first{
  font-weight: bold;
  position: absolute;
  left: 7px;
  top:60px;
 text-align: center;
  height: 40px;
  line-height: 40px;
  width: 90%;
  margin-top: 50px;
  border-radius: 5px;
  cursor: pointer;
  transition: transform 0.3s ease;
  &:hover{
  transform: scale(1.2);
  background-color: #eec08ff7 !important;
  }
}
.second{
  font-weight: bold;
  cursor: pointer;
  position: absolute;
  left: 7px;
  top: 115px;
  text-align: center;
  height: 40px;
  line-height: 40px;
  width: 90%;
  margin-top: 50px;
  border-radius: 5px;
  transition: transform 0.3s ease;
  &:hover{
  transform: scale(1.2);
  background-color: #eec08ff7 !important;
  }
}
.third{
  font-weight:bold;
  cursor: pointer;
  position: absolute;
  left: 7px;
  top: 170px;
  text-align: center;
  height: 40px;
  line-height: 40px;
  width: 90%;
  margin-top: 50px;
  border-radius: 5px;
  transition: transform 0.3s ease;
  &:hover{
  transform: scale(1.2);
  background-color: #eec08ff7 !important;
  }
}
.forth{
  font-weight: bold;
  cursor: pointer;
  position: absolute;
  left: 7px;
  top: 224px;
  text-align: center;
  height: 40px;
  line-height: 40px;
  width: 90%;
  margin-top: 50px;
  border-radius: 5px;
  transition: transform 0.3s ease;
  &:hover{
  transform: scale(1.2);
  background-color: #eec08ff7 !important; 
  }
}
.fifth{
  font-weight: bold;
  cursor: pointer;
  position: absolute;
  left: 7px;
  top: 280px;
  text-align: center;
  height: 40px;
  line-height: 40px;
  width: 90%;
  margin-top: 50px;
  border-radius: 5px;
  transition: transform 0.3s ease;
  &:hover{
  transform: scale(1.2);
  background-color: #eec08ff7 !important;
  }
}
  }
   .main{

    width: 1300px;
    height: 100vh;
    position: relative;
    .title{
      width: 120px;
      height: 40px;
      position: absolute;
      top: 50px;
      left: -160px;
     
      background-color: #c2a983;
        font-size: 20px;
        color: #000;
        border-radius: 10px;
        border: 2px solid #000;
        padding-top: 10px;
       text-align: center;
      

    }
    .area{
      position: absolute;
      right: 40px;
      top: 15px;
      width: 260px;
      height: 50px;
      display: flex;
      .title1{
        background-color: #c2a983;
        font-size: 20px;
        color: #000;
        border-radius: 10px;
        border: 2px solid #000;
        padding-top: 10px;
       text-align: center;
       width: 210px;
       height: 50px;
      }
      .tohome{
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
    .main-area{
      width: 98%;
      height: 550px;
      margin-top: 130px;
      display: flex;
     .left{
      background-color: #f0d6af;
        border-radius: 10px;
        object-fit: contain;
        width: 1000px;
        display: flex;
       flex-wrap: wrap;
       height: 550px;
  
     }
     .right{
      position: absolute;
      bottom: -5px;
      right: 0px;
      margin-left: 25px;
      width: 250px;
      height: 95%;
      
     }
    }
   }
   
}
</style>


<script>
import * as echarts from 'echarts';
import { RouterView } from 'vue-router';
// prettier-ignore
let dataAxis = ['点', '击', '柱', '子', '或'];
// prettier-ignore
let data = [220, 182, 191, 234, 290];
let yMax = 500;
let dataShadow = [];
for (let i = 0; i < data.length; i++) {
dataShadow.push(yMax);
}
export default {
methods: {
  jump(data) {
    console.log(data);
    const self = this;
     // 获取路由参数
    self.$router.push({ name: 'build3', params: { data:data } });
  }
},
  data(){
  return{
  
    option : {
xAxis: {
  type: 'category',
  data: ['2018', '2019', '2020', '2021', '2022'],
  axisLine: {
    show: false
  },
  splitLine: {
          show: false
      }
},
tooltip: {
    trigger: 'axis',
    formatter: function(params) {
      var year = params[0].axisValue;
      var value = params[0].value;
      return year + ': ' + value + 'mm';
    }
  },
yAxis: {
  type: 'value',
  axisLine: {
    show: false
  },
  splitLine: {
          show: false
      }
},
tooltip: {
  trigger: 'axis'
},
grid: {
  left: '3%',
},
label:{
 show: true,
 position: 'top',

},
series: [
  {
    data: [546.6,403.3,528,686.5,585.4],
    type: 'bar',
    barWidth: 26,
    itemStyle: {
      barBorderRadius: [10,10,0,0],
    
      color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
     {
        offset: 0,
        color: '#ecb882f7'
      }, {
        offset: 0.8,
        color: '#eec08ff7'
      },
      {
        offset: 1,
        color: '#e19e57f7'
      }]),
     
      
  }
   }
]
},

currentPicIndex: 0
  }
}
}

</script>