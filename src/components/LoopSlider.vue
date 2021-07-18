<template>
  <div class="loop-slider">
   <ul>
      <li><img src="../assets/home/slide01_img01.png" alt=""></li>
      <li><img src="../assets/home/slide01_img02.png" alt=""></li>
      <li><img src="../assets/home/slide01_img03.png" alt=""></li>
      <li><img src="../assets/home/slide01_img04.png" alt=""></li>
      <li><img src="../assets/home/slide01_img05.png" alt=""></li>
      <li><img src="../assets/home/slide01_img06.png" alt=""></li>
    </ul>
    <ul>
      <li><img src="../assets/home/slide01_img01.png" alt=""></li>
      <li><img src="../assets/home/slide01_img02.png" alt=""></li>
      <li><img src="../assets/home/slide01_img03.png" alt=""></li>
      <li><img src="../assets/home/slide01_img04.png" alt=""></li>
      <li><img src="../assets/home/slide01_img05.png" alt=""></li>
      <li><img src="../assets/home/slide01_img06.png" alt=""></li>
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
  height: 156px;
  display: flex;
}
.loop-slider ul:first-child{
  animation:loop1 120s -60s linear infinite;
}
.loop-slider ul:last-child{
  animation:loop2 120s linear infinite;
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
</style>