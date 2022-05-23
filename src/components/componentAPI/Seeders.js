import React from "react";
import { Accordion } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// Imagenes
import database from '../../img/laravel/seeders/database.jpg';
import avion_seeder from '../../img/laravel/seeders/avion_seeder.jpg';

export default class Seeders extends React.Component {
    render() {
        return (
            <div id="seeders">
                <Accordion>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header><b>Creación de Seeders para tablas con Laravel y PHP Artisan</b></Accordion.Header>
                        <Accordion.Body>
                            <h2>Creación de Seeders para tablas con Laravel y PHP Artisan</h2>
                            <p>Basicamente, sirve para llenar las tablas con datos.<br />
                                Se encuentran en la carpeta <b><i>database/seeds</i></b><br />
                                Para su configuración, primero comenzaremos abriendo el fichero <b><i>database/seeds/DatabaseSeeder.php</i></b>, y escribir todas las llamas que vayan a realizarse (es decir, tantas llamadas como tablas
                                querramos rellenar). Es importante el orden, pues una tabla puede estar relacionada con otra y necesitaremos los datos de una antes que la de otra (en el ejemplo que estamos siguiendo,
                                "fabricantes" debe ejecutarse antes que "aviones")<br />
                                Este podría ser un ejemplo de como configurar el archivo:</p>
                            <img src={database} alt="code" />
                            <br />
                            <p>Después de ellos, creamos unn fichero Seeder para cada tabla de nuestra base de datos<br />
                                +---------------------------------------------+ <br />
                                <i>php artisan make:seeder NombretablaSeeder</i><br />
                                +---------------------------------------------+ <br /></p>
                            <p>Para poder configurar con qué información rellenamos las tablas necesitamos un proyecto adicional
                                llamado "Faker" (podemos buscarlo con Composer)<br />
                                +---------------------+ <br />
                                <i>composer search faker</i><br />
                                +---------------------+ <br /></p>
                            <p>Sabiendo el que necesitamos, pasamos a instalarlo (es importante luego ver la documentanción pertinente
                                que pueda tener el faker para saber como configurarlo)<br />
                                +----------------------------------------------+ <br />
                                <i>composer require nombredelfaker/faker --dev</i><br />
                                +----------------------------------------------+ <br /></p>
                            <p>Configuramos el fichero, situado en <b><i>database/seeds/</i></b>, con los datos necesarios. Esto es un ejemplo de lo que
                                podríamos hacer (partimos de nuevo de aviones por ser el que contiene más cosas)</p>
                            <Accordion>
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>Ejemplo: AvionSeeder.php</Accordion.Header>
                                    <Accordion.Body>
                                        <img src={avion_seeder} alt="code" />
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                            <br />
                            <p>Una vez configurados todos los ficheros, pasaremos insertar los registros en las tablas mediante este comando:<br />
                                +------------------+ <br />
                                <i>php artisan db:seed</i><br />
                                +------------------+ <br /></p>
                            <p>Es posible que exista algun tipo de problema de "Clase no Encontrada", en ese caso utilizaremos este comando:<br />
                                +------------------------+ <br />
                                <i>composer dumpautoload</i><br />
                                +------------------------+ <br /></p>
                            <p>Si deseamos volver al estado inicial nuestra base de datos y ejecutar el primer seed, solo debemos usar este comando:<br />
                                +----------------------------------+ <br />
                                <i>php artisan migrate:refresh --seed</i><br />
                                +----------------------------------+ <br /></p>
                            <p>Y si existen algún tipo de error con la clase Faker, usaremos:<br />
                                +---------------------------------------+ <br />
                                <i>composer update nombredelfaker/faker</i><br />
                                +---------------------------------------+ <br /></p>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
        );
    }
}