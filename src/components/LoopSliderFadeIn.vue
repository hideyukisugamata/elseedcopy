<template>
  <div class="loop-slider">
   <ul>
      <li><img src="../assets/home/slide02_img01.png" alt=""></li>
      <li><img src="../assets/home/slide02_img02.png" alt=""></li>
      <li><img src="../assets/home/slide02_img03.png" alt=""></li>
      <li><img src="../assets/home/slide02_img04.png" alt=""></li>
      <li><img src="../assets/home/slide02_img05.png" alt=""></li>
      <li><img src="../assets/home/slide02_img06.png" alt=""></li>
      <li><img src="../assets/home/slide02_img07.png" alt=""></li>
      <li><img src="../assets/home/slide02_img08.png" alt=""></li>
    </ul>
   <ul>
      <li><img src="../assets/home/slide02_img01.png" alt=""></li>
      <li><img src="../assets/home/slide02_img02.png" alt=""></li>
      <li><img src="../assets/home/slide02_img03.png" alt=""></li>
      <li><img src="../assets/home/slide02_img04.png" alt=""></li>
      <li><img src="../assets/home/slide02_img05.png" alt=""></li>
      <li><img src="../assets/home/slide02_img06.png" alt=""></li>
      <li><img src="../assets/home/slide02_img07.png" alt=""></li>
      <li><img src="../assets/home/slide02_img08.png" alt=""></li>
    </ul>
</div>
</template>

<style scoped>
.loop-slider{
  position: relative;
  display: flex;
  width: 100%;
  overflow: hidden;
}
.loop-slider ul{
  height: 118px;
  display: flex;
}
.loop-slider ul:first-child{
  animation:loop1 180s -90s linear infinite;
}
.loop-slider ul:last-child{
  animation:loop2 180s linear infinite;
}
.loop-slider:hover ul{
  animation-play-state: paused;
}
.loop-slider li{
  display: inline-block;
  list-style: none;
  height: 156px;
  text-align: center;
}
@keyframes loop1{
  0%{
    transform: translateX(100%);
  }
  to{
    transform: translateX(-100%);
  }
}
@keyframes loop2{
  0%{
    transform: translateX(0%);
  }
  to{
    transform: translateX(-200%);
  }
}
/* ------  FadeIn code------- */

.loop-slider li{
  animation-duration: 2s;
  animation-name: FadeIn;
  animation-fill-mode: forwards;
  opacity: 0;
}
.loop-slider ul li:nth-of-type(1) {
  animation-delay: 0.2s;
}
.loop-slider ul li:nth-of-type(2) {
  animation-delay: 0.4s;
}
.loop-slider ul li:nth-of-type(3) {
  animation-delay: 0.6s;
}
.loop-slider ul li:nth-of-type(4) {
  animation-delay: 0.8s;
}
.loop-slider ul li:nth-of-type(5) {
  animation-delay: 1s;
}
.loop-slider ul li:nth-of-type(6) {
  animation-delay: 1.2s;
}
.loop-slider ul li:nth-of-type(7) {
  animation-delay: 1.4s;
}
.loop-slider ul li:nth-of-type(8) {
  animation-delay: 1.6s;
}
@keyframes FadeIn{
  0%{
    opacity: 0;
  }
  100%{
    opacity: 1;
  }
}

</style>