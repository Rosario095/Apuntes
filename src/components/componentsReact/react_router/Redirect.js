import React from "react";
import { Accordion } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// Imagenes
import redi from '../../../img/react_ap/route/redi.jpg';


export default class Redirect extends React.Component {
    render() {
        return (
            <div id="redirect">
                <Accordion>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header><b>Redirect</b></Accordion.Header>
                        <Accordion.Body>

                            <h2>Redirect</h2>
                            <p>Con este componente podemos causar un redireccionamiento a una ruta diferente a la ruta actual, remplazando
                                el <b>location</b> actual y el historial de navegación. Tiene las siguientes propiedades:</p>
                            <ul>
                                <li><b>From:</b>le pasamos un string u object para indicarle desde donde se va hacer el redireccionamiento.</li>
                                <li><b>To:</b>le pasamos un string u object hacia dónde vamos a realizar el redireccionamiento.</li>
                                <li><b>Push:</b> si es verdadero no modifica el location del historial por el contrario agrega esta nueva
                                    locación al historial.</li>
                            </ul>
                            <img src={redi} alt="code" />
                            <p>Agregamos ese componente dentro de <b>Switch</b>, si entraramos a la
                                dirección <b><i>http://localhost:3000/redirect</i></b>, veremos que nos hace redirección a <b>/about</b>. <br />
                                No hay que olvidar importar el <b>Redirect</b>.</p>

                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
        );
    }
}