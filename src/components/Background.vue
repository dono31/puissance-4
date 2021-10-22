<template>
    <section>
      <div class="row" v-for="row in 14" :key="row">
        <div v-for="i in 2" :key="i">
          <i v-for="(icon,index) in backgroundIcons"
            :class="icon"
            :key="index"
          ></i>
        </div>
      </div>
    </section>
</template>

<script>
export default {
    name: 'Background',
    data() {
        return {
            backgroundIcons: {
                1:"fas fa-pizza-slice", 2:"fas fa-hotdog", 3:"fas fa-beer",
                4:"fas fa-ice-cream", 5:"fas fa-cheese", 6:"fas fa-apple-alt",
                7:"fas fa-lemon", 8:"fas fa-fish", 9:"fas fa-candy-cane",
                10:"fas fa-bread-slice", 11:"fas fa-code", 12:"fas fa-cookie-bite",
                13:"fas fa-hamburger", 14:"fas fa-dumbbell",15:"fas fa-utensils",
                16:"fab fa-discord", 17:"fas fa-ghost", 18:"fas fa-carrot",
                19:"fab fa-node-js"
            },
        }
    }
}
</script>



<style scoped>

section{
    
    position:relative;
    width: 100%;
    height: 100vh;
    background: #111;
    display:flex;
    flex-direction:column;
    overflow: hidden;
    margin:auto;
    max-width:100%;
}
section .row{
    position: relative;
    top: -40%;
    width:100%;
    display:flex;
    padding: 10px 0;
    white-space: nowrap;
    font-size: 111px;
}
i{
    color: rgba(0,0,0,0.5);
    transition: 1s;
    padding: 0 5px;
    user-select:none;
    cursor: default;
}
i:hover{
    transition: 0s;
    color:  #002eff;
    box-shadow: 0 0 120px  #f2fe00;
}
section .row div{
    
    animation: animate 80s linear infinite;
    animation-delay: -80s;
}
section .row div:nth-child(2){
    animation: animate2 80s linear infinite;
    animation-delay: -40s;
}    
@keyframes animate{
    0%{
        transform: translateX(100%);
    }
    100%{
        transform: translateX(-100%);
    }
}
@keyframes animate2{
    0%{
        transform: translateX(0%);
    }
    100%{
        transform: translateX(-200%);
    }
}
</style>