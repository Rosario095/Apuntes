import React from "react";
import { Accordion } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


export default class Dependencias extends React.Component {
    render() {
        return (
            <div id="depend">
                <Accordion>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header><b>Depedendencias</b></Accordion.Header>
                        <Accordion.Body>
                            <h2>Depedendencias</h2>
                            <p>1) Instalar <b>nodejs</b>
                                <br />+--------------------------+
                                <br /><i>https://nodejs.org // nvm</i>
                                <br />+--------------------------+
                            </p>
                            <p>2) Check <b>NPM</b> version
                                <br />+-------+
                                <br /><i>npm -v</i>
                                <br />+-------+
                            </p>
                            <p>3) Create and go to a new folder
                                <br />+-----------------------------------------------+
                                <br /><i>mkdir nombre_carpeta && cd nombre_carpeta</i>
                                <br />+-----------------------------------------------+
                            </p>
                            <p>4) Start a project in the folder
                                <br />+-----------+
                                <br /><i>npm init</i>
                                <br />+-----------+
                            </p>
                            +-------------------------+
                            <br /><i>npm install --save react</i>
                            <br />+-------------------------+

                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
        );
    }
}