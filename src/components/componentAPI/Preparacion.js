import React from "react";
import { Accordion } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class Preparacion extends React.Component {
    render() {
        return (
            <div id="preparacion">
                <Accordion>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header><b>Preparación de un Proyecto</b></Accordion.Header>
                        <Accordion.Body>
                            <h2>Preparación de un Proyecto</h2>
                            <p>Crear nuestra aplicación Laravel:
                                <br />+------------------+
                                <br /><i>laravel new myapp</i>
                                <br />+------------------+</p>
                            <p>Existe otro comando para instalarlo (no nos preocupariamos de si nos falta algo):
                                <br />+--------------------------------------------------------------+
                                <br /><i>composer create_project --prefer-dist laravel/laravel my app</i>
                                <br />+--------------------------------------------------------------+</p>
                            <p>Asegurarse de tener los datos en el archivo ".env" correctos para conectarnos a nuestra base de datos
                                (es recomendable arreglarlo ahora aunque no se vaya a utilizar ahora conexiones con la base de datos de nuestro proyecto)</p>
                            <Accordion>
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>.env</Accordion.Header>
                                    <Accordion.Body>
                                        +--------------------------------------------------------+
                                        <br /><b>DB_CONNECTION=mysql
                                            <br />DB_HOST=127.0.0.1
                                            <br />DB_PORT=3306
                                            <br />DB_DATABASE=(Nombre de la base de datos)
                                            <br />DB_USERNAME=(Nombre user, por defecto es "root")
                                            <br />DB_PASSWORD=(Contraseña, por defecto esta vacía)</b>
                                        <br />+--------------------------------------------------------+
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                            <br />
                            <p>Ayuda sobre los comandos de PHP Artisan:<br />
                                +-------------+ <br />
                                <i>php artisan list</i><br />
                                +-------------+ <br /></p>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
        );
    }
}