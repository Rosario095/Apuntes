import React from "react";
import { Accordion } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// Imagenes
import husky from '../../../img/react_ap/creacion/commint/husky.jpg';

export default class Commint extends React.Component {
    render() {
        return (
            <div id="commint">
                <Accordion>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header><b>Etapa de commint</b></Accordion.Header>
                        <Accordion.Body>
                            <h2>Etapa de commint</h2>
                            <p>1) Install lint-staged and husky
                                <br />+------------------------------------+
                                <br /><i>npm install --dev lint-staged husky</i>
                                <br />+------------------------------------+
                            </p>
                            <p>2) Configure the pre-commint hook in package.json</p>
                            <img src={husky} alt="code" />

                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
        );
    }
}