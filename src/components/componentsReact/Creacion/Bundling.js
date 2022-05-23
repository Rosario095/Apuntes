import React from "react";
import { Accordion } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// Imagenes
import Asd from '../../../img/react_ap/creacion/bundling/asd.jpg';
import Zxc from '../../../img/react_ap/creacion/bundling/zxc.jpg';


export default class Bundling extends React.Component {
    render() {
        return (
            <div id="bundling">
                <Accordion>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header><b>Empaquetado (Bundling)</b></Accordion.Header>
                        <Accordion.Body>
                            <h2>Empaquetado (Bundling)</h2>
                            <p>1) Install <b>Parcel</b> in the project
                                <br />+--------------------------------------+
                                <br /><i>npm install --save-dev parcel-bundler</i>
                                <br />+--------------------------------------+
                            </p>
                            <p>2) Create a simple index.html</p>
                            <img src={Asd} alt="code" />
                            <br />
                            <p>1) Define a start script in [package.json]</p>
                            <img src={Zxc} alt="code" />
                            <br />
                            <p>2) Run the start script
                                <br />+-----------+
                                <br /><i>npm start</i>
                                <br />+-----------+
                            </p>
                            <p>2) Open browser
                                <br />+----------------------+
                                <br /><i>http://localhost:1234</i>
                                <br />+----------------------+
                            </p>

                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
        );
    }
}