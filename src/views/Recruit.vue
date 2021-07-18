<template>
  <div class="recruit">
    <Header></Header>
    <div class="content-flex">
      <div class="content-left">
        <img src="../assets/Recruit/recruit_img01.png" alt="">
        <div class="content-left-note">
          <p>※委託・外注スタッフも随時募集しています。</p>
        </div>
        <div class="list-wrapper">
          <li>クロス張替</li>
          <li>床張替</li>
          <li>大工工事</li>
          <li>塗装工事</li>
          <li>ルームクリーニング</li>
        </div>
        <p class="content-left-note2">どれか一つでも当てはまる方、是非ご連絡ください。お問い合わせだけでも構いません。</p>
      </div>
      <div class="content-right">
        <div class="recruit-card" v-for="(value,index) in recruit" :key="index">
          <h1>{{value.type}}</h1>
          <p class="recruit-card-sentence">{{value.sentence}}</p>
          <p class="recruit-card-condition"><span class="recruit-card-condition-span">勤務時間</span>{{value.time}}</p>
          <p class="recruit-card-condition"><span class="recruit-card-condition-span">給<span class="blank-span"></span>料</span>{{value.salary}}</p>
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "../components/Header.vue"
import Footer from "../components/Footer.vue"
export default {
  components:{
    Header,
    Footer
  },
  data(){
    return{
      recruit:[
        {
          type:"正社員（営業）",
          sentence:"お客様に対して、原状回復の提案営業です。退去立会いや、空室での見積りをメインに行って頂きます。入居率アップや、新入居者様に気持ちよくお部屋を使用して頂けるようスタッフオリジナルのセンスが問われます。",
          time:"10時～19時（現場によって変更あり）",
          salary:"月給25万円以上＋歩合（試用期間あり）営業未経験可　賞与年2回　売上による"
        },
        {
          type:"正社員（現場職人）",
          sentence:"空室・入居中での現状回復工事を行います。クロス張替・ 床張替等、営業スタッフと連携をとりながら円滑に現場を対応して頂きます。",
          time:"9時～18時（現場によって変更あり）",
          salary:"月給30万円以上（試用期間あり）現場未経験不可　賞与年2回　売上による"
        },
        {
          type:"正社員（ルームクリーニング）",
          sentence:"内装完了後、お部屋のお掃除が仕事です。次回使用して頂くお客様が快適な生活を過ごす為には、必要なお仕事です。キレイ好きな方大歓迎です。",
          time:"9時～18時（現場によって変更あり）",
          salary:"月給21万円以上（試用期間あり）未経験可　賞与年2回　売上による"
        }
      ]
    }
  }
}
</script>

<style scoped>
.content-flex{
  width: 980px;
  margin: 55px auto 30px;
  display: flex;
  justify-content: space-between;
}
.content-left{
  width:35%;
  margin-right: 40px;
  font-size:14px;
}
.content-left-note{
  background-color: #079239;
  padding: 10px;
  text-align: center;
  margin:15px 0;
}
.content-left-note p{
  color: #ffff;
}
.list-wrapper{
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
}
.list-wrapper li{
  padding-left: 10px;
  padding-bottom:10px;
  list-style-type: none;
}
.list-wrapper li::before{
  display: inline-block;
  width: 10px;
  height: 10px;
  content:'';
  border-radius: 100%;
  background: #000;
}
.content-left-note2{
  line-height: 20px;
  padding-top: 10px;
}
.content-right{
  width:65%;
}
.recruit-card{
  margin-top:50px;
  padding-left:15px;
  border-left: 5px solid #a0ce3d;
  border-bottom:1px solid black;
}
.recruit-card h1{
  font-size:22px;
  padding-bottom: 10px;
}
.recruit-card-sentence{
  font-size:14px;
  line-height: 20px;
  padding-bottom: 30px;
}
.recruit-card-condition-span{
  background-color:#FFFDDC;
  border: 1px solid #000;
  font-size: 14px;
  margin-right:10px;
  padding:2px;
}
.recruit-card-condition{
  font-size:14px;
  padding-bottom: 20px;
}
.blank-span{
  padding:0 14px;
}
</style>