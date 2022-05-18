import React from "react";
import { Accordion } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

export default class Instalacion extends React.Component {
    render() {
        return (
            <div id="componentes">
                <Accordion>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header><b>Instalación de los Componentes</b></Accordion.Header>
                        <Accordion.Body>
                            <h2>Instalación de los Componentes</h2>
                            <p>Los pasos seguidos por toda esta guía será para crear un API que permita registrar usuarios, mostrar como respuesta el token personal del usuario y el tipo de token, para ello
                                seguiremos todos los pasos desde este punto:</p>
                            <h4>Instalar laravel/ui</h4>
                            <p>Vamos a instalar un sistema de autenticación, en este caso, se trata de <b>laravel/ui</b></p>
                            +--------------------------------------------------------+
                            <br />composer require laravel/ui
                            <br />php artisan ui bootstrap
                            <br />php artisan ui bootstrap --auth
                            <br />npm i
                            <br />npm run watch-poll
                            <br />npm install && npm run dev
                            <br />+--------------------------------------------------------+
                            <br />
                            <h4>Instalar Laravel Sanctum</h4>
                            <p>Pasamos a instalar Laravel Sanctum, para ello, escribiremos el siguiente comando mientras nos encontremos en la carpeta raíz de nuestra aplicación:
                                <br />+----------------------------------+
                                <br /><i>composer require laravel/sanctum</i>
                                <br />+----------------------------------+</p>
                            <p>Para publicar los archivos de configuración de Sanctum y las migraciones desde la terminal:
                                <br />+-------------------------------------------------------------------------------------+
                                <br /><i>php artisan vendor:publish --provider="Laravel\Sanctum\SanctumServiceProvider"</i>
                                <br />+-------------------------------------------------------------------------------------+</p>
                            <p>Podemos revisar el archivo de configuración de Sanctum en la ruta <i>confing/sanctum.php</i></p>
                            <p>Y el archivo con la migración de Sanctum en <b><i>database/migrations</i></b></p>
                            <p>Hay que recordar modificar el archivo <b><i>.env</i></b> para que se pueda conectar a la base de datos</p>
                            +--------------------------------------------------------+
                            <br /><b>DB_CONNECTION=mysql
                                <br />DB_HOST=127.0.0.1
                                <br />DB_PORT=3306
                                <br />DB_DATABASE=(Nombre de la base de datos)
                                <br />DB_USERNAME=(Nombre user, por defecto es "root")
                                <br />DB_PASSWORD=(Contraseña, por defecto esta vacía)</b>
                            <br />+--------------------------------------------------------+
                            <br />
                            <p>Ahora pasamos a correr las migraciones con este comando:
                                <br />+-------------------+
                                <br /><i>php artisan migrate</i>
                                <br />+-------------------+</p>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
        );
    }
}