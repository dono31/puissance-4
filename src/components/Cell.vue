<template>
    <td @click="$emit('cell-clicked')" :class="color"/>
</template>

<script>
export default {
  name: 'Cell',
  props: ['color']
}
</script>