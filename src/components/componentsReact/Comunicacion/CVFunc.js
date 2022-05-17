import React from "react";
import { Accordion } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// Imagenes
import cvfunc1 from '../../../img/react_ap/comunicacion/cvfunc/cvfunc1.jpg';
import cvfunc2 from '../../../img/react_ap/comunicacion/cvfunc/cvfunc2.jpg';

export default class CVFunc extends React.Component {
    render() {
        return (
            <div id="cvfunc">
                <Accordion>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header><b>Ciclo de vida de los componentes funcionales</b></Accordion.Header>
                        <Accordion.Body>
                            <img src={cvfunc1} alt="code" />
                            <Accordion>
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header><b>Function</b></Accordion.Header>
                                    <Accordion.Body>
                                        <img src={cvfunc2} alt="code" />

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