import React from "react";
import { Accordion } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// Imagenes
import migrat_avion from '../../img/laravel/migration/migrat_avion.jpg';

export default class Migraciones extends React.Component {
    render() {
        return (
            <div id="migrations">
                <Accordion>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header><b>Creación de Migrations con Laravel y PHP Artisan</b></Accordion.Header>
                        <Accordion.Body>
                            <h2>Creación de Migrations con Laravel y PHP Artisan</h2>
                            <p>En caso de que no se haya realizado la configuración los parámetros de conexión con la base de datos, habría que realizarlo en este momento (ya se expuso en el momento de crear el proyecto
                                pero expondremos de nuevo la parte a modificar) Recordemos la parte a modificar.</p>
                                +--------------------------------------------------------+<br />
                                        <b>DB_CONNECTION=mysql                              <br />
                                            DB_HOST=127.0.0.1                                <br />
                                            DB_PORT=3306                                     <br />
                                            DB_DATABASE=(Nombre de la base de datos)         <br />
                                            DB_USERNAME=(Nombre user, por defecto es "root") <br />
                                            DB_PASSWORD=(Contraseña, por defecto esta vacía)</b> <br />
                                        +--------------------------------------------------------+
                            <br />
                            <p>ATENCIÓN: si hemos creado las plantillas de Modelo sin usar PHP Artisan, entonces borrarremos todas las migrations que aparecen por defecto en la carpeta database/migrations.</p>
                            <p>Crearemos las plantillas de migraciones, teniendo en cuenta la conexión existente entre las tablas, así que, siguiendo los ejemplos que hemos ido llevando, crearemos primero "fabricantes"
                                y luego crearemos "aviones".</p>
                            <p><b>xxxx_nombretabla:migrations.php</b></p>
                            +--------------------------------------------------------+
                            <p>//La opción de <b><i>--create=nombretabla</i></b> lo que hace es poner el nombre de la tabla dentro de la
                                plantilla.
                                <br />
                                <b>php artisan make:migration fabricantes_migration --create=fabricantes
                                    <br />
                                    php artisan make:migration aviones_migration --create=aviones </b>
                                <br />+--------------------------------------------------------+</p>

                            <p>Se crearian y almacenarían en el directorio <b><i>database/migrations/</i></b>, cuyo nombre sería <b>xxxx_nombretabla:migrations.php</b>, donde "xxxx" sería la fecha y hora de el momento de creación.</p>
                            <p>Ahora pasariamos a editar el fichero creado, indicando tipos de cambos, etc... sigamos usando como referencia el ejemplo que hemos ido llevando (usaremos el de aviones que sería el más
                                completo con respento a lo que podríamos configurar):</p>
                            <Accordion>
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>Ejemplo: xxxx_aviones_migration.php</Accordion.Header>
                                    <Accordion.Body>
                                        <img src={migrat_avion} alt="code" />
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                            <br />
                            <p>Una vez editadas, pasariamos a ejecutar todas las migrations para que cree las tablas en el mysql</p>
                            +--------------------------------------------------------+
                            <p>  //Iniciar la migración de datos:
                                <br /><b>php artisan migrate</b>
                                <br />
                                //Si queremos volver a poner la base de datos en su estado inicial podemos hacerlo con:
                                <br /><b>php artisan migrate:refresh</b></p>
                            +--------------------------------------------------------+
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
        );
    }
}