import React from "react";
import { Accordion } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// Imagenes
import anatomia1 from '../../../img/react_ap/fundamentos/anatomia/anatomia1.jpg';
import anatomia2 from '../../../img/react_ap/fundamentos/anatomia/anatomia2.jpg';
import anatomia3 from '../../../img/react_ap/fundamentos/anatomia/anatomia3.jpg';
import anatomia4 from '../../../img/react_ap/fundamentos/anatomia/anatomia4.jpg';
import anatomia5 from '../../../img/react_ap/fundamentos/anatomia/anatomia5.jpg';
import anatomia6 from '../../../img/react_ap/fundamentos/anatomia/anatomia6.jpg';

export default class Anatomia extends React.Component {
    render() {
        return (
            <div id="anatomia">
                <Accordion>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header><b>Anatomía de React</b></Accordion.Header>
                        <Accordion.Body>
                            <h2>Anatomía de React</h2>
                            <h4>Reconciliación</h4>
                            <img src={anatomia1} alt="code" />
                            <p>Si se elimina un elemento, recorrería nuevamente el árbol para repintarlo</p>
                            <img src={anatomia2} alt="code" />
                            <p>Sirve para una actualización más rápida y limpia que si trabajaramos directamente con DOM</p>
                            <img src={anatomia3} alt="code" />

                            <h4>Renderización</h4>
                            <img src={anatomia4} alt="code" />

                            <h4>Ecosistema React</h4>
                            <img src={anatomia5} alt="code" />

                            <h4>Dependencias</h4>
                            <img src={anatomia6} alt="code" />
                            <p>Se ha unificado toda la gestión de dependencias, tanto de cliente como de servidor dejando "bower" y
                                pasando a "npm".
                            </p>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
        );
    }
}