import React from "react";
import { Accordion } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


export default class Requis extends React.Component {
    render() {
        return (
            <div id="requis">
                <Accordion>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header><b>Requisitos</b></Accordion.Header>
                        <Accordion.Body>
                            
                            <h2>Requisitos</h2>
                            <ul>
                                <li>Tener instalado <b>node.js</b> para poder usar <b>nvm</b> (puede usarse también <b>yarn</b>).</li>
                                <li>Un editor de código como <b>VSCode</b>.</li>
                                <li>Conocimiento básico de <b>React</b>.</li>
                            </ul>

                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
        );
    }
}