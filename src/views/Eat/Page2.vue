<template>

    <div class="box-container">

      <div class="flag" v-if="show5" :key="animationKey"></div>
     <!-- 页面主体 -->   
     <div class="main">
        <!-- 左侧两个图表 -->
         <div class="left">
           <div class="chart1" style="position: relative;">

             <dv-border-box-8 :color="['rgb(183, 172, 159, 0.2)', 'rgb(183, 172, 159)']" backgroundColor="rgb(183, 172, 159, 0.2)" >
              <span style="font-size: 20px;font-weight: 100;position: absolute;top: 30px;
              left: 57px;">南北地区六大茶类销量排名</span> 
              <dv-active-ring-chart :config="config1" style="width:300px;height:300px" />
             </dv-border-box-8>
           </div>
           <div class="chart2" style="position: relative;">
            <div class="w" style="position: absolute;left: 70px;top: 250px;font-size: 20px;font-family: 'Courier New', Courier, monospace;font-weight: 100">茶叶产量前10省份</div>
             <dv-border-box-8 :reverse="true" :color="['rgb(183, 172, 159, 0.2)', 'rgb(183, 172, 159)']" backgroundColor="rgb(183, 172, 159, 0.2)">
               <dv-capsule-chart :config="config2" style="width:300px;height:250px;margin-top: 50px;"/>
             </dv-border-box-8>
           </div>
         </div>
 
       <!--中间的地图  -->
 
       <div class="middle">
       <div class="map" style="position: relative;">
    <div class="map1" style="position: absolute;top: -100px;left: -80px;">
     <e-charts :option="option8" style=" width: 120%; height:600px;" @click="showWord"></e-charts>
    </div>
    <div class="word" style="position: relative;">
      <div class="word1">四大茶区</div>
      <div class="word2">
        <div class="cir"></div>
        <span style="margin-right: 15px;font-size: 18px;">华南茶区 </span>
        <span style="margin-top: 1px;">   广东 福建 广西 台湾 海南</span>
      </div>
      <div class="word3">
        <div class="cir"></div>
        <span style="margin-right: 15px;font-size: 18px;">江南茶区 </span>
        <span style="margin-top: 1px;">   江西 江苏 浙江 湖南 湖北 安徽</span>
      </div>
      <div class="word4">
        <div class="cir"></div>
        <span style="margin-right: 15px;font-size: 18px;">江北茶区 </span>
        <span style="margin-top: 1px;">   山东 陕西 河南</span>
      </div>
      <div class="word5">
        <div class="cir"></div>
        <span style="margin-right: 15px;font-size: 18px;">西南茶区 </span>
        <span style="margin-top: 1px;">   云南 四川 贵州 重庆</span>
     
     
      </div>

    </div>
          <!-- 另一种数据 -->
          <div class="word6" id="word6" v-if="showBox1">
        <div class="cir"></div>
        <span style="margin-right: 15px;font-size: 18px;writing-mode: vertical-lr;">浙江 </span>
        <span style="margin-top: 1px;width: 250px;">  西湖龙井、大佛龙井、余杭径山茶、开化龙顶、平阳黄汤</span>
     
      </div>
      <div class="word7" id="word7" v-if="showBox2">
        <div class="cir"></div>
        <span style="margin-right: 15px;font-size: 18px;writing-mode: vertical-lr;">云南 </span>
        <span style="margin-top: 1px;width: 250px;">   普洱、滇红、滇绿、沱茶、七子饼茶</span>
     
      </div>
      <div class="word8" id="word8" v-if="showBox3">
        <div class="cir"></div>
        <span style="margin-right: 15px;font-size: 18px;writing-mode: vertical-lr;">山东 </span>
        <span style="margin-top: 1px;width: 180px;">   莲山翠芽、日照雪青、临沭玉山茗芽</span>
     
      </div>
      <div class="word9" id="word9" v-if="showBox4">
        <div class="cir"></div>
        <span style="margin-right: 15px;font-size: 18px;writing-mode: vertical-lr;">陕西 </span>
        <span style="margin-top: 1px;width: 180px;">   紫阳毛尖、汉中仙毫、商南泉茗</span>
     
      </div>
      <div class="word10" id="word10" v-if="showBox5">
        <div class="cir"></div>
        <span style="margin-right: 15px;font-size: 18px;writing-mode: vertical-lr;">台湾 </span>
        <span style="margin-top: 1px;width: 240px;">  冷冻茶、文山包种茶、东方美人茶、松柏长青茶</span>
     
      </div>

       </div>
       </div>
 
       <!-- 右侧两个图表 -->
      <div class="right">
       <div class="chart3" style="position: relative;">
        <div class="wor" style="position: absolute;left: 110px;top: 10px;font-size: 20px;font-family: 'Courier New', Courier, monospace;font-weight: 100;">南北地区茶叶品类</div>
         <e-charts :option="option5" class="wq"></e-charts>
     </div>
       <div class="chart4">
       
        <div class="s" style="font-size: 21px;position: absolute;top: 10px;left: 130px;font-family: 'Courier New', Courier, monospace;">南北地区泡茶步骤</div>
       
        <div class="s1" style="font-size: 20px;position: absolute;top: 117px;left: 10px;font-family: 'Courier New', Courier, monospace;writing-mode: vertical-lr;">南方<span style="font-weight: 600;">--精细</span></div>
        <div class="s1" style="font-size: 20px;position: absolute;top: 80px;right: 10px;font-family: 'Courier New', Courier, monospace;writing-mode: vertical-lr;">北方<span style="font-weight: 600;">--简单</span></div>
        <e-charts :option="option6" class="wq1"></e-charts>
       </div>
     </div>
 
   </div>
    </div>
 
 </template>
 
 <style lang="less" scoped>
 @keyframes appear3{
  0%{
    transform: translateY(40px);
    transform: translateX(-20px);
    opacity: 0;
  }
100%{
  transform: translateX(0px);

}
 }
 .flag{
  width: 60px;
  height: 60px;
  background: url('/public/static/flag.png') no-repeat center;
  background-size: 100% 100%;
  position: absolute;
  top:358px;
  left:780px;
  z-index: 999;
  animation: appear3 1s;
 }
 .chart4{
  width: 400px;
  background-color:rgba(195, 183, 169, 0.3) ;
  border-radius: 10px;
 }
 @keyframes appear2{
   0%{
     scale: 0;
     opacity: 0;
   }
   60%{
     scale: 1.1;
     opacity: 1;
  }
  100%{
     scale: 1;
     opacity: 1;
  }
 }
  @keyframes appear{
    0%{
       transform: translateY(100px);
       opacity: 0;
 }
 80%{
     transform: translateY(10px);
     opacity: 1;
 }
 100%{
     transform: translateY(0);
     opacity: 1;
    }
  }
  .word1{
    font-size: 20px;
    position: absolute;
    top:400px;
    animation: appear 1.3s;
    animation-fill-mode: forwards;
  }
  .word2{
    animation: appear 1.6s;
    animation-fill-mode: forwards;
    display: flex;
    .cir{
      width: 15px;
      height: 15px;
      background-color: #FFA500;
      border-radius: 50%;
      margin-right: 10px;
      margin-top: 5px;
    }
    position: absolute;
    top:450px;
  }
  .word3{
    animation: appear 2.1s;
    animation-fill-mode: forwards;
    display: flex;
    margin-top: 30px;
    .cir{
      width: 15px;
      height: 15px;
      background-color: #4D61B3;
      border-radius: 50%;
      margin-right: 10px;
      margin-top: 5px;
    }
    position: absolute;
    top:450px;
  }
  .word4{
    animation: appear 2.3s;
    animation-fill-mode: forwards;
    display: flex;
    margin-top: 60px;
    .cir{
      width: 15px;
      height: 15px;
      background-color: #800000;
      border-radius: 50%;
      margin-right: 10px;
      margin-top: 5px;
    }
    position: absolute;
    top:450px;
  }
  .word5{
    animation: appear 2.6s;
    animation-fill-mode: forwards;
    display: flex;
    margin-top: 90px;
    .cir{
      width: 15px;
      height: 15px;
      background-color: #556B2F;
      border-radius: 50%;
      margin-right: 10px;
      margin-top: 5px;
    }
    position: absolute;
    top:450px;
  }
  .word6{
    position: absolute;
    top:370px;
    left: 360px;
    display: flex;
    margin-top: 90px;
    
    animation: appear 1.4s;
    animation-fill-mode: forwards;
    .cir{
      width: 15px;
      height: 15px;
      background-color: #006400;
      
      margin-right: 10px;
      margin-top: 13px;
    }

  }
  .word7{
    position: absolute;
    top:420px;
    left: 360px;
    display: flex;
    margin-top: 90px;
    animation: appear 1.4s;
    animation-fill-mode: forwards;
    .cir{
      width: 15px;
      height: 15px;
      background-color: #FF7F50;
      
      margin-right: 10px;
      margin-top: 13px;
    }

  }
  .word8{
    position: absolute;
    
    top:110px;
    left: 460px;
    display: flex;
    margin-top: 90px;
    animation: appear2 1.4s;
    animation-fill-mode: forwards;
    padding-right: 140px;
    .cir{
      width: 15px;
      height: 15px;
      background-color: #CD5C5C;
      
      margin-right: 10px;
      margin-top: 13px;
    }

  }
  .word9{
    animation: appear2 1.4s;
    animation-fill-mode: forwards;
    position: absolute;
    top:170px;
    left: 460px;
    display: flex;
    margin-top: 90px;
    .cir{
      width: 15px;
      height: 15px;
      background-color: #8B0000;
      
      margin-right: 10px;
      margin-top: 13px;
    }

  }
  .word10{
    position: absolute;
    top:317px;
    left: 360px;
    display: flex;
    margin-top: 90px;
    animation: appear 1.4s;
    animation-fill-mode: forwards;
    .cir{
      width: 15px;
      height: 15px;
      background-color: #d52414;
      
      margin-right: 10px;
      margin-top: 13px;
    }

  }

  
 @keyframes appear{
   0%{
     transform: translateY(100px);
     opacity: 0;
 }
 100%{
     transform: translateY(0);
     opacity: 1;
 }
}
 @keyframes appear1 {
     0%{
       transform: translateX(-100px);
       opacity: 0;
   }
   100%{
       transform: translateX(0);
       opacity: 1;
     }
 }

 @keyframes appear2 {
     0%{
       transform: translateX(100px);
       opacity: 0;
   }
   100%{
       transform: translateX(0);
       opacity: 1;
     }
 }

 .wq1{
  width: 400px;
  height: 300px;
 }
  
   .main{
    margin-bottom: 5px;
     display: flex;
   .left{
    flex:5;
    animation: appear1 1s;
    animation-fill-mode: forwards;
     .chart1{
       
       width: 350px;
       height: 290px;
       
       .dv-active-ring-chart{
         margin-left: 25px;
       }
     }
     .chart2{
 
       width: 350px;
       height: 280px;
 
       margin-bottom: 50px;
     }
   }
   .middle{
     flex:10;
     z-index: 1;
     .map{
         
       width: 100%;
       height: 580px;
       margin-top: 30px;
       
       background-size: 100% 100%;
       background-position: center;
       animation: appear 1s;
       animation-fill-mode: forwards;
       position: relative;
       z-index: 1;
   .map1{
     width: 80%;
     height: 400px;
     margin-left: 30px;
     
   }
     }
 
   }
   .right{
     flex:3;
     padding-left: 15px;
     animation:  appear2 1s;
     animation-fill-mode: forwards;
     .chart3{
      position: absolute;
      right:8px;
       margin-top: 00px;
       padding-left: 10px;
       width: 430px;
       height: 310px;
       background-color:rgba(195, 183, 169, 0.3) ;
  border-radius: 10px;
       margin-bottom: 20px;
       .wq{
         width: 350px;
         height: 300px;
       }
     }
     .chart4{
      position: absolute;
       top: 240px;
       left: -0px;
      z-index:999;
      margin-top: 90px;
      margin-left: 10px;
       width: 420px;
       height: 300px;
    
      
     }
   }
 }
  </style>
 
 <script>
 
  
   import * as echarts from "echarts";
import mapJson from "@/assets/json/china.json"
  echarts.registerMap("china", mapJson);

  var colorList = ['#0090ff', '#06d3c4', '#ffbc32', '#2ccc44', '#ff3976', '#6173d6', '#914ce5', '#42b1cc', '#ff55ac', '#0090ff', '#06d3c4', '#ffbc32', '#2ccc44', '#ff3976', '#6173d6', '#914ce5', '#42b1cc', '#ff55ac', '#0090ff', '#06d3c4', '#ffbc32', '#2ccc44', '#ff3976', '#6173d6', '#914ce5', '#42b1cc', '#ff55ac', '#0090ff', '#06d3c4', '#ffbc32', '#2ccc44', '#ff3976', '#6173d6', '#914ce5', '#42b1cc', '#ff55ac', '#0090ff', '#06d3c4', '#ffbc32', '#2ccc44', '#ff3976', '#6173d6', '#914ce5', '#42b1cc', '#ff55ac', '#0090ff', '#06d3c4', '#ffbc32', '#2ccc44', '#ff3976', '#6173d6', '#914ce5', '#42b1cc', '#ff55ac', '#0090ff', '#06d3c4', '#ffbc32', '#2ccc44', '#ff3976', '#6173d6', '#914ce5', '#42b1cc', '#ff55ac', '#0090ff', '#06d3c4', '#ffbc32', '#2ccc44', '#ff3976', '#6173d6', '#914ce5', '#42b1cc', '#ff55ac', '#0090ff', '#06d3c4', '#ffbc32', '#2ccc44', '#ff3976', '#6173d6', '#914ce5', '#42b1cc', '#ff55ac', '#0090ff', '#06d3c4', '#ffbc32', '#2ccc44', '#ff3976', '#6173d6', '#914ce5', '#42b1cc', '#ff55ac', '#0090ff', '#06d3c4', '#ffbc32', '#2ccc44', '#ff3976', '#6173d6', '#914ce5', '#42b1cc', '#ff55ac']
let obj = {
   data1: [ { value: 1000, percent: "50%", name: " 北方", label: "简茶", num: 2 },
      { value: 1000, percent: "50%", name: "南方", label: "六大茶类", num: 1 },
     
    ],
   data2: [
      { value: 333, percent: "21.2%", name: "界碑Ⅰ型 ", label: "红茶", num: 1 },
      { value: 333, percent: "17.4%", name: "界碑Ⅱ型 ", label: "绿茶", num: 1 },
      { value: 334, percent: "10.2%", name: "界碑Ⅲ型 ", label: "青茶", num: 1 },
      { value: 333, percent: "6.8%", name: "界碑Ⅰ型 ", label: "黄茶", num: 1 },
      { value: 333, percent: "6.7%", name: "界碑Ⅱ型 ", label: "黑茶", num: 1 },
      { value: 334, percent: "5.1%", name: "界碑Ⅲ型 ", label: "白茶", num: 1 },
      { value: 500, percent: "21.5%", name: " 区桩Ⅰ型", label: "黄茶", num: 2 },
      { value: 500, percent: "33.1%", name: " 区桩Ⅱ型", label: "绿茶", num: 2 },
      { value: 500, percent: "45.2%", name: " 区桩Ⅲ型", label: "红茶", num: 2 },
],
}
const color = ['rgb(0,200,233)', 'rgb(0,233,153)', 'rgb(112,142,255)', 'rgb(102,224,227)', 'rgb(50,197,233)', 'rgb(55,161,218)', 'rgb(159,230,184)', 'rgb(255,219,92)', 'rgb(150,191,255)', 'rgb(131,120,234)', 'rgb(157,150,245)', 'rgb(231,188,243)',]


   export default {
  
     data() {
       return { 
        animationKey: 0,
        show5:false,
        showBox1:false,
        showBox2:false,
        showBox3:false,
        showBox4:false,
        showBox5:false,
        option8:{
    series: [{
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
            {name: '浙江', itemStyle: {areaColor: '#934125'}}, // 北京市，颜色为红色
            {name: '江苏', itemStyle: {areaColor: '#FAEBD7'}}, // 上海市，颜色为蓝色
            {name: '河南', itemStyle: {areaColor: '#BDB76B'}}, // 天津市，颜色为绿色
            {name: '山东', itemStyle: {areaColor: '	#CD853F'}},
            {name: '安徽', itemStyle: {areaColor: '#DCDCDC'}},
            {name: '湖北', itemStyle: {areaColor: '#C0C0C0'}},
            {name: '湖南', itemStyle: {areaColor: '#4682B4'}},
            {name: '江西', itemStyle: {areaColor: '#FAFAD2'}},
            {name: '福建', itemStyle: {areaColor: '#FA8072'}},
            {name: '云南', itemStyle: {areaColor: '#D2691E'}},
            {name: '四川', itemStyle: {areaColor: '#556B2F'}},
            {name: '重庆', itemStyle: {areaColor: '#A9A9A9'}},
            {name: '四川', itemStyle: {areaColor: '#556B2F'}},
            {name: '广西', itemStyle: {areaColor: '#6A5E25'}},
            {name: '广东', itemStyle: {areaColor: '#128DA1'}},
            {name: '海南', itemStyle: {areaColor: '#3CB371'}},
            {name: '贵州', itemStyle: {areaColor: '#FFE4B5'}},
            {name: '台湾', itemStyle: {areaColor: '#DAA520'}},
            {name: '陕西', itemStyle: {areaColor: '#800000'}},
            {name: '山西', itemStyle: {areaColor: '#5F9EA0'}},
            {name: '河北', itemStyle: {areaColor: '#E9967A'}},
            {name: '北京', itemStyle: {areaColor: '#483D8B'}},
            {name: '天津', itemStyle: {areaColor: '#808080'}},
            {name: '辽宁', itemStyle: {areaColor: '#E6E6FA'}},
            {name: '吉林', itemStyle: {areaColor: '#ADD8E6'}},
            {name: '黑龙江', itemStyle: {areaColor: '#CD853F'}},
            {name: '北京', itemStyle: {areaColor: '#483D8B'}},
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
                            color:'#aaa49eb5' //0%处的颜色,
                        },
                        {
                            offset:1,
                            color:'#d0bca78c' //100%处的颜色,
                        }

                    ]
                    }
                }
    }]
},
        // option6: {
        //     title: {
        //       top: '85%',
        //       left:'10%',
        //         text: '南北地区茶园面积与茶叶产量变化趋势',
                
        //         textStyle: {
                    
        //             fontSize: 18,
        //             fontWeight: 'normal'
        //         }
        //     },
        //     tooltip: {
        //         trigger: 'axis'
        //     },
        //     legend: {
        //         data: ['全国茶园面积(万亩)', '全国茶叶产量(万吨)']
        //     },
        //     xAxis: {
        //         type: 'category',
        //         data: ['2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022']
        //     },
        //     yAxis: [
        //         {
        //             type: 'value',
        //             name: '全国茶园面积(万亩)'
        //         },
        //         {
        //             type: 'value',
        //             name: '全国茶叶产量(万吨)'
        //         }
        //     ],
        //     series: [
        //         {
        //             name: '全国茶园面积(万亩)',
        //             type: 'bar',
        //             data: [2897.75, 3083.27, 3302.03, 3550.58, 3788.96,3961.26,4084.16,4273.08,4478.7,4657.16,4824.99,4961.76,5089.07],
        //             color: '#69e367',
        //             itemStyle:{
        //               borderRadius:[10,10,0,0]
        //             },
        //             label:{
        //              show:true,
        //              position:'top',
        //              color:'black',
        //              fontSize:6
        //             }
        //           },
        //         {
        //             name: '全国茶叶产量(万吨)',
        //             type: 'line',
        //             lineStyle:{
        //               color:'#60b766'
        //             },
        //             yAxisIndex: 1,
        //             data: [146.25, 160.76, 176.15, 188.75, 204.93,227.66,231.33,246.04,261.04,277.72,293.18,316.4,334.21]
        //         }
        //     ]
        // },
     option6:{
    title: {
 
        left: 'left',
        top: 'bottom'
    },
    tooltip: {
        trigger: 'item',
        formatter: function(params) {
            // 获取数据项的名称
            var stepName = params.name;
            // 获取数据项的索引
            var stepIndex = params.dataIndex + 1;
            // 格式化tooltip的显示内容
            var tooltipText = "第" + stepIndex + "步：" + stepName;
            return tooltipText;
        }
    },
   

    calculable: true,
    series: [

        {
            name:'漏斗图',
            type:'funnel',
            width: '55%',
            height: '55%',
            left: '25%',
            top: '15%',
            funnelAlign: 'right',

            center: ['75%', '25%'],  // for pie

            data: [
            {value: 60, name: '投茶',itemStyle: {color: '#909270'}},
            {value: 50, name: '冲茶'},
            {value: 30, name: '出汤'},
               {value: 10, name: '品茶',itemStyle: {color: '#7C9270'}},
               
               
                

            ]
        },
        {
            name: '金字塔',
            type:'funnel',
            width: '60%',
            height: '60%',
            left: '25%',
            top: '30%',
            sort: 'ascending',
            funnelAlign: 'left',
            label: {
        position: 'left', // 设置标签文本的位置为左侧
        align: 'right', // 设置标签文本在元素的右侧对齐
        distance: 10, // 设置标签文本与元素的距离
    },
            center: ['75%', '75%'],  // for pie

            data: [
            {value: 100, name: '温杯'},
            {value: 92, name: '投茶',itemStyle: {color: '#909270'}},
            {value: 83, name: '润茶'},
            {value: 71, name: '醒茶'},
            {value: 65, name: '冲茶'},
            {value: 52, name: '刮沫'},
            {value: 45, name: '出汤'},
            {value: 24, name: '斟茶'},
            {value: 20, name: '奉茶'},
            {value: 5, name: '品茶',itemStyle: {color: '#7C9270'}},
                
              
               
                 
                 
                     
                  
               
               
            ]
        }
    ]
},
//         option5: {
//   tooltip: {
//     trigger: 'item',
//     formatter: function(params) {
//       return params.data.name + ': ' + params.data.value + ' 吨 (' + params.percent + '%)';
//     }
  
//   },
 
//   legend: {
//     top: '5%',
//     left: 'center'
//   },
//   series: [
//     {
//       type: 'pie',
//       radius: ['40%', '70%'],
//       avoidLabelOverlap: false,
//       padAngle: 2,
//       itemStyle: {
//         borderRadius: 10
//       },
    
//       label: {
//         show: false,
//         position: 'center'
//       },
//       emphasis: {
//         label: {
//           show: true,
//           fontSize: 15,
//           fontWeight: 'bold',
//           formatter: function(params) {
//             return params.data.name + ': '  + ':\n'+ params.data.value + ' 吨 (' + params.percent + '%)';
//           }
//         }
//       },
//       labelLine: {
//         show: true
//       },
//       data: [
//         { value: 2173630, name: '绿茶', itemStyle: { color: '#69e367' }  },
//         { value: 325701, name: '青茶', itemStyle: { color: '#8ed25d' }  },
//         { value: 304490, name: '红茶', itemStyle: { color: '#bfee5e' }  },
//         { value: 80185, name: '白茶', itemStyle: { color: '#e9d057' }  },
//         { value: 12078, name: '黄茶', itemStyle: { color: '#85e58c' }  },
//         { value: 56521, name: '其他', itemStyle: { color: '#76bd7b' }  },
//       ]
//     }
//   ]
// },
  option5:{

      color: color,
      tooltip: {
        show: true,
        left:30,
        top:30,
        trigger: 'item',
        // triggerOn: 'click',
        alwaysShowContent: true,
        position: ['70%', '15%'],
        backgroundColor: "rgb(183, 172, 159, 0.2)",
        borderWidth: 0,
        formatter: function (param) {
          // console.log("qqq", param)
          // console.log("www", obj.data1)
          let p1 = obj.data1.filter(e => {
            return e.num == param.data.num
          })
          let p2 = obj.data2.filter(e => {
            return e.num == param.data.num
          })
          console.log("eee", p1, p2)
          let str = ""
          str += "<div style='height:200px;width:110px;color: #fff;padding-right:10px;'>"
          str += "<p style='font-size: 18px;color: black;font-family: SourceHanSansCN-Regular;'>"
          str += `${p1[0].label}</p>`

          str += "<table>"
          for (let i = 0; i < p2.length; i++) {
        str += "<tr>";
        str += `<td><span style="width: 12px;height: 10px;background-color: ${color[p2[i].num * 3+i]};display: inline-block;margin:0 10px 0 0"></span></td>`;
        str += `<td><span style="font-size: 16px;color: black;margin:0 8px 0 0;">${p2[i].label}</span></td>`;
        str += `<td><span style="font-size: 16px;margin:0 8px 0 0;color: black;">${p2[i].percent}</span></td>`;
        str += "</tr>";
    }
          str += "</table></div>"
          return str

        }
      },
      series: [{
        name: '界桩碑',
        type: 'pie',
        center: ['30%', '50%'],
        radius: [0, '45%'],
        label: {
          position: 'inner',
          fontSize: 14,
          color: '#fff'
        },
        itemStyle: {
          borderColor: '#fff',
          borderWidth: 0,
          shadowBlur: 3,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        },
        selectedMode: 'single',
        data: obj.data1
      },
      {
        name: 'ⅠⅡⅢ',
        type: 'pie',
        center: ['30%', '50%'],
        radius: ['60%', '70%'],
        itemStyle: {
          borderColor: '#fff',
          borderWidth: 0,
          shadowBlur: 3,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        },
        emphasis: {
          disabled: false,
          scale: false,
        },
        label: {
          normal: {
            position: 'inner',
            formatter: function (params) {
              if (params.value != 0)
                return params.data.label
              else
                return ''
            },
            show: false,
            fontSize: 14
          },
        },
        data: obj.data2
      }
      ]
    }, 
 config1:{
       radius: '40%',
   activeRadius: '45%',
   data: [
     {
       name: '绿茶',
       value: 56.9
     },
     {
       name: '红茶',
       value: 14.9
     },
     {
       name: '黑茶',
       value: 14.7
     },
     {
       name: '乌龙茶',
       value: 9.9
     },
     {
       name: '白茶',
       value: 3.1
     },
     {
       name: '黄茶',
       value: 0.5
     }
   ],
   digitalFlopStyle: {
     fontSize: 20
   },
   
 },
     config2:{
     
       data: [
     {
       name: '福建',
       value: 46.1
     },
     {
       name: '湖北',
       value: 39.2
     },
     {
       name: '云南',
       value: 38
     },
     {
       name: '四川',
       value: 36.4
     },
     {
       name: '贵州',
       value: 35
     },
     {
       name: '湖南',
       value: 25.1
     },
     {
       name: '浙江',
       value: 20.4
     },
     {
       name: '安徽',
       value: 14.3
     },
     {
       name: '广东',
       value: 11
     },
     {
       name: '广西',
       value: 9
     },
   ],
   colors: ['#56ee55', '#fb7293', '#e690d1', '#32c5e9', '#96bfff','#96bfff'],
   unit: '万吨',
   showValue: true
     },

       }
     },
 
    methods: {
      showWord(params){
       if(params.name=='浙江'){
        this.showBox1 = !this.showBox1;
       }
       if(params.name=='云南'){
        this.showBox2 = !this.showBox2;
       }
       if(params.name=='山东'){
        this.showBox3 = !this.showBox3;
       }
       if(params.name=='陕西'){
        this.showBox4 = !this.showBox4;
       }
       if(params.name=="台湾"){
        
        this.showBox5 = !this.showBox5;
        this.show5=!this.show5;
        this.animationKey++;
       }
      },
     makeRandomData() {
       const data = [];
       for (let i = 0; i < 20; i++) {
         data.push({
           name: `数据${i + 1}`,
           value: Math.floor(Math.random() * 100)
         });
       }
       return data.slice(0, 5);
     }
    }
   }
 
 
 
 
 </script>