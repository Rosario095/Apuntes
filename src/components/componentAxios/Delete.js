import React from "react";
import { Accordion } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import delet from '../../img/axios/delete.jpg';

export default class Delete extends React.Component {
    render() {
        return (
            <div id="delete">
                <Accordion>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header><b>Realizar una solicitud DELETE</b></Accordion.Header>
                        <Accordion.Body>
                            <h2>Realizar una solicitud POST</h2>
                            <p>Para explicarlo mejor, primero desarrollaremos el componente:</p>
                            <img src={delet} alt="code"/>
                            <br />
                            <p>Funciona de una forma similar a <b>POST</b>, solo que, en este caso, elimina en función de la <b><i>id</i></b> suministrada.</p>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
        );
    }
}