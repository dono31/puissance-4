<template>
    <div class="actions">
        <p class="button" @click="$emit('new-game-click')">Nouvelle Partie</p>
        <p class="button" @click="$emit('last-play-click')">Coup Précédent</p>
        <p class="button" v-if="activeSound" @click="$emit('active-sound-click')"><i class="fas fa-volume-up"></i></p>
        <p class="button" v-else @click="$emit('active-sound-click')"><i class="fas fa-volume-mute"></i></p>
    </div>
</template>


<script>
export default {
  name: 'ButtonActions',
  props: ["activeSound"]
}
</script>

<style scoped>

</style>