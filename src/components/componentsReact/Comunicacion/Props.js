import React from "react";
import { Accordion } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// Imagenes
import props0 from '../../../img/react_ap/comunicacion/props/props0.jpg';
import props1 from '../../../img/react_ap/comunicacion/props/props1.jpg';
import props2 from '../../../img/react_ap/comunicacion/props/props2.jpg';
import props3 from '../../../img/react_ap/comunicacion/props/props3.jpg';

export default class Props extends React.Component {
    render() {
        return (
            <div id="props">
                <Accordion>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header><b>Props</b></Accordion.Header>
                        <Accordion.Body>
                            <h2>Props</h2>
                            <h4>Pure functions</h4>
                            <p>Es aquella cuyo valor de respuesta depende únicamente de los parámetros de entrada, no tiene valores
                                adicionales que puedan condicionar esta respuesta.</p>
                            <img src={props0} alt="code" />
                            <h4>Declaración</h4>
                            <img src={props1} alt="code" />
                            <h4>Usage</h4>
                            <img src={props2} alt="code" />
                            <h4>Functional component</h4>
                            <img src={props1} alt="code" />
                            <h4>Class component</h4>
                            <img src={props3} alt="code" />


                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
        );
    }
}