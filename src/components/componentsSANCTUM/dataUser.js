import React from "react";
import { Accordion } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// Imagenes
import dataUser from '../../img/sanctum/dataUser.jpg';

export default class DataUser extends React.Component {
    render() {
        return (
            <div id="dataUser">
                <Accordion>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header><b>Crear método dataUser</b></Accordion.Header>
                        <Accordion.Body>
                            <h2>Crear método dataUser</h2>
                            <p>Volvemos a <b><i>app/Http/Controllers/AuthController.php</i></b> y creamos un nuevo método, que 
                            será <b><i>dataUser</i></b></p>
                            <img src={dataUser} alt="code" />
                            <br />
                            <p>Terminado esto, recordemos crear una ruta para el método <i>dataUser</i> en el archivo <b><i>routes/api.php</i></b><br />
                                +----------------------------------------------------------------------------------------+ <br />
                                <i>Route::post('/datauser', [AuthController::class, 'dataUser'])-^middleware('auth:sanctum');</i><br />
                                +----------------------------------------------------------------------------------------+ <br /></p>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
        );
    }
}