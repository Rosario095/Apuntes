import React from "react";
import { Accordion } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// Imagenes
import encabezado from '../../img/protocolo/encabezado.jpg';

export default class Encabezado extends React.Component {
    render() {
        return (
            <div id="encab">
                <Accordion>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header><b>Encabezados o cabeceras</b></Accordion.Header>
                        <Accordion.Body>
                            <h2>Encabezados o cabeceras</h2>
                            <ul>
                                <li>Metadatos que contextualizan el mensaje</li>
                                <li>Estructura clave: valor <br /><b className="azul">content-Type: application/json</b></li>
                                <img src={encabezado} alt="image" />
                            </ul>

                            <h2>Caracteristicas</h2>
                            <ul>
                                <li>Dan gran <b className="code">flexibilidad.</b>
                                    <br />- El protocolo dice que puede haber encabezados.
                                    <br />- Con el tiempo se han añadido más y más.
                                    <br />- No ha cambiado el contenedor, por lo que el impato del cambio es muy pequeño</li>
                                <li>Deben ser interpretados por el cliente, o el servidor, o los intermediarios (proxy, gateways,...)</li>
                            </ul>

                            <h2>Tipos de encabezados</h2>
                            <ul>
                                <li><b className="php">De petición</b>: solo los encontraremos en peticiones.</li>
                                <li><b className="php">De respuesta</b>: solo los encontraremos en mensajes de respuesta.</li>
                                <li><b className="php">Petición y respuesta</b>: pueden aparecer en mensajes de ambos tipos.</li>
                            </ul>

                            <h2>Clasificación según función</h2>
                            <ul>
                                <li><b className="php">Capacidades</b> aceptadas por el agente que envía el mensaje:
                                    <br />- <b className="code">Accept</b> (tipo MIME).
                                    <br />- Accept-Charset (código de caracteres).
                                    <br />- Accept-Encoding.
                                    <br />- Accept-Languaje.
                                    <br />- <b className="code">User-Agent</b> (descripción del cliente).
                                    <br />- Allow (métodos permitidos).</li>
                                <li>Que <b className="php">describen el contenido</b>:
                                    <br />- <b className="code">Content-Type</b> (tipo MIME del contenido).
                                    <br />- <b className="code">Content-Length.</b>
                                    <br />- Content-Range.
                                    <br />- Content-Encoding.
                                    <br />- Content-Languaje.
                                    <br />- Content-Location.</li>
                                <li>Que hacen referencia a las <b className="php">URLs</b>:
                                    <br />- Location (indica donde está el contenido).
                                    <br />- Referer (indica el origen de la petición).</li>
                                <li>Para <b className="php">autenticación</b>:
                                    <br />- Authorization.
                                    <br />- WWW-Authenticate.</li>
                            </ul>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
        );
    }
}