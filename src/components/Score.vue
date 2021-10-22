<template>
    <div class="score">
        <h3>  Score  </h3>
        <p class="yellowplayer"> Joueur 1 = {{ currentScore['1'] }}</p>
        <p class="redplayer"> Joueur 2 = {{ currentScore['2'] }}</p>
    </div>
</template>


<script>
export default {
  name: 'Score',
  props: ["currentScore"]
}
</script>

<style scoped>
p {
    color:white;
    margin-top:0;
    font-size: 1.5em;
}
.yellowplayer::before {
    font-family: "Font Awesome 5 Free"; 
    font-weight: 900; 
    content: "\f007";
    color: yellow;
}
.yellowplayer {
    margin-bottom:10px;

}
.redplayer {
    margin-top: 5px;
    margin-bottom: 25px;
}

.redplayer::before {
    font-family: "Font Awesome 5 Free"; 
    font-weight: 900; 
    content: "\f007";
    color: red;
}
</style>