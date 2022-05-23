import React from "react";
import { Accordion } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// Imagenes
import hook from '../../../img/react_ap/route/hook.jpg';


export default class Hook extends React.Component {
    render() {
        return (
            <div id="hook">
                <Accordion>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header><b>Hook useParams</b></Accordion.Header>
                        <Accordion.Body>

                            <h2>Hook useParams</h2>
                            <p>Con <b>Hook</b> podemos acceder a los parámetros de las rutas. <br /> A continuación, podemos observar un
                                ejemplo:</p>
                            <img src={hook} alt="code" />
                            <p>Por supuesto, ante todo, hay que recordar importar <b>Hook</b>.</p>




                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
        );
    }
}