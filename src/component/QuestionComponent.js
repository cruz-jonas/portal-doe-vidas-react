import { useState, useEffect } from 'react'
import { questions } from '../data/questions'

const QuestionComponent = ({ addChoice }) => {

    const url = process.env.URL.concat("/api/user-answers/register")

    const [currentPosition, setCurrentPosition] = useState(0);
    const [selected, setSelected] = useState("")
    const [currentQuestion, setCurrentQuestion] = useState(questions[currentPosition]);

    const handleSubmit = (e) => {

        e.preventDefault();

        const userAnswer = {
            position: currentQuestion.position,
            name: currentQuestion.name,
            text: selected
        }

        addChoice(selected)
        setCurrentPosition((prevCurrentPosition) => prevCurrentPosition + 1)

        fetchData(userAnswer)
        

    }

    useEffect(() => {
        setCurrentQuestion(questions[currentPosition])
    }, [currentPosition])

    async function fetchData(userAnswer) {

        const res = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userAnswer)
        })
        console.log(res)
    }

    const handleSelected = (e) => {
        setSelected(e.target.value)
    }

    return (
        <div>
            <div>
                <form onSubmit={handleSubmit}>
                    <h1>Pergunta {currentPosition + 1}/{questions.length}</h1>
                    <p>{currentQuestion.questionText}</p>

                    <label>
                        {currentQuestion.answerOptions.map((option, index) =>
                            <div className="radioContainer" key={index}>
                                {(currentQuestion.position !== 8) &&
                                    <input type="radio"
                                        name="option"
                                        value={option.answerText}
                                        onChange={handleSelected}
                                    />}
                                {(currentQuestion.position === 8) &&
                                    <input type="text"
                                        name="option"
                                        value={option.answerText}
                                        onChange={handleSelected} />}
                                <span>{option.answerText}</span>
                            </div>
                        )}
                    </label>
                    <button disabled={!selected}>Submeter</button>
                </form>
            </div>
        </div>
    )
}

export default QuestionComponent
