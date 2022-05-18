import React from "react";
import { Accordion } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// Imagenes
import dinam1 from '../../../img/react_ap/renderizado/dinamico/dinam1.jpg';
import dinam2 from '../../../img/react_ap/renderizado/dinamico/dinam2.jpg';
import dinam3 from '../../../img/react_ap/renderizado/dinamico/dinam3.jpg';
import dinam4 from '../../../img/react_ap/renderizado/dinamico/dinam4.jpg';

export default class Dinamico extends React.Component {
    render() {
        return (
            <div id="dinamico">
                <Accordion>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header><b>Renderizado dinámico</b></Accordion.Header>
                        <Accordion.Body>
                            <h2>Renderizado dinámico</h2>
                            <h4>Condicional</h4>
                            <img src={dinam1} alt="code" />

                            <h4>Operador lógico</h4>
                            <img src={dinam2} alt="code" />
                            <p>Si no se cumple la condición, dejaría de realizar la renderización</p>

                            <h4>Termary operator</h4>
                            <img src={dinam3} alt="code" />
                            <p>Escrito de esta amnera, nos haría indicar una cosa: en caso de ser <b className="code">true</b>, nos mostraría
                            la primera definición (<b className="code">'Kind regards'</b>), en caso de ser <b className="code">false</b>, nos
                            mostraría la otra (<b className="code">'Cheers'</b>). Esto es lo que nos indica los dos puntos.</p>

                            <h4>Switch</h4>
                            <img src={dinam4} alt="code" />
                                    <p>Va haciendo comprobaciones y para cuando se encuentra en la que corresponda.</p>

                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
        );
    }
}