<template>
    <div class="box">
                 
        <div v-for="(image, index) in pics" :key="index">
            <img :src="image.url" style="margin-left: 10px;height:220px;cursor: pointer;object-fit: cover;" @click="jump(image.id)"/>
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
      id:'7',
      url:'../../../static/map/anhui/buju/pic1.jpg',
    },
    {
      id:'8',
      url:'../../../static/map/anhui/buju/pic2.png',
    },
    {
      id:'9',
      url:'../../../static/map/anhui/buju/pic3.jpg',
    },
    {
      id:'10',
      url:'../../../static/map/anhui/buju/pic4.png',
    },
    {
      id:'11',
      url:'../../../static/map/anhui/buju/pic5.jpg',
    },
    {
      id:'12',
      url:'../../../static/map/anhui/buju/pic6.jpeg',
    },
   
  ],   
        }
}}
</script>