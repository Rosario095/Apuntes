import React from "react";
import { Accordion } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// Imagenes
import lint from '../../../img/react_ap/creacion/linting/lint.jpg';
import eslint from '../../../img/react_ap/creacion/linting/eslint.jpg';


export default class Linting extends React.Component {
    render() {
        return (
            <div id="linting">
                <Accordion>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header><b>Linting</b></Accordion.Header>
                        <Accordion.Body>
                            <h2>Linting</h2>
                            <p>Revisa el código y avisa de errores</p>
                            <p>1) Install <b>ESLint</b> globally
                                <br />+----------------------+
                                <br /><i>npm install -g eslint</i>
                                <br />+----------------------+
                            </p>
                            <p>2) Init <b>ESLint</b> in the project
                                <br />+--------------+
                                <br /><i>eslint --init</i>
                                <br />+--------------+
                            </p>
                            <p>3) Add a lint script in <b><i>package.json</i></b></p>
                            <img src={lint} alt="code" />
                            <br />
                            <p>4) Adjust <b><i>.eslint.json</i></b> with this optional recommendation</p>
                            <img src={eslint} alt="code" />
                            <br/>
                            <p>5) InRun linter
                                <br />+--------------+
                                <br /><i>npm run lint</i>
                                <br />+--------------+
                            </p>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
        );
    }
}