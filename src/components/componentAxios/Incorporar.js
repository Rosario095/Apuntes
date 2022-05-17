import React from "react";
import { Accordion } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class Incorporar extends React.Component {
    render() {
        return (
            <div id="incorporar">
                <Accordion>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header><b>Incorporar Axios al proyecto</b></Accordion.Header>
                        <Accordion.Body>
                            <h2>Incorporar Axios al proyecto</h2>
                            <p>Primero, entramos en la carpeta del proyecto mediante el comando <b><i>cd</i></b>. Ejemplo:
                            <br />+----------------------+
                            <br /><i>cd Documents/ejemplo</i>
                            <br />+----------------------+</p>
                            <p>Luego ejecutamos el siguiente comando:
                            <br />+----------------+
                            <br /><i>npm install axios</i>
                            <br />+----------------+</p>
                            <p>Por último, tenemos que hacer <b><i>import</i></b> en el archivo que vayamos a utilizarlo:
                            <br />+------------------------+
                            <br /><i>import axios from 'axios';</i>
                            <br />+------------------------+</p>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
        );
    }
}