import React from "react";
import { Accordion } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// Imagenes
import cvclass1 from '../../../img/react_ap/comunicacion/cvclass/cvclass1.jpg';
import cvclass2 from '../../../img/react_ap/comunicacion/cvclass/cvclass2.jpg';
import cvclass3 from '../../../img/react_ap/comunicacion/cvclass/cvclass3.jpg';
import cvclass4 from '../../../img/react_ap/comunicacion/cvclass/cvclass4.jpg';
import cvclass5 from '../../../img/react_ap/comunicacion/cvclass/cvclass5.jpg';
import cvclass6 from '../../../img/react_ap/comunicacion/cvclass/cvclass6.jpg';

export default class CVClass extends React.Component {
    render() {
        return (
            <div id="cvclass">
                <Accordion>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header><b>Ciclo de vida de los componentes de clase</b></Accordion.Header>
                        <Accordion.Body>
                            <h2>Ciclo de vida de los componentes de clase</h2>
                            <h4>Lifrecycle</h4>
                            <img src={cvclass1} alt="code" />

                            <h4>Component Lifecicle</h4>
                            <img src={cvclass2} alt="code" />

                            <h4>Stateless Component Lifecycle</h4>
                            <p>El ciclo de vida de un componente se compone desde el momento en que se monta hasta que se desmonta, pasando
                                por la recepción de nuevas propiedades.<br />
                                Este tipo de ciclo de vida se da en los componentes presentacionales.</p>

                            <h4>Stateful Component Lifecycle</h4>
                            <img src={cvclass3} alt="code" />
                            <p>En un componente de estado gestionado, no solo se ve afectado por lo anterior, sino también por un
                                cambio de estado.</p>

                            <h4>Class component Lifecycle Methods</h4>
                            <img src={cvclass4} alt="code" />
                            <ul>
                                <li><b className="verde">M</b>: Se utiliza para la inicialización en el momento de montado cuando ya se
                                    ha hecho el primer renderizado.</li>
                                <li><b className="import">R</b>: Cuando se lelva a cabo la renderización.</li>
                                <li><b className="rojo">W</b>: Se utiliza en el momento del desmontaje.</li>
                                <li><b className="func">U</b>: Se lleva a cabo después del renderizado motivado por un cambio de estado
                                    o las propiedades</li>
                                <li><b className="azul">S</b>: Está para decidir si vale la pena realizar un nuevo ciclo de renderizado
                                    después de cambiar el estado o las propiedades, con ello, nos ahorraría los repintados derivados de la
                                    renderización.</li>
                                <li><b className="url">D</b>: Es una actualización del estado interno relativa al valor de las propiedades
                                    recibidad. Se lleva a cabo antes del primer render y después de recibir nuevas propiedades.</li>
                            </ul>
                            <img src={cvclass5} alt="code" />

                            <h4>Classy VS Functional</h4>
                            <img src={cvclass4} alt="code" />
                            <img src={cvclass6} alt="code" />

                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
        );
    }
}