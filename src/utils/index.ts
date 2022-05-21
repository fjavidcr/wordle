export default {
  initGuessData: (guessOppotunities: number) => {
    const data = []
    for (let i = 0; i < guessOppotunities; i++) {
      data.push({
        opportunityNumber: i + 1,
        word: '',
        status: 'todo'
      })
    }
    return data
  }
}
