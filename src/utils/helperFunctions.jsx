import { nanoid } from 'nanoid'

export const decodeHtml = (string) => {
    const txt = document.createElement("textarea")
    txt.innerHTML = string
    return txt.value
}

export const randomFormOptions = (correctAnswer, incorrectAnswers) => {
    const randomIndex = Math.floor(Math.random() * 3)
    const otherOptions = [...incorrectAnswers]
    otherOptions.splice(randomIndex, 0, correctAnswer)

    const returnOptions = otherOptions.map(option => {
        const id = nanoid()
        const optionText = decodeHtml(option)
        return option = {
            id: id,
            text: optionText,
            isCorrect: option === correctAnswer ? true : false
        }
    })

    return returnOptions
}