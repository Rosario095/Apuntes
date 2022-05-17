import React from "react";
import { Accordion } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// Imagenes
import atomic1 from '../../../img/react_ap/fundamentos/atomic/atomic1.jpg';
import atomic2 from '../../../img/react_ap/fundamentos/atomic/atomic2.jpg';
import atomic3 from '../../../img/react_ap/fundamentos/atomic/atomic3.jpg';
import atomic4 from '../../../img/react_ap/fundamentos/atomic/atomic4.jpg';
import atomic5 from '../../../img/react_ap/fundamentos/atomic/atomic5.jpg';

export default class Atomic extends React.Component {
    render() {
        return (
            <div id="atomic">
                <Accordion>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header><b>Atomic Design</b></Accordion.Header>
                        <Accordion.Body>
                            <h2>Atomic Design</h2>
                            <img src={atomic1} alt="code" />

                            <h4>Atoms</h4>
                            <img src={atomic2} alt="code" />

                            <h4>Molecules</h4>
                            <img src={atomic3} alt="code" />

                            <h4>Organisms</h4>
                            <img src={atomic4} alt="code" />

                            <h4>Template</h4>
                            <img src={atomic5} alt="code" />

                            <h4>Page</h4>
                            <p>El <b>Template</b>, pero con datos.</p>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
        );
    }
}