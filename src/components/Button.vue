<template>
  <button class="button">
    {{ text }}
  </button>
</template>


<script>
export default {
  props: ['text']
}
</script>

<style>
.button {
  background-color: #35495e;
  color: white;
  border-radius: 6px;
}
</style>
