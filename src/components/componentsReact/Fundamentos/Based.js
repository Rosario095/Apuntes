import React from "react";
import { Accordion } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// Imagenes
import based1 from '../../../img/react_ap/fundamentos/based/based1.jpg';
import based2 from '../../../img/react_ap/fundamentos/based/based2.jpg';

export default class Based extends React.Component {
    render() {
        return (
            <div id="based">
                <Accordion>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header><b>Components-based architecture</b></Accordion.Header>
                        <Accordion.Body>
                            <h2>Components-based architecture</h2>
                            <img src={based1} alt="code" />
                            <br />
                            <ul>
                                <li><b className="verde">Component</b>: elemento básico.</li>
                                <li><b className="verde">Container</b>: con lógica de datos, conjunto de component.</li>
                                <li><b className="verde">PAge</b>: visualización completa de un conjunto de container.</li>
                            </ul>
                            <img src={based2} alt="code" />
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
        );
    }
}