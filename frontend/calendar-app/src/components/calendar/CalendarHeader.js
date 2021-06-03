import React, { useState } from 'react';
import { 
  Button,
  Row,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Modal,
  ModalHeader,
   ModalBody, 
   ModalFooter 
 } from 'reactstrap';
import '../../assets/index.css';

const MonthlyCalendarHeader = () => {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);
  return (
    <div>
      <div id='wrapper-header'>
        <div id="one">
          <Button color="primary" onClick={toggle}>Crear Evento</Button>
        </div>
        <div id="two"><h1>Junio 2021</h1></div>
        <div><h3>Domingo</h3></div>
        <div><h3>Lunes</h3></div>
        <div><h3>Martes</h3></div>
        <div><h3>Miercoles</h3></div>
        <div><h3>Jueves</h3></div>
        <div><h3>Viernes</h3></div>
        <div><h3>Sabado</h3></div>
      </div>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader  closeButton>Evento</ModalHeader >
        <ModalBody>
          <Form>
            <FormGroup controlId="formGridAddress1">
              <Label>Nombre</Label>
              <Input type="text" />
            </FormGroup>
            <FormGroup controlId="exampleInputTextarea1">
              <Label>Descripción</Label>
              <Input type="textarea" />
            </FormGroup>
            <Row>
              <Col>
                <FormGroup controlId="formBasicEmail">
                  <Label>Ciudad</Label>
                  <Input type="select">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </Input>
                </FormGroup>
              </Col>
              <Col>
                <FormGroup controlId="formBasicPassword">
                <Label>Color</Label>
                  <Input type="select">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </Input>
                </FormGroup>
              </Col>
            </Row>
            <FormGroup controlId="exampleInputTextarea1">
              <Label>Fecha</Label>
              <Input type="date" min="2021-06-01" max="2021-06-30"/>
            </FormGroup>
          </Form>
          <Row>
              <Col>
                <FormGroup controlId="formBasicEmail">
                  <Label>Hora Inicio</Label>
                  <Input type="time"/>
                </FormGroup>
              </Col>
              <Col>
                <FormGroup controlId="formBasicEmail">
                  <Label>Hora Fin</Label>
                  <Input type="time"/>
                </FormGroup>
              </Col>
            </Row>
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={toggle}>
            Close
          </Button>
          <Button color="primary" onClick={toggle}>
            Save Changes
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  )
}

export default MonthlyCalendarHeader;
