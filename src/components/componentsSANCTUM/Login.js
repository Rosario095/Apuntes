import React from "react";
import { Accordion } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// Imagenes
import login from '../../img/sanctum/login.jpg';

export default class Login extends React.Component {
    render() {
        return (
            <div id="login">
                <Accordion>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header><b>Crear método login</b></Accordion.Header>
                        <Accordion.Body>
                            <h2>Crear método login</h2>
                            <p>Volvemos a <b><i>app/Http/Controllers/AuthController.php</i></b> y creamos un nuevo método, que será <b><i>login</i></b></p>
                            <Accordion>
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>Función login</Accordion.Header>
                                    <Accordion.Body>
                                    <img src={login} alt="code" />
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                            <br />
                            <p>Terminado esto, recordemos crear una ruta para el método <i>login</i> en el archivo <b><i>routes/api.php</i></b><br />
                                +--------------------------------------------------------+ <br />
                                <i>Route::post('/login', [AuthController::class, 'login']);</i><br />
                                +--------------------------------------------------------+ <br /></p>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
        );
    }
}