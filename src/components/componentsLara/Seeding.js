import React from "react";
import { Accordion } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// Imagenes
import ArticleTS from '../../img/api_img/seeders/ArticleTableSeeder.jpg';
import UserTS from '../../img/api_img/seeders/UserTableSeeder.jpg';
import DatabaseS from '../../img/api_img/seeders/DatabaseSeeder.jpg';

export default class Seeding extends React.Component {
    render() {
        return (
            <div id="seeding">
                <Accordion>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header><b>Database Seeding</b></Accordion.Header>
                        <Accordion.Body>
                            <h2>Database Seeding</h2>
                            <p>En el proceso para llenar un tabla de datos ficticios para su utilización, Laravel viene
                                con <b>Faker</b>, una librería que genera de forma corrrecta los datos para utilizarlos.
                                <br />+---------------------------------------------+
                                <br /><i>$ php artisan make:seeder ArticlesTableSeeder</i>
                                <br />+---------------------------------------------+</p>
                            <p>Se localiza en <b><i>/database/seeds</i></b>. Acontinuación veremos como se vería para crear nuevos artículos:</p>
                            <img src={ArticleTS} alt="code" />
                            <br />
                            <p>Ejecutamos el comando:
                                <br />+---------------------------------------------+
                                <br /><i>$ php artisan db:seed --class=ArticleTableSeeder</i>
                                <br />+---------------------------------------------+</p>
                            <p>Podemos repetir este proceso para crear otros, por ejemplo, vamos a crear uno para usuarios:</p>
                            <img src={UserTS} alt="code" />
                            <br />
                            <p>Podemos hacerlo más fácil añadiendo nuetras "semillas" al principal <b>DatabaseSeeder</b> en <b><i>database/seeds</i></b></p>
                            <img src={DatabaseS} alt="code" />
                            <br />
                            <p>Con esto llamamos a <b><i>$ php artisan db:seed</i></b> y ejecutaran todas las clases del método <b><i>run()</i></b>.</p>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
        );
    }
}