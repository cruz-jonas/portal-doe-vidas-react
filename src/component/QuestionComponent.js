import { useState, useEffect } from 'react'
import { questions } from '../data/questions'
import './QuestionComponent.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const QuestionComponent = ({ addChoice }) => {

    const url = "https://portaldoevidas-api.onrender.com/api/user-answers/register"

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
                "Content-Type": "application/json",
            },
            body: JSON.stringify(userAnswer)
        })

    }

    const handleSelected = (e) => {
        setSelected(e.target.value)
    }

    return (
        <div>
            {/* <nav className="navbar navbar-expand-lg bg-body-tertiary nav"> */}
            {/* <div className="div-nav"> */}
                <div className="row">
                    <div className="col-sm-6">
                        <a className="navbar-brand" href="#">Portal Doe Vidas</a>
                    </div>
                    <div className="col-sm-3 div-sobre-portal">
                        <a className="navbar-brand" href="#">Sobre o portal</a>
                    </div>
                    <div className="col-sm">
                        <a className="navbar-brand" href="#">Quero me registrar como doador</a>
                    </div>
                </div>
            {/* </div> */}

            {/* </nav> */}
            <div className="formContainer">
                <form className="cardStyles" onSubmit={handleSubmit}>
                    <div>
                        <h2>{currentQuestion.name}</h2>
                    </div>
                    <div>
                        <p>{currentQuestion.questionText}</p>
                    </div>
                    <div>
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
                                    <label>{option.answerText}</label>
                                </div>
                            )}
                        </label>
                    </div>
                    <button className="sendAnswerButton" disabled={!selected}>Próxima</button>
                </form>
            </div>
        </div>
    )
}

export default QuestionComponent
