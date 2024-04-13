<template>
    <div class="box">
                 
        <div v-for="(image, index) in pics" :key="index">
            <img :src="image.url" style="margin-left: 10px;height:216px;border-radius: 10px;cursor: pointer;object-fit: cover;" @click="jump(image.id)"/>
        </div>
      </div>
   
</template>


<style lang="less" scoped>
.box{
    object-fit: contain;
        display: flex;
       flex-wrap: wrap;
   img{
        margin-bottom: 20px;
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
      id:'33',
      url:'../../../static/cailiao/pic33.png'
    },
    {
      id:'34',
      url:'../../../static/cailiao/pic34.webp'
    },
    {
      id:'35',
      url:'../../../static/cailiao/pic35.png'
    },
    {
      id:'36',
      url:'../../../static/cailiao/pic36.png'
    },
    {
      id:'37',
      url:'../../../static/cailiao/pic37.jpg'
    },
    
  
  ],   
        }
}}
</script>