import { useState, useEffect, memo } from 'react'
import { nanoid } from 'nanoid'

import Question from './Quetion'

import { decodeHtml, randomFormOptions } from '../utils/helperFunctions'

function StartGame(props) {
    const [questions, setQuestions] = useState([])
    const [checkingTheAnswer, setCheckingTheAnswer] = useState(false)
    const changeCheckingTheAnswer = () => {
        setCheckingTheAnswer(true)
    }
    const startNewGame = () => {
        setCheckingTheAnswer(false)
        props.returnToWelcomePage();
    }

    const [score, setScore] = useState(0)
    const checkIfScore = (isCorrect) => {
        if (isCorrect && score < 5) {
            setScore(prevScore => prevScore + 1)
        }
        if (!isCorrect && score > 0) {
            setScore(prevScore => prevScore - 1)
        }
    }

    useEffect(() => {
        fetch('https://opentdb.com/api.php?amount=5')
            .then(response => response.json())
            .then(data => {
                if (data.response_code === 0) {
                    const questions = data.results
                    questions.forEach(question => {
                        question.id = nanoid()
                        question.question = decodeHtml(question.question)
                        question.options = randomFormOptions(question.correct_answer, question.incorrect_answers)
                    })
                    setQuestions(questions)
                }
                return
            });
    }, [])

    const renderQuestions = questions.map(question => {
        return <Question key={question.id}
            title={question.question}
            options={question.options}
            checkingTheAnswer={checkingTheAnswer}
            checkIfScore={checkIfScore} />
    });

    function NewGameButton() {
        return (
            <div className="flex flex-col items-center lg:flex-row">
                <div className="mb-4 font-bold text-center font-inter text-dark-blue lg:mb-0 lg:mr-8">You scored {score}/5 correct answers</div>
                <button onClick={startNewGame} className="px-8 py-4 text-white rounded-xl bg-purple-blue font-inter" type="button">Play again</button>
            </div>
        )
    }

    return (
        <div className="w-full my-8 sm:mx-8 lg:max-w-2xl">
            {renderQuestions}
            <div className="flex justify-center mt-4">
                { checkingTheAnswer 
                    ? <NewGameButton />
                    : <button onClick={changeCheckingTheAnswer} className="px-8 py-4 text-white rounded-xl bg-purple-blue font-inter" type="button">Check answers</button>
                }
            </div>
        </div>
    )
}

export default StartGame