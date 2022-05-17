import React from "react";
import { Accordion } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// Imagenes
import estrc1 from '../../../img/react_ap/fundamentos/estructura/estrc1.jpg';
import estrc2 from '../../../img/react_ap/fundamentos/estructura/estrc2.jpg';
import estrc3 from '../../../img/react_ap/fundamentos/estructura/estrc3.jpg';

export default class EstrcClasica extends React.Component {
    render() {
        return (
            <div id="estrc">
                <Accordion>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header><b>Estructura clásica</b></Accordion.Header>
                        <Accordion.Body>
                            <h2>Estructura clásica</h2>
                            <ul>
                                <li><b className="verde">Strcture</b>: Layout: Disposición de elementos</li>
                                <li><b className="verde">Behaviour</b>: Login:. Apariencia Código</li>
                                <li><b className="verde">Appearance</b>: Style</li>
                            </ul>
                            <img src={estrc1} alt="code" /><br />
                            <p>Cada <b className="url">Layout</b> respondía a una cosa diferente.</p>
                            <img src={estrc2} alt="code" /><br />
                            <p>Tanto el <b className="azul">Logic</b> y el <b className="other">Style</b> están cargado desde el inicio.</p>
                            <img src={estrc3} alt="code" /><br />
                            <p>Debido a las necesidades, se ha dividido el fichero de comportamiento para cada <b className="url">Layout</b>,
                                habiendo uno común.</p>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
        );
    }
}