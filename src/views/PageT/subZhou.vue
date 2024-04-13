<template>
   <div class="box">
    <div class="dov">
    <horizontal-timeline 
    :rightComplete="rightComplete"
    :leftComplete="leftComplete"
     @left-loading="left" @right-loading="right" :timelineList="timelineList" :showScroll="true">
    <template v-slot:default="slotProps">
      <div class="content">
        <div class="chat" style="display: flex;">
         
          <div class="left" style="position: relative;">
            <span style="font-size: 22px;font-family: 'Courier New', Courier, monospace;font-weight: bold;color: black;margin-left: 8px;">{{slotProps.item.content}}</span>
            <div class="chat1" v-if="slotProps.item.url" style="position: absolute;top:53px">
      <img :src="slotProps.item.url" alt="Image" />
      </div>
          </div>
          
          <div class="right" style="width: 200px;height: 200px;margin-left: 30px;display: flex;justify-content: center;align-self:center;">
           <span v-if="slotProps.item.detail" style="font-size: 15px;font-family: 'Courier New', Courier, monospace;font-weight: 200px;padding: 5px;">{{slotProps.item.detail}}</span>
          </div>
        </div>
      </div>
  
    </template>
    <template v-slot:time="slotProps">
      {{slotProps.item.time}} 
    </template>
    </horizontal-timeline>
</div>
<div class="tohome">
              <label  for="name" class="label"  @click="$router.push('/home')" >
  <svg t="1710724141479" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4917" width="50" height="50"><path d="M716.8 384v358.4c0 49.1008-37.9648 76.8-87.04 76.8H243.328C194.2784 819.2 153.6 792.1408 153.6 742.4v-102.4h128V281.6c0-49.1008 37.9136-76.8 87.6288-76.8H768a69.376 69.376 0 0 1 76.8 76.8v102.784z m76.8-102.4c0-20.0192-31.1808-25.6-51.2-25.6a20.736 20.736 0 0 0-25.6 25.6v51.2h76.8v-51.2z m-102.4-25.6H384a67.0464 67.0464 0 0 0-51.2 51.2l0.2816 333.0816L563.2 640v102.4a20.736 20.736 0 0 0 25.6 25.6h51.2a20.736 20.736 0 0 0 25.6-25.6V307.2c0-12.2624-0.5632-49.8688 25.6-51.2zM204.8 742.4a20.736 20.736 0 0 0 25.6 25.6h307.2c-21.4528 0-25.6-38.9376-25.6-51.2v-25.6H204.8v51.2z" fill="#707070" p-id="4918"></path></svg>
</label>
            </div>
   </div>
  </template>


<script>

import HorizontalTimeline from '@needahouse/vue-horizontal-timeline-component';
  



  const data = [
  {id:1,content:'八王之乱',time:'291~306',url:'../../../static/zhou/pic1.jpg',detail:'八王之乱，是西晋时期的一场皇族为争夺中央政权而引发的内乱，是中国历史上最为严重的皇族内乱之一，当时社会经济遭到严重的破坏，导致了西晋亡国以及近三百年的动乱，使之后的中原北方进入十六国（五胡乱华）时期。'},
    {id:2,content:'五胡内迁',time:'304~439',url:'../../../static/zhou/pic2.jpg',detail:'从东汉末年以来，中国西部和北部周边的各少数民族开始不断地向汉地迁徙。主要是由于汉王朝的军事征服以及劳力不足而对各少数民族的招诱。与此同时，周边各少数民族势力的消长变化也引起一些民族迁徙。内迁的民族主要包括匈奴、羯、鲜卑、氐、羌等，历史上泛称为“五胡”。'},
    {id:3,content:'永嘉之乱',time:'311年5月27日',url:'../../../static/zhou/pic3.jpg',detail:'永嘉之乱，是西晋怀帝永嘉五年，匈奴军队在刘渊之子刘聪率领下击败西晋京师洛阳的守军，攻陷洛阳并大肆抢掠杀戮，更俘掳晋怀帝等王公大臣的一场乱事。永嘉之乱使得中国北方经济完全崩溃，中国再次走向分裂。中国北部进入战乱不休的五胡十六国；南方则建立起东晋政权，史称“衣冠南渡”。'},
    {id:4,content:'淝水之战',time:'383年11月',url:'../../../static/zhou/pic4.jpg',detail:'淝水之战，是公元383年东晋和前秦之间发生在淝水（今安徽省寿县的东南方）的一场战争。最终东晋仅以八万军力大胜八十余万的前秦军。淝水之战是以少胜多的战例。拥有绝对优势的前秦败给了东晋，国家也因此衰败，北方各民族纷纷脱离了前秦的统治，分裂为后秦和后燕为主的几个政权。'},
      {id:5,content:'北魏孝文帝改革',time:'471年',url:'../../../static/zhou/pic5.jpg',detail:'北魏孝文帝改革，俗称孝文汉化，是指在南北朝时期的北魏孝文帝在位时所推行的政治改革。其主要内容是汉化运动，包括：推行均田制和户调制，变革官制和律令，迁都洛阳，分明姓族，改易汉俗等。'},
      {id:6,content:'五教之乱',time:'589年',url:'../../../static/zhou/pic6.jpg',detail:'在589年，隋文帝派遣他的儿子杨广率领军队前往江南，灭掉了陈朝。此胜利并非终点，而是一个新的开始，因为隋文帝在江南地区采取了高压统治政策，下令推行"五教"，这一政策激怒了江南地区的百姓，引发了五教之乱。'},
        {id:7,content:'安史之乱',time:'755年12月16日—763年2月17日',url:'../../../static/zhou/pic7.jpg',detail:'安史之乱是中国唐代玄宗末年至代宗初年由唐朝将领安禄山与史思明背叛唐朝后发动的战争，是同唐朝争夺统治权的内战，为唐由盛而衰的转折点。因为发起反唐叛乱的指挥官以安禄山与史思明二人为主，因此事件被冠以安史之名。又由于其爆发于唐玄宗天宝年间，也称天宝之乱。'},
        {id:8,content:' 靖康之变',time:'1127年',url:'../../../static/zhou/pic8.jpg',detail:'靖康之变是指靖康二年金朝南下攻取北宋首都东京，掳走徽、钦二帝，导致北宋灭亡的历史事件。随着金军的两次南侵，广大人民不得不背井离乡，出现了历史上又一次南迁的浪潮。北方少数民族也不断融入汉族的生活区域中，南北方民族的生产技术互相借鉴，生活习惯和民族文化也不断融合。'},
        {id:9,content:'排汗政策',time:'1260~1294',url:'../../../static/zhou/pic9.jpg',detail:'元朝为了维护蒙古贵族的统治特权，削弱各族的反抗，采取了分化的民族压迫政策。元朝把全国人分为四等：一等蒙古人，二等色目人，三等汉人，四等南人。四等人在政治、法律和经济上的地位，都有不同的规定，带有明显的种族歧视成分。如地方机构中的达鲁花赤掌握实权，而此职只能由蒙古人担任。'},
        {id:10,content:'去蒙古化政策',time:'1368年',url:'../../../static/zhou/pic10.jpg',detail:'朱元璋称帝用仅仅三十八天就下达了圣旨，严禁天下百姓说胡语、着胡服、用胡姓，由此开始了他的“去胡俗”运动。很多习俗都和少数民族相同。最直接的表现就是发式、服饰这些东西。他要求天下的百姓都要以唐代的发式为基准，统一发型。'},
      ]
export default {
    components: {
         HorizontalTimeline
    },
  data() {
    return {
      timelineList:data,
      
      rightComplete:false,
      leftComplete:false,
    }
  },
  methods:{
    right(resolve){
      setTimeout(()=>{
        this.timelineList = this.timelineList.concat([
  
       
      ])
        this.rightComplete = true
        resolve()
      },1000)
    },
    left(resolve){
      setTimeout(()=>{
        this.timelineList =
        [
      
        ].concat(this.timelineList)
        this.leftComplete = true
        resolve()
      },1000)
    }
  },
  mounted(){
    setTimeout(()=>{
      this.timelineList=data
    },500)
  }
}
</script>
<style lang="less" scoped>
    .tohome{
      position: absolute;
      right: 50px;
      top: 30px;
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
  img{
    width: 124px;
    height: 124px;
  }
@keyframes show{
  0%{
    opacity: 0;
    scale: 0.8;
  }
  100%{
    opacity: 1;
    scale:1;
  }
}
.dov{
    margin-top: 2px;
    width: 1200px;
    position: absolute;
    left:200px;
    animation: show 1s;
    animation-fill-mode: forwards;
    
}
  .content {
    padding:20px;
    border-radius: 30px;
    
    background-color: #fff;
  }
  .chat {
    position: relative;
    width: 330px;
    height: 230px;
    padding: 10px;
    word-wrap:break-word; 
    border: 1px solid black;
    border-radius: 4px;
  }
</style>
