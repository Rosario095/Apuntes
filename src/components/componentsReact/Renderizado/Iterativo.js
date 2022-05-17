import React from "react";
import { Accordion } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// Imagenes
import itr1 from '../../../img/react_ap/renderizado/iterativo/itr1.jpg';
import itr2 from '../../../img/react_ap/renderizado/iterativo/itr2.jpg';
import itr3 from '../../../img/react_ap/renderizado/iterativo/itr3.jpg';
import itr4 from '../../../img/react_ap/renderizado/iterativo/itr4.jpg';
import itr5 from '../../../img/react_ap/renderizado/iterativo/itr5.jpg';
import itr6 from '../../../img/react_ap/renderizado/iterativo/itr6.jpg';

export default class Iterativo extends React.Component {
    render() {
        return (
            <div id="iterativo">
                <Accordion>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header><b>Renderizado iterativo y claves</b></Accordion.Header>
                        <Accordion.Body>
                            <h2>Renderizado iterativo y claves</h2>
                            <h4>Array map</h4>
                            <p>Recorre cada uno de los elementos y hace una transformación sobre ellos.</p>
                            <img src={itr1} alt="image1" />
                            <p>Es decir, se llama a un array y devuelve otro array con modificaciones, cuyo cambio viene dado por
                                el <b className="code">.map()</b></p>

                            <h4>Array filter</h4>
                            <p>Selecciona elementos del primer array según los parámetros establecidos.</p>
                            <img src={itr2} alt="image2" />
                            <p>Da igual el orden, el resultante tendría que ser el mismo.</p>
                            <img src={itr3} alt="image3" />
                            <p>El coste computacional, de la segunda manera, sería menor pues, al realizar primero el filtrado, tendría
                                menos que modificar.</p>
                            <h4>Claves únicas</h4>
                            <Accordion>
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>CLAVES</Accordion.Header>
                                    <Accordion.Body>
                                        <img src={itr4} alt="image4" />
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                            <br />
                            <p>Las claves únicas son un modo para saber más facilmente, y con mayor rendimiento, los elementos
                                cambiados o eliminados. <br /> No es recomendable usar el índice como clave única, pues cuando se
                                elimina un elemento, por ejemplo, el segundo, desde el tercero al último se desplazarían hacia
                                arriba, por lo que no sabrá cual ha sido el elemento eliminado.</p>
                            <img src={itr5} alt="code" />
                            <p>De esta forma, le indicamos exactamente qué elementos deseamos pintar en la lista, en este caso, todos
                                aquellos platos que <b className="code">"veggie:true"</b>.</p>
                            <img src={itr6} alt="code" />
                            <p>Funciona realizando lo mismo que antes, pero ahora utilizando <b className="code">".filter"</b>.</p>

                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
        );
    }
}