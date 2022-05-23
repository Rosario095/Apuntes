import React from "react";
import { Accordion } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// Imagenes
import useSt1 from '../../../img/react_ap/comunicacion/usestate/useSt1.jpg';
import useSt2 from '../../../img/react_ap/comunicacion/usestate/useSt2.jpg';
import useSt3 from '../../../img/react_ap/comunicacion/usestate/useSt3.jpg';
import useSt4 from '../../../img/react_ap/comunicacion/usestate/useSt4.jpg';

export default class UseState extends React.Component {
    render() {
        return (
            <div id="useSt">
                <Accordion>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header><b>useState</b></Accordion.Header>
                        <Accordion.Body>
                            <h2>useState</h2>
                            <h4>useState Hook</h4>
                            <p><b>[value, setValue] = useState(defaultValue)</b></p>
                            <p>Esto apareció para que exitiera la posibilidad de que un componente funcional pudiese gestionar su estado, 
                                el cual, hasta ahora solo podia ser gestionado por un componente de clase. <br/>
                                Para cada variable de estado se utilizará un <b>Hook</b> diferente. </p>
                            <img src={useSt1} alt="code" /> || <img src={useSt2} alt="code" />
                            <p>En el primer ejemplo no habria una modificación del estado, mostrando el valor por defecto; en el segundo,
                                al hacer click en el párrafo, iria modificando su estado</p>
                            <h4>Functional component</h4>
                            <img src={useSt3} alt="code" />
                            <h4>Class component</h4>
                            <img src={useSt4} alt="code" />

                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
        );
    }
}