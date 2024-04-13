<template>
    <div class="box" >
                 
        <div v-for="(image, index) in pics" :key="index">
            <img :src="image.url" style="margin-left: 10px;height:230px;cursor: pointer;object-fit: cover;" @click="jump(image.id)"/>
        </div>
      </div>
   
</template>


<style lang="less" scoped>
.box{
    object-fit: contain;
        display: flex;
       flex-wrap: wrap;
   img{
        transition: transform 0.3s ease;
      &:hover{
      transform: scale(1.2);
      }
       }
    }
</style>

<script>
export default {
    methods: {
    jump(data) {
      console.log(data);
      const self = this;
       // 获取路由参数
      self.$router.push({ name: 'build3', params: { data:data } });
    }
  },
    data() {
        return {
            pics:[

    {
      id:'1',
      url:'../../../static/map/anhui/cailiao/pic4.jpg',
     },
    {
      id:'2',
      url:'../../../static/map/anhui/cailiao/pic2.jpg',
        },
    {
      id:'3',
      url:'../../../static/map/anhui/cailiao/pic3.jpg',
     },
    {
      id:'4',
      url:'../../../static/map/anhui/cailiao/pic1.jpg',
   },

    {
      id:'5',
      url:'../../../static/map/anhui/cailiao/pic5.jpeg',
    },
    {
      id:'6',
      url:'../../../static/map/anhui/cailiao/pic6.png',
    },
   
  
  ],   
        }
}}
</script>