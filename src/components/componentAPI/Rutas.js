import React from "react";
import { Accordion } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// Imagenes
import ruta from '../../img/laravel/rutas/ruta.jpg';
import api from '../../img/laravel/rutas/api.jpg';
import api2 from '../../img/laravel/rutas/api2.jpg';
import ruta1 from '../../img/laravel/rutas/ruta1.jpg';
import ruta2 from '../../img/laravel/rutas/ruta2.jpg';
import ruta3 from '../../img/laravel/rutas/ruta3.jpg';

export default class Rutas extends React.Component {
    render() {
        return (
            <div id="rutas">
                <Accordion>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header><b>Creación de las Rutas de la API RESTful</b></Accordion.Header>
                        <Accordion.Body>
                            <h2>Creación de las Rutas de la API RESTful</h2>
                            <h4>Rutas por defecto de la Aplicación</h4>
                            <p>La mayor parte de las rutas de nuestro proyecto se definen en app/Http/routes.php o /routes (nuevas versiones de
                                Laravel).</p>
                            <img src={ruta} alt="code" />
                            <br />
                            <p>La mayor parte de las rutas de nuestro proyecto se definen en app/Http/routes.php o /routes (nuevas versiones de
                                Laravel).</p>
                            <p><b>Verificar las rutas</b></p>
                            +--------------------------------------------------------+
                            <p>//Ayuda sobre php artisan
                                <br /><b>php artisan list</b>
                                <br />//Listado de las rutas actuales del proyecto
                                <br /><b>php artisan route:list </b></p>
                            +--------------------------------------------------------+
                            <br />
                            <p>Con el listado de rutas, nos tendría que mostrar a continuación algo como esto:</p>
                            +--------------------------------------------------------+
                            <div className="table-responsive-sm">
                                <table>
                                    <thead>
                                        <tr>
                                            <th>Domain</th>
                                            <th>Method</th>
                                            <th>URI</th>
                                            <th>Name</th>
                                            <th>Action</th>
                                            <th>Middleware</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th></th>
                                            <th>GET|HEAD</th>
                                            <th>/</th>
                                            <th></th>
                                            <th>Closure</th>
                                            <th>web</th>
                                        </tr>
                                        <tr>
                                            <th></th>
                                            <th>GET|HEAD</th>
                                            <th>api/user</th>
                                            <th></th>
                                            <th>Closure</th>
                                            <th>api,auth:api</th>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            +--------------------------------------------------------+
                            <br />
                            <h4>Rutas por defecto de la Aplicación</h4>
                            <p>Antes de empezar a explicar, vamos a tener en cuenta de que las explicaciones se harán
                                partiendo del ejemplo que se ha ido partiendo todo el rato..</p>
                            <p>Editaremos el fichero <b><i>routes/api.php</i></b> añadiendo las rutas a los recursos de controladores RESTful creados
                                anteriormente (en nuestro caso, Fabricante y Avion)</p>
                            <img src={api} alt="code" />
                            <br />
                            <Accordion>
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>Rutas</Accordion.Header>
                                    <Accordion.Body>
                                        <img src={ruta1} alt="code" />
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                            <br />
                            <p>Partiendo de esto, podemos ver que podremos crear un avión, pero no podemos pasarle la id de un fabricante,
                                por lo que habría que añadir esto:</p>
                            +-------------------------------------------------------------------+
                            <br /><b>Route::<b className="code">resource</b>(<b className="rojo">'fabricantes.aviones','FabricanteAvionController'</b>);</b>
                            <br />+-------------------------------------------------------------------+
                            <Accordion>
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>Rutas</Accordion.Header>
                                    <Accordion.Body>

                                        <br />
                                        <img src={ruta2} alt="code" />
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                            <br />
                            <p>Viendo esto, nos damos cuenta que hay duplicados y otros innecesarios, por ejemplo, no vamos a crear más fabricantes, por lo que habría que indicar que no se pueden crear ni editar.
                                Teniendo en cuenta lo que podemos o no necesitar en nuestro ejemplo, nos quedaría algo así:</p>
                            <Accordion>
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>Rutas</Accordion.Header>
                                    <Accordion.Body>
                                        <img src={api2} alt="code" />
                                        <br />+----------------------------------------------------------------------------------------------+
                                        <img src={ruta3} alt="code" />
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