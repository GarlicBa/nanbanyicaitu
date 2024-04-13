<template>
    <div class="box" style="position: relative;">
   <h2 style="font-family: 'Courier New', Courier, monospace;font-size:38px;margin-left: 50px;">汤圆</h2>
   <div class="right1"></div>
   <div class="sou" style="font-size: 20px;font-weight: 300;font-family: 'Courier New', Courier, monospace">制作方法不同。南方的汤圆通常是将糯米面团包入馅料后搓成圆形，而北方的元宵则是将固体的馅料蘸水后，在糯米粉中滚制而成。</div>
   <div class="nor" style="font-size: 20px;font-weight: 300px;font-family: 'Courier New', Courier, monospace;">口感和馅料不同。南方的汤圆口感较软，馅料种类多样，包括甜咸荤素等多种选择，而北方的元宵口感较硬，馅料多为甜味，如豆沙、黑芝麻等。</div>
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
left: 270px;
top: 10px;
width: 200px;
height: 190px;
border-radius: 10px;
background:url('/public/static/diff/tangyuan.png') no-repeat;
background-size: 100% 100%;
}
.sou{
position: absolute;
top:70px;
width: 200px;
height: 180px;
margin-left: 30px;

}
.nor{
position: absolute;
top:230px;
left: 0px;
width: 370px;
height: 80px;
margin-left: 30px;

}
</style>