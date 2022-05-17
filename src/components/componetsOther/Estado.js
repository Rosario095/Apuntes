import React from "react";
import { Accordion } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class Estado extends React.Component {
    render() {
        return (
            <div id="cestado">
                <Accordion>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header><b>Códigos de Estado</b></Accordion.Header>
                        <Accordion.Body>
                            <h2>Códigos de Estado</h2>
                            <Accordion>
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>Respuestas informativas (100)</Accordion.Header>
                                    <Accordion.Body>
                                        +--------------------------------------------------------+
                                        <br /><b><b className="codigo">100 Continue:</b> Esta respuesta provisional indica que todo hasta ahora está
                                            bien y que el cliente debe continuar con la solicitud o ignorarla si ya está terminada.
                                            <br /><b className="codigo">101 Switching Protocol:</b> Este código se envia en respuesta a un encabezado
                                            de solicitud <b className="web">Upgrade(en-US)</b> por el cliente e indica que el servidor acepta el
                                            cambio de protocolo propuesto.
                                            <br /><b className="codigo">102 Processing (<b className="web">WebDAV(en-US)</b>):</b> Este código indica
                                            que el servidor ha recibido la solicitud y aún se encuentra procesandola, por lo que no hay respuesta
                                            disponible.
                                            <br /><b className="codigo">103 Early Hints(en-US):</b> Este código de estado está pensando principalmente
                                            para ser usado con el encabezado <b className="web">Link</b>, permitiendo que el agente de usuario
                                            empiece a <b className="web">pre-cargar</b> recursos mientras el servidor prepara una respuesta.
                                        </b><br />+--------------------------------------------------------+
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>

                            <Accordion>
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>Respuestas satisfactorias (200)</Accordion.Header>
                                    <Accordion.Body>
                                        <p><b className="metodo">GET:</b> El recurso se ha obtenido y se transmite en el cuerpo del mensaje<br/>
                                        <b className="metodo">HEAD:</b> Los encabezados de entidad están en el cuerpo del mensaje<br/>
                                        <b className="metodo">PUT o POST:</b> El recurso que describe el resultado de la acción se transmite
                                            en el cuerpo del mensaje<br/>
                                        <b className="metodo">TRACE:</b> El cuerpo del mensaje contiene el mensaje de solicitud recibido
                                            por el servidor</p>
                                        +--------------------------------------------------------+
                                        <br /><b><b className="codigo">200 OK:</b> La solicitud ha tenido éxito.
                                            <br /><b className="codigo">201 Created:</b> La solicitud ha tenido éxito y se ha creado un nuevo
                                            recurso como resultado de ello.
                                            <br /><b className="codigo">202 Accepted:</b> La solicitud se ha recibido, pero aún no se ha actuado.
                                            <br /><b className="codigo">203 Non-Authoritative Information:</b> La petición se ha completado con
                                            éxito, pero su contenido no se ha obtenido de la fuente originalmente solicitada, sino que se recoge
                                            de una copia local o de un tercero.
                                            <br /><b className="codigo">204 No Content(en-US):</b> La petición se ha completado con éxito pero su
                                            respuesta no tiene ningún contenido.
                                            <br /><b className="codigo">205 Reset Content(en-US):</b> La petición se ha completado, pero su
                                            respuesta no tiene contenidos y, además, el agente de usuario tiene que inicializar la página desde
                                            la que se realizó la petición.
                                            <br /><b className="codigo">206 Partial Content:</b> La petición servirá pracialmente el contenido
                                            solicitado.
                                            <br /><b className="codigo">207 Multi-Status (<b className="web">WebDAV(en-US)</b>):</b> Transmite
                                            información sobre varios recursos en situaciones en las que varios códigos de estado prodrían ser
                                            apropiados.
                                            <br /><b className="codigo">208 Multi-Status (<b className="web">WebDAV(en-US)</b>):</b> El listado de
                                            elementos DAV ya se notificó previamente, por lo que no se van a volver a listar.
                                            <br /><b className="codigo">226 IM Used (<b className="web">HTTP Delta encoding</b>):</b> El servidor
                                            ha cumplido una petición <b className="metodo">GET</b> para el recurso y la respuesta es una
                                            representación del resultado de una o más manipulaciones de instancia aplicadas a la instancia actual.
                                        </b><br />+--------------------------------------------------------+
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>

                            <Accordion>
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>Redirecciones (300)</Accordion.Header>
                                    <Accordion.Body>
                                        +--------------------------------------------------------+
                                        <b><br /><b className="codigo">300 Multiple choice(en-US):</b> Esta solicitud tiene más de una posible
                                            respuesta. User-Agent o el usuario debe escoger uno de ellos.
                                            <br /><b className="codigo">301 Moved Permanently(en-US):</b> Este código de respuesta significa
                                            que la URI del recurso solicitado ha sido cambiado. Probablemente. una nueva URI sea devuelta en la
                                            respuesta.
                                            <br /><b className="codigo">302 Found:</b> Significa que el recurso de la URI solicitada ha sido
                                            cambiado temporalmente.
                                            <br /><b className="codigo">303 See Other(en-US):</b> El servidor envia esta respuesta para dirigir
                                            al cliente a un nuevo recurso a otra dirección usando una petición <b className="metodo">GET</b>.
                                            <br /><b className="codigo">304 Not Modified:</b> Le indica al cliente que la respuesta no ha sido
                                            modificada.
                                            <br /><b className="codigo">307 Temporary Redirect(en-US):</b> El servidor envía essta respuesta para
                                            dirigir al cliente a obtener el recurso solicitado a otra URI con el mismo método que se usó la
                                            petición anterior, si un <b className="metodo">POST</b> fue usado en la primera petición,
                                            otro <b className="metodo">POST</b> debe ser usado en la segunda petición.
                                            <br /><b className="codigo">308 Permanent Redirect(en-US):</b> Significa que el recurso ahora se
                                            encuentra permanentemente en otra URI, especificada por la respuesta de encabezado
                                            HTTP <b className="local">Location:</b>. No debe cambiarse el método HTTP usado: si
                                            un <b className="metodo">POST</b> fue usado en la primera petición,
                                            otro <b className="metodo">POST</b> debe ser usado en la segunda petición.
                                        </b><br />+--------------------------------------------------------+
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>

                            <Accordion>
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>Errores de cliente (400)</Accordion.Header>
                                    <Accordion.Body>
                                        +--------------------------------------------------------+
                                        <b><br /><b className="codigo">400 Bad Request:</b> Significa que el servidor no pudo interpretar la
                                            solicitud dada una sintaxis invalida.
                                            <br /><b className="codigo">401 Unauthorized:</b> Es necesario autentificar para obtener la respuesta
                                            solicitada.
                                            <br /><b className="codigo">403 Forbidden:</b> El cliente no posee los permisos necesarios para cierto
                                            contenido, por lo que el servidor está rechazando otorgar una respuesta apropiada.
                                            <br /><b className="codigo">404 Not Found:</b> El servidor no pudo encontrar el contenido solicitado.
                                            <br /><b className="codigo">405 Method Not Allowed(en-US):</b> El método solicitado es conocido por el
                                            servidor pero ha sido deshabilitado y no puede ser utilizado.
                                            <br /><b className="codigo">406 Not Acceptable(en-US):</b> Es enviada cuando el servidor no encuentra
                                            ningún contenido seguido por la criteria dada por el usuario.
                                            <br /><b className="codigo">407 Proxy Authentication Required(en-US):</b> Esto es similar al código 401,
                                            pero la autenticación debe estar hecha a partir de un proxy.
                                            <br /><b className="codigo">408 Request Timeout:</b> Esta respuesta es enviada en una conexión inactiva en
                                            algunos servidores, incluso sin alguna petición previa por el cliente.
                                            <br /><b className="codigo">409 Conflict(en-US):</b> Puede ser enviada cuando una petición tiene conflicto
                                            con el estado actual del servidor.
                                            <br /><b className="codigo">410 Gone(en-US):</b> Puede ser enviada cuando el contenido solicitado ha sido
                                            borrado del servidor.
                                            <br /><b className="codigo">411 Length Required(en-US):</b> El servidor rechaza la petición porque el
                                            campo de encabezado <b className="web">Content-Length</b> no esta definido y el servidor lo requiere.
                                            <br /><b className="codigo">412 Precondition Failed(en-US):</b> El cliente ha indicado pre-condiciones en
                                            sus encabezados, la cual el servidor no cumple.
                                            <br /><b className="codigo">413 Payload Too Large:</b> La entidad de petición es más larga que los límites
                                            definidos por el servidor; el servidor puede cerrar la conexión o retornar un campo de
                                            encabezado <b className="web">Retry-After</b>
                                            <br /><b className="codigo">414 URI Too Long(en-US):</b> La URI solicitada por el cliente es más larga de
                                            lo que el servidor está dispuesto a interpretar.
                                            <br /><b className="codigo">415 Unsupported Media Type(en-US):</b> El formato multimedia de los datos
                                            solicitados no está soportado por el servidor, por lo cual el servidor rechaza la solicitud.
                                            <br /><b className="codigo">416 Request Range Not Satisfiable(en-US):</b> El rango especificado por el
                                            campo de encabezado <b className="web">Range</b> en la solicitud no cumple; es posible que el rango está
                                            fuera del tamaño de los datos objetivo del URI.
                                            <br /><b className="codigo">417 Expectation Failed(en-US):</b> Significa que la expectativa indicada por
                                            el campo de encabezado <b className="web">Expect</b> solicitada no puede ser cumplida por el servidor.
                                            <br /><b className="codigo">421 Misdirected Request:</b> La petición fue dirigida a un servidor que no es
                                            capaz de producir una respuesta.
                                            <br /><b className="codigo">422 Unprocessable Entity(en-US)(<b className="web">WebDAV(en-US)</b>):</b> La
                                            petición estaba bien formada pero no se pudo seguir debido a errores de semántica.
                                            <br /><b className="codigo">423 Locked(<b className="web">WebDAV(en-US)</b>):</b> El recurso que estás
                                            siendo accedido está bloqueado.
                                            <br /><b className="codigo">424 Failed Dependency(<b className="web">WebDAV(en-US)</b>):</b> La petición
                                            falló debido a una falla de una petición previa.
                                            <br /><b className="codigo">426 Upgrade Required(en-US):</b> El servidor se rehúsa a aplicar la solicitud
                                            usando el protocolo actual, pero puede estar dispuesto a hacerlo después que el cliente se actualice a un
                                            protocolo diferente. El servidor envía un encabezado <b className="local">Upgrade</b> en una respuesta
                                            para indicar los protocolos requeridos.
                                            <br /><b className="codigo">428 Precondition Required(en-US):</b> El servidor origen requiere que la
                                            solicitud sea condicional.
                                            <br /><b className="codigo">429 Too Many Requests(en-US):</b> El usuario ha enviado demasiadas solicitudes
                                            en un periodo de tiempo dado.
                                            <br /><b className="codigo">431 Request Header Fields Too LArge(en-US):</b> El servidor no está dispuesto
                                            a procesar la solicitud porque los campos de encabezado son demasiados largos.
                                            <br /><b className="codigo">451 Unavailable For Legal Reasons(en-US):</b> El usuario solicita un recurso
                                            ilegal, como alguna página web censurada por algún gobierno.
                                        </b><br />+--------------------------------------------------------+
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>

                            <Accordion>
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>Errores del servidor (500)</Accordion.Header>
                                    <Accordion.Body>
                                        +--------------------------------------------------------+
                                        <b><br /><b className="codigo">500 Internal Server Error:</b> El servidor ha encontrado una situación que
                                            no sabe cómo manejarla
                                            <br /><b className="codigo">501 Not Implemented(en-US):</b> El método solicitado no está soportado
                                            por el servidor y no puede ser manejado.
                                            <br /><b className="codigo">502 Bad Gateway:</b> Esta respuesta de error significa que el servidor,
                                            mientras trabaja como una puerta de enlace para obtener una respuesta necesaria para manejar la
                                            petición, obtuvo una respuesta inválida.
                                            <br /><b className="codigo">503 Service Unavailable:</b> El servidor no está listo para manejar la
                                            petición. Causas comunes puede ser por mantenimiento o sobrecarga.
                                            <br /><b className="codigo">504 Gateway Timeout:</b> Esta respuesta de error es dada cuando el servidor
                                            está actuando como una puerta de enlace y no puede obtener una respuesta a tiempo.
                                            <br /><b className="codigo">505 HTTP Version Not Supported:</b> La versión de HTTP usada en la petición
                                            no está soportada por el servidor
                                            <br /><b className="codigo">506 Variant Also Negotiates(en-US):</b> El servidor tiene un error de
                                            configuración interna: negociación de contenido transparente para la petición resulta en una
                                            referencia circular.
                                            <br /><b className="codigo">507 Insufficient Storage(en-US):</b> El servidor tiene un error de
                                            configuración interna: la variable de recurso escogida está configurada para acoplar la negociación
                                            de contenido transparente misma, y no es por lo tanto un punto final adecuado para el proceso de
                                            negociación.
                                            <br /><b className="codigo">508 Loop Detected(en-US)(<b className="web">WebDAV(en-US)</b>):</b> El
                                            servidor detectó un ciclo infinito mientras procesa la solicitud.
                                            <br /><b className="codigo">510 Not Extended(en-US):</b> Extensiones adicionales para la solicitud son
                                            requeridas para que el servidor las cumpla.
                                            <br /><b className="codigo">511 Network Authentication Required(en-US):</b> Indica que el cliente
                                            necesita autenticar para obtener acceso a la red.
                                        </b><br />+--------------------------------------------------------+
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