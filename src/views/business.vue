<template>
  <div class="business">
    <Header></Header>
    <section class="back-section">
      <div class="width-section">
        <p class="sentence1">賃貸マンション解約時に、管理会社様に代わり退去立会い・敷金精算を代行。</p>
        <p class="sentence2">解約退去時のトラブルを未然に防ぎ管理会社様と退去者様とのスムーズな契約終了をサポート。</p>
        <div class="content-flex">
          <div class="content-sentence-section">
            <p class="sentence3">退去立会いの専門知識をもつスタッフが、お部屋の状態・入居年数・故意過失の有無等から敷金精算業務を行います。立会い時に退去者と共に室内の不具合箇所を確認し、修復費用を迅速に査定し適正に算出された負担割合に納得いただいた上で敷金精算書へのサインをいただきます。その場で退去者負担分の精算をし、返還金額を決定させることで後々のトラブルを最小限に防ぎます。</p>
          </div>
          <div class="content-image1"></div>
        </div>
      </div>
    </section>
    <div class="content-bar">
      <div class="sub-title-div">
        <p>解約退去立会いの特徴</p>
      </div>
    </div>
    <section class="back-section2">
      <div class="width-section">
        <p class="sentence1">しっかりとした説明を行い、納得していただく。ポイントは漏れなく抑えていくことです。</p>
        <div class="content-flex">
          <div class="content-image2"></div>
          <div class="content-sentence-section">
            <p class="sentence3">原状回復を巡るトラブルが急増している昨今、そのトラブルの多くは退去者への説明不足によるところが大きいと考えられ、退去者にしっかりとした説明を行い、納得していただくことが重要です。蓄積されたノウハウと経験を日々重ねつつ退去者が納得できる様な説明を行い、円滑な退去立会を実践することでトラブルを抑制し、オーナー様の負担軽減と安定した賃貸運営をめざす解約退去立会い・精算業務でキャッシュフロー改善と収益の最大化をサポート。</p>
          </div>          
        </div>
      </div>
    </section>
    <div class="content-bar">
      <div class="sub-title-div">
        <p>SAMPLEの強み</p>
      </div>
    </div>
    <section class="width-section3">
      <div class="advantage-section">
        <div class="advantage-point1">
          <p>原状回復のノウハウ</p>
        </div>
        <div class="advantage-sentence-section">
          <p>過失箇所についての負担割合、復旧についての交渉をする以上、かつその場で答えられる様にしておくことが重要なことです。なぜその過失は起こったのか、どのようにすれば防ぐことができたのかなど分かりやすく説明することで退去者との負担交渉をスムーズに行うことが可能になります。</p>
        </div>
      </div>
      <div class="advantage-section">
        <div class="advantage-point1">
          <p>内容の把握</p>
        </div>
        <div class="advantage-sentence-section">
          <p>賃貸借契約は、借主と貸主との合意によって成立するものであり、その契約の内容は、個別の契約によって異なります。立会いにおいては契約書に記載されている義務や禁止、特約事項が守られていたかの確認作業も行うためその中身条項を正確に理解して立会いに望む必要があります。</p>
        </div>
      </div>
      <div class="advantage-section-last">
        <div class="advantage-point1">
          <p>コミュニケーション</p>
        </div>
        <div class="advantage-sentence-section">
          <p>立合い後のトラブルを未然に防ぐため過去のトラブル事例、難交渉事例を基に顧問弁護士によるアドバイスを取り入れながら最善の対応策を検討しています。立会い時の会話の順序一つでも結果が大きく変わることもあるため密接なコミュニケーションを心がけています。</p>
        </div>
      </div>
      <Footer></Footer>
    </section>
  </div>
</template>

<script>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
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
  margin-top:20px;
  display: flex;
  justify-content: space-between;
  margin-bottom:70px;
}
.content-sentence-section{
  width:35%;
  line-height: 30px;
}
.content-image1{
  width: 60%;
  height: 300px;
  background: url(../assets/business/img01.png) no-repeat;
  background-position: center;
  background-size: cover;
}
.content-bar{
  height: 55px;
  background: linear-gradient(#a0ce3d 50%,#68B22E);
}
.sub-title-div{
  height: 100%;
  width: 980px;
  margin:0 auto;
  text-align: right;
  border-right: 5px solid #079239;
}
.sub-title-div p{
  padding-right:10px;
  letter-spacing: 0.1em;
}
.content-bar p{
  line-height: 55px;
  color: #ffff;
  font-size: 25px;
  font-family: sans-serif;
}
.content-image2{
  width: 60%;
  height: 300px;
  background: url(../assets/business/img02.png) no-repeat;
  background-position: center;
  background-size: cover;
}
.width-section3{
  width:980px;
  margin: 0 auto;
}
.advantage-section{
  margin-top: 20px;
  margin-bottom: 50px;
  display: flex;
  justify-content: space-between;
}
.advantage-point1{
  height: 50px;
  width: 25%;
  border: 3px solid #a0ce3d ;
  border-radius: 10px;
  text-align: center;
}
.advantage-point1 p{
  font-size:20px;
  font-weight:bold;
  line-height: 50px;
}
.advantage-sentence-section{
  width: 75%;
  margin-left: 20px;
  line-height: 30px;
}
.advantage-section-last{
  margin-top: 20px;
  margin-bottom:100px ;
  display: flex;
  justify-content: space-between;
}



</style>