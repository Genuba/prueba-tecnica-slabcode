import React,{useState} from 'react'
import CrudEvento from '../evento/CrudEvento'

const CalendarGridGap = (props) => {
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);
    return (
        <div>
            <div className="borderEvent" onClick={toggle}>
                <span className="dot" style={{ background: props.color.color_css }} ></span> {props.nombre}
            </div>
            <CrudEvento evento={props} modal={modal} toggle={toggle}/>
        </div>
    )
}

export default CalendarGridGap
