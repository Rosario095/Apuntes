import React from "react";
import { Accordion } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// Imagenes
import cache from '../../img/laravel/cache/cache.jpg';

export default class Cache extends React.Component {
    render() {
        return (
            <div id="cache">
                <Accordion>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header><b>Caché de consultas con Laravel para reducir carga en bases de datos</b></Accordion.Header>
                        <Accordion.Body>
                            <h2>Caché de consultas con Laravel para reducir carga en bases de datos</h2>
                            <p>Es una forma para acelerar el rendimiento de la base de datos, basicamente lo que hace es que, si hacemos una
                                pregunta, la respuesta a dicha pregunta esté en caché X tiempo.<br />
                                Depende del tipo de aplicación, este sistema es válido o no.<br />
                                Se puede realizar en el método <b><i>index()</i></b> o método <b><i>show()</i></b>.<br />
                                Un ejemplo de esto podemos verlo en este extracto del controlador de Fabricante</p>
                            <Accordion>
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>Ejemplo: FabricanteController</Accordion.Header>
                                    <Accordion.Body>
                                        <img src={cache} alt="code" />
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