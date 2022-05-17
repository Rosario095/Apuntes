import React from "react";
import { Accordion } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class Http extends React.Component {
    render() {
        return (
            <div id="http">
                <Accordion>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header><b>HTTP y Características</b></Accordion.Header>
                        <Accordion.Body>
                            <h2>HTTP</h2>
                            <ul>
                                <li>Protoclo de transferencia de hipertexto</li>
                                <li>Permite transferencias de información en la <b className="php">WWW</b> (World Wide Web)</li>
                                <li><b className="rojo">WWW</b>: sistema que funciona a través de Internet, por el cual se pueden transmitir
                                    diversos tipos de datos</li>
                                <li>Desarrollado por el <b className="php">WWW Consortium</b> y la <b className="php">IETF</b> (Internet
                                    Engineering Task Force)</li>
                            </ul>
                            
                            <h2>Caracteristicas de HTTP</h2>
                            <ul>
                                <li>Esquema de petición-respuesta (request/response)</li>
                                <li>Sin estados</li>
                                <li>HTTP/1.x orientado a carácteres, HTTP/2 binario</li>
                                <li>Conjuntp de verbos u operaciones</li>
                            </ul>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
        );
    }
}