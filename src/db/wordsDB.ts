const validLongitudes: Array<number> = [3, 4, 5, 6, 7, 8, 9, 10]

const validateWord = (word: string, longitude: number) => {
  return word.length === longitude
}

export async function getRandomWord(longitude: number) {
  if (!validLongitudes.includes(longitude)) return ''
  else {
    let chosenWord = ''
    const db = await require(`./words/json/${longitude}.json`)
    let wordIsValid = false
    while (!wordIsValid) {
      const randomIndex = Math.floor(Math.random() * db.length)
      chosenWord = db[randomIndex]
      console.log(
        `${chosenWord} [${chosenWord.length}] -- ${randomIndex} of ${db.length}`
      )
      wordIsValid = validateWord(chosenWord, longitude)
    }
    return chosenWord
  }
}
