<template>
 <div class="div">
    <div class="box1">  
    </div>
  <div class="box2"></div>
  <div class="box3"></div>
 

 </div>
</template>

<style lang="less" scoped>

@keyframes show {
  0% {
    opacity: 0;
    scale: 1;
  }
}


.div{
    padding-top: 110px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  
.box1{ 
  animation: show 0.5s ease-in-out;
    width: 400px;
     height: 400px;
     background: url(/public/static/circle/build.png) no-repeat;
     background-size: 100% 100%;
     margin-left:100px;
    }
    .box2{
      animation: show 0.7s ease-in-out;
        width: 400px;
     height: 400px;
     background: url(/public/static/circle/art.png) no-repeat;
     background-size: 100% 100%;
    }
    .box3{
      animation: show 0.9s ease-in-out;
        width: 400px;
     height: 400px;
     margin-right: 100px;
     background: url(/public/static/circle/food.png) no-repeat;
     background-size: 100% 100%;
}


}

</style>
