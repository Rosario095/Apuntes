import React from "react";
import { Accordion } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// Imagenes
import dest1 from '../../../img/react_ap/comunicacion/destrct/dest1.jpg';
import dest2 from '../../../img/react_ap/comunicacion/destrct/dest2.jpg';

export default class Destructuring extends React.Component {
    render() {
        return (
            <div id="destr">
                <Accordion>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header><b>Functional vs Classy (destructuring)</b></Accordion.Header>
                        <Accordion.Body>
                            <h2>Functional vs Classy (destructuring)</h2>
                            <h4>Funtional component</h4>
                            <img src={dest1} alt="code" />
                            <h4>Class component</h4>
                            <img src={dest2} alt="code" />

                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
        );
    }
}