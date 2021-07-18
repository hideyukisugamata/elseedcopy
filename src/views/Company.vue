<template>
  <div class="Company">
    <Header></Header>
    <div class="content-div">
      <table>
        <tr>
          <th>商号</th>
          <td>株式会社<span></span>SAMPLE</td>
        </tr>
        <tr>
          <th>本社</th>
          <td>千葉県八千代市八千代台１－１－１<span></span>１F</td>
        </tr>
        <tr>
          <th>会社設立の年月日</th>
          <td>2021年7月</td>
        </tr>
        <tr>
          <th>目的</th>
          <td>1.建築工事の請負・設計・施工・管理<br>2.外装工事・内装工事、電気工事、水道工事、ガス工事、空調設備工事</td>
        </tr>
        <tr>
          <th>資本金</th>
          <td>1000万円</td>
        </tr>
        <tr>
          <th>代表者</th>
          <td>代表取締役<span></span>SAMPLE太郎</td>
        </tr>
      </table>
    </div>
    <div class="content2-div">
      <div class="content2-left">
        <div class="sentence-div">
          <p>幸せな空間づくりをサポートする、</p>
          <p>SAMPLEはお客様の笑顔を大切にしています。</p>
        </div>
      </div>
      <img src="../assets/company/img01.png" alt="" width="50%" height="100%">
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
  }
}
</script>

<style scoped>
.content-div{
  width: 980px;
  margin:75px auto 20px;
}
table{
 width: 100%;
}
table th,
table td{
  padding:10px;
  border:1px solid #000;
}
table th {
  font-weight: bold;
  background-color: #FFF4D6;
}
table td{
  line-height:26px ;
}
td span{
  padding:0 5px;
}
.content2-div{
  width: 980px;
  margin: 0 auto 30px;
  display: flex;
  justify-content: space-between;
}
.content2-left{
  width: 50%;
  display: flex;
  align-items: flex-end;
}
.sentence-div p{
  font-size:22px;
  font-weight: 500;
  color:#68B22E;
  text-shadow:0.2px 0.2px 0.2px rgb(0, 126, 10);
  padding-top:5px;
}
</style>