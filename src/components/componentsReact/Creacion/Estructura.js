import React from "react";
import { Accordion } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// Imagenes
import estrc1 from '../../../img/react_ap/creacion/estructura/estrc1.jpg';
import estrc2 from '../../../img/react_ap/creacion/estructura/estrc2.jpg';
import estrc3 from '../../../img/react_ap/creacion/estructura/estrc3.jpg';


export default class Estructura extends React.Component {
    render() {
        return (
            <div id="estruc">
                <Accordion>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header><b>Estructura de Carpetas</b></Accordion.Header>
                        <Accordion.Body>
                            <h2>Estructura de Carpetas</h2>
                            <img src={estrc1} alt="code" />
                            <img src={estrc2} alt="code" />
                            <Accordion>
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>Ejemplo de estructura</Accordion.Header>
                                    <Accordion.Body>
                                    <img src={estrc3} alt="image" />
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