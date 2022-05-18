import React from "react";
import { Accordion } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// Imagenes
import api from '../../img/api_img/route/api.jpg';
import ArticleController from '../../img/api_img/route/ArticleController.jpg';
import routes from '../../img/api_img/route/routes.jpg';
import routes2 from '../../img/api_img/route/routes2.jpg';
import ArticleC from '../../img/api_img/route/ArticleC.jpg';

export default class Route extends React.Component {
    render() {
        return (
            <div id="routes">
                <Accordion>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header><b>Routes and Controllers</b></Accordion.Header>
                        <Accordion.Body>
                            <h2>Routes and Controllers</h2>
                            <p>Vamos a crear unos básicos endpoints, estos serán: crear, recuperar la lista, recuperar uno solo, actualizar y
                                eliminar. Para ello accederemos al archivo <b><i>routes/api.php</i></b></p>
                            <img src={api} alt="code" />
                            <br />
                            <p>Ahora vamos a crearle un controlador propio:
                                <br />+-----------------------------------------------+
                                <br /><i>$ php artisan make:controller ArticleController</i>
                                <br />+-----------------------------------------------+</p>
                            <img src={ArticleController} alt="code" />
                            <br />
                            <p>En el archivo <b><i>route/api.php</i></b></p>
                            <img src={routes} alt="code" />
                            <br />
                            <p>Automáticamente, si existe algún tipo de error, si no lo encuentra, nos mandará el <b>404</b>, y nosotros podemos
                                configurarlo para que, con cada función, nos mande un aviso para saber que todo se ha realizado correctamente. Se
                                modificará el <b>return</b> quedando de la siguiente manera:</p>
                            <img src={routes2} alt="code" />
                            <br />+-----------------------------------------------------------------------------------------------+
                            <br /><img src={ArticleC} alt="code" />
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
        );
    }
}