import React from "react";
import { Accordion } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// Imagenes
import link from '../../../img/react_ap/route/link.jpg';
import impor from '../../../img/react_ap/route/import.jpg';


export default class Link extends React.Component {
    render() {
        return (
            <div id="link">
                <Accordion>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header><b>Link</b></Accordion.Header>
                        <Accordion.Body>

                            <h2>Link</h2>
                            <p>Con Link podremos navegar a través de la aplicación; ésste componente recibe lass siguiente propiedades.</p>
                            <ul>
                                <li><b>To:</b>le podemos pasar un string, object o una function para indicarle la ruta a la cual
                                    queremos navegar.</li>
                                <li><b>Replace:</b> cuando es <b>true</b>, y hacemos clic en el enlace reemplazará la entrada actual en
                                    la pila del historial en lugar de agregar una nueva.</li>
                            </ul>
                            <img src={link} alt="code" />
                            <p>Agregamos el código en nuestro componente <b>App.js</b> dentro del <b>div</b> con la clase App, haciendo que
                            podamos ver un menú de navegación en nuestra aplicación <br/> Hay que recordar importar el Link</p>
                            <img src={impor} alt="code" />



                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
        );
    }
}