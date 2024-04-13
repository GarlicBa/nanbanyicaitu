<template>
    <div class="box">
                 
        <div v-for="(image, index) in pics" :key="index">
            <img :src="image.url" style="margin-left: 10px;height:200px;cursor: pointer;object-fit: cover;" @click="jump(image.id)"/>
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
      id:'20',
      url:'../../../static/sihePic/pic11.jpg',
     
    },
    {
      id:'21',
      url:'../../../static/sihePic/pic12.jpeg'
    },
    {
      id:'22',
      url:'../../../static/sihePic/pic13.jpg'
    },
    {
      id:'23',
      url:'../../../static/sihePic/pic14.jpg'
    },
    {
      id:'24',
      url:'../../../static/sihePic/pic15.jpg'
    },
    {
      id:'25',
      url:'../../../static/sihePic/pic16.jpg'
    },
  
  
  ],   
        }
}}
</script>