<template>
    <div class="topleft">
      <h3> Temps Restant </h3>
      <div class="flex">
        
        <div id="player1">
        <div class="yellowBall2"></div>
        Player 1 : <span :class="getClassName(seconds[1])">{{ seconds[1] | toMinutes}}:{{ seconds[1] | toSeconds}}</span>
        </div>
        
        <div id="player2">
        <div class="redBall2"></div>
        Player 2 : <span :class="getClassName(seconds[1])">{{ seconds[2] | toMinutes}}:{{ seconds[2] | toSeconds}}</span>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'Timer',
  props: ["currentPlayer", "isActive", "resetTimer"],
  data() {
    return {
      seconds: {1: 90, 2: 90}
      
    }
  },
  watch: {
    isActive: function() {
      if (this.isActive) {
        this.handleTime();
      }
    },
    resetTimer: function() {
      this.resetCountdown();

    }
  },
  methods: {
    handleTime() {

      let interval = null;
      if (this.isActive) {
        interval = setInterval(() => {
          if (!this.seconds[this.currentPlayer]) {
            this.$emit('time-out');
            return () => clearInterval(interval);
          }
          if (!this.isActive) {
            return () => clearInterval(interval);
          }
          this.seconds[this.currentPlayer]--;
        }, 1000);
      }
      return () => clearInterval(interval);
    },
    resetCountdown() {
      if (!this.resetTimer) return;
      this.seconds = {1: 90, 2: 90};
    },
    getClassName(seconds) {
      if (seconds <= 10) {
        return 'timeRunningOut';
      } 
      return null;
    }
  },
  filters: {
    toMinutes(secondes){
      let minutes = Math.floor(secondes/60);
      if (minutes < 10) {
        return '0' + minutes;
      }
      return minutes;
    },
    toSeconds(secondes){
      secondes %= 60;
      if (secondes < 10) {
        return '0' + secondes;
      }
      return secondes;
    },
  }
}
</script>
