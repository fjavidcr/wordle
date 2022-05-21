<script setup lang="ts">
import { onMounted, reactive } from 'vue'
import { useMainStore } from '@/store'
import { computed } from '@vue/reactivity'
import GameGridRow from './GameGridRow.vue'
// import { ALPHABET } from '@/utils/constants'
import Keyboard from 'simple-keyboard'
import 'simple-keyboard/build/css/index.css'

const mainStore = useMainStore()
const guessOppotunities = computed(() => mainStore.wordLonitude)
let currentOpportunity = 0
const initGuessData = []
for (let i = 0; i < guessOppotunities.value; i++) {
  initGuessData.push({
    opportunityNumber: i + 1,
    word: '',
    status: 'todo'
  })
}
const guessData = reactive(initGuessData)

onMounted(() => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const keyboard = new Keyboard({
    layout: {
      default: [
        'q w e r t y u i o p',
        'a s d f g h j k l \u00f1',
        'z x c v b n m {bksp}'
      ],
      shift: [
        'Q W E R T Y U I O P',
        'A S D F G H J K L \u00d1',
        'Z X C V B N M {bksp}'
      ]
    },
    maxLength: mainStore.wordLonitude,
    onChange: (input: string) => {
      guessData[currentOpportunity].word = input
      console.log('Input changed', {
        input,
        guessWord: guessData[currentOpportunity].word
      })
    },
    onKeyPress: (button: string) => {
      console.log('Button pressed', button)
      // if (button === '{bksp}') {
      //   guessWord.pop()
      // } else if (guessWord.length < mainStore.wordLonitude) {
      //   guessWord.push(button)
      // } else {
      //   console.log('guessWord completed!')
      // }
    }
  })
})
</script>
<template>
  <div class="game-container">
    <section id="grid-container">
      <GameGridRow
        :currentOpportunity="currentOpportunity"
        :guessWord="guessData[opportunity - 1].word"
        :opportunity="opportunity"
        :wordLongitude="mainStore.wordLonitude"
        :status="guessData[currentOpportunity].status"
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
