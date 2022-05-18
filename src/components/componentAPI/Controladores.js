import React from "react";
import { Accordion } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// Imagenes
import controller from '../../img/laravel/control/controller.jpg';

export default class Controladores extends React.Component {
    render() {
        return (
            <div id="controladores">
                <Accordion>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header><b>Creación de Controladores API RESTful en Laravel</b></Accordion.Header>
                        <Accordion.Body>
                            <h2>Creación de Controladores</h2>
                            <p>Lo que haremos será generar las plantillas de cada una de las tablas y de cualquier controlador relacionado
                                con la interconexión de las tablas. <br />
                                +----------------------------------------------------------------+ <br />
                                <i>php artisan make:controller NombretablaController --resource</i><br />
                                +----------------------------------------------------------------+ <br /></p>
                            <p>Con eso, tendríamos los ficheros necesarios en el direcctorio <b><i>app/Http/Controllers/</i></b></p>
                            <p>El fichero que se generarían seria algo como esto (en caso de ser de una simple tabla)</p>
                            <img src={controller} alt="code"/>
                            <p>* <b className="verde">nombre_tabla</b> habría que sustituirlo por la tabla correspondiente, usando 
                            nuestros ejemplos anteriores, quedaría algo así: <b className="verde">AvionController</b></p>

                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
        );
    }
}