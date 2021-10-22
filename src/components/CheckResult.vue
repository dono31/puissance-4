<template>
    <div class='alertWin'>
      <span style="--i:1">C</span>
      <span style="--i:2">O</span>
      <span style="--i:3">N</span>
      <span style="--i:4">G</span>
      <span style="--i:5">R</span>
      <span style="--i:6">A</span>
      <span style="--i:7">T</span>
      <span style="--i:8">U</span>
      <span style="--i:9">L</span>
      <span style="--i:10">A</span>
      <span style="--i:11">T</span>
      <span style="--i:12">I</span>
      <span style="--i:13">O</span>
      <span style="--i:14">N</span>
      <span style="--i:14">S</span>
    </div>
</template>

<style scoped>

    .alertWin{
        position:absolute;
        text-align:center; 
        top:110px;
        left:640px;
        

    }
    .alertWin span{
        font-family: 'Permanent Marker', cursive;
        font-size: 4rem;
        display:inline-block;
        position:relative;
        color: goldenrod;
        animation: animate3 3s ease-in-out infinite;
        animation-delay: calc(0.1s * var(--i));
        
    }

    @keyframes animate1{
        0%{
            transform: translateY(0px);
        }
        20%{
            transform: translateY(20px);
        }
        40%,100%{
            transform: translateY(0px);
        }
        
    }
    @keyframes animate3{
        0%{
            transform: translateY(0px);
        }
        20%{
            transform: translateY(20px);
        }
        40%,100%{
            transform: translateY(0px);
        }
        0%{
        text-shadow:
        0 0 7px rgb(252, 1, 1),
        0 0 10px rgb(252, 1, 1),
        0 0 32px rgb(252, 1, 1),
        0 0 87px rgb(252, 1, 1),
        0 0 150px rgb(252, 1, 1);
        }
        50%{
        text-shadow:
        0 0 7px rgba(252, 1, 1, 0.878),
        0 0 10px rgba(252, 1, 1, 0.878),
        0 0 32px rgba(252, 1, 1, 0.878),
        0 0 87px rgba(252, 1, 1, 0.878),
        0 0 150px rgba(252, 1, 1, 0.878);
  }
        
    }

</style>
<script>
     export default {
         name:"CheckResult",
         }
     
</script>
