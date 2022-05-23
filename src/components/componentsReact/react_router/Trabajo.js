import React from "react";
import { Accordion } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// Imagenes
import app from '../../../img/react_ap/route/trabajo/app.jpg';
import home from '../../../img/react_ap/route/trabajo/home.jpg';
import app2 from '../../../img/react_ap/route/trabajo/app2.jpg';
import switc from '../../../img/react_ap/route/trabajo/switch.jpg';

export default class Trabajo extends React.Component {
    render() {
        return (
            <div id="Trabajo">
                <Accordion>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header><b>Trabajando con React Router</b></Accordion.Header>
                        <Accordion.Body>

                            <h2>Trabajando con React Router</h2>
                            <p>Una vez con el proyecto operativo, iremos a nuestro editor de códigos (nuestro caso, <b>VSCode</b>) y
                                accederemos al archivo <b>App.js</b> ubicado en <b>src/App.js</b> y borraremos todo lo que genera el comando,
                                dejando algo como lo siguiente: </p>
                            <img src={app} alt="code" />
                            <p>Importamos nuesstro componente <b>BrowserRouter</b> y le damos el nombre <b>Router</b>, tambien
                                importamos <b>Route</b> de <b>react-router-dom</b>. <br /> Envolvemos nuestra aplicación con Router y
                                definimos nuestra primera ruta, en este caso a nuestro home, le indicamos que debe ser exacta la ruta y que
                                haga render de nuestro componente <i>Home</i>. <br /> Ahora vamos a crear dicho componente: </p>
                            <img src={home} alt="code" />
                            <p>Éste sería el componente <b>Home</b>, que se encuentra dentro del directorio <b>pages/Home</b>, cuyo
                                contenido es únicamente un <b>h3</b> con un texto. Si se fuera al navegador,
                                en <b>http://localhost:3000/</b> nos encontrarimos únicamente con un texto, siendo éste <b>Hello Home</b>.
                                <br /> PAsasmos a crear otras páginas, y una para manejar el error 404.</p>
                            <img src={app2} alt="code" />
                            <p>Si vamos al navegador después de agregar rutas, veremos que sale hasta el componente <b>PageNotFount</b> que 
                            no queremos que salga, esto se soluciona envolviendolos en un <b>Switch</b></p>
                            <img src={switc} alt="code" />

                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
        );
    }
}