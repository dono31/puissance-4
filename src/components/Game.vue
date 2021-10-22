<template>
    <div class='game'>
        <board/>
    </div>
</template>

<script>
import Board from './Board'
export default {
  name: 'Game',
  data() {
  },
  components: {
      'board':Board,
  }
}

</script>

<style scoped>

</style>