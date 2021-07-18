<template>
  <div class="Message">
    <Header></Header>
    <section class="back-section">
      <div class="width-section">
        <p class="sentence1">株式会社SAMPLEがSAMPLEであり続けるために大切にしていることがあります。</p>
        <p class="sentence2">それは相手の立場に立って行動すること。相手が喜んでくれることを追求すること。</p>
        <div class="content-flex">
          <div class="content-left">
            <p class="content-left-1">少人数の会社なので、現場でお会いするお客様の「あなたに頼んでよかった」という言葉を励みにいい仕事をしてお客様の満足した顔がみたいと考えております。当社では、業務をスムーズにし無駄な時間ロスを軽減する、もっと満足のいく仕事がしたいから社員一同日々努力を惜しみません。</p>
            <div>
              <p>ルームクリーニングに関して より綺麗に、<br>より価格を抑えて確かな工事を行っています。</p>
            </div>
            <div>
              <p>お客様や忙しい賃貸オーナー様、不動産管理業者様にかわって<br>引越しに関する入退居立会業務、現状回復</p>
              
            </div>
            <div>
              <p>内装リフォーム工事を中心に事業を展開しています。</p>
            </div>
            <p class="content-left-2">ささいなことから何でもお話いただければ最適なご提案をさせて頂けます。</p>
          </div>
          <section class="image-section">
            <img src="../assets/massage/greeting_img00.png" alt="" width="100%" height="70%">
            <section class="image-sub-section">
              <img src="../assets/massage/greeting_img02.png" alt="" width="33%" height="100%">
              <img src="../assets/massage/greeting_img03.png" alt="" width="33%" height="100%">
              <img src="../assets/massage/greeting_img04.png" alt="" width="33%" height="100%">
            </section>
          </section>
        </div>
        <Footer></Footer>
      </div>
    </section>
  </div>
</template>

<script>
import Header from "../components/Header.vue"
import Footer from "../components/Footer.vue"

export default {
  components:{
    Header,
    Footer
  }
}
</script>

<style scoped>
.back-section{
  margin-top:55px;
}
.width-section{
  width: 980px;
  margin: 0 auto;
}
.sentence1{
  font-size:22px;
  font-weight: 500;
  font-family: sans-serif;
  padding-top:20px;
}
.sentence2{
  font-size:22px;
  font-family: sans-serif;
  padding-top:10px;
}
.content-flex{
  margin-top:30px;
  margin-bottom:100px;
  display: flex;
  justify-content: space-between;
}
.content-left{
  width: 50%;
}
.content-left-1{
  line-height: 30px;
}
.content-left div{
  background-color: #8DC655;
  margin-top:5px;
}
.content-left div p{
  color:#ffff;
  font-size:15px;
  padding: 15px 10px;
}
.content-left-2{
  padding-top:20px;
  line-height: 30px;
}
.image-sub-section{
  display: flex;
  justify-content: space-between;
  margin-top:5px;
}
br{
  display: block;
  content:"";
  padding-top:10px;
}
</style>