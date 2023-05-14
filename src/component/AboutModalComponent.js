import { Modal, Button } from 'react-bootstrap';

const AboutModalComponent = (props) => {

    return (
        <Modal {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered>
            <Modal.Body>
                <p>
                Este portal foi pensado, planejado e desenvolvido, do início ao fim, 
                para contemplar o trabalho de conclusão de curso de Sistemas de Informação. 
                Em seu desenvolvimento foram utilizadas algumas tecnologias e ferramentas, 
                tais como: React.js, Bootstrap, Node.js, Express e MongoDB. 
                Baseado nos modelos TAM(Technology Acceptance Model) e SUS(System Usability Scale)
                utiliza a escala Likert de 5 pontos. Sua finalidade é coletar informações e definir métricas 
                acerca do que a população em geral e profissionais da saúde sabem e/ou concordam 
                com alguns processos que envolvem a doação de órgãos.
                </p>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Fechar</Button>
            </Modal.Footer>
        </Modal>
    )

}

export default AboutModalComponent
