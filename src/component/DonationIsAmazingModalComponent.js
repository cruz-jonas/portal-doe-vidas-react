import { Modal, Button } from 'react-bootstrap';

const DonationIsAmazingModalComponent = (props) => {
    return (
        <Modal {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered>
            <Modal.Body>
                <p>
                Iniciado em maio de 2009, o projeto Doar É Legal destina-se a conscientizar a sociedade sobre a importância de doar órgãos. Consiste na emissão de certidão (sem validade jurídica) que atesta a vontade de voluntários em se tornarem doadores de órgãos, servindo sobretudo para que familiares fiquem cientes da intenção de ser doador.
                Saiba mais <a href="https://www.tjrs.jus.br/novo/noticia/conheca-o-projeto-doar-e-legal/">clicando aqui.</a>
                </p>
                <link></link>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Fechar</Button>
            </Modal.Footer>
        </Modal>
    )

}

export default DonationIsAmazingModalComponent
