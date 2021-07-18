<template>
  <div class="home">
    <header>
      <nav class="header-div">
        <div class="header-button" @click="transitionHome">
          <img src="../assets/home/logo_home.png" alt="" class="home-image">
        </div>
        <div class="header-button" @click="transitionBusiness">
          <p>業務内容</p>
        </div>
        <div class="header-button" @click="transitionMessage">
          <p>ごあいさつ</p>
        </div>
        <div class="header-button" @click="transitionCompany">
          <p>会社概要</p>
        </div>
        <div class="header-button" @click="transitionRecruit">
          <p>求人情報</p>
        </div>
        <div class="header-button" @click="transitionContact">
          <p>お問い合わせ</p>
        </div>
      </nav>
    </header>
    <div class="contents">
      <h1>私達の仕事は、その先にある笑顔を増やすこと。</h1>
      <img src="../assets/home/logo.png" alt="" width="194px" height="120">
    </div>
    <div class="loop-slide-area">
      <LoopSlider></LoopSlider>
      <LoopSliderFadeIn></LoopSliderFadeIn>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from "../components/Footer.vue"
import LoopSlider from "../components/LoopSlider.vue"
import LoopSliderFadeIn from "../components/LoopSliderFadeIn.vue"
export default {
  components:{
    Footer,
    LoopSlider,
    LoopSliderFadeIn
  },
  methods:{
    transitionBusiness(){
      this.$router.push({name:'Business'})
    },
    transitionHome(){
      this.$router.push({name:'Home'})
    },
    transitionMessage(){
      this.$router.push({name:"Message"})
    },
    transitionCompany(){
      this.$router.push({name:'Company'})
    },
    transitionRecruit(){
      this.$router.push({name:'Recruit'})
    },
    transitionContact(){
      this.$router.push({name:'Contact'})
    }
  }
}
</script>

<style scoped>
.home{
  min-width: 980px;
  background:url(../assets/home/bg01.jpg) no-repeat;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
}
.header-div{
  display: flex;
  justify-content: center;
  text-align: center;
}
.header-button{
  width:163px;
  height: 50px;
  background:url(../assets/header/button.png);
  border-radius: 5px;
  cursor: pointer;
}
.header-button:hover{
  background: url(../assets/header/black_button.png);
  transition: 0.2s;
}
.home-image{
  margin-top: 10px;
}
.header-div p{
  font-size:14px;
  padding-top:25px;
}
.contents{
  width:980px;
  margin:0 auto;
  margin-top: 110px;
  text-align: right;
}
.contents h1{
  color: #ffff;
  font-size:24px;
  font-family: serif;
  letter-spacing: 0.2em;
}
.loop-slide-area{
  height: 400px;
  margin-top: 100px;
}
</style>