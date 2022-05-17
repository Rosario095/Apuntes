import React from "react";
import { Accordion } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// Imagenes
import expr1 from '../../../img/react_ap/renderizado/expresiones/expr1.jpg';
import expr2 from '../../../img/react_ap/renderizado/expresiones/expr2.jpg';
import expr3 from '../../../img/react_ap/renderizado/expresiones/expr3.jpg';
import expr4 from '../../../img/react_ap/renderizado/expresiones/expr4.jpg';
import expr5 from '../../../img/react_ap/renderizado/expresiones/expr5.jpg';
import expr6 from '../../../img/react_ap/renderizado/expresiones/expr6.jpg';
import expr7 from '../../../img/react_ap/renderizado/expresiones/expr7.jpg';
import expr8 from '../../../img/react_ap/renderizado/expresiones/expr8.jpg';

export default class Expresiones extends React.Component {
    render() {
        return (
            <div id="expresiones">
                <Accordion>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header><b>Expresiones y fragmentos en JSX</b></Accordion.Header>
                        <Accordion.Body>
                            <h2>Expresiones y fragmentos en JSX</h2>
                            <h4>Variables</h4>
                            <img src={expr1} alt="code" />

                            <h4>Operaciones</h4>
                            <img src={expr2} alt="code" />

                            <h4>Funciones</h4>
                            <img src={expr3} alt="code" />
                            <p>Se ejecuta en cada ciclo de pintado</p>

                            <h4>Atributos</h4>
                            <img src={expr4} alt="code" />

                            <h4>Spread Objeto</h4>
                            <img src={expr5} alt="code" />

                            <p>Si se hace de un objeto con varios elementos, se pondran cada uno a continuación del otro, sabiendo el
                                elemento al que pertenecen</p>
                            <p><b className="verde">Fragmento</b>: Elemento JSX que nunca se va a traducir en un elemento HTML.</p>
                            <Accordion>
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>Comp</Accordion.Header>
                                    <Accordion.Body>
                                        <img src={expr6} alt="code" /><br /><img src={expr7} alt="code" /><br /><img src={expr8} alt="code" />
                                        <p>No opera sabiendo que ambos elementos son elementos hermano.</p>
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