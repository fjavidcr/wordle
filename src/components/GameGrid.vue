<script setup lang="ts">
import { useMainStore } from '@/store'
import { computed, ref } from '@vue/reactivity'
import GameGridRow from './GameGridRow.vue'

const mainStore = useMainStore()
const guessOppotunities = computed(() => mainStore.wordLonitude)
const guessWord = ref(new Array(mainStore.wordLonitude))
// TODO con cada pulsación del teclado hay que detactar las letras pulsadas
// e ir guardandolas en guessWord, a la vez que mostrándolas en la row
</script>
<template>
  <section id="grid-container">
    <GameGridRow
      :opportunity="opportunity"
      :key="`'grid-row-${opportunity}`"
      v-for="opportunity in guessOppotunities"
    />
  </section>
</template>
<style>
#grid-container {
  max-width: fit-content;
  margin: 0 auto;
}
</style>
