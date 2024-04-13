<template>
    <div class="box">
                 
        <div v-for="(image, index) in pics" :key="index">
            <img :src="image.url" style="margin-left: 10px;height:243px;border-radius: 10px;cursor: pointer;object-fit: cover;" @click="jump(image.id)"/>
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
   
}
</script>