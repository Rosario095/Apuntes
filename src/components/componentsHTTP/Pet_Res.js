import React from "react";
import { Accordion } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// Imagenes
import peticion from '../../img/protocolo/peticion.jpg';

export default class Pet_Res extends React.Component {
    render() {
        return (
            <div id="p/r">
                <Accordion>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header><b>Petición/Respuesta</b></Accordion.Header>
                        <Accordion.Body>
                            <h2>Petición/Respuesta</h2>
                            <ul>
                                <li>El cliente (agente de usuario - user agent) realiza una petición enviando 
                                    un <b className="code">mensaje</b> al servidor.</li>
                                <li>El servidor recabe la petición, y envia un <b className="code">mensaje</b> de respuesta al cliente.</li>
                            </ul>
                            <img src={peticion} alt="image" />
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
        );
    }
}