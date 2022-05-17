import React from "react";
import { Accordion } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// Imagenes
import html from '../../../img/react_ap/creacion/empaquetado/html.jpg';
import jsx from '../../../img/react_ap/creacion/empaquetado/jsx.jpg';


export default class Empaquetado extends React.Component {
    render() {
        return (
            <div id="empaq">
                <Accordion>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header><b>Empaquetado con React</b></Accordion.Header>
                        <Accordion.Body>
                            <h2>Empaquetado con React</h2>
                            <p>1) Install React DOM ans start React
                                <br />+-----------------------------+
                                <br /><i>npm install --save react-dom</i>
                                <br />+-----------------------------+
                            </p>
                            <img src={html} alt="code" /> || <img src={jsx} alt="code" />
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
        );
    }
}