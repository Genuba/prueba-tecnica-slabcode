import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux'
import axios from 'axios'
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

const CrudEvento = ({ evento, modal, toggle }) => {
    const [minTime, setMinTime] = useState('00:00')
    const [actionPage, setActionPage] = useState('Crear')

    //input select states
    const [lugares, setLugares] = useState([])
    const [idLugar, setIdLugar] = useState('')
    const [colores, setColores] = useState([])
    const [idColor, setIdColor] = useState('')
    const [fecha, setFecha] = useState(evento.fecha)

    const dispatch = useDispatch()

    useEffect(() => {
        const urlLugares = 'http://localhost:3111/api/lugares'
        axios({ url: urlLugares, method: "GET" }).then(res => {
            setLugares(res.data)
        })
        const urlColores = 'http://localhost:3111/api/colores'
        axios({ url: urlColores, method: "GET" }).then(res => {
            setColores(res.data)
        })
        if (evento.id) {
            setActionPage('Actualizar')
        }
    }, [evento])

    const handleSubmit = (event) => {
        event.preventDefault()
        const data = {
            nombre: event.target.nombre.value,
            descripcion: event.target.descripcion.value,
            idLugar: parseInt(event.target.lugar.value),
            idColor: parseInt(event.target.color.value),
            color: colores.filter(data => data.id_colores === parseInt(event.target.color.value))[0],
            fecha: event.target.fecha.value,
            horaInicio: parseInt(event.target.horaInicio.value.split(":")[0]),
            horaFin: parseInt(event.target.horaFin.value.split(":")[0]),
        }
        console.log(data)

        if (evento.id) {
            // if is update
            const url = `http://localhost:3111/api/eventos/${evento.id}`
            axios({ url, method: "PUT", data }).then(res => {
                if (res.data.exitoso) {
                    data.id = evento.id
                    dispatch({ type: 'UPDATE_EVENT', payload: data })
                }
                alert(res.data.message)
                toggle()
            }).catch(error => {
                alert("Something wront: " + error.message)
            })
        } else {
            // if is add
            const url = `http://localhost:3111/api/eventos`
            axios({ url, method: "POST", data }).then(res => {
                if (res.data.exitoso) {
                    data.id = res.data.id
                    dispatch({ type: 'ADD_EVENT', payload: data })
                }
                alert(res.data.message)
                toggle()
            }).catch(error => {
                alert("Something wront: " + error.message)
            })
        }
    }

    const deleteEvent = () => {
        const url = `http://localhost:3111/api/eventos/${evento.id}`
        axios({ url, method: "DELETE" }).then(res => {
            var data = { id: evento.id,fecha:fecha }
            dispatch({ type: 'DELETE_EVENT', payload: data })
            alert(res.data.message)
            toggle()
        }).catch(error => {
            alert("Something wront: " + error.message)
        })
    }

    return (
        <div>
            <Modal isOpen={modal} toggle={toggle}>
                <Form onSubmit={handleSubmit}>
                    <ModalHeader toggle={toggle}>Evento</ModalHeader >
                    <ModalBody>
                        <FormGroup>
                            <Label>Nombre</Label>
                            <Input name="nombre" type="text" defaultValue={evento.nombre || ''} />
                        </FormGroup>
                        <FormGroup>
                            <Label>Descripción</Label>
                            <Input name="descripcion" type="textarea" defaultValue={evento.descripcion || ''} />
                        </FormGroup>
                        <Row>
                            <Col>
                                <FormGroup>
                                    <Label>Lugar</Label>
                                    <Input name="lugar" type="select" value={idLugar.value || evento.idLugar || ''} onChange={e => setIdLugar({ value: (e.target.value) })}>
                                        <option value="" disabled>-- Select --</option>
                                        {lugares.map(x => <option key={x.id_lugares} value={x.id_lugares}>{x.lugar}</option>)}
                                    </Input>
                                </FormGroup>
                            </Col>
                            <Col>
                                <FormGroup>
                                    <Label>Color</Label>
                                    <Input name="color" type="select" value={idColor.value || evento.idColor || ''} onChange={e => setIdColor({ value: (e.target.value) })} required>
                                        <option value="" disabled>-- Select --</option>
                                        {colores.map(x => <option key={x.id_colores} value={x.id_colores}>{x.color}</option>)}
                                    </Input>
                                </FormGroup>
                            </Col>
                        </Row>
                        <FormGroup>
                            <Label>Fecha</Label>
                            <Input name="fecha" type="date" min="2021-06-01" max="2021-06-30" defaultValue={evento.fecha || ''} onChange={e => setFecha({ value: (e.target.value)})} required />
                        </FormGroup>
                        <Row>
                            <Col>
                                <FormGroup>
                                    <Label>Hora Inicio</Label>
                                    <Input name="horaInicio" type="time" step="3600" onChange={e => setMinTime(e.target.value)} defaultValue={evento.horaInicio + ":00"  || ''} />
                                </FormGroup>
                            </Col>
                            <Col>
                                <FormGroup>
                                    <Label>Hora Fin</Label>
                                    <Input name="horaFin" type="time" step="3600" min={(parseInt(minTime.split(':')[0]) + 1) + ":00"} defaultValue={evento.horaFin + ":00" || ''} />
                                </FormGroup>
                            </Col>
                        </Row>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="secondary" onClick={toggle}>
                            Cerrar
                        </Button>
                        {actionPage === "Actualizar" && <Button color="danger" onClick={deleteEvent}>Eliminar</Button>}
                        <Button color="primary" type="submit">
                            {actionPage}
                        </Button>
                    </ModalFooter>
                </Form>
            </Modal>
        </div>
    )
}

export default CrudEvento
