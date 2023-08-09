import {Modal,Form,Button} from 'react-bootstrap';
import Select from 'react-select';
import close from '../assets/images/close.svg';
import skill_close from '../assets/images/skill_close.svg';
import styled from 'styled-components'


const AssessmentForm = ({showModal,setShowModal}) =>{

const handleClick =()=>{
    setShowModal(false);
}

    return(
        <Modal
        size="lg"
        show={showModal}
        onHide={handleClick}
        centered
      >
        <Modal.Header>
        <ModalHeader >
        Create new assessment
        </ModalHeader>
        <img src={close} onClick={handleClick} alt="close-icon"/>

        </Modal.Header>
        <ModalBody>
        <Form>
      <Form.Group className="mb-3">
        <Form.Label>Name of assessment</Form.Label>
        <Form.Control type='input' placeholder="Type Here" />
        
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Purpose of the test is</Form.Label>
      <Select placeholder="Select" />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Description</Form.Label>
      <Select placeholder= "Select"/>
      </Form.Group>
      <Form.Group>
      <Form.Label>Skills</Form.Label>
<SkillBox>

  <SkillBtn>
  UI/UX and Design
  <img src={skill_close} alt="skill"/>
  </SkillBtn>
  <SkillBtn>
  UI/UX and Design
  <img src={skill_close} alt="skill"/>
  </SkillBtn>
  <SkillBtn>
  UI/UX and Design
  <img src={skill_close} alt="skill"/>
  </SkillBtn>
</SkillBox>
      <Form.Control type='input' placeholder="Type Here" />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Duration of assessment</Form.Label>
        <Form.Control type='input' placeholder="HH:MM:SS" />
        
      </Form.Group>

   
      
      <Button variant="primary" type="submit">
 
 Save
      </Button>
    </Form>
        </ModalBody>
        
      </Modal>
    );
}

export default AssessmentForm;

const ModalHeader = styled(Modal.Title)`
color: var(--text-100, #1C4980);
text-align: center;
font-family: Inter;
font-size: 20px;
font-style: normal;
font-weight: 600;
`

const ModalBody = styled(Modal.Body)`

`

const SkillBox= styled.div`
border-radius: 8px 8px 0px 0px;
border: 1px solid var(--system-divider, #DDE5EA);
display: flex;
padding: 16px;
flex-direction: row;
align-items: flex-start;

align-self: stretch;

`

const SkillBtn = styled.div`
display: flex;
padding: 6px 8px 6px 10px;
justify-content:center;
align-items: center;
gap: 2px;
margin-right:10px;
border-radius: 22px;
background: var(--accent-blue-light, #DDEDFF);

`
