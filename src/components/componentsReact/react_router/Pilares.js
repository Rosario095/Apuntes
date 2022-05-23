import React from "react";
import { Accordion } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


export default class Pilares extends React.Component {
    render() {
        return (
            <div id="pilares">
                <Accordion>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header><b>Componentes pilares de React Router</b></Accordion.Header>
                        <Accordion.Body>
                            <h2>Componentes pilares de React Router</h2>
                            <h4>BrowserRouter</h4>
                            <p>Es el encargado de envolver nuestra aplicación, dándonos acceso al API historial de HTML5</p>

                            <h4>Switch</h4>
                            <p>Es el encargado de quesolo se renderice el primer hijo <b>Route</b> o <b>Redirect</b> que coincide con
                                la ubicación.</p>

                            <h4>Route</h4>
                            <p>Con ésto podemos definir las rutas de nuestra aplicación. Cuando definimos una ruta con Route, le indicamos
                                que componente debe renderizar. <br /> Este componente cuenta con algunas propiedades:</p>
                            <ul>
                                <li><b>Path:</b> La ruta donde debemos renderizar nuestro componente podemos pasar un string o
                                    un array de string.</li>
                                <li><b>Exact:</b> Solo vamos a mostrar nuestro componente cuando la ruta sea exacta.
                                    Ej: <i>/home === /home.</i></li>
                                <li><b>Strict:</b> Solo vamos a mostrar nuestro componente si al final de la ruta tiene un slash.
                                    Ej: <i>/home/ === /home/</i></li>
                                <li><b>Sensitive:</b> Si le pasamos true vamos a tener en cuenta las mayúsculas y las minúsculas de
                                    nuestras rutas. Ej: <i>/Home === /Home</i></li>
                                <li><b>Component:</b> Le pasamos un componente para renderizar solo cuando la ubicación coincide.
                                    En este caso el componente se monta y se desmonta, no se actualiza. (En las últimas versiones, ya
                                    no se usa <b>Component</b>, sino <b>Element</b>)</li>
                                <li><b>Render:</b> Le pasamos una función para montar el componente en línea.</li>
                            </ul>


                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
        );
    }
}