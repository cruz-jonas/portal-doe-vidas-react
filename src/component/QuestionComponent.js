import { useState, useEffect } from 'react'
import { questions } from '../data/questions'
import './QuestionComponent.css'
import doacaoIcone from '../assets/doacao-de-orgaos.png'
import { Container, Row, Col, Card, Button, Form, Navbar, Image } from 'react-bootstrap';

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
        <Container>
            <Navbar className="navbarStyles">
                <Row>
                    <Col>
                        <Image
                            className="navbar-brand iconStyles"
                            src={doacaoIcone} />
                    </Col>
                    <Col className="aboutSite">
                        <Navbar.Brand className="navbar-brand" href="#">Sobre este site</Navbar.Brand>
                    </Col>
                </Row>
            </Navbar>

            <Row className="justify-content-center align-items-center">
                <Col>
                    <Card>
                        <Card.Body>
                            <Form className="cardStyles" onSubmit={handleSubmit}>
                                <Card.Title style={{ fontSize: 'inherit' }}>{currentQuestion.name}</Card.Title>
                                <Card.Text style={{ fontSize: 'small' }}>{currentQuestion.questionText}</Card.Text>
                                {currentQuestion.answerOptions.map((option, index) =>
                                    <div className="radioContainer" key={index}>
                                        {currentQuestion.position !== 8 &&
                                            <Col xs={11} className="mx-auto">
                                                <Form.Check
                                                    type="radio"
                                                    name="option"
                                                    label={option.answerText}
                                                    value={option.answerText}
                                                    onChange={handleSelected}
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
