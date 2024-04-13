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
      id:'13',
      url:'../../../static/map/anhui/secai/pic1.png',
    },
    {
      id:'14',
      url:'../../../static/map/anhui/secai/pic2.png',
    },
    {
      id:'15',
      url:'../../../static/map/anhui/secai/pic3.png',
    },
    {
      id:'16',
      url:'../../../static/map/anhui/secai/pic4.png',
    },
    {
      id:'17',
      url:'../../../static/map/anhui/secai/pic5.png',
    },
    {
      id:'18',
      url:'../../../static/map/anhui/secai/pic6.png',
    },
  
  ],   
        }
}}
</script>