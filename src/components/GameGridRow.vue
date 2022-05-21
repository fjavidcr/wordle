<script setup lang="ts">
import { useMainStore } from '@/store'
import { computed } from '@vue/reactivity'

const mainStore = useMainStore()
const props = defineProps({
  opportunity: Number,
  currentOpportunity: Number,
  guessWord: String,
  wordLongitude: Number,
  status: String
})

const getLetter = (index: number) => {
  const letterExists = props.guessWord && props.guessWord.length >= index
  return letterExists ? props.guessWord[index] : ' '
}
</script>
<template>
  <div class="grid-row">
    <div
      class="grid-cell"
      :key="`'grid-row-${props.opportunity}-cell-${index}`"
      v-for="index in mainStore.wordLonitude"
    >
      {{ getLetter(index - 1) }}
    </div>
  </div>
</template>
<style>
.grid-cell {
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  width: 62px;
  height: 62px;
  user-select: none;
  border: solid 2px rgb(64 184 131);
  box-sizing: border-box;
  animation: 120ms linear 0s 1 normal none running pop;
  font-size: 30px;
  font-weight: 700;
  overflow-wrap: break-word;
  text-rendering: optimizelegibility;
  -webkit-box-align: center;
  -webkit-box-pack: center;
  -webkit-font-smoothing: antialiased;
}
.grid-row {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 10px;
  margin-bottom: 10px;
}
</style>
