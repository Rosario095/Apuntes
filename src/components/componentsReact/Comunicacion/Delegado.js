import React from "react";
import { Accordion } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// Imagenes
import delg1 from '../../../img/react_ap/comunicacion/delegado/delg1.jpg';
import delg2 from '../../../img/react_ap/comunicacion/delegado/delg2.jpg';
import delg3 from '../../../img/react_ap/comunicacion/delegado/delg3.jpg';
import delg4 from '../../../img/react_ap/comunicacion/delegado/delg4.jpg';

export default class Delegado extends React.Component {
    render() {
        return (
            <div id="delegado">
                <Accordion>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header><b>Estado delegado</b></Accordion.Header>
                        <Accordion.Body>
                            <h2>Estado delegado</h2>
                            <img src={delg1} alt="code" />
                            <p>Procurar mantener el estado lo más arriba posible, es decir, si hay un complemento padre y dos hijos,
                                que se encuentre en el padre.</p>
                            <img src={delg2} alt="code" />
                            <p>Podemos legar el estado mediante los props, pasando a componentes presentacionales, que equivaldría a una
                                función pura, que solo depende del prop de entrada.</p>
                            <img src={delg3} alt="code" />
                            <p>Pueden llamar a funciones <b>callback</b> para realizar los cambios de estado.<br />
                                Puede llegarse a un estado global de la aplicación:</p>
                            <Accordion>
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header><b>Código</b></Accordion.Header>
                                    <Accordion.Body>
                                    <img src={delg4} alt="code" />
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