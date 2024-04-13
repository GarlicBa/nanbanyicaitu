<template>
   <div class="box-container">
     <div class="title">南北气候总览</div>
    <div class="tohome">
              <label  for="name" class="label"  @click="$router.push('/')" >
                <svg t="1710914231707" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1832" width="45" height="45"><path d="M653.1 305.1H182.7l139.9-139.9c14-14 14-35 0-49s-35-14-49 0L74.3 313.8c-7 7-10.5 15.7-10.5 24.5s3.5 17.5 10.5 24.5l197.6 197.6c14 14 35 14 49 0s14-35 0-49L184.5 375h468.6c131.1 0 236.1 104.9 236.1 236.1s-104.9 236-236.1 236H294.7c-19.2 0-35 15.7-35 35 0 19.2 15.7 35 35 35h358.5c169.6 0 306-136.4 306-306-0.1-169.6-136.5-306-306.1-306z" p-id="1833" fill="#707070"></path></svg>
              </label>
              </div>
    <!-- 数据 -->
     <div class="left">

    <div class="box1" ref="box1">
    <e-charts :option="option1" style="margin-left:20px;width: 400px;height: 340px;"></e-charts>
    </div>
    <div class="box2">
      <e-charts :option="option2" style="width: 400px;height: 300px;"></e-charts>
    </div>

   </div> 
   <!-- 地图 -->
   <div class="map">
  <div class="data"  @click="jump()" style="z-index:999">
    <e-charts
   
       ref="chartRef"
      :options="chartOptions"
      
      style="width: 100%;height: 250px; "
    ></e-charts>
  </div>
  <e-charts :option="option8" style="width: 930px;height: 700px;margin-right: 50px;opacity: 0.75;"></e-charts>
    <div class="pic1" @click="$router.push('/Build2huipai')"></div>
    <div class="pic2" ></div>
    <div class="pic3"  @click="$router.push('/Pic10')"></div>
    <div class="pic4" ></div>
    <div class="pic5"></div>
    <div class="pic6"></div>
    <div class="pic7"></div>
    <div class="pic8"></div>
    <div class="pic9"></div>
    <div class="pic10"></div>
    <div class="pic11"></div>
    
   </div>
  </div>
</template>

<style scoped lang="less">
.min{
   width: 300px;
   font-size: 22px;
   font-weight: bold;
   color: rgb(102, 102, 102);
  left:-100px;
   height: 100px;
   position: absolute;
   bottom: 220px;
   animation: appear 1s ease-in-out;
   z-index: 1;
}
@keyframes appear{
    0%{
        opacity: 0;
    }
    100%{
        opacity: 1;
    }
}
.title{
  position: absolute;
top:-10px;
  width: 250px;
  height: 30px;
  background-color: rgb(245, 245, 245);
  border-radius: 10px;
  margin-left: 20px;
  margin-top: 20px;
  color: rgb(102, 102, 102);
  font-size: 15px;
  font-weight: bold;
  line-height: 30px;
  text-align: center;
  cursor: pointer;
}
.box-container {
  width: 100%;
   height: 100%;
   padding: 10px;
   background: url(/public/static/pageTb.jpg) no-repeat;
   background-size: 100% 100%;
  
   display: flex;
   .left{
     width: 400px;
     .box{
      margin-left: 20px;
      width: 350px;
      height: 50px;
      background-color: pink;
     }
     .box1{
      margin-top: 40px;
      margin-left: 40px;
      width: 400px;
      height: 300px;
      
      
     }

     .box2{
      margin-top: 20px;
      margin-left: 20px;
      width: 350px;
      height: 300px;
      
    
     }
    
 
   }
   .map{
    margin-left: 200px;
     width: 900px;
     height: 100vh;
     background-size: 100% 100%;
     background-repeat: no-repeat;
     position: relative;
     .data{
      width: 500px;
      height: 250px;
      
      border-radius: 10px;
      position: absolute;
      bottom: 41px;
      left: -230px;
      animation: appear  1s ease-in-out;
      
     }
     .pic1{
      position: absolute;
      bottom: 300px;
      right: 270px;
      background: url(/public/static/map/anhui/home.jpeg) no-repeat;
      background-size: 100% 100%;
      width: 40px;
      height: 40px;
      border: 2px solid black;
      border-radius: 50%;
      cursor: pointer;
      transition: transform 0.3s ease;
      &:hover{
      transform: scale(1.2);
      }
     }
     .pic2{
      position: absolute;
      bottom: 560px;
      right: 150px;
      background: url('/public/static/map/heilongjiang.webp') no-repeat;
      background-size: 100% 100%;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      cursor: pointer;
      border: 2px solid black;
      transition: transform 0.3s ease;
      &:hover{
      transform: scale(1.2);
      }
     }
     .pic5{
      position: absolute;
      bottom: 262px;
      right: 219px;
      background: url('/public/static/wuzheng.jpg') no-repeat;
      background-size: 100% 100%;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      cursor: pointer;
      border: 2px solid black;
      transition: transform 0.3s ease;
      &:hover{
      transform: scale(1.2);
      }
     }
     .pic6{
      position: absolute;
      bottom: 360px;
      right: 350px;
      background: url('/public/static/map/shanxi.png') no-repeat;
      background-size: 100% 100%;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      cursor: pointer;
      border: 2px solid black;
      transition: transform 0.3s ease;
      &:hover{
      transform: scale(1.2);
      }
     }
     .pic3{
      position: absolute;
      bottom: 420px;
      right: 270px;
      background: url('/public/static/map/beijing/home.jpeg') no-repeat;
      background-size: 100% 100%;
      width: 40px;
      height: 40px;
      border: 2px solid black;
      border-radius: 50%;
      cursor: pointer;
      transition: transform 0.3s ease;
      &:hover{
      transform: scale(1.2);
      }}
     .pic4{
      position: absolute;
      bottom: 190px;
      right: 450px;
      background: url('/public/static/map/yunnan.jpeg') no-repeat;
      background-size: 100% 100%;
      width: 40px;
      height: 40px;
      border: 2px solid black;
      border-radius: 50%;
      cursor: pointer;
      transition: transform 0.3s ease;
      &:hover{
      transform: scale(1.2);
      }
   }
   .pic7{
      position: absolute;
      bottom: 170px;
      right: 290px;
      background: url('/public/static/map/guangdong.png') no-repeat;
      background-size: 100% 100%;
      width: 40px;
      height: 40px;
      border: 2px solid black;
      border-radius: 50%;
      cursor: pointer;
      transition: transform 0.3s ease;
      &:hover{
      transform: scale(1.2);
      }
   }
   .pic8{
      position: absolute;
      bottom: 170px;
      right: 354px;
      background: url('/public/static/map/guangxi.png') no-repeat;
      background-size: 100% 100%;
      width: 40px;
      height: 40px;
      border: 2px solid black;
      border-radius: 50%;
      cursor: pointer;
      transition: transform 0.3s ease;
      &:hover{
      transform: scale(1.2);
      }
   }
   .pic9{
      position: absolute;
      top: 226px;
      right: 320px;
      background: url('/public/static/map/neimenggu.webp') no-repeat;
      background-size: 100% 100%;
      width: 40px;
      height: 40px;
      border: 2px solid black;
      border-radius: 50%;
      cursor: pointer;
      transition: transform 0.3s ease;
      &:hover{
      transform: scale(1.2);
      }
   }
   .pic10{
      position: absolute;
      bottom: 204px;
      right: 250px;
      background: url('/public/static/map/fujian.jpg') no-repeat;
      background-size: 100% 100%;
      width: 40px;
      height: 40px;
      border: 2px solid black;
      border-radius: 50%;
      cursor: pointer;
      transition: transform 0.3s ease;
      &:hover{
      transform: scale(1.2);
      }
   }
   .pic11{
      position: absolute;
      bottom: 175px;
      right: 210px;
      background: url('/public/static/map/taiwan/home.png') no-repeat;
      background-size: 100% 100%;
      width: 40px;
      height: 40px;
      border: 2px solid black;
      border-radius: 50%;
      cursor: pointer;
      transition: transform 0.3s ease;
      &:hover{
      transform: scale(1.2);
      }
   }
}
}
.tohome{
  position: absolute;
         top: 30px;
         right: 40px;
         width: 50px;
         height: 50px;
         border-radius: 50%;
         margin-left: 20px; 
        
         border:1px solid #000;
         transition: transform 0.3s ease;
         z-index: 1;
      &:hover{
      transform: scale(1.2);
      }
      label{
        cursor: pointer;
      }
        }
</style>

<script>

import  * as echarts from 'echarts';
  

import mapJson from "@/assets/json/china.json"
  echarts.registerMap("china", mapJson);
const years = [2018, 2019, 2020, 2021, 2022, 2023];
      const northTemperatures = [11.4990, 11.9178, 11.4292, 11.8918, 11.4694, 11.5440];
      const southTemperatures = [23.7694, 23.1968, 23.5842, 23.3552, 24.1063, 23.9962];

      // 计算南北地区气温均值
      const northAverage = northTemperatures.reduce((acc, cur) => acc + cur, 0) / northTemperatures.length;
      const southAverage = southTemperatures.reduce((acc, cur) => acc + cur, 0) / southTemperatures.length;
      const years1 = ['2019', '2020', '2021', '2022', '2023'];
const southRainfall = [2537.631, 1919.702, 1915.96, 1970.086, 1648.602];
const northRainfall = [641.812, 577.957,549.256, 452.181, 566.901];
export default {
   
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
    jump(){
        console.log(1)
        var keyword = '北京故宫';
    
    // 构造百度搜索链接
    var baiduLink = 'https://www.baidu.com/s?wd=' + encodeURIComponent(keyword);
    
    // 在新窗口中打开百度搜索链接
    window.open(baiduLink, '_blank');
    },

  initChart() {
    const chartDom = this.$refs.chartRef.$el // 获取<e-charts>标签的DOM元素
    const chart = echarts.init(chartDom); // 初始化echarts实例
    chart.setOption(this.chartOptions); // 设置图表配置项
    
  }
},
  data() {
    return {
      option8:{
    series: [{
      emphasis:null,
      label: {
            show: true, // 显示省份名称
            color: '#573A25', // 字体颜色
            fontSize: 10, // 字体大小
            fontWeight: 'bold', // 字体粗细
            position: 'inside', // 文字位置，可以是 'inside'、'top'、'bottom'、'left'、'right' 等
            formatter: '{b}' // 文字格式，{b} 表示省份名称
        },
        type: 'map',
        map: 'china',
        data: [
            {name: '浙江'}, // 北京市，颜色为红色
            {name: '江苏'}, // 上海市，颜色为蓝色
            {name: '河南'}, // 天津市，颜色为绿色
            {name: '山东'},
            {name: '安徽'},
            {name: '湖北'},
            {name: '湖南'},
            {name: '江西'},
            {name: '福建'},
            {name: '云南'},
            {name: '四川'},
            {name: '重庆'},
            {name: '四川'},
            {name: '广西'},
            {name: '广东'},
            {name: '海南'},
            {name: '贵州'},
            {name: '台湾'},
            {name: '陕西'},
            {name: '山西'},
            {name: '河北'},
            {name: '北京'},
            {name: '天津'},
            {name: '辽宁'},
            {name: '吉林'},
            {name: '黑龙江'},
            {name: '北京'},
        ],
        itemStyle:{
                        areaColor:{
                        type:'radial',
                        x:0.5,
                        y:0.5,
                        r:0.8,
                        colorStops:[
                            {
                            offset:0,
                            color:'#D1D2CE ' //0%处的颜色,
                        },
                        {
                            offset:1,
                            color:'#E0DCDC' //100%处的颜色,
                        }

                    ]
                    }
                }
    }]
},
        chartOptions: {
  
    series: [{
        type: "wordCloud",
        clickable: true,
        // 将 click 函数放置在正确的位置
        click: function(params) {
            // 点击事件处理逻辑
            console.log('Clicked:', params);
            
            // 在这里处理点击事件的逻辑，例如跳转到百度搜索等
        },
        // The shape of the "cloud" to draw. Can be any polar equation represented as a
        // The shape of the "cloud" to draw. Can be any polar equation represented as a
        // callback function, or a keyword present. Available presents are circle (default),
        // cardioid (apple or heart shape curve, the most known polar equation), diamond (
        // alias of square), triangle-forward, triangle, (alias of triangle-upright, pentagon, and star.
        shape: "circle",
        // A silhouette image which the white area will be excluded from drawing texts.
        // The shape option will continue to apply as the shape of the cloud to grow.

        // maskImage: maskImage,

        // Folllowing left/top/width/height/right/bottom are used for positioning the word cloud
        // Default to be put in the center and has 75% x 80% size.

        left: "center",
        top: "center",
        width: "80%",
        height: "80%",
        right: null,
        bottom: null,

        // Text size range which the value in data will be mapped to.
        // Default to have minimum 12px and maximum 60px size.

        sizeRange: [20, 40],

        // Text rotation range and step in degree. Text will be rotated randomly in range [-90, 90] by rotationStep 45

        rotationRange: [0, 0],

        // size of the grid in pixels for marking the availability of the canvas
        // the larger the grid size, the bigger the gap between words.

        gridSize: 16,

        // set to true to allow word being draw partly outside of the canvas.
        // Allow word bigger than the size of the canvas to be drawn
        drawOutOfBound: false,

        // Global text style
        textStyle: {
            normal: {
                fontFamily: "sans-serif",
                color: function() {
                    let index = Math.floor(Math.random() * colorList.length);
                    return colorList[index];
                }
            },
            emphasis: {
                fontWeight: "bold"
            }
        },
        data: [{
            "word": "北京故宫",
            "count": 20410,
            "heat_diff_num": 2040,
            "name": "北京故宫",
            "value": 2040
        }, {
            "word": "天坛",
            "count": 13369,
            "heat_diff_num": 667.45,
            "name": "天坛",
            "value": 667.45
        }, {
            "word": "颐和园",
            "count": 512,
            "heat_diff_num": 511,
            "name": "颐和园",
            "value": 511
        }, {
            "word": "鼓楼",
            "count": 961,
            "heat_diff_num": 479.5,
            "name": "鼓楼",
            "value": 479.5
        }, {
            "word": "豫园",
            "count": 11753,
            "heat_diff_num": 404.2758620689655,
            "name": "豫园",
            "value": 404.2758620689655
        }, {
            "word": "田子坊",
            "count": 3083,
            "heat_diff_num": 384.375,
            "name": "田子坊",
            "value": 384.375
        }, {
            "word": "陈家祠",
            "count": 615,
            "heat_diff_num": 306.5,
            "name": "陈家祠",
            "value": 306.5
        }, {
            "word": "岭南古村落",
            "count": 4405,
            "heat_diff_num": 292.6666666666667,
            "name": "岭南古村落",
            "value": 292.6666666666667
        }, {
            "word": "夫子庙",
            "count": 989,
            "heat_diff_num": 196.8,
            "name": "夫子庙",
            "value": 196.8
        }, {
            "word": "凤凰古城",
            "count": 1630,
            "heat_diff_num": 180.11111111111111,
            "name": "凤凰古城",
            "value": 180.11111111111111
        }, 
        {
            "word": "白马寺",
            "count": 10630,
            "heat_diff_num": 180.11111111111111,
            "name": "白马寺",
            "value": 180.11111111111111
        }, 
        {
            "word": "洛阳古城",
            "count": 4610,
            "heat_diff_num": 180.11111111111111,
            "name": "洛阳古城",
            "value": 180.11111111111111
        }, 
        {
            "word": "黄鹤楼",
            "count": 6630,
            "heat_diff_num": 180.11111111111111,
            "name": "黄鹤楼",
            "value": 180.11111111111111
        },
        {
            "word": "广州文昌阁",
            "count": 6630,
            "heat_diff_num": 180.11111111111111,
            "name": "广州文昌阁",
            "value": 180.11111111111111
        },
        {
            "word": "孔庙",
            "count": 6630,
            "heat_diff_num": 180.11111111111111,
            "name": "孔庙",
            "value": 180.11111111111111
        }, ]
    }]
},
option1: {
        title: {
          text: '年气温变化',
          top:243,
          left:133
        },
        tooltip: {
        
          trigger: 'axis',
          position: 'left',
          axisPointer: {
            type: 'cross',
            label: {
              backgroundColor: '#6a7985'
            }
          },
          formatter: function(params) {
            var tooltipText = '';
            params.forEach(function(item) {
                var value = item.value.toFixed(2); // 保留两位小数
                var colorBlock = '<span style="display:inline-block;margin-right:5px;border-radius:50%;width:10px;height:10px;background-color:' + item.color + '"></span>'; // 添加颜色色块
                tooltipText += colorBlock + item.seriesName + ' ' + value + '℃<br/>';
            });
            return tooltipText;
        }
        },
        grid:{
          height:160
        },
        legend: {
          data: ['广东年气温', '北京年气温']
        },
        xAxis: {
          type: 'category',
          data: years,
          axisLabel:{
            fontSize:13,
            color:'black'
          }
        },
        yAxis: {
    type: 'value',
    name: '气温（℃）', // 添加单位
    axisLabel: {
        fontSize: 12,
        fontWeight: 'bold',
        color: 'black',
        formatter: '{value} ℃' // 设置单位为摄氏度
    }
},
        series: [
          {
            name: '广东年气温',
            type: 'line',
            data: southTemperatures,
            lineStyle:{
              color:'#adc5c9'
            }
          },
          {
            name: '北京年气温',
            type: 'line',
            data: northTemperatures,
            lineStyle:{
              color:'#8F7E23'
            }
          },
          {
            name: '广东年气温均值',
            type: 'line',
            data: Array(years.length).fill(southTemperatures.reduce((acc, cur) => acc + cur, 0) /southTemperatures.length),
            lineStyle: {
              normal: {
                type: 'dotted',
                color:'#adc5c9'
              }
            }
          },
          {
            name: '北京年气温均值',
            type: 'line',
            data: Array(years.length).fill(northTemperatures.reduce((acc, cur) => acc + cur, 0) /northTemperatures.length),
            lineStyle: {
              normal: {
                type: 'dotted',
                color:'#8F7E23'
              }
            }
          }
        ]
      },
      option2:{
        tooltip: {
        trigger: 'axis',
        
        axisPointer: {
          type: 'cross',
          label: {
            backgroundColor: '#6a7985'
          }
        },
        formatter: function(params) {
            var tooltipText = '';
            params.forEach(function(item) {
                var value = item.value.toFixed(2); // 保留两位小数
                var colorBlock = '<span style="display:inline-block;margin-right:5px;border-radius:50%;width:10px;height:10px;background-color:' + item.color + '"></span>'; // 添加颜色色块
                tooltipText += colorBlock + item.seriesName + ' ' + value + 'mm<br/>';
            });
            return tooltipText;
        }
      },
  title: {
    text: '降水总量',
    top:263,
    left:140
  },
  legend: {
    top:10,
    data: ['广东降水量', '北京降水量'],
    textStyle: {
      fontSize: 14 ,// 设置图例字体大小
       // 设置图例字体粗细
      color: '#000000' // 设置图例字体颜色
    }
  },
  grid: {
    left: '10%',
    right: '10%',
    bottom: '15%',
    containLabel: true
  },
  yAxis: [
    {
      type: 'category',
      data: years1,
      name: '年份',
      axisLabel:{
        fontSize:16,
        color:'black'
      }
    }
  ],
  xAxis: [
    {
      type: 'value',
      name: '降水量 (mm)',
      axisLabel:{
        fontSize:15,
        color:'black'
      }
    }
  ],
  series: [
    {
      name: '广东降水量',
      type: 'bar',
      data: southRainfall,
      itemStyle: {
        color: '#adc5c9', // 设置柱形图颜色
        borderRadius: [0,5,5,0]
      },
      
    },
    {
      name: '北京降水量',
      type: 'bar',
      data: northRainfall,
      itemStyle: {
        color: '#66CDAA', // 设置柱形图颜色
        borderRadius: [0,5,5,0]
      }
    }
  ]
}
    };
  },

};
</script>