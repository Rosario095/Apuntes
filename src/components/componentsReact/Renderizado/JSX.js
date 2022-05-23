import React from "react";
import { Accordion } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// Imagenes
import jsx1 from '../../../img/react_ap/renderizado/JSX/jsx1.jpg';
import jsx2 from '../../../img/react_ap/renderizado/JSX/jsx2.jpg';
import jsx3 from '../../../img/react_ap/renderizado/JSX/jsx3.jpg';
import jsx4 from '../../../img/react_ap/renderizado/JSX/jsx4.jpg';
import jsx5 from '../../../img/react_ap/renderizado/JSX/jsx5.jpg';
import jsx6 from '../../../img/react_ap/renderizado/JSX/jsx6.jpg';

export default class JSX extends React.Component {
    render() {
        return (
            <div id="jsx">
                <Accordion>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header><b>JSX</b></Accordion.Header>
                        <Accordion.Body>
                            <h2>JXS</h2>
                            <p>JSX es una extensión de JavaScript</p>
                            <h4>Pure JS</h4>
                            <img src={jsx1} alt="code" />

                            <h4>JSX</h4>
                            <img src={jsx2} alt="code" />

                            <h4>JSX vs HTML</h4>
                            <img src={jsx3} alt="code" /> <b>VS</b> <img src={jsx4} alt="code" />

                            <p>Class es una palabra reservada en JS, por eso se añade <b>"Name"</b><br />
                                Obligatorio cerrar los elementos<br />
                                En las acciones de interacción con el <b>DOM</b>, después de <b>"on"</b>, la primera va con mayúscula<br />
                                La manera de incluir expresiones externas (como funciones) es a través de corchetes</p>
                            <p><b className="verde">JSX</b> es la herrmaienta utilizada para relacionar componentes entre sí.</p>
                            <img src={jsx5} alt="code" />  <img src={jsx6} alt="code" />

                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
        );
    }
}