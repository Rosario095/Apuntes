import React from "react";
import { Accordion } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// Imagenes
import user from '../../img/sanctum/user.jpg';

export default class ModeloUser extends React.Component {
    render() {
        return (
            <div id="trait">
                <Accordion>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header><b>Agregar trait a modelo User</b></Accordion.Header>
                        <Accordion.Body>
                            <h2>Agregar trait a modelo User</h2>
                            <p>Con el editor de textos abrimos el archivo <b><i>app/Models/User.php</i></b> para verificar que el trait ‘HasApiTokens’ este definido, sino, hay que
                                definirlo de la siguiente manera:</p>
                                <img src={user} alt="code" />

                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
        );
    }
}