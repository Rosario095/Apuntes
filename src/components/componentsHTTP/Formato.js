import React from "react";
import { Accordion } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// Imagenes
import formato from '../../img/protocolo/formato.jpg';

export default class Formato extends React.Component {
    render() {
        return (
            <div id="format">
                <Accordion>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header><b>Formato del mensaje</b></Accordion.Header>
                        <Accordion.Body>
                            <h2>Formato del mensaje</h2>
                            <ul>
                                <li>Válido tanto para request como response</li>
                                <li>Solo cambia la línea inicial</li>
                                <li>Estructura:</li>
                            <img src={formato} alt="image" />
                            </ul>
                            <ul>
                                Request:
                                <li className="azul">Tipo de petición</li>
                                <li className="azul">URL donde se hace la petición</li>
                                <li className="azul">La ver. de HTTP soportada por el cliente</li>
                                <li className="other">El cuerpo de las peticiones es opcional</li>
                            </ul>
                            <ul>
                                Response:
                                <li className="azul">La ver. de HTTP usada</li>
                                <li className="azul">Codigo de respuesta</li>
                                <li className="azul">Algunos metadatos</li>
                                <li className="other">En el cuerpo obtendremos un recurso determinado</li>
                            </ul>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
        );
    }
}