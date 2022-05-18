import React from "react";
import { Accordion } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import post from '../../img/axios/post.jpg';

export default class Post extends React.Component {
    render() {
        return (
            <div id="post">
                <Accordion>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header><b>Realizar una solicitud POST</b></Accordion.Header>
                        <Accordion.Body>
                            <h2>Realizar una solicitud POST</h2>
                            <p>Para explicarlo mejor, primero desarrollaremos el componente:</p>
                            <img src={post} alt="code"/>
                            <br />
                            <p>Dentro de la función <b><i>handleSubmit</i></b>, evitar la acción predeterminada del formulario.<br/>
                            Actualizar el <b>estado</b> para la entrada <b><i>user</i></b>.<br/>
                            Usar <b>POST</b> proporciona el mismo objeto de respuesta con información que puede usarse dentro de una 
                            invocación <b><i>then</i></b><br/>
                            Para completar la solicitud <b>POST</b>, primero se debe capturar la entrada <b><i>user</i></b>. Luego, añadirla 
                            junto a la solicitud <b>POST</b>, lo que proporciona una respuesta<br/>
                            Posteriormente, se puede hacer <b><i>console.log</i></b> a la respuesta, que debería mostrar la 
                            entrada <b><i>user</i></b> en el formulario.</p>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
        );
    }
}