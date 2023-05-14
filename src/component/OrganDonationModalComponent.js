import { Modal, Button } from 'react-bootstrap';

const OrganDonationModalComponent = (props) => {
    return (
        <Modal {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered>
            <Modal.Body>
                <p>
                A doação de órgãos é um ato por meio do qual podem ser retirados órgãos ou tecidos de uma pessoa viva ou falecida (doadores) para serem utilizados no tratamento de outras pessoas (receptores), com a finalidade de reestabelecer as funções de um órgão ou tecido doente. A doação é um ato muito importante, pois pode salvar vidas.
                Saiba mais <a href="https://www.gov.br/saude/pt-br/composicao/saes/snt">clicando aqui.</a>
                </p>
                <link></link>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Fechar</Button>
            </Modal.Footer>
        </Modal>
    )

}

export default OrganDonationModalComponent
