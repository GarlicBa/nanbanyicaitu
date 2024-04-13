<template>
    <div class="box-container">
      <div class="tohome1">
                <label  for="name" class="label"  @click="$router.back()" >
                  <svg t="1710914231707" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1832" width="45" height="45"><path d="M653.1 305.1H182.7l139.9-139.9c14-14 14-35 0-49s-35-14-49 0L74.3 313.8c-7 7-10.5 15.7-10.5 24.5s3.5 17.5 10.5 24.5l197.6 197.6c14 14 35 14 49 0s14-35 0-49L184.5 375h468.6c131.1 0 236.1 104.9 236.1 236.1s-104.9 236-236.1 236H294.7c-19.2 0-35 15.7-35 35 0 19.2 15.7 35 35 35h358.5c169.6 0 306-136.4 306-306-0.1-169.6-136.5-306-306.1-306z" p-id="1833" fill="#707070"></path></svg>
                </label>
                </div>
   
              
                
                <div class="headline"><h1> {{pics[id-1].name}}</h1></div>
                 <div class="subText">{{pics[id-1].subName}}</div>
<div id="main">
  <div class="card"></div>
 <img :src="pics[id-1].url" class="img">
 
 <div class="block"></div>

  <div class="para" style="font-size: 17px;width: 350px;"> {{ pics[id-1].text }}</div>
    
  
</div>
   <div class="button">
   <div class="tohome">
                <label  for="name" class="label"  @click="$router.back()" >
                  <svg t="1710914231707" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1832" width="45" height="45"><path d="M653.1 305.1H182.7l139.9-139.9c14-14 14-35 0-49s-35-14-49 0L74.3 313.8c-7 7-10.5 15.7-10.5 24.5s3.5 17.5 10.5 24.5l197.6 197.6c14 14 35 14 49 0s14-35 0-49L184.5 375h468.6c131.1 0 236.1 104.9 236.1 236.1s-104.9 236-236.1 236H294.7c-19.2 0-35 15.7-35 35 0 19.2 15.7 35 35 35h358.5c169.6 0 306-136.4 306-306-0.1-169.6-136.5-306-306.1-306z" p-id="1833" fill="#707070"></path></svg>
                </label>
                </div>
              <div class="tohome">
                <label  for="name" class="label"  @click="$router.push('/')" >
    <svg t="1710724141479" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4917" width="50" height="50"><path d="M716.8 384v358.4c0 49.1008-37.9648 76.8-87.04 76.8H243.328C194.2784 819.2 153.6 792.1408 153.6 742.4v-102.4h128V281.6c0-49.1008 37.9136-76.8 87.6288-76.8H768a69.376 69.376 0 0 1 76.8 76.8v102.784z m76.8-102.4c0-20.0192-31.1808-25.6-51.2-25.6a20.736 20.736 0 0 0-25.6 25.6v51.2h76.8v-51.2z m-102.4-25.6H384a67.0464 67.0464 0 0 0-51.2 51.2l0.2816 333.0816L563.2 640v102.4a20.736 20.736 0 0 0 25.6 25.6h51.2a20.736 20.736 0 0 0 25.6-25.6V307.2c0-12.2624-0.5632-49.8688 25.6-51.2zM204.8 742.4a20.736 20.736 0 0 0 25.6 25.6h307.2c-21.4528 0-25.6-38.9376-25.6-51.2v-25.6H204.8v51.2z" fill="#707070" p-id="4918"></path></svg>
  </label>
    </div>
</div>
    </div>
</template>


<style lang="less" scoped>
.subText{
  position: absolute;
  top: 230px;
  left: 1000px;
  font-size: 18px;
  font-weight: 200px;
  animation: fadeIn 0.5s ease-in ;
  z-index: 999;
}
   .tohome1{
  position: absolute;
  top: 570px;
  right: 350px;
  width: 50px;
     height: 50px;
     border-radius: 50%;
    z-index: 100;

    border:1px solid #000;
    transition: transform 0.3s ease;
    &:hover{
   transform: scale(1.2);
  }
   label{
   cursor: pointer;
}
}
  .box-container {
    background-color: #C3AF91;
     width: 100%;
     height: 100%;
     padding: 0%;
     position: relative;
     .title{
        position: absolute;
        top: 70px;
        left: 140px;
        background-color: #c2a983;
          font-size: 20px;
          color: #000;
          border-radius: 10px;
          border: 2px solid #000;
          padding-top: 20px;
         text-align: center;
         width: 200px;
         height: 50px;
     }
     .pic{
      
        position: absolute;
        top: 180px;
        left: 30px;
        width: 430px;
        height:430px;
        border-radius: 10px;

       
     }
     .text{
        position: absolute;
        top: 100px;
        border-radius: 2px solid #000;

        border-radius: 10px;
        right: 250px;
        width: 800px;
        height: 600px;
        background: pink;
     }
     .button{
        display: flex;
        position: absolute;
        top: 20px;
        right: 30px;
        .tohome{
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
     }
     
  }
  html, body {
  overflow: hidden;
  background: #CCB7B0;
}
#main {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  z-index: 1;
  animation: fadeIn 0.5s ease-in ;
  
}

.card {
  height: 550px;
  width: 900px;
  background-color: #bc9f80ed;
  border-radius: 10px;

 
}
.img {
  border-radius: 10px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-100%) translateY(-50%);
  height: 650px;
  width: 580px;
 

  background-size: contain;
  background-repeat: repeat;
}
.headline {
  z-index: 999;
  position: absolute;

  font-size: 19px;
  font-weight: bolder;
  
  left: 840px;
  width: 300px;
  top:130px;
  height: 150px;
  text-align: center;
  font-family: 'Playfair Display SC', serif;
  animation: fadeIn 0.5s ease-in ;
  display: flex;
  align-items: center;
  justify-content: center;
}
.para {
  position: absolute;
  top: 45%;
  left: 47%;
  transform: translateX(20%) translateY(-20%);
  text-align: center;
  font-family: 'Courier New', Courier, monospace;
  font-size: 16px;
}
#dot {
  position: absolute;
  height: 100px;
  width: 200px;
  top: 50%;
  left: 50%;
  transform: translateX(140%) translateY(200%);
  background-size: contain;
  background-repeat: repeat;
  z-index: 2;
}
#dot:before {
  content: "";
  position: absolute;
  height: 200px;
  width: 100px;
  top: 50%;
  left: 50%;
  transform: translateX(-850%) translateY(-280%);
  background-size: contain;
  background-repeat: repeat;
}
.article {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(35%) translateY(-510%);
  text-align: center;
  font-family: 'Playfair Display SC', serif;
}
.article:before {
  content: "NEXT";
  position: absolute;
  height: 200px;
  width: 100px;
  top: 50%;
  left: 50%;
  transform: translateX(-75%) translateY(240%);
}
.article:after {
  content: "02";
  position: absolute;
  height: 200px;
  width: 100px;
  top: 50%;
  left: 50%;
  transform: translateX(280%) translateY(-5%);
  font-weight: bold;
}
.block {
  background: grey;
  opacity: .5;
  position: absolute;
  height: 5px;
  width: 200px;
  top: 5%;
  left: 65%;
}
.block:before {
  content: "";
  background: grey;
  opacity: .5;
  position: absolute;
  height: 5px;
  width: 80px;
  top: 500px;
  left: -145px;
}

/* Keyframes */

@keyframes fadeIn {
  0% {
opacity: 0;
 
  }

  100% {
   opacity: 1;
   }
}
</style>


<script>
  export default {

    data() {
  return {
     
    pics:[
    {
      id:'1',
         
      url:'../../../static/map/anhui/cailiao1/pic4.png',
      name:'青瓦、青砖、木材',
      text:'徽派建筑常采用木材、青砖、青瓦和石材等材料，其中木材适用于主体结构和装饰，青砖用于墙体构筑，青瓦覆盖屋顶，而石材则常用于装饰和地基。这些材料具有良好的耐久性和装饰效果，赋予徽派建筑独特的文化内涵和艺术价值。安徽地区资源丰富，这些材料易于获取，同时适应了当地气候和文化传统，成为徽派建筑的重要特点。'
    
    },
    {
      id:'2',
      url:'../../../static/map/anhui/cailiao1/pic2.png',
      name:'原木',
      text:'徽派建筑常采用木材、青砖、青瓦和石材等材料，其中木材适用于主体结构和装饰，青砖用于墙体构筑，青瓦覆盖屋顶，而石材则常用于装饰和地基。这些材料具有良好的耐久性和装饰效果，赋予徽派建筑独特的文化内涵和艺术价值。安徽地区资源丰富，这些材料易于获取，同时适应了当地气候和文化传统，成为徽派建筑的重要特点。'
    
        },
    {
      id:'3',
      url:'../../../static/map/anhui/cailiao1/pic3.png',
      name:'青瓦、木材',
      text:'徽派建筑常采用木材、青砖、青瓦和石材等材料，其中木材适用于主体结构和装饰，青砖用于墙体构筑，青瓦覆盖屋顶，而石材则常用于装饰和地基。这些材料具有良好的耐久性和装饰效果，赋予徽派建筑独特的文化内涵和艺术价值。安徽地区资源丰富，这些材料易于获取，同时适应了当地气候和文化传统，成为徽派建筑的重要特点。'
    
     },
    {
      id:'4',
      url:'../../../static/map/anhui/cailiao1/pic1.png',
      name:'青瓦、木材',
      text:'徽派建筑常采用木材、青砖、青瓦和石材等材料，其中木材适用于主体结构和装饰，青砖用于墙体构筑，青瓦覆盖屋顶，而石材则常用于装饰和地基。这些材料具有良好的耐久性和装饰效果，赋予徽派建筑独特的文化内涵和艺术价值。安徽地区资源丰富，这些材料易于获取，同时适应了当地气候和文化传统，成为徽派建筑的重要特点。'
   
   },

    {
      id:'5',
      url:'../../../static/map/anhui/cailiao1/pic5.png',
      name:'青瓦、青砖、木材',
      text:'徽派建筑常采用木材、青砖、青瓦和石材等材料，其中木材适用于主体结构和装饰，青砖用于墙体构筑，青瓦覆盖屋顶，而石材则常用于装饰和地基。这些材料具有良好的耐久性和装饰效果，赋予徽派建筑独特的文化内涵和艺术价值。安徽地区资源丰富，这些材料易于获取，同时适应了当地气候和文化传统，成为徽派建筑的重要特点。'
    
    },
    {
      id:'6',
      url:'../../../static/map/anhui/cailiao1/pic6.png',
      name:'青瓦、青砖',
      text:'徽派建筑常采用木材、青砖、青瓦和石材等材料，其中木材适用于主体结构和装饰，青砖用于墙体构筑，青瓦覆盖屋顶，而石材则常用于装饰和地基。这些材料具有良好的耐久性和装饰效果，赋予徽派建筑独特的文化内涵和艺术价值。安徽地区资源丰富，这些材料易于获取，同时适应了当地气候和文化传统，成为徽派建筑的重要特点。'
    
    },
    {
      id:'7',
      url:'../../../static/map/anhui/buju1/pic1.png',
      name:'对称式布局',
      text:'徽派建筑的布局以中轴线对称分列，面阔三间，中为厅堂，两侧为室，厅堂前方称“天井”，采光通风，亦有“四水归堂”的吉祥寓意。这些特点的形成既受历史、文化和地理等因素的影响，也与气候条件、社会经济状况密切相关。合院式布局体现了家族观念和社区凝聚力，多重院落适应了地形起伏，严谨对称体现了美学追求，而连廊则满足了通风透气的需求。这些布局特点既是对当地环境的适应，又是对徽派文化传统的延续，展现了徽派建筑独特的魅力和内涵。'
    
    },
    {
      id:'8',
      url:'../../../static/map/anhui/buju1/pic2.png',
      name:'对称式布局',
      text:'徽派建筑的布局以中轴线对称分列，面阔三间，中为厅堂，两侧为室，厅堂前方称“天井”，采光通风，亦有“四水归堂”的吉祥寓意。这些特点的形成既受历史、文化和地理等因素的影响，也与气候条件、社会经济状况密切相关。合院式布局体现了家族观念和社区凝聚力，多重院落适应了地形起伏，严谨对称体现了美学追求，而连廊则满足了通风透气的需求。这些布局特点既是对当地环境的适应，又是对徽派文化传统的延续，展现了徽派建筑独特的魅力和内涵。'
    
    },
    {
      id:'9',
      url:'../../../static/map/anhui/buju1/pic3.png',
      name:'天井',
      text:'徽派建筑的布局以中轴线对称分列，面阔三间，中为厅堂，两侧为室，厅堂前方称“天井”，采光通风，亦有“四水归堂”的吉祥寓意。这些特点的形成既受历史、文化和地理等因素的影响，也与气候条件、社会经济状况密切相关。合院式布局体现了家族观念和社区凝聚力，多重院落适应了地形起伏，严谨对称体现了美学追求，而连廊则满足了通风透气的需求。这些布局特点既是对当地环境的适应，又是对徽派文化传统的延续，展现了徽派建筑独特的魅力和内涵。'
    
    },
    {
      id:'10',
      url:'../../../static/map/anhui/buju1/pic4.png',
      name:'天井、四水归堂',
      text:'徽派建筑的布局以中轴线对称分列，面阔三间，中为厅堂，两侧为室，厅堂前方称“天井”，采光通风，亦有“四水归堂”的吉祥寓意。这些特点的形成既受历史、文化和地理等因素的影响，也与气候条件、社会经济状况密切相关。合院式布局体现了家族观念和社区凝聚力，多重院落适应了地形起伏，严谨对称体现了美学追求，而连廊则满足了通风透气的需求。这些布局特点既是对当地环境的适应，又是对徽派文化传统的延续，展现了徽派建筑独特的魅力和内涵。'
      
    },
    { id:'11',
      url:'../../../static/map/anhui/buju1/pic5.png',
      name:'多重院落',
      text:'徽派建筑的布局以中轴线对称分列，面阔三间，中为厅堂，两侧为室，厅堂前方称“天井”，采光通风，亦有“四水归堂”的吉祥寓意。这些特点的形成既受历史、文化和地理等因素的影响，也与气候条件、社会经济状况密切相关。合院式布局体现了家族观念和社区凝聚力，多重院落适应了地形起伏，严谨对称体现了美学追求，而连廊则满足了通风透气的需求。这些布局特点既是对当地环境的适应，又是对徽派文化传统的延续，展现了徽派建筑独特的魅力和内涵。'
        },
  
    {
      id:'12',
      url:'../../../static/map/anhui/buju1/pic6.png',
      name:'多重院落',
      text:'徽派建筑的布局以中轴线对称分列，面阔三间，中为厅堂，两侧为室，厅堂前方称“天井”，采光通风，亦有“四水归堂”的吉祥寓意。这些特点的形成既受历史、文化和地理等因素的影响，也与气候条件、社会经济状况密切相关。合院式布局体现了家族观念和社区凝聚力，多重院落适应了地形起伏，严谨对称体现了美学追求，而连廊则满足了通风透气的需求。这些布局特点既是对当地环境的适应，又是对徽派文化传统的延续，展现了徽派建筑独特的魅力和内涵。'
       },
    
  
   

    
  ],
  id:this.$route.params.data
  };
},


}
</script>