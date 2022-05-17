import React from "react";
import { Accordion } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// Imagenes
import pty0 from '../../../img/react_ap/comunicacion/pty/pty0.jpg';
import pty1 from '../../../img/react_ap/comunicacion/pty/pty1.jpg';
import pty2 from '../../../img/react_ap/comunicacion/pty/pty2.jpg';
import pty3 from '../../../img/react_ap/comunicacion/pty/pty3.jpg';
import pty4 from '../../../img/react_ap/comunicacion/pty/pty4.jpg';

export default class PTypes extends React.Component {
    render() {
        return (
            <div id="destr">
                <Accordion>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header><b>Prop Types</b></Accordion.Header>
                        <Accordion.Body>
                            <h2>Prop Types</h2>
                            <img src={pty0} alt="code" /><br/>
                            <img src={pty1} alt="code" />
                            <img src={pty2} alt="code" />
                            <p>En caso de que el label (siguiente este ejemplo) no indique como requerido
                                (<b className="code">isRequired</b>) es recomendable y aconsejable darle valor por defecto (por
                                ejemplo: <b className="code">My Wishlist</b>).</p>
                            <img src={pty3} alt="code" />
                            <p>Ya, de esta manera, si llamamos al <b className="code">Header</b> directamente, ya si mostraría valor.</p>
                            <img src={pty4} alt="code" />
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
        );
    }
}

