import React from "react";
import { Accordion } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// Imagenes
import model_base from '../../img/laravel/model/model_base.jpg';
import model_avion from '../../img/laravel/model/model_avion.jpg';
import model_avion_ej from '../../img/laravel/model/model_avion_ej.jpg';

export default class Modelos extends React.Component {
    render() {
        return (
            <div id="modelos">
                <Accordion>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header><b>Creación de Modelos</b></Accordion.Header>
                        <Accordion.Body>
                            <h2>Creación de modelos</h2>
                            <p>Crear un modelo:<br />
                                +-----------------------------------------+ <br />
                                <i>php artisan make:model nombre_model</i><br />
                                +-----------------------------------------+ <br /></p>
                            <p>Plantilla base:</p>
                            <img src={model_base} alt="code"/>
                            <br />
                            <p>Ejemplo:</p>
                            <img src={model_avion} alt="code" />
                            <br />
                            <p>Con eso, podemos configurar todos los datos de nuestra futura tabla; siguiendo el ejemplo anterior, quedaría de la siguiente forma:</p>
                            <Accordion>
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>Avion.php</Accordion.Header>
                                    <Accordion.Body>
                                    <img src={model_avion_ej} alt="code"/>
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
        );
    }
}