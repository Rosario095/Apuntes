import React from "react";
import { Accordion } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// Imagenes
import arrow from '../../../img/react_ap/fundamentos/javascript/arrow.jpg';
import string from '../../../img/react_ap/fundamentos/javascript/string.jpg';
import destruct from '../../../img/react_ap/fundamentos/javascript/destruct.jpg';
import class1 from '../../../img/react_ap/fundamentos/javascript/class1.jpg';
import class2 from '../../../img/react_ap/fundamentos/javascript/class2.jpg';

export default class Identifiers extends React.Component {
    render() {
        return (
            <div id="identifiers">
                <Accordion>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header><b>JavaScript: Identifiers</b></Accordion.Header>
                        <Accordion.Body>
                            <h2>JavaScript: Identifiers</h2>
                            <p><b className="verde">Let</b>: es similar a <b className="verde">var</b>.</p>
                            <ul>
                                <li>Cuando se declara dentro de un bloque, solo se puede usar dentro del bloque.</li>
                                <li>A diferencia de <b className="verde">var</b>, debe declararse antes de usarse
                                    (<b className="verde">var</b> todabía funciona si se declara después)</li>
                            </ul>
                            <p><b className="verde">Const</b>: variable no mutable, al intentar modificarla, mientrass "read-only". Es más
                                controlable.</p>

                            <h4>Arrow</h4>
                            <img src={arrow} alt="code" />

                            <h4>String</h4>
                            <img src={string} alt="code" />

                            <h4>Destructuración</h4>
                            <img src={destruct} alt="code" />

                            <h4>Clases y módulos</h4>
                            <Accordion>
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header><b>Clases y módulos</b></Accordion.Header>
                                    <Accordion.Body>
                                        <img src={class1} alt="code" /> <img src={class2} alt="code" />
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