import React from "react";
import { Accordion } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// Imagenes
import register from '../../img/sanctum/register.jpg';

export default class Register extends React.Component {
    render() {
        return (
            <div id="register">
                <Accordion>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header><b>Crear el método register</b></Accordion.Header>
                        <Accordion.Body>
                            <h2>Crear el método register</h2>
                            <p>Antes de pasar a crear el método <b><i>register</i></b>, tendremos que crear su controlador, que será tan sencillo como usar el siguiente comando:
                                <br />+--------------------------------------------+
                                <br /><i>php artisan make:controller AuthController</i>
                                <br />+--------------------------------------------+</p>
                            <p>En el controlador que ya se creó, se le añadirá el método <i>register</i>, quien se encargará de registrar y validar usuarios, así como de regresar una
                                respuesta JSON con el token del usuario y tipo de token (hay que recordar importar el modelo User y el facades Hash)</p>
                                <img src={register} alt="code" />
                            <br />
                            <p>Terminado esto, recordemos crear una ruta para el método <i>register</i> en el archivo <b><i>routes/api.php</i></b><br />
                                +---------------------------------------------------------+ <br />
                                <i>Route::post('/register', [AuthController::class, 'register']);</i><br />
                                +---------------------------------------------------------+ <br /></p>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
        );
    }
}