import React from "react";
import { Accordion } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


export default class Estad extends React.Component {
    render() {
        return (
            <div id="est">
                <Accordion>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header><b>Estado</b></Accordion.Header>
                        <Accordion.Body>
                            <h2>Estado</h2>
                            <p>Un resultado JSX iba dado por unas propiedades que se pasaban de fuera al componente, ahora, también
                                incluimos el estado concreto al que esta el componente como condicionamiento de JSX. <br />
                                Habrá un renderizado de JSX por la modificación de las propiedades y/o del estado. Cuando hay una
                                variación en una variable o un componente externo que no dependa o modificque estado o propiedades, no
                                necesitará hacer un renderizado. <br />
                                El estado puede hacer variaciones mediante interacciones con el JSX, o lógicas propias, haciendo una 
                                renderización más dinámica.
                            </p>

                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
        );
    }
}