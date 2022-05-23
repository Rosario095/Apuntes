import React from "react";
import { Accordion } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// Imagenes
import index from '../../img/laravel/operaciones/index.jpg';
import store from '../../img/laravel/operaciones/store.jpg';
import update from '../../img/laravel/operaciones/update.jpg';
import destroy from '../../img/laravel/operaciones/destroy.jpg';

export default class Preparacion extends React.Component {
    render() {
        return (
            <div id="operaciones">
                <Accordion>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header><b>Implementación de las operaciones de la API RESTful con Laravel</b></Accordion.Header>
                        <Accordion.Body>
                            <h2>Implementación de las operaciones de la API RESTful con Laravel</h2>
                            <h4>Mostrar los valores de un recurso y de un recurso anidado de la API RESTful</h4>
                            <p>Utilizaremos el formato <b className="code">json</b> para devolver los datos solicitados a una URI de un recurso.</p>
                            <p>Para ello, vamos a llevar a cabo la implementación de los métodos <b><i>index() y show()</i></b>. Utilizaremos el ejemplo de Fabricante para llevarlo a cabo (en los casos siguientes, Utilizaremos
                                solo la parte del código que estamos configurando, la vista de la estructura entera esta en el apartado de Controladores).</p>
                            <Accordion>
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>Ejemplo: index() y show()</Accordion.Header>
                                    <Accordion.Body>
                                    <img src={index} alt="code"/>
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                            <br />
                            <h4>Creación de recursos en la API RESTful</h4>
                            <p>Ahora, programaremos en los controladores los métodos para insertar datos en las tablas a través de la API RESTful,
                                utilizando la petición <b>HTTP POST</b> a la API RESTful.</p>
                            <Accordion>
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>Ejemplo: store()</Accordion.Header>
                                    <Accordion.Body>
                                    <img src={store} alt="code"/>
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                            <br />
                            <h4>Actualización de recursos en la API RESTful</h4>
                            <p>Programaremos los métodos necesarios para poder realizar actualizaciones de nuestros datos a través de la API RESTful,
                                utilizando las peticiones <b>PUT</b> (actualización total) o <b>PARCH</b> (solo algunos datos)</p>
                            <Accordion>
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>Ejemplo: update()</Accordion.Header>
                                    <Accordion.Body>
                                    <img src={update} alt="code"/>
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                            <br />
                            <h4>Borrado de recursos en la API RESTful</h4>
                            <p>Solo nos queda implementar para eliminar registros, para ello usaremos la petición <b>DELETE</b>.</p>
                            <Accordion>
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>Ejemplo: destroy()</Accordion.Header>
                                    <Accordion.Body>
                                    <img src={destroy} alt="code"/>
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