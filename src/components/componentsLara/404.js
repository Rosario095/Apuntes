import React from "react";
import { Accordion } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// Imagenes
import render from '../../img/api_img/404/render.jpg';
import data from '../../img/api_img/404/data.jpg';
import AController from '../../img/api_img/404/AController.jpg';

export default class Error extends React.Component {
    render() {
        return (
            <div id="404">
                <Accordion>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header><b>Sending a Correct 404 Response</b></Accordion.Header>
                        <Accordion.Body>
                            <h2>Sending a Correct 404 Response</h2>
                            <p>Cuando la petición que realizamos no puede ser respondida por falta de recurso, nos muestra una ventana con los
                                fallos, pues bien, podemos editarlo para que lo que nos mande sea un <b>json</b>. Para ello, realizamos un cambio,
                                una edición en nuestra clase de excepciones (<b><i>app/Exceptions/Handler.php</i></b>) poniendolo de la
                                siguiente manera:</p>
                            <Accordion>
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>Handler.php</Accordion.Header>
                                    <Accordion.Body>
                                        <img src={render} alt="code" />
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                            <br />
                            <p>Eso devolvería algo así:</p>
                            <img src={data} alt="image" /><br />
                            <p>Si se utiliza Laravel para servir a otras páginas, hay que modificar el código de la siguiente manera:</p>
                            <Accordion>
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>Handler.php</Accordion.Header>
                                    <Accordion.Body>
                                        <img src={AController} alt="code" />
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                            <br/>
                            <p>En este caso, las solicitudes de la API necesitan el encabezado <b><i>Accept: application/json</i></b></p>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
        );
    }
}