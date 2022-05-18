import React from "react";
import { Accordion } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// Imagenes
import est1 from '../../../img/react_ap/renderizado/estilos/est1.jpg';
import est2 from '../../../img/react_ap/renderizado/estilos/est2.jpg';
import est3 from '../../../img/react_ap/renderizado/estilos/est3.jpg';
import est4 from '../../../img/react_ap/renderizado/estilos/est4.jpg';
import est5 from '../../../img/react_ap/renderizado/estilos/est5.jpg';
import est6 from '../../../img/react_ap/renderizado/estilos/est6.jpg';
import est7 from '../../../img/react_ap/renderizado/estilos/est7.jpg';
import est8 from '../../../img/react_ap/renderizado/estilos/est8.jpg';

export default class Estilo extends React.Component {
    render() {
        return (
            <div id="estilo">
                <Accordion>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header><b>Estilizado básico en JSX</b></Accordion.Header>
                        <Accordion.Body>
                            <h2>Estilizado básico en JSX</h2>
                            <h4>Component // style.css</h4>
                            <img src={est1} alt="code" /> <img src={est2} alt="code" />

                            <h4>¿Real encapsulación?</h4>
                            <img src={est3} alt="image" />
                            <p>El estilo se verá aplicado a cada una de las clases que posean el mismo nombre.</p><br />
                            <img src={est4} alt="image" /> <img src={est5} alt="image" />

                            <p>Una manera extrategia es la combinación de estas piezas. Solo hay que evitar que los bloques se nombren igual.</p>
                            <img src={est6} alt="image" /> <br />

                            <p><b className="rojo">Ej</b>: si tenemos dos iconos, el nombrarlo de esta manera, no chocaría, pues este
                                estilo pertenecería a un icono dentro de un botón, por lo que solo se vería afectado el icono que estuviese
                                dentro del botón</p>

                            <Accordion>
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>Ejemplo Component // style.css</Accordion.Header>
                                    <Accordion.Body>
                                        <img src={est7} alt="code" /> <img src={est8} alt="code" />
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