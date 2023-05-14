import { Modal, Button } from 'react-bootstrap';

const BrainDeathModalComponent = (props) => {
    return (
        <Modal {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered>
            <Modal.Body>
                <p>
                O diagnóstico de morte encefálica é definido como “morte baseada na ausência de todas as funções neurológicas”.
                Morte encefálica é a definição legal de morte. É a completa e irreversível parada de todas as funções do cérebro. Isto significa que, como resultado de severa agressão ou ferimento grave no cérebro, o sangue que vem do corpo e supre o cérebro é bloqueado e o cérebro morre.
                Saiba mais <a href="https://bvsms.saude.gov.br/morte-encefalica/#:~:text=O%20que%20significa%20%E2%80%9Cmorte%20encef%C3%A1lica,bloqueado%20e%20o%20c%C3%A9rebro%20morre.">clicando aqui.</a>
                </p>
                <link></link>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Fechar</Button>
            </Modal.Footer>
        </Modal>
    )

}

export default BrainDeathModalComponent
