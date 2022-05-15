<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <h4>{{ mainStore.wordName }}</h4>
    <GameGrid />
  </div>
</template>

<script setup lang="ts">
import { useMainStore } from '@/store'
import GameGrid from '@/components/GameGrid.vue'

const mainStore = useMainStore()
mainStore.chooseWord()
</script>
