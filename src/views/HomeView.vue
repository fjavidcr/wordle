<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <h4>{{ mainStore.wordName }}</h4>
  </div>
</template>

<script setup lang="ts">
import { useMainStore } from '@/store'

const mainStore = useMainStore()

let n = 0
while (n < 5) {
  mainStore.chooseWord()
  n++
}
</script>
