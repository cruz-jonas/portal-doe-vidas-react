import { useState, useEffect } from 'react'
import { questions } from '../data/questions'
import './QuestionComponent.css'
import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap';

const QuestionComponent = ({ addChoice }) => {

    const url = "https://portaldoevidas-api.onrender.com/api/user-answers/register"

    const [currentPosition, setCurrentPosition] = useState(0);
    const [selected, setSelected] = useState("")
    const [currentQuestion, setCurrentQuestion] = useState(questions[currentPosition]);
    const [selectedOption, setSelectedOption] = useState(null);

    const handleSubmit = (e) => {

        e.preventDefault();

        const userAnswer = {
            position: currentQuestion.position,
            name: currentQuestion.name,
            text: selected
        }

        addChoice(selected)
        setCurrentPosition((prevCurrentPosition) => prevCurrentPosition + 1)
        setSelectedOption(null)
        setSelected("")

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

    const handleSelected = (option) => {
        setSelected(option)
        setSelectedOption(option)
    }

    return (
        <Container>
            <Row className="justify-content-center align-items-center">
                <Col>
                    <Card>
                        <Card.Body>
                            <Form className="cardStyles" onSubmit={handleSubmit}>
                                <div className="cardTextDiv">
                                    <Card.Text className="carTextSize">{currentQuestion.questionText}</Card.Text>
                                </div>
                                {currentQuestion.answerOptions.map((option, index) =>
                                    <div className="radioContainer" key={index}>
                                        {currentQuestion.position !== 8 &&
                                            <Col xs={11} className="mx-auto">
                                                <Form.Check
                                                    className="customRadio"
                                                    type="radio"
                                                    name="option"
                                                    label={option.answerText}
                                                    value={option.answerText}
                                                    checked={selectedOption === option.answerText}
                                                    onChange={() => handleSelected(option.answerText)}
                                                />
                                            </Col>
                                        }
                                    </div>
                                )}
                                {currentQuestion.position === 8 &&
                                    <Col xs={10} className="mx-auto">
                                        <Form.Control
                                            className="inputTextStyles"
                                            as="textarea"
                                            name="option"
                                            onChange={handleSelected}
                                        />
                                    </Col>
                                }
                                <Button type="submit" className="sendAnswerButton" disabled={!selected}>Próxima</Button>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container >
    )
}

export default QuestionComponent
