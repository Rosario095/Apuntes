import React from "react";
import { Accordion } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class Beneficios extends React.Component {
    render() {
        return (
            <div id="beneficios">
                <Accordion>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header><b>¿Qué es React Router? & Beneficios de React Router</b></Accordion.Header>
                        <Accordion.Body>
                            <h2>¿Qué es React Router?</h2>
                            <p>Es una colección de componentes de navegación, usable tanto en web como en móvil con React Native. <br/>
                            Con esto obtendremos un enrutamiento dinámico gracias a los componentes.</p>

                            <h2>Beneficios de React Router</h2>
                            <ul>
                                <li>Establecer rutas en nuestra aplicación ej: Home, About, User.</li>
                                <li>Realizar redirecciones</li>
                                <li>Acceso al historial del navegador</li>
                                <li>Manejo de rutas con parámetros</li>
                                <li>Páginas para el manejo de errores como 404</li>
                            </ul>

                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
        );
    }
}