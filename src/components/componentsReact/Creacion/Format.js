import React from "react";
import { Accordion } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// Imagenes
import prettier from '../../../img/react_ap/creacion/format/prettier.jpg';
import staged from '../../../img/react_ap/creacion/format/staged.jpg';

export default class Format extends React.Component {
    render() {
        return (
            <div id="format">
                <Accordion>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header><b>Format</b></Accordion.Header>
                        <Accordion.Body>
                            <h2>Format</h2>
                            <p>1) Install <b>Prettier</b>
                                <br />+---------------------------+
                                <br /><i>npm install --dev prettier</i>
                                <br />+---------------------------+
                            </p>
                            <p>2) Add the script and the preferred rules in <b><i>package.json</i></b></p>
                            <img src={prettier} alt="code" />
                            <p>3) Add the <b>prettier</b> script to lint staged fired by <b>husky</b></p>
                            <img src={staged} alt="code" />

                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
        );
    }
}