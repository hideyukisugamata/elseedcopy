<template>
  <div class="mail-form">
    <div class="input-form" >
      <validationObserver ref="obs" v-slot="ObserverProps">
      <form action="">
        <p>お問合せフォーム</p>
        <div class="input-div">
          <validationProvider name="お名前" rules="required" v-slot="{errors}" :custom-messages="customMessages">
            <input type="text" class="input-name" placeholder="お名前(必須)" v-model="userName"/>
            <span class="error-message">{{errors[0]}}</span>
          </validationProvider>
        </div>
        <div class="input-div">
          <validationProvider name="電話番号" rules="required|numeric|min:10" v-slot="{errors}" mode="lazy" :custom-messages="customMessages">
            <input type="tel" class="input-tel" placeholder="電話番号（必須・市外局番・ハイフン無し）" v-model="userTelephone"/>
            <span class="error-message">{{errors[0]}}</span>
          </validationProvider>
        </div>
        <div class="input-div">
          <validationProvider rules="email" v-slot="{errors}" :custom-messages="customMessages">
            <input type="" class="input-email" placeholder="メールアドレス(任意)" v-model="userEmailAddress">
            <span class="error-message">{{errors[0]}}</span>
          </validationProvider>
        </div>
        <div class="textarea-div">
          <validationProvider name="お問合せ内容" v-slot="{errors}" rules="required" :custom-messages="customMessages">
            <textarea name="" id="" cols="30" rows="10" placeholder="お問合せ内容(必須)" v-model="userMessage"></textarea>
            <span class="error-message">{{errors[0]}}</span>
          </validationProvider>
        </div>
        <div class="button-div">
          <button type="button" @click="sendEmail()" :disabled="ObserverProps.invalid || !ObserverProps.validated">送信する</button>
          <button @click="closeModal()">閉じる</button>
        </div>
      </form>
      </validationObserver>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import {
  ValidationProvider,
  ValidationObserver,
  localize,
  extend,
} from 'vee-validate';

import * as rules from'vee-validate/dist/rules'
for (let rule in rules){
  extend(rule,rules[rule])
}
import ja from 'vee-validate/dist/locale/ja'
localize('ja',ja)

export default{
  components:{
    ValidationProvider,
    ValidationObserver
  },
  data(){
    return{
      userName:"",
      userTelephone:"",
      userEmailAddress:"",
      userMessage:"",
      customMessages:{
        required:"{_field_}を入力して下さい",
        numeric:"半角数字（ハイフン無し）で入力して下さい",
        email:"メールアドレス形式で入力して下さい",
        min:"電話番号は10文字以上で入力して下さい"
      }
    }
  },
  methods:{
    closeModal(){
      this.$emit('closeModal');
    },
    async sendEmail(){
      const post = await axios.post('https://fathomless-chamber-66751.herokuapp.com/api/mail',
      {
        userName:this.userName,
        userTelephone:this.userTelephone,
        userEmailAddress:this.userEmailAddress,
        userMessage:this.userMessage,
        //得意先ごとに変更する
        toAddress:"hideyuki.sugamata@gmail.com",    //得意先メールアドレス
        ToAddressName:"hideyuki"  //得意先名前
        //ここまで
      });
      if(post.data.Result.length === 0){
        alert('お問合せを送信しました');
        this.$emit('closeModal');
      }else{
        alert('送信できませんでした');
        this.$emit('closeModal')
      }
    }
  }
}
</script>


<style scoped>
.mail-form {
  z-index: 10;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  align-items: center;
}

.input-form {
  width: 600px;
  height: 70%;
  position: relative;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  background-color: white;
  border-radius: 10px;
  text-align: center;
}
.input-form p {
  padding-top: 20px;
  font-size: 20px;
  font-weight: 600;
  padding-bottom: 30px;
  text-decoration: underline;
  color: #757575;
}
.input-div{
  height: 60px;
  width: 80%;
  margin: 0 auto;
  text-align: left;
}
.input-form input {
  height: 30px;
  width: 100%;
  border: none;
  border-bottom: 1px solid gray;
  border-radius: 0 0 0 5px;
  display: block;
  outline: none;
  background-color: aliceblue;
  color: #757575;
  font-size: 18px;
}
.textarea-div{
  height: 170px;
  width: 80%;
  margin: 0 auto;
  text-align: left;
}
textarea{
 height: 150px;
 width: 100%;
 display: block;
 outline: none;
 border:none;
 border-bottom: 1px solid gray;
 border-radius: 5px;
 background-color: aliceblue;
 color: #757575;
 font-size: 18px;
}
button{
  margin:20px 10px;
  border-radius: 5px;
  border:none;
  background-color: #FFC61A;
  height: 30px;
  width: 100px;
  cursor: pointer;
  color: #757575;
}
button:disabled{
  cursor: not-allowed;
  opacity: 0.5;
}
.error-message{
  color:red;
  font-size: 12px;
}
</style>