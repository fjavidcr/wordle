// import { Word } from '@/models/word.model'
import { defineStore } from 'pinia'
import { getRandomWord } from '@/db/wordsDB'

export const useMainStore = defineStore({
  id: 'mainStore',
  state: () => ({
    word: {
      name: '',
      longitude: 5
    }
  }),
  getters: {
    wordName: (state) => state.word.name,
    wordLonitude: (state) => state.word.longitude
  },
  actions: {
    async chooseWord(longitude?: number) {
      if (longitude) {
        this.word.longitude = longitude
      }
      this.word.name = await getRandomWord(this.word.longitude)
    }
  }
})
