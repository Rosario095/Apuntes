import React from "react";
import { Accordion } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// Imagenes
import encap1 from '../../../img/react_ap/fundamentos/encapsulado/encap1.jpg';
import encap2 from '../../../img/react_ap/fundamentos/encapsulado/encap2.jpg';
import encap3 from '../../../img/react_ap/fundamentos/encapsulado/encap3.jpg';

export default class Encapsulacion extends React.Component {
    render() {
        return (
            <div id="encapsu">
                <Accordion>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header><b>Encapsulación</b></Accordion.Header>
                        <Accordion.Body>
                            <h2>Encapsulación</h2>
                            <h4>Componentes</h4>
                            <img src={encap1} alt="code" />
                            <img src={encap2} alt="code" />
                            <br />
                            <p>No tanto estructura vertical sino horizontal</p>
                            <h4>Estructura en árbol</h4>
                            <img src={encap3} alt="code" />
                            <br />
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
        );
    }
}