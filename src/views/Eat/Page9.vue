<template>
    <div class="box" style="position: relative;">
   <h2 style="font-family: 'Courier New', Courier, monospace;font-size:38px;margin-left: 50px;">南米北面</h2>
   <div class="right1"></div>
   <div class="sou" style="font-size: 20px;font-weight: 300;font-family: 'Courier New', Courier, monospace"> 南方人爱米饭，北方人喜面食。我国南方的气候高温多雨、耕地多以水田为主，所以当地的农民因地制宜种植生长习性喜高温多雨的水稻。</div>
   <div class="nor" style="font-size: 20px;font-weight: 300px;font-family: 'Courier New', Courier, monospace;">而我国北方降水较少，气温较低，耕地多为旱地，适合喜干耐寒的小麦生长。所谓“种啥吃啥”，长此以往，便养成了南米北面的饮食习惯。</div>
   <div class="tohome">
        <label  for="name" class="label"  @click="$router.push('/Page10')" >
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
left: 270px;
top: 10px;
width: 200px;
height: 140px;
border-radius: 10px;
background:url('/public/static/diff/nanmibeimian.png') no-repeat;
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
top:250px;
left: 0px;
width: 370px;
height: 80px;
margin-left: 30px;

}
</style>