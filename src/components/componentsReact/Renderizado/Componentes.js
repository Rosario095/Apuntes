import React from "react";
import { Accordion } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// Imagenes
import header from '../../../img/react_ap/renderizado/component/header.jpg';
import header2 from '../../../img/react_ap/renderizado/component/header2.jpg';
import header3 from '../../../img/react_ap/renderizado/component/header3.jpg';
import header4 from '../../../img/react_ap/renderizado/component/header4.jpg';
import header5 from '../../../img/react_ap/renderizado/component/header5.jpg';

export default class Componentes extends React.Component {
    render() {
        return (
            <div id="component">
                <Accordion>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header><b>Componentes de clase o funcionales</b></Accordion.Header>
                        <Accordion.Body>
                            <h2>Componentes de clase o funcionales</h2>
                            <p>Los componentes en React se pueden comparar conceptualmente a las funciones (function) de JavaScript
                                (en general)<br/>
                            Un componente de React se puede declarar como una función simple que devuelve JSX</p>
                                <img src={header} alt="code" />
                            <h4>Declaración</h4>
                            <img src={header2} alt="code" />

                            <h4>Uso</h4>
                            <img src={header3} alt="code" />

                            <h4>Functional component</h4>
                            <img src={header4} alt="code" />

                            <h4>Class component</h4>
                            <img src={header5} alt="code" />

                            <p>Aprovechando la funcionalidad del JavaScript moderno, React permite tembién declararlo como una clasa<br/>
                            Se ha orientado e intentado que funcione y se use los componentes funcionales</p>

                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
        );
    }
}