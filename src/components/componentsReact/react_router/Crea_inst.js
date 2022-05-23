import React from "react";
import { Accordion } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// Imagenes
import npm from '../../../img/react_ap/route/npm.jpg';

export default class Crea_inst extends React.Component {
    render() {
        return (
            <div id="crea_inst">
                <Accordion>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header><b>Crear nuestro proyecto & Instalación de React Router</b></Accordion.Header>
                        <Accordion.Body>

                            <h2>Crear nuestro proyecto & Instalación de React Router</h2>
                            <h4>Crear nuestro proyecto</h4>
                            <p>Para crear nuestro proyecto usaremos el comando <b><i>npmx create-react-app nombre_proyecto</i></b>, donde el
                                <b>nombre_proyecto</b> es el nombre que le queramos dar al proyecto <br /> Esperamos hasta que se instala y,
                                una vez instalado, accederemos al directorio con <b><i>cd nombre_proyecto</i></b> <br /> Podemos probar
                                nuestro proyecto corriendolo con <b>npm start</b> si se esta usando <b>npm</b>, o <b>yarn start</b> si
                                se esta usando <b>yarn</b>.</p>
                            <img src={npm} alt="code" />
                            <p>De forma predeterminada, nos abrirá un servidor en <b>localhost:3000</b>.</p>
                            <h4>Instalación de React Router</h4>
                            <p>Para instalar la librería, solo tenemos que ir al terminal, encontrarnos ubicados en el directorio raiz de
                                nuestro proyecto y ejecutar el comando <b><i>npm install react-router-dom</i></b> en caso de usar
                                <b>npm</b> o <b><i>yarn add react-router-dom</i></b> en caso de usar <b>yarn</b>.</p>

                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
        );
    }
}