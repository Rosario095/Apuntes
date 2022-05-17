import React from "react";
import { Accordion } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class CodigosEstado extends React.Component {
    render() {
        return (
            <div id="codigos">
                <Accordion>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header><b>Códigos de Estado</b></Accordion.Header>
                        <Accordion.Body>
                            <h2>códigos de Estado</h2>
                            <p>HTTP define un set de significativos códigos de status que pueden ser devueltos por la API. Éstos pueden ser nivelados para ayudar a los consumidores de la API dirigir sus
                                respuestas de forma apropiada.</p>
                            <p>De forma genérica los códigos HTTP que comienzan por los números indicados abajo, tienen el siguiente significado:<br />
                                +--------------------------------------------------------------+
                                <br /><b>200's usados para respuestas con éxito.
                                    <br />300's usados para redirecciones.
                                    <br />400's usados cuando hay algún problema con la petición.
                                    <br />500's usados cuando hay algún problema con el servidor. </b>
                                <br />+--------------------------------------------------------------+</p>
                            <p>Lista de códigos HTTP que se deberían utilizar en la API RESTful:</p>
                            <Accordion>
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>Códigos de Estado</Accordion.Header>
                                    <Accordion.Body>
                                        +--------------------------------------------------------+
                                        <br /><b><b className="verde">200 OK</b> - Respuesta a un exitoso GET, PUT, PATCH o DELETE. Puede ser usado también para un POST que no resulta en una creación.                                                             
                                            <br /><b className="verde">201 Created – [Creada]</b> Respuesta a un POST que resulta en una creación. Debería ser combinado con un encabezado Location, apuntando a la ubicación del nuevo recurso.                      
                                            <br /><b className="verde">204 No Content – [Sin Contenido]</b> Respuesta a una petición exitosa que no devuelve un body (por ejemplo en una petición DELETE)                                                             
                                            <br /></b>---                                                                                                                                                                                        
                                        <br /><b><b className="code">304 Not Modified – [No Modificada]</b> Usado cuando el cacheo de encabezados HTTP está activo y el cliente puede usar datos cacheados.</b>                                                        
                                        <br />---                                                                                                                                                                                        
                                        <br /><b><b className="rojo">400 Bad Request – [Petición Errónea]</b> La petición está malformada, como por ejemplo, si el contenido no fue bien parseado. El error se debe mostrar también en el JSON de respuesta.        
                                            <br /><b className="code">401 Unauthorized – [Desautorizada]</b> Cuando los detalles de autenticación son inválidos o no son otorgados. También útil para disparar un popup de autorización si la API es usada desde un navegador.                                                                                                                                                                                 
                                            <br /><b className="code">403 Forbidden – [Prohibida]</b> Cuando la autenticación es exitosa pero el usuario no tiene permiso al recurso en cuestión.                                                                    
                                            <br /><b className="rojo">404 Not Found – [No encontrada]</b> Cuando un recurso se solicita un recurso no existente.                                                                                                     
                                            <br /></b>---                                                                                                                                                                                        
                                        <br /><b><b className="code">405 Method Not Allowed – [Método no permitido]</b> Cuando un método HTTP que está siendo pedido no está permitido para el usuario autenticado.                                                 
                                            <br /><b className="code">409 Conflict - [Conflicto]</b> Cuando hay algún conflicto al procesar una petición, por ejemplo en PATCH, POST o DELETE.                                                                       
                                            <br /><b className="code">410 Gone – [Retirado]</b> Indica que el recurso en ese endpoint ya no está disponible. Útil como una respuesta en blanco para viejas versiones de la API                                       
                                            <br /><b className="code">415 Unsupported Media Type – [Tipo de contenido no soportado]</b> Si el tipo de contenido que solicita la petición es incorrecto                                                               
                                            <br /><b className="rojo">422 Unprocessable Entity – [Entidad improcesable]</b> Utilizada para errores de validación, o cuando por ejemplo faltan campos en una petición.                                                
                                            <br /><b className="rojo">429 Too Many Requests – [Demasiadas peticiones]</b> Cuando una petición es rechazada debido a la tasa límite .                                                                                 
                                            <br /></b>---                                                                                                                                                                                        
                                        <br /><b><b className="rojo">500 – Internal Server Error – [Error Interno del servidor]</b> Los desarrolladores de API NO deberían usar este código. En su lugar se debería loguear el fallo y no devolver respuesta.</b>
                                        <br />+--------------------------------------------------------+
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
        );
    }
}