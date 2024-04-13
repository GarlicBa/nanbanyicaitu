<template>
    <div class="box" style="position: relative;">
   <h2 style="font-family: 'Courier New', Courier, monospace;font-size:38px;margin-left: 50px;">炖汤</h2>
   <div class="right1"></div>
   <div class="sou" style="font-size: 20px;font-weight: 300;font-family: 'Courier New', Courier, monospace"> 南方人所谓的煲汤和我们北方的炖汤有本质的区别。我们炖汤炖到肉和菜都熟了就好，汤和肉一起吃。</div>
   <div class="nor" style="font-size: 20px;font-weight: 300px;font-family: 'Courier New', Courier, monospace;">而南方煲汤一定要小火煲很久，甚至一个下午的时间，要把所有精髓都炖到汤里，然后喝汤就好。排骨炖玉米，只吃玉米和喝汤，排骨基本扔掉了，那些排骨是柴骨，没营养了。北方人把汤当作一道菜，而南方人把汤当滋补品。</div>
   <div class="tohome">
        <label  for="name" class="label"  @click="$router.push('/Page9')" >
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
background:url('/public/static/diff/duntang.png') no-repeat;
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
top:210px;
left: 0px;
width: 370px;
height: 80px;
margin-left: 30px;

}
</style>