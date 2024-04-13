<template>

    <div style="display: flex;">
        <e-charts :option="option" @click="showClick" class="left"  :style="{ transform: 'translateX(' + offset + 'px)' }" ></e-charts>
       <div class="right"> 
<router-view></router-view>
       </div>
    </div>
    
</template>



<style lang="less" scoped>
 

@keyframes appear{
    0%{
        opacity: 0;
        scale: 0.5;
    }
    100%{
        opacity: 1;
        scale: 1;
    }
}


  .left{
     width: 400px;
     height: 400px;
     margin-top: 90px;
     animation: appear 1s ease-in-out;
  }
  .right{
    margin-top: 100px;
    width: 500px;
    height: 400px;
    background-color: rgb(149, 147, 133);
    margin-left: 30px;
    border-radius: 20px;
    animation: appear 1s ease-in-out;
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
            if(params.name === '南北菜系'){
                this.$router.push('/Page5')
            }
            if(params.name === '粽子'){
                this.$router.push('/Page7')
            }
            if(params.name === '炖汤'){
                this.$router.push('/Page8')
            }
            if(params.name === '面条VS米饭'){
                this.$router.push('/Page9')
            }
            if(params.name === '混沌'){
                this.$router.push('/Page10')
            }
            if(params.name === '汤圆'){
                this.$router.push('/Page11')
            }
    },
  
  


        data() {
            return [
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
                                name:"炖汤",
                                value:8
                                },
                                {
                                    name:"喝酒",
                                    value:2
                                }
                            ]
                           
                        },
                        {
                            name: '南北菜系',
                            value: 5
                        },
                       
                    ]
                },
            ]
        }
    }
}
</script>