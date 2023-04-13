import { useState } from 'react'
import { questions } from '../data/questions'

const QuestionComponent = ({ addChoice }) => {

    const [currentQuestion, setCurrentQuestion] = useState(questions[0]);
    const [currentPosition, setCurreentPosition] = useState(0);
    const [selected, setSelected] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        addChoice(selected)
        setCurreentPosition(currentPosition + 1)
        setCurrentQuestion(questions[currentPosition])
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
                                    <input type="radio"
                                        name="option"
                                        value={option.answerText}
                                        onChange={handleSelected} />
                                    <span>{option.answerText}</span>
                                </div>
                            )}
                        </label>
                    

                    {/* <input type="radio"
                                name="option"
                                value="CF"
                                onChange={handleSelected} />
                            <span>{currentQuestion.answerOptions[0].answerText}</span>
                        </label>
                        <label>
                            <input type="radio"
                                name="option"
                                value="CO"
                                onChange={handleSelected} />
                            <span>{currentQuestion.answerOptions[1].answerText}</span>
                        </label>
                        <label>
                            <input type="radio"
                                name="option"
                                value="NE"
                                onChange={handleSelected} />
                            <span>{currentQuestion.answerOptions[2].answerText}</span>
                        </label>
                        <label>
                            <input type="radio"
                                name="option"
                                value="DI"
                                onChange={handleSelected} />
                            <span>{currentQuestion.answerOptions[3].answerText}</span>
                        </label>
                        <label>
                            <input type="radio"
                                name="option"
                                value="DF"
                                onChange={handleSelected} />
                            <span>{currentQuestion.answerOptions[4].answerText}</span> */}
                    <button>Submeter</button>
                </form>
            </div>
        </div>
    )
}

export default QuestionComponent
