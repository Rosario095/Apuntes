import React from "react";
import { Accordion } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class Setting extends React.Component {
    render() {
        return (
            <div id="setting">
                <Accordion>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header><b>Setting Up a Laravel Web Service Projects</b></Accordion.Header>
                        <Accordion.Body>
                            <h2>Setting Up a Laravel Web Service Projects</h2>
                            <p>Sabiendo esto, podemos pasar a la instalación y preparación de nuestro proyecto</p>
                            <p>El primer paso, por supuesto, es instalar Laravel usando este comando
                                <br />+-------------------------------------------+
                                <br /><i>$ composer global requiere laravel/installer</i>
                                <br />+-------------------------------------------+</p>
                            <p>Después de la instalación, montamos nuestra aplicación:
                                <br />+--------------------+
                                <br /><i>$ laravel new myapp</i>
                                <br />+--------------------+</p>
                            <p>Para el comando anterior, se necesita tener <b><i>~/composer/vendor/bin</i></b> en nuestro <b>$PATCH</b>, sino,
                                para no preocuparnos, podemos crear nuestro proyecto usando este comando:
                                <br />+-------------------------------------------------------------+
                                <br /><i>$ composer create-project --prefer-dist laravel/laravel/myapp</i>
                                <br />+-------------------------------------------------------------+</p>
                            <p>Con Laravel instalado, probaríamos iniciarlo para comprobar que todo va bien:
                                <br />+-------------------+
                                <br /><i>$php artisan serve</i>
                                <br />+-------------------+</p>
                            <p>Si todo está correcto, con nuestro Laravel corriendo, solo debemos acceder
                                a <b><i>localhost:8000</i></b> o <b><i>127.0.0.1:8000</i></b> para comprobar que funciona.<br/>
                            Ahora que hemos visto que funciona, podemos parasar a configurarlo y toquetearlo.<br/>
                            Primero, puesto que trabajaremos con bases de datos, debemos configurarlo y conectarlo con la base que vayamos
                                a utilizar, modificando las líneas que se mostrarán a continuación, en el fichero <b><i>.env</i></b>. (los
                                marcados en rojo son los que se cambian)</p>
                            <Accordion>
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>.env</Accordion.Header>
                                    <Accordion.Body>
                                        +--------------------------------------------------------+
                                        <br /><b>DB_CONNECTION=mysql
                                            <br />DB_HOST=127.0.0.1
                                            <br />DB_PORT=3306
                                            <br />DB_DATABASE=<b className="rojo">homestead</b>
                                            <br />DB_USERNAME=<b className="rojo">homestead</b>
                                            <br />DB_PASSWORD=<b className="rojo">secrets</b>
                                        </b><br />+--------------------------------------------------------+
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                            <br />
                            <p>(Por supuesto, contamos con que es local y usamos mysql, si hace falta cambiar otro dato, se cambia).</p>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
        );
    }
}