import React,{useState} from 'react';
import {
  Button
} from 'reactstrap';
import CrudEvento from '../evento/CrudEvento'

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
      <CrudEvento evento={{}} modal={modal} toggle={toggle}/>
    </div>
  )
}

export default MonthlyCalendarHeader;
