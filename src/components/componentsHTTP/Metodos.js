import React from "react";
import { Accordion } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class Metodos extends React.Component {
    render() {
        return (
            <div id="metodos">
                <Accordion>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header><b>Métodos</b></Accordion.Header>
                        <Accordion.Body>
                            <h2>Métodos</h2>
                            <ul>
                                <li>Tipos de peticiones diferentes</li>
                                <li>Indica el tipo de acción a realizar</li>
                            </ul>
                            <h4>Métodos más usados</h4>
                            <Accordion>
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>Métodos más usados</Accordion.Header>
                                    <Accordion.Body>
                                        +--------------------------------------------------------+
                                        <b><ul>
                                            <b className="php">GET</b>
                                            <li>Solicita un recurso al servidor.</li>
                                            <li>Solo deben recucperar datos, y no deben tener otro efecto.</li>
                                        </ul>
                                            +--------------------------------------------------------+
                                            <ul>
                                                <b className="php">POST</b>
                                                <li>Envia datos para que sean procesados.</li>
                                                <li>Los datos se incluyen en el cuerpo.</li>
                                                <li>Creación / <b className="tachado">Edición</b></li>
                                            </ul>
                                            +--------------------------------------------------------+
                                            <ul>
                                                <b className="php">DELETE</b>
                                                <li>Borra el recurso especificado.</li>
                                            </ul>
                                        </b>+--------------------------------------------------------+
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                            <br />
                            <h4>Otros métodos</h4>
                            <Accordion>
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>Otros métodos</Accordion.Header>
                                    <Accordion.Body>
                                        +--------------------------------------------------------+
                                        <b><ul>
                                            <b className="php">HEAD</b>
                                            <li>Idéntico a GET, pero la respuesta no devuelve el cuerpo.</li>
                                            <li>Útil para obtener metadatos.</li>
                                        </ul>
                                            +--------------------------------------------------------+
                                            <ul>
                                                <b className="php">OPTIONS</b>
                                                <li>Devuelve la lista de métodos HTTP que soporta un recurso.</li>
                                            </ul>
                                            +--------------------------------------------------------+
                                            <ul>
                                                <b className="php">PATCH</b>
                                                <li>Actualización parcial de los recursos.</li>
                                            </ul>
                                        </b>+--------------------------------------------------------+
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>

                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
        );
    }
}