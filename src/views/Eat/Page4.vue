<template>

    <div>
        <e-charts :option="option" @click="showClick" class="left"  :style="{ transform: 'translateX(' + offset + 'px)' }" ></e-charts>
    </div>

</template>



<style lang="less" scoped>

  .left{
     width: 500px;
     height: 500px;
     margin-top: 30px;
     margin-left: 250px;
  }

</style>
    
<script>




export default {
    data() {
        return {
            offset: 0,
      intervalId: null,
            option: {
               
                visualMap: {
                    type: 'continuous',
                    min: 0,
                    max: 10,
                    inRange: {
                        color: ['#2F93C8', '#AEC48F', '#FFDB5C', '#DAF7A6']
                    }
                },
                series: [{
                    type: 'sunburst',
                    data: this.data(),
                    radius: [0, '90%'],
                    label: {
                        rotate: 'radial'
                    },
                    itemStyle: {
        borderColor: 'black', // 设置边界颜色为白色
        borderWidth:0.3},
                    itemClick: function (params) {
                console.log(params.name + ': ' + params.value);
            }
                },
               
            ]
            }
        }
    },
    methods: {
        showClick(params)  {
            if(params.name === '南北饮食差异'){
                this.$router.push('/Page5')
            }
    },
  
  


        data() {
            return [
                {
                    name: '北方美食',
                    children: [
                        {
                            name: '经典菜系',
                            value: 3,
                            children: [
                               
                                {
                                    name: '鲁菜',
                                    value: 3,
                                    children: [
                                        {
                                            name: '油爆双脆',
                                            value: 2
                                        },
                                        {
                                            name: '油闷大虾',
                                            value: 1
                                        }
                                    ]
                                },
                               
                            ]
                        },
                        {
                            name: '锅包肉',
                            value: 1
                        },
                        {
                            name: '尖椒干豆腐',
                            value: 2,
                           
                        },
                        {
                            name: '糖醋里脊',
                            value: 1
                        },
                        {
                            name: '东北乱炖',
                            value:2
                        }
                    ]
                },
                {
                    name: '南北饮食差异',
                    children: [
                        {
                            name: '主食类',
                            value: 8,
                            children: [
                               
                                {
                                    name: '粥',
                                    value: 3,
                                   
                                },
                                {
                                    name: '面条VS米饭',
                                    value: 5,
                                   
                                },
                               
                            ]
                        },
                        {
                            name: '辅食',
                            value: 22,
                            children:[
                                {
                                    name:'汤圆',
                                    value:8
                                },
                                {
                                    name:'粽子',
                                    value:6
                                },
                                {
                                    name:'混沌',
                                    value:4
                                },
                                {
                                    name:'水饺',
                                    value:2
                                },
                                {
                                    name:'年糕',
                                    value:2
                                }
                            ]
                        },
                        {
                            name: '汤酒类',
                            value: 10,
                            children:[
                                {
                                name:"煲汤",
                                value:8
                                },
                                {
                                    name:"喝酒",
                                    value:2
                                }
                            ]
                           
                        },
                        {
                            name: '',
                            value: 1
                        },
                        {
                            name: '东北乱炖',
                            value:2
                        }
                    ]
                },
                {
                    name: '南方美食',
                    children: [
                        {
                            name:'白切鸡',
                            value: 1
                        },
                        {
                            name: '宫保鸡丁',
                            value: 1
                        },
                        {
                            name: '红烧肉',
                            value: 1
                        },
                        {
                            name: '经典菜系',
                            children: [
                                {
                                    name: '苏菜',
                                    value: 3,
                                    children: [
                                        {
                                            name: '凤尾虾',
                                            value: 2

                                        },
                                        {
                                            name: '松鼠桂鱼',
                                            value: 1
                                        }
                                    ]
                                },
                                {
                                    name: '浙菜',
                                    value: 4,
                                    children: [
                                        {
                                            name: '东坡肉',
                                            value: 2
                                        },
                                        {
                                            name: '西湖醋鱼',
                                            value: 2
                                        }
                                    ]
                                },
                                {
                                    name: '闽菜',
                                    value: 2,
                                    children: [
                                        {
                                            name: '醉排骨',
                                            value: 1
                                        },
                                        {
                                            name: '椒盐凤尾虾',
                                            value: 1
                                        }
                                    ]
                                },
                                {
                                    name: '湘菜',
                                    value: 4,
                                    children: [
                                        {
                                            name: '麻辣小龙虾',
                                            value: 2
                                        },
                                        {
                                            name: '剁椒鱼头',
                                            value: 1
                                        },
                                        {
                                            name: '三层套鸡',
                                            value: 1
                                        },
                                    ]
                                },
                                {
                                    name: '粤菜',
                                    value: 4,
                                    children: [
                                        {
                                            name: '芙蓉虾',
                                            value: 2
                                        },
                                        {
                                            name: '白切贵妃鸡',
                                            value: 1
                                        },
                                        {
                                            name: '脆皮烧肉',
                                            value: 1
                                        },
                                    ]
                                },
                                {
                                    name: '徽菜',
                                    value: 2,
                                    children: [
                                        {
                                            name: '徽州圆子',
                                            value: 2
                                        }
                                    ]
                                }

                            ]
                        }
                    ]
                },
                
            ]
        }
    }
}
</script>