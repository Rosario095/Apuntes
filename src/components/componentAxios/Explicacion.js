import React from "react";
import { Accordion } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class Explicacion extends React.Component {
    render() {
        return (
            <div id="explicacion">
                <Accordion>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header><b>Qué es Axios</b></Accordion.Header>
                        <Accordion.Body>
                            <h2>Qué es Axios</h2>
                            <p>Axios es un cliente HTTP ligero basado en promesas<br/>
                            Puede interceptar y cancelar solicitudes, y hay una protección integrada del lado del cliente contra la 
                            falsificación de solicitudes entre sitios.<br/>
                            Antes de pasar a explicar cómo instalarlo y cómo hacer consultas, debemos tener en cuenta unos 
                            requisitos previos:</p>
                            <ul>
                                <li>Node.js</li>
                                <li>Un proyecto de React (que implica toda su instalación)</li>
                                <li>Es útil tener conocimientos básicos de JavaScript</li>
                            </ul>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
        );
    }
}