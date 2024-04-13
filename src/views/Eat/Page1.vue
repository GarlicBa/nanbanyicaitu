<template>
     <div class="main">

<div class="left">
  <div class="sort">
    <div class="first">
      <div class="box1" @click="highlightRegions1">酸</div>
      <div class="box2" @click="highlightRegions2">甜</div>
      <div class="box3" @click="highlightRegions3">辣</div>
    </div>
    <div class="second">
       <div class="box1"  @click="highlightRegions4">香</div>
      <div class="box2"  @click="highlightRegions5">鲜</div>
      <div class="box3"  @click="highlightRegions6">咸</div>
    </div>
  </div>
  <div class="chart1" style="margin-left: 50px;margin-bottom: 100px;position: relative;" >
    <div class="title" v-if="!show1">北方鲁菜和南方川菜调味品前十数据</div>
    <div class="word6" v-if="!show1">
        <div class="cir"></div>
        <span style="margin-right: 15px;font-size: 18px;">北方鲁菜</span>
      
      </div>
      <div class="word7" v-if="!show1">
        <div class="cir"></div>
        <span style="margin-right: 15px;font-size: 18px;">南方川菜 </span>
      
     
      </div>       
         <e-charts class="circle" :option="option7" style="width: 560px;height: 360px;position: absolute;top:17px;left:-100px;" v-if="!show1"></e-charts>
         <div class="woe" style="writing-mode: vertical-lr;position: absolute;bottom: -280px;left:-80px;font-size: 20px;" v-if="show1">川菜鲁菜六种口味占比</div>  
        </div>

  <div  class="chart" style="position: absolute;top:290px;left:90px;z-index:999;" v-if="show1">
    <e-charts :option="option" style="width:390px;height: 350px;margin-bottom: 160px;opacity: 0.9;border-radius: 50%;"></e-charts>
   
  </div>
  <div class="pic1" v-if="show1">
   
    <div class="left2" style="position: relative;">
        <span style="position: absolute;top:30px;left: 30px;font-size: 20px;font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;">川菜原料口味分布</span>
        <e-charts :option="option6" style="width: 220px;height: 300px;"></e-charts>
    </div>
    <div class="right2" style="position: relative;">
        <span style="position: absolute;top:30px;left: 30px;font-size: 20px;font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;">鲁菜原料口味分布</span>
        <e-charts :option="option8" style="width: 220px;height: 300px;"></e-charts>
    </div>

</div>
  <div class="pic2" v-if="!show1"></div>
</div>
<div class="tohome">
                <label  for="name" class="label"  @click="change" >
                    <svg t="1712897300580" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4246" width="40" height="40"><path d="M761.6 489.6l-432-435.2c-9.6-9.6-25.6-9.6-35.2 0-9.6 9.6-9.6 25.6 0 35.2l416 416-416 425.6c-9.6 9.6-9.6 25.6 0 35.2s25.6 9.6 35.2 0l432-441.6C771.2 515.2 771.2 499.2 761.6 489.6z" p-id="4247" fill="#ffffff"></path></svg>    </label>
                </div>


<div class="right"  >
   <div class="map" ref="chartContainer" style="width: 900px; height: 700px;"></div>
</div>

</div>
</template>

<style lang="less" scoped>
   .tohome{
    position:absolute;
    left: 510px;
    top:370px;
    z-index:999;
         width: 50px;
         height: 50px;
         
         margin-left: 20px; 
        
        
         transition: transform 0.3s ease;
      &:hover{
      transform: scale(1.2);
      }
      label{
        cursor: pointer;
      }}
@keyframes appear5{
    0%{
        opacity: 0;
        scale:0;
    }
    50%{
        opacity: 1;
        scale:1.1;

    }
    100%{
        opacity: 1;
        scale:1;
    }
}
.pic1{
    width: 600px;
    height: 300px;
    
    position: absolute;
    top:0px;
    display: flex;
    .left2{
        margin-top: 10px;
        width: 200px;
        height: 300px;
        background-color: rgb(183, 172, 159) ;
        opacity: 0.8;
        border-radius: 10px;
    }
    .right2{
        margin-top: 10px;
        width: 200px;
        height: 300px;
        margin-left: 10px;
        background-color: rgb(183, 172, 159) ;
        opacity: 0.8;
        border-radius: 10px;
    }
}
.pic2{
    width: 400px;
    height: 300px;
    background:url('/public/static/pic1.png') no-repeat center;
    background-size: 100% 100%;
    position: absolute;
    top:340px;
    left:110px;
    border-radius: 10px;
    animation: appear5 1s;
}
.arroy{
    width: 30px;
    height: 30px;
    background: url('/public/static/arroy/right.png') no-repeat center;
    background-size: 100% 100%;
    position: absolute;
    top:400px;
    left: 530px;
    cursor: pointer;
    z-index: 999;
  &:hover{
    scale:1.1;
  }
}
  .word6{
    position: absolute;
    top:70px;
    right: -210px;
    animation: appear 2.1s;
    animation-fill-mode: forwards;
    display: flex;
    
    .cir{
      width: 15px;
      height: 15px;
      background-color: #A5C062;
      border-radius: 50%;
      margin-right: 10px;
      margin-top: 5px;
    }
   
    
  }
  .word7{
    position: absolute;
    top:120px;
    right: -210px;
    animation: appear 2.1s;
    animation-fill-mode: forwards;
    display: flex;
    
    .cir{
      width: 15px;
      height: 15px;
      background-color:#2B7ECB ;
      border-radius: 50%;
      margin-right: 10px;
      margin-top: 5px;
    }
   
    
  }
.title{
    position: absolute;
    top:40px;
    font-size: 20px;
}
  .chart1{
       
       width: 350px;
       height: 350px;
      
       .dv-active-ring-chart{
         margin-left: 25px;
       }
     }
@keyframes map1 {
  0%{
      opacity: 0;
      scale: 0;
  }
  50%{
      opacity: 0.5;
      scale: 1.05;
  }
  100%{
      opacity: 1;
      scale: 1;
  }
}
@keyframes map {
  0%{
      opacity: 0;
      scale: 0;
  }
  50%{
      opacity: 0.5;
      scale: 1.2;
  }
  100%{
      opacity: 1;
      scale: 1;
  }
}
.map{
   animation: map 1s ease-in-out;
   animation-fill-mode: forwards;
   width:800px;
            height: 630px;
}
@keyframes getin {
    0%{
        transform: translateX(100%);
    }
    100%{
        transform: translateX(0);
    }
}
@keyframes map {
  0%{
      opacity: 0;
      scale: 0;
  }
  50%{
      opacity: 0.5;
      scale: 1.2;
  }
  100%{
      opacity: 1;
      scale: 1;
  }
}
@keyframes appear2 {
     0%{
       transform: translateY(-100px);
       opacity: 0;
   }
   100%{
       transform: translateY(-70px);
       opacity: 1;
     }
 }
  .chart1{
    animation: appear2 1s ease-in-out;
    animation-fill-mode: forwards;
  }

.main{
            width: 100%;
            height: 580px;
            display: flex;
            margin-bottom: 40px;
            

            .left{
                margin-left: 60px;
                margin-top:40px;
                width: 380px;
                height: 560px;
                
                .sort{
                     position: absolute;
                    
                     right: 130px;
                     bottom: 300px;
                    width: 200px;
                    height: 150px;
                    background-color: rgb(183, 172, 159);
                    border-radius: 10px;
                    opacity: 0.8;
                    padding-right: 10px;
                    animation: map1 1s ease-in-out;
                    z-index:999;
   animation-fill-mode: forwards;
                  .first{
                    margin-bottom: 15px;
                    padding-top:20px;
                    height: 30%;
                    display: flex;
                    justify-content: space-around;
                    .box1{
                        background-color: rgb(54, 125, 32);
                        border-radius: 50%;
                        width: 50px;
                        height: 50px;
                        color: #000;
                        font-size: 20px;
                        font-weight: 200px;
                        font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        transition: transform 0.3s ease;
                        cursor: pointer;
                        margin-left: 20px;
                         &:hover{
                         transform: scale(1.2);
                         }
     
                    }
                    .box2{
                        background-color: rgb(167, 96, 161);
                        border-radius: 50%;
                        width: 50px;
                        height: 50px;
                        color: #000;
                        font-size: 20px;
                        font-weight: 200px;
                        font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        transition: transform 0.3s ease;
                        cursor: pointer;
                        
                         &:hover{
                         transform: scale(1.2);
                         }
     
                    }
                    .box3{
                        background-color: rgb(204, 21, 39);
                        border-radius: 50%;
                        width: 50px;
                        height: 50px;
                        color: #000;
                        font-size: 20px;
                        font-weight: 200px;
                        font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        transition: transform 0.3s ease;
                        cursor: pointer;
                       
                         &:hover{
                         transform: scale(1.2);
                         }
     
                    }
                  }
                  .second{
                    height: 50%;
                    display: flex;
                    justify-content: space-around;
                   
                    .box1{
                        background-color: rgb(204, 138, 31);
                        border-radius: 50%;
                        width: 50px;
                        height: 50px;
                        color: #000;
                        font-size: 20px;
                        font-weight: 200px;
                        font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        transition: transform 0.3s ease;
                        cursor: pointer;
                        margin-left: 20px;
                         &:hover{
                         transform: scale(1.2);
                         }
     
                    }
                    .box2{
                        background-color: rgb(203, 209, 24);
                        border-radius: 50%;
                        width: 50px;
                        height: 50px;
                        color: #000;
                        font-size: 20px;
                        font-weight: 200px;
                        font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        transition: transform 0.3s ease;
                        cursor: pointer;
                      
                         &:hover{
                         transform: scale(1.2);
                         }
     
                    }
                    .box3{
                        background-color:rgb(61, 37, 7);
                        border-radius: 50%;
                        width: 50px;
                        height: 50px;
                        color: #000;
                        font-size: 20px;
                        font-weight: 200px;
                        font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        transition: transform 0.3s ease;
                        cursor: pointer;
                      
                         &:hover{
                         transform: scale(1.2);
                         }
     
                    }
                  }

                }
            }
            .right{
            width:800px;
            height: 630px;
            margin-left: 20px;
           z-index:1;
            }
        }
</style>

<script>
  import * as echarts from "echarts";
import mapJson from "@/assets/json/china.json"
  echarts.registerMap("china", mapJson);
  

var reslult = [
    {
        id: 1,
        name: '鲜',
        num:0,
        size: 80,
        color: 'rgb(203, 209, 24)',
        position: [50, 50],
    },
    {
        id: 2,
        name: '香',
        num:0,
        size: 54,
        color: 'rgb(204, 138, 31)',
        position: [33, 22],
    },
    {
        id: 3,
        name: '咸',
        num:0,
        size: 45,
        color: 'rgb(61, 37, 7)',
        position: [70, 65],
    },
    {
        id: 4,
        name: '辣',
        num:0,
        size: 41,
        color: 'rgb(204, 21, 39)',
        position: [27, 65],
    },
    {
        id: 5,
        name: '甜',
        num:0,
        size: 35,
        color: 'rgb(167, 96, 161)',
        position: [65, 33],
    },

    {
        id: 6,
        name: '酸',
        num:0,
        size: 30,
        color: 'rgb(54, 125, 32)',
        position: [10, 40],
    },
    
];
var reslult1 = [
    {
        id: 1,
        name: '鲜',
        num:0,
        size: 80,
        color: 'rgb(203, 209, 24)',
        position: [50, 50],
    },
    {
        id: 2,
        name: '甜',
        num:0,
        size: 75,
        color: 'rgb(167, 96, 161)',
        position: [35, 33],
    },
    {
        id: 3,
        name: '咸',
        num:0,
        size: 67,
        color: 'rgb(61, 37, 7)',
        position: [70, 35],
    },
    {
        id: 4,
        name: '香',
        num:0,
        size: 64,
        color: 'rgb(204, 138, 31)',
        position: [73, 22],
    },
  


    {
        id: 5,
        name: '酸',
        num:0,
        size: 55,
        color: 'rgb(54, 125, 32)',
        position: [10, 40],
    },
    {
        id: 5,
        name: '辣',
        num:0,
        size: 30,
        color: 'rgb(204, 21, 39)',
        position: [27, 65],
    },
   
];
var data = [];
var data1 = [];
// 渲染数据，并写入chart
reslult.map((item) => {
    data.push({
        name: item.name,
        number: item.num,
        value: item.position,
        symbolSize: item.size,
        itemStyle: {
            normal: {
                color: new echarts.graphic.RadialGradient(0.5, 0.5, 1, [
                    {
                        offset: 0.2,
                        color: item.color,
                    },
                    {
                        offset: 1,
                        color: item.color,
                    },
                ]),
                borderWidth: 3,
                borderColor: item.color,
            },
        },
    });
});
reslult1.map((item) => {
    data1.push({
        name: item.name,
        number: item.num,
        value: item.position,
        symbolSize: item.size,
        itemStyle: {
            normal: {
                color: new echarts.graphic.RadialGradient(0.5, 0.5, 1, [
                    {
                        offset: 0.2,
                        color: item.color,
                    },
                    {
                        offset: 1,
                        color: item.color,
                    },
                ]),
                borderWidth: 3,
                borderColor: item.color,
            },
        },
    });
});


export default {
    mounted() {
                // 初始化 ECharts 实例
                this.myChart = echarts.init(this.$refs.chartContainer);
              
                // ECharts 地图配置项
                var option = {
                    // 地图配置...
                    series: [{
                        type: 'map',
                        map: 'china',
                        data: [
                        // 假设初始数据，可根据实际情况调整
                        {name: '山西', value: 0},
                        {name: '浙江', value: 0},
                        {name: '江苏', value: 0},
                        {name: '上海', value: 0},
                        {name: '安徽', value: 0},
                        {name: '湖北', value: 0},
                        {name: '湖南', value: 0},
                        {name: '重庆', value: 0},
                        {name: '四川', value: 0},
                        {name: '贵州', value: 0},
                        {name: '江西', value: 0},
                        {name: '广东', value: 0},
                        {name: '广西', value: 0},
                        {name: '云南', value: 0},
                        {name: '海南', value: 0},
                        {name: '台湾', value: 0},
                        {name: '陕西', value: 0},
                        {name: '河南', value: 0},
                        {name: '山东', value: 0},
                        {name: '内蒙古', value: 0},
                        {name: '北京', value: 0},
                        {name: '天津', value: 0},

                        {name: '黑龙江', value: 0},
                        {name: '吉林', value: 0},
                        {name: '辽宁', value: 0},
                        {name: '河北', value: 0},
                        {name: '甘肃', value: 0},
                        {name: '宁夏', value: 0},
                        {name: '青海', value: 0},
                        {name: '新疆', value: 0},
                        {name: '宁夏', value: 0},
                        {name: '西藏', value: 0},
                        {name: '福建', value: 0},

                        // 更多地区数据...
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
                };
   
    
   
                // 将配置项设置给 ECharts 实例
                this.myChart.setOption(option);
                
                // 监听鼠标移入事件
                this.myChart.on('mouseover', params => {
                if (params.data) {
                    this.highlightRegion(params.data.name); // 调用高亮方法
                }
            });
                  
            // 监听鼠标移出事件
            this.myChart.on('mouseout', () => {
                this.clearHighlight(); // 调用清除高亮方法
            });

            this.myChart1.on('mouseover', (event) => {
   console.log(event)
    this.myChart1.dispatchAction({
      type: 'select',//默认显示江苏的提示框
      seriesIndex: 0,//这行不能省
      dataIndex: event.dataIndex
   });
})
            },
    methods: {
        change(){
            this.show1=!this.show1;
        },
        highlightRegion(regionName) {
                // 获取省份对应的颜色
                const color = this.provinceColors[regionName];
                if (color) {
                    // 更新高亮
                    this.myChart.setOption({
                        series: [{
                            data: this.myChart.getOption().series[0].data.map(item => {
                                if (item.name === regionName) {
                                    return {
                                        name: item.name,
                                        value: item.value,
                                        itemStyle: {
                                            areaColor: color,
                                            
                                            borderWidth: 0.5,
                                            
                                        }
                                    };
                                } else {
                                    return item;
                                }
                            })
                        }]
                    });
                }
            },
            clearHighlight() {
                // 清除高亮
                this.myChart.setOption({
                    series: [{
                        data: this.myChart.getOption().series[0].data.map(item => {
                            return {
                                name: item.name,
                                value: item.value,
                                itemStyle: {
                                    
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
                            };
                        })
                    }]
                });
            },
        updateHighlight() {
                this.myChart.setOption({
                    series: [{
                        data: this.myChart.getOption().series[0].data.map(item => {
                            if (this.highlightedRegions.includes(item.name)) {
                                return {
                                    name: item.name,
                                    value: item.value,
                                    itemStyle: {
                                        areaColor: 'red',
                                        borderColor: '#fff',
                                        borderWidth: 1.5
                                    }
                                };
                            } else {
                                return {
                                    name: item.name,
                                    value: item.value,
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
                                };
                            }
                        })
                    }]
                });
            },
      highlightRegions1() {//酸  
            this.highlightedRegions = []; 
            this.updateHighlight();
                // 需要高亮的多个区域名称
                this.highlightedRegions= ['山西'];
                
                // 修改图表配置，设置需要高亮的区域
                this.myChart.setOption({
                    series: [{
                        data: this.myChart.getOption().series[0].data.map(item => {
                            if (this.highlightedRegions.includes(item.name)) {
                                return {
                                    name: item.name,
                                    value: item.value,
                                    itemStyle: {
                                        areaColor: 'rgb(54, 125, 32)', // 高亮颜色
                                     // 边界线颜色
                                        borderWidth: 0.5 // 边界线宽度
                                    }
                                };
                            } else {
                                return item;
                            }
                        })
                    }]
                });
            },
            highlightRegions2() {//甜
                this.highlightedRegions = []; 
            this.updateHighlight();
            // 需要高亮的多个区域名称
            this.highlightedRegions = ['安徽', '江苏', '上海','浙江'];
            
            // 修改图表配置，设置需要高亮的区域
            this.myChart.setOption({
                series: [{
                    data: this.myChart.getOption().series[0].data.map(item => {
                        if (this.highlightedRegions.includes(item.name)) {
                            return {
                                name: item.name,
                                value: item.value,
                                itemStyle: {
                                    areaColor: 'rgb(167, 96, 161)', // 高亮颜色
                                     // 边界线颜色
                                    borderWidth: 0.5 // 边界线宽度
                                }
                            };
                        } else {
                            return item;
                        }
                    })
                }]
            });
        }, 
             highlightRegions3() {//辣
                this.highlightedRegions = []; 
            this.updateHighlight();
            // 需要高亮的多个区域名称
            this.highlightedRegions = ['四川', '重庆', '湖北', '湖南','贵州','江西','西藏'];
            
            // 修改图表配置，设置需要高亮的区域
            this.myChart.setOption({
                series: [{
                    data: this.myChart.getOption().series[0].data.map(item => {
                        if (this.highlightedRegions.includes(item.name)) {
                            return {
                                name: item.name,
                                value: item.value,
                                itemStyle: {
                                    areaColor: 'rgb(204, 21, 39)', // 高亮颜色
                                     // 边界线颜色
                                    borderWidth: 0.5 // 边界线宽度
                                }
                            };
                        } else {
                            return item;
                        }
                    })
                }]
            });
        }, 
        highlightRegions4() {//香
                this.highlightedRegions = []; 
            this.updateHighlight();
            // 需要高亮的多个区域名称
            this.highlightedRegions = ['广东','广西'];
            
            // 修改图表配置，设置需要高亮的区域
            this.myChart.setOption({
                series: [{
                    data: this.myChart.getOption().series[0].data.map(item => {
                        if (this.highlightedRegions.includes(item.name)) {
                            return {
                                name: item.name,
                                value: item.value,
                                itemStyle: {
                                    areaColor: 'rgb(204, 138, 31)', // 高亮颜色
                                     // 边界线颜色
                                    borderWidth: 0.5 // 边界线宽度
                                }
                            };
                        } else {
                            return item;
                        }
                    })
                }]
            });
        }, 
        highlightRegions5() {//鲜
                this.highlightedRegions = []; 
            this.updateHighlight();
            // 需要高亮的多个区域名称
            this.highlightedRegions = ['云南','福建','海南','台湾'];
            
            // 修改图表配置，设置需要高亮的区域
            this.myChart.setOption({
                series: [{
                    data: this.myChart.getOption().series[0].data.map(item => {
                        if (this.highlightedRegions.includes(item.name)) {
                            return {
                                name: item.name,
                                value: item.value,
                                itemStyle: {
                                    areaColor: 'rgb(203, 209, 24)', // 高亮颜色
                                     // 边界线颜色
                                    borderWidth: 0.5 // 边界线宽度
                                }
                            };
                        } else {
                            return item;
                        }
                    })
                }]
            });
        }, 
        highlightRegions6() {//咸
                this.highlightedRegions = []; 
            this.updateHighlight();
            // 需要高亮的多个区域名称
            this.highlightedRegions = ['甘肃','陕西', '河南', '河北', '山东','北京','天津','内蒙古','辽宁','吉林','黑龙江','宁夏','青海','新疆'];
            
            // 修改图表配置，设置需要高亮的区域
            this.myChart.setOption({
                series: [{
                    data: this.myChart.getOption().series[0].data.map(item => {
                        if (this.highlightedRegions.includes(item.name)) {
                            return {
                                name: item.name,
                                value: item.value,
                                itemStyle: {
                                    areaColor: 'rgb(61, 37, 7)', // 高亮颜色
                                     // 边界线颜色
                                    borderWidth: 0.5 // 边界线宽度
                                }
                            };
                        } else {
                            return item;
                        }
                    })
                }]
            });
        }, 
     
     
     
    },

      data() {
        return {
            option6:{
   
   grid: {
       show: false,
       top: 10,
       bottom: 10,
   },
   tooltip: {
        show: true,
        formatter: function(params) {
            return params.name; // 只显示数据的名称
        }
    },
   xAxis: [
       {
           type: 'value',
           show: false,
           min: 0,
           max: 100,
       },
   ],
   yAxis: [
       {
           min: 0,
           show: false,
           max: 100,
       },
   ],

   series: [
       {
           type: 'scatter',
           symbol: 'circle',
           symbolSize: 120,
       
           animationDurationUpdate: 500,
           animationEasingUpdate: 500,
           animationDelay: function (idx) {
               // 越往后的数据延迟越大
               return idx * 100;
           },
           data: data,
       },
   ],
},   option8:{
   
   grid: {
       show: false,
       top: 10,
       bottom: 10,
   },
   tooltip: {
        show: true,
        formatter: function(params) {
            return params.name; // 只显示数据的名称
        }
    },
   xAxis: [
       {
           type: 'value',
           show: false,
           min: 0,
           max: 100,
       },
   ],
   yAxis: [
       {
           min: 0,
           show: false,
           max: 100,
       },
   ],

   series: [
       {
           type: 'scatter',
           symbol: 'circle',
           symbolSize: 120,
       
           animationDurationUpdate: 500,
           animationEasingUpdate: 500,
           animationDelay: function (idx) {
               // 越往后的数据延迟越大
               return idx * 100;
           },
           data: data1,
       },
   ],
},
            option7:{
        xAxis: {
          type: 'category',
          show:false,
          data: ['盐', '盐', '葱', '生抽', '料酒','姜','姜', '料酒', '生抽', '葱', '白糖','蒜','淀粉', '花椒', '鸡蛋', '白糖', '酱油','豆瓣酱','蒜', '淀粉'] // 设置横坐标值
          ,axisLabel: {
            fontSize: 11 // 设置横坐标字体大小
        }
        },
        yAxis: {
          type: 'value',
          min: 0, // 设置纵坐标的最小值
          max: 100 // 设置纵坐标的最大值
        },
        tooltip:{
            show:true
        },
        series: [{
          data: [55, 45, 43, 36,38,30,34,27,27,27,26,21,25,20,24,20,20,16,20,15], // 设置每个柱子的具体数值
          type: 'bar',
          itemStyle: {
            // 设置柱子的颜色
            color: function(params) {
              // 根据柱子的索引判断奇偶数
              return params.dataIndex % 2 === 0 ? '#A5C062' : '#2B7ECB';
            }
          }
        }]
      },
            show1:false,
            provinceColors: {
                '山西': 'rgb(54, 125, 32)',
                '浙江': 'rgb(167, 96, 161)',
                '江苏': 'rgb(167, 96, 161)',
                '上海': 'rgb(167, 96, 161)',
                '安徽': 'rgb(167, 96, 161)',
                '四川':'rgb(204, 21, 39)',
                '重庆':'rgb(204, 21, 39)',
                '贵州':'rgb(204, 21, 39)',
                '西藏':'rgb(204, 21, 39)',
                '湖北':'rgb(204, 21, 39)',
                '湖南':'rgb(204, 21, 39)', 
                '江西':'rgb(204, 21, 39)',
                 '广西':'rgb(204, 138, 31)',
                 '广东':'rgb(204, 138, 31)',
                 '云南':'rgb(203, 209, 24)',
                 '福建':'rgb(203, 209, 24)',
                 '甘肃':'rgb(61, 37, 7)',
                 '陕西':'rgb(61, 37, 7)',
                 '河南':'rgb(61, 37, 7)',
                 '河北':'rgb(61, 37, 7)',
                 '山东':'rgb(61, 37, 7)',
                 '北京':'rgb(61, 37, 7)',
                 '天津':'rgb(61, 37, 7)',
                 '内蒙古':'rgb(61, 37, 7)',
                 '辽宁':'rgb(61, 37, 7)',
                 '吉林':'rgb(61, 37, 7)',
                 '黑龙江':'rgb(61, 37, 7)',
                 '宁夏':'rgb(61, 37, 7)',
                 '青海':'rgb(61, 37, 7)',
                 '新疆':'rgb(61, 37, 7)',
                 '海南':'rgb(203, 209, 24)',
                 '台湾':'rgb(203, 209, 24)',

                // 更多省份和对应颜色...
            },
            highlightedRegions: [],
            myChart: null,
            myChart1:null,
            option: {
    backgroundColor: 'rgb(183, 172, 159, 0.2)',

    "normal": {
        "top": 200,
        "left": 300,
        "width": 500,
        "height": 400,
        "zIndex": 6,
        "backgroundColor": ""
    },
    "color": ["rgba(245, 166, 35, 1)", "rgba(19, 173, 255, 1)"],

    "tooltip": {
        "show": true,
        "trigger": "item",
     
    },
    "legend": {
        "show": true,
        "icon": "circle",
        "left": "35%",
        "top": "93%",
        "orient": "horizontal",
        "textStyle": {
            "fontSize": 17,
            "color": "black"
        },
        "data": ["川菜原料", "鲁菜原料"]
    },
    "radar": {
        "center": ["50%", "50%"],
        "radius": "70%",
        "startAngle": 90,
        "splitNumber": 4,
        "shape": "circle",
        "splitArea": {
            "areaStyle": {
                "color": ["transparent"]
            }
        },
        "axisLabel": {
            "show": false,
            "fontSize": 50,
            "color": "black",
           
            "fontWeight": "normal",
            textStyle: {
                "fontSize": 60,
            },
           
        },
        "axisLine": {
            "show": true,
            "lineStyle": {
                "color": "black",
            }
        },
        "splitLine": {
            "show": true,
            "lineStyle": {
                "color": "black"
            }
        },
        "indicator": [{
            "name": "酸",
            "max": 100

        }, {
            "name": "甜",
            "max": 100
        }, {
            "name": "辣",
            "max": 100
        },
        {
            "name": "香",
            "max": 100
        },
        {
            "name": "鲜",
            "max": 200
        }, {
            "name": "咸",
            "max": 100
        }]
    },
    "series": [{
        "name": "川菜原料",
        "type": "radar",
        "symbol": "circle",
        "symbolSize": 10,
        "areaStyle": {
            "normal": {
                "color": "rgba(245, 166, 35, 0.4)"
            }
        },
        itemStyle: {
            color: 'rgba(245, 166, 35, 1)',
            borderColor: 'rgba(245, 166, 35, 0.3)',
            borderWidth: 10,
        },
        "lineStyle": {
            "normal": {
                "type": "dashed",
                "color": "rgba(245, 166, 35, 1)",
                "width": 2
            }
        },
        "data": [
            ["19", "20", "41", "73", "199", "42"],{
                indicators: ['酸', '甜', '辣', '香', '鲜', '咸'],
              
            }
        ]
    }, {
        "name": "鲁菜原料",
        "type": "radar",
        "symbol": "circle",
        "symbolSize": 10,
        "itemStyle": {
            "normal": {
                color: 'rgba(19, 173, 255, 1)',
                "borderColor": "rgba(19, 173, 255, 0.4)",
                "borderWidth": 10
            }
        },
        "areaStyle": {
            "normal": {
                "color": "rgba(19, 173, 255, 0.5)"
            }
        },
        "lineStyle": {
            "normal": {
                "color": "rgba(19, 173, 255, 1)",
                "width": 2,
                "type": "dashed"
            }
        },
        "data": [
            ["35", "49", "16", "51", "188", "44"]
        ]
    }]
},

      }
          }

          }
      
    

</script>