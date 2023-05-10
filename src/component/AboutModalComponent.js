import { Modal, Button } from 'react-bootstrap';

const AboutModalComponent = (props) => {

    return (
        <Modal {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered>
    
            <Modal.Body>
                <h4>Sobre este questionário</h4>
                <p>
                Este questionário foi pensado, planejado e desenvolvido, do início ao fim, 
                para contemplar o trabalho de conclusão de curso de Sistemas de Informação. 
                Em seu desenvolvimento foram utilizadas variadas tecnologia e ferramentas, 
                tais como: React.js, Bootstrap, Node.js, Express e MongoDB. 
                Baseado no modelo TAM(Technology Acceptance Model) e utilizando a escala 
                Likert de 5 pontos, sua finalidade é coletar informações e definir métricas 
                acerca do que a população em geral e profissionais da saúde sabem e concordam 
                com alguns processos que envolvem a doação de órgãos.
                </p>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    )

}

export default AboutModalComponent
