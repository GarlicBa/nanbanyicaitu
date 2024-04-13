
<template>
  <div class="box-container">
    <div class="pic">
      <div class="flip-card">
    <div class="flip-card-inner">
        <div class="word">
        </div>
        <div class="word2" @click="$router.push('/')">       
        </div>
    </div>
</div>
    </div>
  </div>
</template>


<style class="less" scoped
>
  .box-container {
    padding: 0%;
  }
  .pic {
    background: url(/public/static/homePic.jpg) no-repeat;
    background-size: 100% 100%;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    .word { 

      background: url(/public/static/title.png) no-repeat;
      background-position: center; 
      background-size: 100% 100%;
      width: 400px;
      height: 180px;
      margin-bottom: 150px;
      cursor: pointer;
    }

    .flip-card {
      margin-bottom: 110px;
  background-color: transparent;
  width: 350px;
      height: 150px;
  perspective: 1000px;
  font-family: sans-serif;
}

.title {
  font-size: 1.5em;
  font-weight: 900;
  text-align: center;
  margin: 0;
}

.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.8s ease;
  transform-style: preserve-3d;
   
}

.flip-card:hover .flip-card-inner {
  transform: rotateX(-180deg) scale(1.1);
}

.word, .word2 {
  box-shadow: 0 8px 14px 0 rgba(0,0,0,0.2);
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  border: 1px solid rgb(235, 230, 229);
  border-radius: 1rem;

}


.word2 {
   background: url(/public/static/bird.png) no-repeat;
  background-size: 100% 100%;
  transform: rotateX(180deg);
}
  }
</style>

<script>
import router from '@/router';

  export default {
    methods:{
      
    }
  }
</script>







