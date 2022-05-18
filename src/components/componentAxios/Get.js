import React from "react";
import { Accordion } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import get from '../../img/axios/get.jpg';

export default class Get extends React.Component {
    render() {
        return (
            <div id="get">
                <Accordion>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header><b>Realizar una solicitud GET</b></Accordion.Header>
                        <Accordion.Body>
                            <h2>Realizar una solicitud GET</h2>
                            <p>Lo primero que haremos será crear un componente, usaremos para todos nuestros ejemplo una lista de personas (<b><i>PersonList.js</i></b>)</p>
                            <p>Para explicarlo mejor, primero desarrollaremos el componente:</p>
                            <img src={get} alt="code" />
                            <br />
                            <p>Primero importamos <b>react</b> y <b>Axios</b>.<br />
                                Enlazaremos la <b>API</b> que queramos consultar en <b><i>componentDidMount</i></b> y realizaremos la
                                solicitud <b>GET</b>.<br />
                                Utilizaremos <b><i>axios.get()</i></b>con nuestro <b><i>endpoint</i></b> para obtener una promesa, que devuelve
                                un objeto de respuesta del cual, dentro, hay datos que se asignan al valo de <b><i>person</i></b>.</p>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
        );
    }
}