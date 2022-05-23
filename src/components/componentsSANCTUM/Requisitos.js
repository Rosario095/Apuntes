import React from "react";
import { Accordion } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

export default class Requisitos extends React.Component {
    render() {
        return (
            <div id="requisitos">
                <Accordion>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header><b>Requisitos Previos</b></Accordion.Header>
                        <Accordion.Body>
                            <h2>Requisitos Previos</h2>
                            <p>Contar con un entorno de desarrollo como <b>Laragon</b> o <b>Xampp</b>.<br/>
                            Tener instalado de manera global Composer.<br/>
                            Contar con un proyecto nuevo en <b>Laravel</b> vinculado a una base de datos.<br/>
                            Tener la herramienta <b>Postman</b> instalada en tu equipo.</p>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
        );
    }
}