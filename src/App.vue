<template>
  <div id="app">
    <div class='backGround'>
      <Background/>
    </div>
    <Board/>
  </div>
</template>

<script>
import Background from'./components/Background.vue'
import Board from './components/Board.vue'
export default {
  name: 'App',
  components: {
    Board,
    Background
  }
}
</script>

<style>
#app {
  position:relative;
}
.backGround{
  position:absolute;
  top:0;
  left:0;
  width:100vw;
  height: 100vh;
  z-index:1;
}
body{
  overflow: hidden;
}
</style>
