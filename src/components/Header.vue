<template>
  <div class="header-component">
    <div class="header-image">
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
      <div class="visibillity-flex">
        <div class="visibillity-div"></div>
        <p class="header-title">{{headerTitle}}</p>
      </div>
    </div>
    <div class="content-bar">
      <div class="content-bar-wrap">
        <div class="content-title-div">
          <p>{{contentTitle}}</p>
        </div>
        <div class="sub-title-div">
          <p>{{subTitle}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      headerTitle : "",
      contentTitle: "",
      subTitle: ""
    }
  },
  methods:{
    transitionHome(){
      this.$router.push({name:'Home'})
    },
    isCheckedRoute(){
      if(this.$route.name === 'Business'){
        this.headerTitle = "Leaving the Witness";
        this.contentTitle = "[退去立会い]";
        this.subTitle = "解約退去立会い・敷金精算業務"
      }else if(this.$route.name ==='Message'){
        this.headerTitle = "Savored happiness";
        this.contentTitle = "[ごあいさつ]";
        this.subTitle = "SAMPLEの喜び"
      }else if(this.$route.name ==="Company"){
        this.headerTitle = "Corporate information";
        this.contentTitle = "[会社概要]";
        this.subTitle = "SAMPLEの想い"
      }else if(this.$route.name ==='Recruit'){
        this.headerTitle = "Recruitment";
        this.contentTitle = "[求人募集]";
        this.subTitle = "SAMPLEで自分を輝かせませんか"
      }else if(this.$route.name === 'Contact'){
        this.headerTitle = "Contact";
        this.contentTitle = "[お問い合わせ]";
        this.subTitle = "まずはお気軽にお問い合わせください"
      }
    },
    transitionBusiness(){
      this.$router.push({name:'Business'})
    },
    transitionMessage(){
      this.$router.push({name:'Message'})
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
  },
  created(){
    this.isCheckedRoute()
  }
}
</script>

<style scoped>
.header-component{
  height: 240px;
  background-color: #0942c3;
}
.header-image{
  height: 100%;
  min-width: 980px;
  background:url(../assets/header/header.jpg)no-repeat center;
  margin: 0 auto;
}
.header-div{
  width:980px;
  display: flex;
  justify-content: center;
  margin: 0 auto;
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
.visibillity-flex{
  display: flex;
  justify-content: space-between;
  width: 980px;
  margin: 0 auto;
}
.visibillity-div{
  width: 10px;
}
.header-title{
  color:#ffff;
  font-size:60px;
  font-weight: bold;
  font-family: "Garamond";
  opacity: 0.3;
  padding-top:145px;
  z-index:1;
  position: relative;
  text-align: right;
}
.content-bar{
  height: 55px;
  z-index: 10;
  background: linear-gradient(#a0ce3d 50%,#68B22E);
  position: relative;
}
.content-bar-wrap{
  width:980px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
}
.content-title-div{
  width: 220px;
  height: 100%;
  background-color: #079239;
  text-align: center;
}
.content-bar p{
  line-height: 55px;
  color: aliceblue;
  font-size: 25px;
  font-family: sans-serif;
  padding-right: 10px;
}
.sub-title-div{
  height: 100%;
  border-right: 5px solid #079239;
}
.sub-title-div p{
  letter-spacing: 0.1em;
}

</style>