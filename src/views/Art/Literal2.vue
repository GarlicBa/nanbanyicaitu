<template>
    <div class="box-container" style="position: relative;">
        
        <div class="log1"><div class="span1">举杯邀明月，对影成三人。</div></div>
        <div class="log2"><div class="span2">安得广厦千万间，大庇天下寒士俱欢颜。</div> </div>
       <div class="word1" style="writing-mode: vertical-rl;position: absolute;top: 200px;left: 231px;font-size: 24px;font-weight: 100px;font-family: 'Courier New', Courier, monospace;">
       莫笑农家腊酒浑
       </div>
       <div class="word2" style="writing-mode: vertical-rl;position: absolute;top: 240px;left: 260px;font-size: 24px;font-weight: 100px;font-family: 'Courier New', Courier, monospace;">
        丰年留客足鸡豚
       </div>
       <div class="word3" style="writing-mode: vertical-rl;position: absolute;top: 150px;left: 300px;font-size: 24px;font-weight: 100px;font-family: 'Courier New', Courier, monospace;">
        晓迎秋露一枝新
       </div>
       <div class="word4" style="writing-mode: vertical-rl;position: absolute;top: 240px;left: 330px;font-size: 24px;font-weight: 100px;font-family: 'Courier New', Courier, monospace;">
        不占园中最上春
       </div>
       <div class="word5" style="writing-mode: vertical-rl;position: absolute;top: 120px;right: 230px;font-size: 24px;font-weight: 100px;font-family: 'Courier New', Courier, monospace;">
        何处望神州？满眼风光北固楼
       </div>
       <div class="word6" style="writing-mode: vertical-rl;position: absolute;top: 220px;right: 270px;font-size: 24px;font-weight: 100px;font-family: 'Courier New', Courier, monospace;">
        千古兴亡多少事？悠悠
       </div>
       <div class="word7" style="writing-mode: vertical-rl;position: absolute;top: 150px;right: 310px;font-size: 24px;font-weight: 100px;font-family: 'Courier New', Courier, monospace;">
        选妓随雕辇，征歌出洞房
       </div>
       <div class="word8" style="writing-mode: vertical-rl;position: absolute;top: 210px;left: 1164px;font-size: 24px;font-weight: 100px;font-family: 'Courier New', Courier, monospace;">
        宫中谁第一，飞燕在昭阳
       </div>
    
       <!-- <div class="title" >
        <div class="left">
            <h2>南方文学</h2>
            <p style="font-family: 'Courier New', Courier, monospace;font-size: 20px;font-weight: 100px;color: black;"><b>特点:    </b>柔美细腻、水乡意境、浪漫情怀、文学多样性</p>
           <p style="font-family: 'Courier New', Courier, monospace;font-size: 20px;font-weight: 100px;color: black;"><b>代表人物：</b>黄庭坚、欧阳修</p>
        </div>
        <div class="right">
            <h2>北方文学</h2>
            <p style="font-family: 'Courier New', Courier, monospace;font-size: 20px;font-weight: 100px;color: black;"><b>特点:    </b>雄浑豪放、荒漠苍茫、民歌影响、历史传承</p>
           <p style="font-family: 'Courier New', Courier, monospace;font-size: 20px;font-weight: 600px;color: black;"><b>代表人物：</b>王羲之、颜真卿</p>
       
        </div>
       </div> -->
       <div class="main" style="margin-top: 60px;">
        <div class="pic1">
            <img src="../../../public/static/art/border.png" alt="">
        </div>
        <div class="pic2">
            <img src="../../../public/static/art/border.png" alt="">
        </div>
        <div class="first">
            
        </div>
        <div class="second">
           
        </div>
        <div class="south">

        </div>
        <div class="north"></div>
        <div class="third">
            
        </div>
        <div class="fourth">
            
        </div>
       
       </div>
       <div class="buttom">
          <div class="left1" style="position: relative;margin-top: 25px;margin-left: 60px;">
            <div class="word1" style="position: absolute;top:355px;left: 70px;font-size: 26px;font-family: 'Courier New', Courier, monospace;">南北方诗歌特点云图</div>
            <e-charts :option="option1" style="width: 360px;height: 400px;"></e-charts>
          </div>
          <div class="middle1">
            <div class="word4">五朝南北诗歌情感倾向（积极程度）</div>
            <e-charts :option="option4" style="width: 400px;"></e-charts>
          </div>
          <div class="right1" style="margin-left: 40px;">
            <div class="word3" style="position: absolute;top:320px;font-size: 26px;font-family: 'Courier New', Courier, monospace;left: 120px;">南北诗歌情感热词</div>
            <e-charts :options="chartOptions"  ref="chartRef" style="width: 380px;height: 380px;margin-left: 40px;margin-bottom: 0px;" class="chart3"></e-charts>
          </div>
          <div class="left2" style="margin-top: 30px;">
            <e-charts :option="option2"></e-charts>
      <div class="title1" >五朝南北诗歌数量</div>

          </div>
          <div class="middle2">
            <e-charts :option="option5" style="width: 480px;"></e-charts>
            <e-charts :option="option6" style="width: 400px;" class="chart4"></e-charts>
        </div>
        <div class="w4">南方创作诗歌类型占比</div>
        <div class="w5">北方创作诗歌类型占比</div>
       </div>
       <div class="tohome">
                <label  for="name" class="label6"  @click="$router.push('/Literal')" >
                  <svg t="1710914231707" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1832" width="45" height="45"><path d="M653.1 305.1H182.7l139.9-139.9c14-14 14-35 0-49s-35-14-49 0L74.3 313.8c-7 7-10.5 15.7-10.5 24.5s3.5 17.5 10.5 24.5l197.6 197.6c14 14 35 14 49 0s14-35 0-49L184.5 375h468.6c131.1 0 236.1 104.9 236.1 236.1s-104.9 236-236.1 236H294.7c-19.2 0-35 15.7-35 35 0 19.2 15.7 35 35 35h358.5c169.6 0 306-136.4 306-306-0.1-169.6-136.5-306-306.1-306z" p-id="1833" fill="#707070"></path></svg>
                </label>
                </div>
    </div>
 </template>


<style lang="less" scoped>
.w4{
    position: absolute;
    bottom: -600px;
    left: 640px;
    font-size: 26px;
    font-family: 'Courier New', Courier, monospace;
}
.w5{
    position: absolute;
    bottom: -600px;
    left: 1160px;
    font-size: 26px;
    font-family: 'Courier New', Courier, monospace;
}
.chart4{
    position: absolute;
    right: -10px;
}
   .tohome{
    position:fixed;
     right: 20px;
     top:20px;
         width: 50px;
         height: 50px;
         border-radius: 50%;
        
         border:1px solid #000;
         transition: transform 0.3s ease;
      &:hover{
      transform: scale(1.2);
      }
      label6{
        cursor: pointer;
      }
        }
.word5{
    position: absolute;
    top: 60px;
    writing-mode: vertical-lr;
    font-size: 20px;
    left: 30px;
}
.word6{
    position: absolute;
    top: 220px;
    writing-mode: vertical-lr;
    font-size: 20px;
    left: 30px;
}
.word7{
    position: absolute;
    top: 90px;
    writing-mode: vertical-lr;
    font-size: 20px;
    right: 80px;
    font-family: 'Courier New', Courier, monospace;
}
.fiv{
    position: absolute;
    top:-160px;
}
.middle2{
   
    width: 950px;
    height: 390px;
   background-color: rgb(183, 172, 159, 0.2);
   border-radius: 10px;
    position: absolute;
    top:960px;
    left: 530px;
    display: flex;
}
.word4{
  
    position: absolute;
    top: 290px;
    left: 10px;
    font-size: 26px;
    font-weight: 100px;
    font-family: 'Courier New', Courier, monospace;
}
.left2{
    position: absolute;
    left: 30px;
    width: 450px;
    height: 330px;
   background-color: rgba(197, 185, 171, 0.2);
   border-radius: 10px;
    top:960px;
    margin-bottom: 30px;
}
.title1{
    position: absolute;
    top: 340px;
    left: 120px;
    font-size: 26px;
    font-family: 'Courier New', Courier, monospace;
}
.buttom{
    width: 100%;
    height: 500px;
    display: flex;
}
.middle1{
  margin-top: 50px;
  margin-left: 10px;
    position: absolute;
    left:520px;
    top:540px;
    width: 440px;
    height: 300px;
    padding-bottom: 40px;
    background-color: rgb(183, 172, 159);
    border-radius: 10px;
}
.right1{
    width: 410px;
    height: 420px;
  background: url('/public/static/shan.png') no-repeat;
  background-size: 110% 110%;
  position: absolute;
  left: 1000px;
  top: 560px;
  
 .chart3{
    margin-bottom: 70px;
 }
  
}


@keyframes show{
    0%{
        opacity: 0;
        scale:0.5;
    }
    50%{
        opacity: 1;
        scale:1.2;
    }
    100%{
        opacity: 1;
        scale:1;
    }
}
.log1{
    opacity: 0;
    position: absolute;
    left: 550px;
    top: 70px;
    animation: show 4.5s ease infinite;
    
    background: url('/public/static/log/log.png') no-repeat;
    background-size: 100% 100%;
    width: 220px;
    height: 100px;
    .span1{
        font-weight: 300px;
        font-size: 18px;
        padding-top: 16px;
        padding-left: 60px;
       width: 120px;
    }
}
.log2{
    opacity: 0;
    position: absolute;
    left: 770px;
    top: 100px;
    animation: show 4.5s ease infinite;
animation-delay: 1s;
    transform: scaleX(-1);
    background: url('/public/static/log/log.png') no-repeat;
    background-size: 100% 100%;
    width: 220px;
    height: 100px;
    .span2{
        transform: scaleX(-1);
        font-weight: 300px;
        font-size: 17px;
        padding-top: 14px;
        padding-right: 18px;
       width: 150px;
    }
}
@keyframes appear {
  0% {
    opacity: 0;
  }
  100% {
      opacity: 1;
  }
}

@keyframes scale{
    0%{
        transform: scale(0.5);
    }
    100%{
        transform: scale(1);
    }   
}
::-webkit-scrollbar {
  width: 0; /* 将滚动条宽度设为0 */
  height: 0; /* 将滚动条高度设为0 */
}
.box-container{
    position: relative;
    overflow: auto; 
    .word1{
    cursor: pointer;
    &:hover{
        animation: scale 0.5s ease;
    }
  }
    width: 100%;
    height: 100vh;
    background:url('/public/static/data/bk.jpg') no-repeat;
    background-size: 100% 100%;
    padding:10px;
    .title{
        height:210px;
       display:flex;
        width:100%;
        .left{
            margin-top: 40px;
            margin-left: 60px;
            height:110px;
            width:35%;
         
        }
        .right{
            margin-top: 40px;
            margin-left:440px;
            width:35%;
            height:110px;
            
        }
    }
    .main{
        width:100%;
        height:430px;
       position: relative;
   .pic1{
       width:400px;
        height:400px;
        position: absolute;
        top:0px;
        left:0px;
        img{
            width:100%;
            height:130%;
            position: absolute;
            top:-70px;
            left:-30px;
        }
   }
   .pic2{
    width:400px;
        height:400px;
        position: absolute;
        top:0px;
        right:0px;
        img{
            width:100%;
            height:130%;
            position: absolute;
            top:-70px;
            right:-30px;
            transform: scaleX(-1);
        }
   }
   .first{
    position: absolute;
    left: 160px;
top: 240px;
width: 180px;
height: 0px;
opacity: 1;
transform: rotate(90.48deg);

border: 1px solid rgba(0, 0, 0, 1);
   }
   .second{
    position: absolute;
    left: 167px;
top: 230px;
width: 300px;
height: 0px;
opacity: 1;
transform: rotate(90.69deg);

border: 1px solid rgba(0, 0, 0, 1);

   }
   .south{
    width:350px;
    height:400px;
    position: absolute;
    background:url('/public/static/art/south.png') no-repeat;
    background-size: 100% 100%;
    top:70px;
    left:400px;
   }
   .north{
    width:350px;
    height:400px;
    position: absolute;
    background:url('/public/static/art/north.png') no-repeat;
    background-size: 100% 100%;
    top:70px;
    right:400px;
   }
   .third{
    position:absolute;
    right: 250px !important;
    top: 172px;
    width: 160px;
    height: 0px;
    opacity: 1;
    transform: rotate(90.48deg);
    border: 1px solid rgba(0, 0, 0, 1);
   }
   .fourth{
    position:absolute;
    right: 134px;
top: 190px;
width: 240px;
height: 0px;
opacity: 1;
transform: rotate(90.69deg);

border: 1px solid rgba(0, 0, 0, 1);
   }

    }
}
</style>


<script>
import  * as echarts from 'echarts';

    
    
          
   
   
let nameList = ["柔情细腻", "婉约风雅", "情真意切", "山水诗意", "江南风情", "雄浑壮美", "豪放豁达", "英雄豪情","抒怀怀旧","意境深远"];
let valueList = [30, 50, 60, 65, 70, 80, 90, 100, 120, 150,11];

let colorList = ['#14A8FF', '#397EF0']
let fontSizeList = [12, 18, 11, 20,23,16,14,20]
let data = [];

nameList.map((item, index) => {
   let i = parseInt(index / 5);
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
let nameList1 = ["怀念", "思念", "怀旧", "爱情", "追忆", "豪情", "壮志","激情","送别","赞美"];
let valueList1 = [30, 50, 60, 65, 70, 80, 90, 100, 120, 150,11];

let colorList1 = ['#14A8FF', '#397EF0']
let fontSizeList1 = [19, 25, 16, 20,23,16,24,20]
let data1 = [];

nameList1.map((item, index) => {
   let i = parseInt(index / 5);
   data1.push(
      {
         name: item,
         value: valueList1[i],
         label: {
            color: colorList1[i],
            fontSize: fontSizeList1[index]
         }
      }
   )
})
export default{
    created() {
     import('echarts').then(echarts => {
       this.echarts = echarts;
       this.initChart();
     });
   },
   mounted() {
 
   this.initChart();
 },
 methods: {
  

  initChart() {
    const chartDom = this.$refs.chartRef.$el // 获取<e-charts>标签的DOM元素
    const chart = echarts.init(chartDom); // 初始化echarts实例
    chart.setOption(this.chartOptions); // 设置图表配置项
    
  }
},
    data(){
        return{
         option1:{
        color:colorList,
   graphic: [
      {
         id: "baPng",
         type: "image",
         left: "center",
         top: "center",
         style: {
            image:"../../../static/bk3.png",
            width:"430",
            height:"370"
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
          trigger: 'axis',
          axisPointer: {
            type: 'line',
            label: {
              backgroundColor: '#6a7985'
            }
          },
          formatter: function(params) {
      var tooltipContent = '<div style="background-color:#6a7985; padding:6px; border-radius:5px;">';
      tooltipContent += '<div style="color:white; font-weight:bold;">' + params[0].name + '</div>';
      params.forEach(function(item) {
        tooltipContent += '<div style="color:white;">' + item.seriesName + ': ' + item.value + '首</div>';
      });
      tooltipContent += '</div>';
      return tooltipContent;
    }
        },
        legend:{
          show:true,
          top:18
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['唐', '宋', '元', '明', '清']
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            name: '南方诗歌',
            type: 'line',
            stack: '总量',
            areaStyle: {
                color:'#5E87AC'
            },
            data: [14*18, 12*18,3*12,3*12,1*11]
          },
          {
            name: '北方诗歌',
            type: 'line',
            stack: '总量',
            areaStyle: {
                color:'#586E6E'
            },
            data: [9*18, 18, 2*17, 7*9, 189]
          },
         
        ]
      },chartOptions:{
        color:colorList1,
   graphic: [
      {
         id: "baPng",
         type: "image",
         left: "center",
         top: "center",
        
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
         data: data1
      }
   ]
},option4:{
  legend: {
    top: "20",
    x: "center",
    textStyle: {
      fontSize: 16,
      color: "#2B2B2B",
    },
    icon: "path://M512 881.777778 512 881.777778C716.222629 881.777778 881.777778 716.222629 881.777778 512 881.777778 307.777371 716.222629 142.222222 512 142.222222 307.777373 142.222222 142.222222 307.777371 142.222222 512 142.222222 716.222629 307.777373 881.777778 512 881.777778L512 881.777778ZM512 1024 512 1024C229.230208 1024 0 794.769789 0 512 0 229.230211 229.230208 0 512 0 794.769789 0 1024 229.230211 1024 512 1024 794.769789 794.769789 1024 512 1024L512 1024Z",
    itemWidth: 12,
    itemHeight: 12,
    itemGap: 10,
  },
  tooltip: {
    formatter: function(params) {
      var tooltipHtml = '';
      params.forEach(function(param) {
        tooltipHtml += param.seriesName + ': ' + param.value + '%<br>';
      });
      return tooltipHtml;
    },
    show: true,
    trigger: "axis",
    backgroundColor: "RGBA(0, 49, 85, 1)",
    borderColor: "rgba(0, 151, 251, 1)",
    borderWidth: 1,
    borderRadius: 0,
    textStyle: {
      color: "#7494FF",
      fontSize: 16,
      align: "left",
    },
  },
  grid: {
    right: "5%",
    top: "20%",
    left: "5%",
    bottom: "5%",
    containLabel: true,
  },
  xAxis: {
    type: "category",
    boundaryGap: true,
    data: ["1级", "2级", "3级"],
    axisLabel: {
      interval: 0,
      textStyle: {
        color: "#261919",
        fontStyle: "normal",
        fontSize: 20,
      },
    },
    axisTick: {
      show: false,
    },
    axisLine: {
      lineStyle: {
        color: "#D1C6C0",
      },
    },
    splitLine: {
      show: true,
      lineStyle: {
        color: "#D1C6C0",
      },
    },
  },
  yAxis: [
    {
      type: "value",
      splitNumber: 3,
      axisLabel: {
        textStyle: {
          color: "#261919",
          fontStyle: "normal",
          fontSize: 16,
        },
      },
      axisLine: {
        show: false,
      },
      axisTick: {
        show: false,
      },
      splitLine: {
        show: true,
        lineStyle: {
          color: "#D1C6C0",
        },
      },
    },
  ],
  series: [
    {
      name: "南方诗歌",
      type: "pictorialBar",
      barWidth: "120%",
      stack: "数量",
      label: {
        normal: {
          show: false,
        },
      },
      itemStyle: {
        normal: {
          color: {
            type: "linear",
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              {
                offset: 0,
                color: "#18705E",
              },
              {
                offset: 1,
                color: "rgba(255, 255, 255, .1)",
              },
            ],
            globalCoord: false,
          },
        },
      },
      symbol:
        "path://M12.000,-0.000 C12.000,-0.000 16.074,60.121 22.731,60.121 C26.173,60.121 -3.234,60.121 0.511,60.121 C7.072,60.121 12.000,-0.000 12.000,-0.000 Z",
      data: [4, 14, 8],
    },
    {
      name: "北方诗歌",
      type: "pictorialBar",
      barWidth: "120%",
      stack: "数量",
      label: {
        normal: {
          show: false,
        },
      },
      itemStyle: {
        normal: {
          color: {
            type: "linear",
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              {
                offset: 0,
                color: "#DE9D52",
              },
              {
                offset: 1,
                color: "rgba(255, 255, 255, .1)",
              },
            ],
            globalCoord: false,
          },
        },
      },
      symbol:
        "path://M12.000,-0.000 C12.000,-0.000 16.074,60.121 22.731,60.121 C26.173,60.121 -3.234,60.121 0.511,60.121 C7.072,60.121 12.000,-0.000 12.000,-0.000 Z",
      data: [3, 19, 4],
    },
   
  ],
},option5:{
  
 
  tooltip: {
    trigger: "item",
    formatter: "{b} : {d}%",
  },

 
  series: [
    {
      name: "访问来源",
      type: "pie",
      radius: "50%",
      center: ["50%", "50%"],
      color: ["#85B4B2", "#42B8A4", "#A6AD7E", "#DA8E5F",'#5B72CE','#6EC251'], //'#FBFE27','rgb(11,228,96)','#FE5050'
      data: [
        {
          value: 6,
          name: "自然诗",
        },
        {
          value: 3,
          name: "社交诗",
        },
        {
          value: 1,
          name: "社会诗",
        },
        {
          value: 10,
          name: "抒情诗",
        },
         {
          value: 3,
          name: "叙事诗",
        },
        {
          value: 3,
          name: "登高诗",
        },
      ],

    
      labelLine: {
        normal: {
          lineStyle: {
            color: "rgb(98,137,169)",
          },
          smooth: 0.2,
          length: 30,
          length2: 20,
        },
      },
      itemStyle: {
        normal: {
        
         
        },
      },
    },
  ],
},option6:{
  
 
  tooltip: {
    trigger: "item",
    formatter: "{b} : {d}%",
  },

 
  series: [
    {
      name: "访问来源",
      type: "pie",
      radius: "50%",
      center: ["50%", "50%"],
      color: ["#85B4B2", "#42B8A4", "#A6AD7E", "#DA8E5F",'#5B72CE','#6EC251'], //'#FBFE27','rgb(11,228,96)','#FE5050'
      data: [
        {
          value: 1,
          name: "自然诗",
        },
        {
          value: 5,
          name: "社交诗",
        },
        {
          value: 12,
          name: "社会诗",
        },
        {
          value: 3,
          name: "抒情诗",
        },
         {
          value: 4,
          name: "叙事诗",
        },
        {
          value: 1,
          name: "登高诗",
        },
      ],

    
      labelLine: {
        normal: {
          lineStyle: {
            color: "rgb(98,137,169)",
          },
          smooth: 0.2,
          length: 30,
          length2: 20,
        },
      },
      itemStyle: {
        normal: {
        
         
        },
      },
    },
  ],
}

        }
    }
}

</script>
