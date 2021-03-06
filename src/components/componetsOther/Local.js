import React from "react";
import { Accordion } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class Local extends React.Component {
    render() {
        return (
            <div id="local">
                <Accordion>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header><b>Windows LocalStorage</b></Accordion.Header>
                        <Accordion.Body>
                            <h2>Windows LocalStorage</h2>
                            <p>localStorage.setItem("lastname", "Smith");<br />localStorage.getItem("lastname");</p>
                            <h4>Save Data to Local Storage</h4>
                            +--------------------------------------------------------+
                            <b><br /><p>localStorage.setItem(key, value);</p>
                                <ul>
                                    <li><b className="php">key</b> es la palabra clave, con ejemplo sería: "nombre", "curso",...</li>
                                    <li><b className="php">value</b> es el valor que proporcionamos, con ejemplo sería "Rosario",
                                        "react",...</li>
                                </ul>
                            </b>+--------------------------------------------------------+

                            <h4>Read Data to Local Storage</h4>
                            +--------------------------------------------------------+
                            <b><br /><p>localStorage.getItem(key);</p>
                                <ul>
                                    <li><b className="php">key</b> es la palabra clave que sse le ha suministrado con anterioridad.</li>
                                </ul>
                            </b>+--------------------------------------------------------+

                            <h4>Remove Data to Local Storage</h4>
                            +--------------------------------------------------------+
                            <b><br /><p>localStorage.removeItem(key);</p>
                                <ul>
                                    <li><b className="php">key</b> es la palabra clave que sse le ha suministrado con anterioridad.</li>
                                </ul>
                            </b>+--------------------------------------------------------+

                            <h4>Remove All (Clear Local Storage)</h4>
                            +--------------------------------------------------------+
                            <b><br /><p>localStorage.clear());</p>
                                <ul>
                                    <li>Elimina todos los registros del <i>Local Storage</i></li>
                                </ul>
                            </b>+--------------------------------------------------------+

                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
        );
    }
}