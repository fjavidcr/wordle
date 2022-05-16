<script setup lang="ts">
import { onMounted, reactive } from 'vue'
import { useMainStore } from '@/store'
import { computed, ref } from '@vue/reactivity'
import GameGridRow from './GameGridRow.vue'
import { ALPHABET } from '@/utils/constants'
import Keyboard from 'simple-keyboard'
import layout from '@/utils/keyboard-layout'
import 'simple-keyboard/build/css/index.css'

const mainStore = useMainStore()
const guessOppotunities = computed(() => mainStore.wordLonitude)
const initGuessData = []

for (let i = 0; i < guessOppotunities.value; i++) {
  initGuessData.push({
    opportunityNumber: i + 1,
    word: [],
    complete: false,
    ok: false
  })
}
const guessData = reactive(initGuessData)
const guessWord = reactive(new Array(mainStore.wordLonitude))
// TODO con cada pulsación del teclado hay que detactar las letras pulsadas
// e ir guardandolas en guessWord, a la vez que mostrándolas en la row
onMounted(() => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const keyboard = new Keyboard({
    ...layout,
    onChange: (input: string) => {
      console.log('Input changed', input)
    },
    onKeyPress: (button: string) => {
      console.log('Button pressed', button)
      guessWord.value.push(button)
    }
  })
})
</script>
<template>
  <div class="game-container">
    <section id="grid-container">
      <GameGridRow
        :opportunity="opportunity"
        :key="`'grid-row-${opportunity}`"
        v-for="opportunity in guessOppotunities"
      />
    </section>
    <div class="simple-keyboard"></div>
  </div>
</template>
<style>
#grid-container {
  max-width: fit-content;
  margin: 0 auto;
}
.simple-keyboard {
  max-width: 500px;
  margin: 50px auto;
}
</style>
