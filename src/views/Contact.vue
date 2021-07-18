<template>
  <div class="contact">
    <Header></Header>
    <div class="content-flex">
      <img src="../assets/Contact/contact_img02.png" alt="">
      <div class="content-right">
        <p>ご質問、ご相談はお気軽にお問い合わせください。</p>
        <p>お問い合わせはTELまたはメールをご利用ください。</p>
        <p>内容を確認次第ご連絡させていただきます。返信が無い場合、</p>
        <p>弊社にメールが到着していない恐れがございますので、お手数</p>
        <p>をおかけいたしますが、そのような場合は電話か再度メールを</p>
        <p>お送りいただけましたら幸いでございます。</p>
        <div class="contact-card" v-for="(value,index) in Contact" :key="index">
          <h1>{{value.contactMethod}}</h1>
          <p>{{value.Method}}:
            <a :href="value.href" :class="dynamicClass(index)" @click="dynamicClick(index)">{{value.number}}</a><span>{{value.time}}</span></p>
        </div>
      </div>
    </div>
    <Mailform v-if="isCheckedModal" @closeModal="closeModal()"></Mailform>
    <Footer></Footer>
  </div>
</template>

<script lang="ts">
import Header from "../components/Header.vue"
import Mailform from "../components/Mailform.vue"
import Footer from "../components/Footer.vue"
export default{
  components:{
    Header,
    Mailform,
    Footer
  },
  data(){
    return{
      isCheckedModal:false,
      Contact:[
        {
        contactMethod:"電話によるお問い合わせ",
        Method:"TEL",
        href:"tel:047-123-4567",
        number:"047-123-4567",
        time:"受付時間 9：00～20：00"
        },
        {
        contactMethod:"ファックスによるお問い合わせ",
        Method:"FAX",
        href:"",
        number:"047-123-4567",
        time:""
        },
        {
        contactMethod:"メールによるお問い合わせ",
        Method:"Email",
        href:"javascript:void(0)",
        number:"メールの方はこちら",
        time:""
        },
      ]
    }
  },
  methods:{
    dynamicClass(index){
      if(index === 0){
        return "decoration";
      }else if(index === 1){
        return "none-decoration"
      }
    },
    dynamicClick(index){
      if(index === 2){
        this.isCheckedModal = true;
      }
    },
    closeModal(){
      this.isCheckedModal = false;
    }
  }
}
</script>

<style scoped>
.content-flex{
  width: 980px;
  margin:55px auto 30px;
  display: flex;
  justify-content: space-between;
}
.content-right{
  margin-top:20px;
  margin-left: 10px;
  width:50%;
}
.content-right p{
  font-size:14px;
  line-height:25px;
}
.contact-card{
  margin:30px 0 0 30px;
  border-left: 5px solid #a0ce3d;
  border-bottom:1px solid black;
  border-radius: 0 0 0 5px;
}
.contact-card h1{
  margin-left:10px;
  margin-bottom:10px;
  font-size:25px;
}
.contact-card p{
  padding-left:10px;
  padding-bottom:10px;
  font-size:20px;
  color:gray
}
.contact-card a{
  font-size:30px;
  font-weight: bold;
  color: gray;
  text-decoration: none;
}
.contact-card span{
  font-size:14px;
  margin-left: 10px;
  color: gray;
}
.none-decoration{
  pointer-events: none;
}
</style>
