<template>
            <div class="box" style="position: relative;">
           <h2 style="font-family: 'Courier New', Courier, monospace;font-size:38px;margin-left: 20px;">南北菜系</h2>
           <div class="right1"></div>
           <div class="right2"></div>
           <div class="sou" style="font-size: 20px;font-weight: 300px;font-family: 'Courier New', Courier, monospace;">南方菜系优势明显、有广东的粤菜、四川的川菜、湖南的湘菜、江浙的杭帮菜等。而北方却几乎没有独立的菜系，当然东北的菜还是颇有特色。</div>
           <div class="nor" style="font-size: 20px;font-weight: 300px;font-family: 'Courier New', Courier, monospace;">总体特点是南方饮食讲究的是精细，而北方体现的是粗犷。</div>
           <div class="tohome">
                <label  for="name" class="label"  @click="$router.push('/Page7')" >
                    <svg t="1711609909013" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3407" width="50" height="50"><path d="M512.001023 147.243529 448.082248 211.161281 703.755302 466.834334 146.753365 466.834334 146.753365 558.145993 703.755302 558.145993 448.082248 813.819047 512.001023 877.737822 877.247658 512.491187Z" fill="#707070" p-id="3408"></path></svg>
                    </label>
                </div>
      
           </div>
</template>


<style lang="less" scoped>

.tohome{
    position:absolute;
    right: 8px;
   top:290px;
         width: 50px;
         height: 50px;
         border-radius: 50%;
         margin-left: 20px; 
        
         border:1px solid #000;
         transition: transform 0.3s ease;
      &:hover{
      transform: scale(1.2);
      }
      label{
        cursor: pointer;
      }
        }
  .right1{
    position: absolute;
    left: 300px;
    top: -25px;
    width: 130px;
    height: 130px;
    border-radius: 10px;
    background:url('/public/static/diff/nanbeicaiyao1.png') no-repeat;
    background-size: 100% 100%;
  }
  .right2{
    position: absolute;
    left: 300px;
    top: 110px;
    width: 130px;
    height: 130px;
    border-radius: 10px;
    background:url('/public/static/diff/nanbeicaiyao2.png') no-repeat;
    background-size: 100% 100%;
  }
  .sou{
    position: absolute;
    width: 200px;
    height: 180px;
    margin-left: 30px;
    
  }
  .nor{
    position: absolute;
    top:270px;
    left: 0px;
    width: 370px;
    height: 80px;
    margin-left: 30px;
   
  }
</style>