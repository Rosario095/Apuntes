import React from "react";
import { Accordion } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// Imagenes
import verb from '../../img/api_img/verbs/verb.jpg';

export default class Verbs extends React.Component {
    render() {
        return (
            <div id="verbs">
                <Accordion>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header><b>HTTP Verbs Represent Actions and Resources</b></Accordion.Header>
                        <Accordion.Body>
                            <h2>HTTP Verbs Represent Actions</h2>
                            <p>En RESTful APIs, usamos los verbos de HTTP como acciones y los endpoints son sobre los que actua. Existen varios,
                                pero nos centraremos en cuatro en concreto:</p>
                            <ul>
                                <li><b className="code">GET</b>: recupera datos.</li>
                                <li><b className="code">POST</b>: crea datos.</li>
                                <li><b className="code">PUT</b>: actualiza datos.</li>
                                <li><b className="code">DELETE</b>: elimina datos.</li>
                                <img src={verb} alt="image" />
                            </ul>
                            <h2>Resources</h2>
                            <p>Los recursos son los objetivos de las acciones, y tienen sus propios endpoints.
                            <br/>La representación de los recursos se puede representar en más de un modelo de datos, o no ser representados en
                                ninguna parte de la base de datos y los modelos completamente fuera del límite del usuario.</p>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
        );
    }
}