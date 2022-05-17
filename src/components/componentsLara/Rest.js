import React from "react";
import { Accordion } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class Rest extends React.Component {
    render() {
        return (
            <div id="rest">
                <Accordion>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header><b>RESTful APIs</b></Accordion.Header>
                        <Accordion.Body>
                            <h2>Laravel API</h2>
                            <p>Antes de nada, hay que saber qué es Laravel: Laravel es un Framework PHP MVC (modelo/vista/controlador) diseñado
                                para agilizar el desarrollo de aplicaciones web.</p>
                            <h2>RESTful APIs</h2>
                            <p>REST es transferencia de estado representacional.<br/>
                            Es un estilo de arquetectura para la comunicación red entre aplicacioness para la comunicación red entre
                                aplicaciones, que se basa en un protocolo sin estado por interacción.</p>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
        );
    }
}