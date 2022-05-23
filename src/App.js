import './App.css';
import Navbars from './components/Navbars';
import Navbars2 from './components/Navbars2';
//REACT
//Fundamentos
import EstrcClasica from './components/componentsReact/Fundamentos/Estructura';
import Encapsulacion from './components/componentsReact/Fundamentos/Encapsulacion';
import Atomic from './components/componentsReact/Fundamentos/Atomic';
import Based from './components/componentsReact/Fundamentos/Based';
import Identifiers from './components/componentsReact/Fundamentos/Identifiers';
import Anatomia from './components/componentsReact/Fundamentos/Anatomia';
//Creacion
import Dependencias from './components/componentsReact/Creacion/Dependencias';
import Bundling from './components/componentsReact/Creacion/Bundling';
import Empaquetado from './components/componentsReact/Creacion/Empaquetado';
import Estructura from './components/componentsReact/Creacion/Estructura';
import Linting from './components/componentsReact/Creacion/Linting';
import Commint from './components/componentsReact/Creacion/Commint';
import Format from './components/componentsReact/Creacion/Format';
//Renderizado
import Componentes from './components/componentsReact/Renderizado/Componentes';
import JSX from './components/componentsReact/Renderizado/JSX';
import Expresiones from './components/componentsReact/Renderizado/Expresiones';
import Estilo from './components/componentsReact/Renderizado/Estilo';
import Dinamico from './components/componentsReact/Renderizado/Dinamico';
import Iterativo from './components/componentsReact/Renderizado/Iterativo';
//Estado
import Props from './components/componentsReact/Comunicacion/Props';
import Destructuring from './components/componentsReact/Comunicacion/Destructuring';
import PTypes from './components/componentsReact/Comunicacion/PTypes';
import Estad from './components/componentsReact/Comunicacion/Estado';
import UseState from './components/componentsReact/Comunicacion/UseState';
import Delegado from './components/componentsReact/Comunicacion/Delegado';
import CVClass from './components/componentsReact/Comunicacion/CVClass';
import CVFunc from './components/componentsReact/Comunicacion/CVFunc';
//Router
import Beneficios from './components/componentsReact/react_router/Beneficios';
import Pilares from './components/componentsReact/react_router/Pilares';
import Requis from './components/componentsReact/react_router/Requis';
import Crea_inst from './components/componentsReact/react_router/Crea_inst';
import Trabajo from './components/componentsReact/react_router/Trabajo';
import Link from './components/componentsReact/react_router/Link';
import Redirect from './components/componentsReact/react_router/Redirect';
//LOCALSTORAGE
import Local from './components/componetsOther/Local';
//PROTOCOLO
import Http from './components/componentsHTTP/Http';
import Pet_Res from './components/componentsHTTP/Pet_Res';
import Formato from './components/componentsHTTP/Formato';
import Metodos from './components/componentsHTTP/Metodos';
import Encabezado from './components/componentsHTTP/Encabezado';
//CODIGOS DE ESTADO
import Estado from './components/componetsOther/Estado';
//AXIOS
import Explicacion from './components/componentAxios/Explicacion';
import Incorporar from './components/componentAxios/Incorporar';
import Get from './components/componentAxios/Get';
import Post from './components/componentAxios/Post';
import Delete from './components/componentAxios/Delete';
//LARAVEL API
import Rest from './components/componentsLara/Rest';
import Verbs from './components/componentsLara/Verbs';
import Setting from './components/componentsLara/Setting';
import Seeding from './components/componentsLara/Seeding';
import Route from './components/componentsLara/Route';
import Error from './components/componentsLara/404';
//LARAVEL API RESTful
import Preparacion from './components/componentAPI/Preparacion';
import Modelos from './components/componentAPI/Modelos';
import Migraciones from './components/componentAPI/Migraciones';
import Seeders from './components/componentAPI/Seeders';
import Controladores from './components/componentAPI/Controladores';
import Rutas from './components/componentAPI/Rutas';
import CodigosEstado from './components/componentAPI/CodigosEstado';
import Operaciones from './components/componentAPI/Operaciones';
import Cache from './components/componentAPI/Cache';
//LARAVEL SANCTUM API RESTful
import Requisitos from './components/componentsSANCTUM/Requisitos';
import Instalacion from './components/componentsSANCTUM/Instalacion';
import ModeloUser from './components/componentsSANCTUM/ModeloUser';
import Register from './components/componentsSANCTUM/Register';
import Login from './components/componentsSANCTUM/Login';
import DataUser from './components/componentsSANCTUM/dataUser';
import Hook from './components/componentsReact/react_router/Hook';
/*--------------------------------------------------------------------*/


function App() {
  return (
    <div className="App">
      <Navbars />
      <h1 id="react">REACT</h1>
      <h2 id="fundamentos">Fundamentos y origen</h2>
      <EstrcClasica />
      <Encapsulacion />
      <Atomic />
      <Based/>
      <Identifiers/>
      <Anatomia/>
      <h2 id="creacion">Crear una aplicación en React</h2>
      <Dependencias />
      <Bundling />
      <Empaquetado />
      <Estructura />
      <Linting />
      <Commint />
      <Format />
      <h2 id="renderizado">Renderizado de componentes en el DOM</h2>
      <Componentes />
      <JSX />
      <Expresiones />
      <Estilo />
      <Dinamico />
      <Iterativo />
      <h2 id="estado">Comunicación y estado de los componentes</h2>
      <Props />
      <Destructuring />
      <PTypes />
      <Estad />
      <UseState />
      <Delegado />
      <CVClass />
      <CVFunc />
      Página de la información: <a href="https://openwebinars.net/">Cursos de Openwbinars</a>
      <br />
      <h1 id="react_router">REACT ROUTER</h1>
      <Beneficios/>
      <Pilares/>
      <Requis/>
      <Crea_inst/>
      <Trabajo/>
      <Link/>
      <Redirect/>
      <Hook/>
      Página de la información: <a href="https://johnserrano.co/blog/aprende-a-crear-rutas-con-react-router">Aprende a crear rutas con React Router</a>
      <br/>
      <h1 id="local">WINDOW LOCALSTORAGE</h1>
      <Local />
      Página de la información: <a href="https://www.w3schools.com/jsref/prop_win_localstorage.asp">Window localStorage</a>
      <br />
      <h1 id="protol">PROTOCOLO HTTP</h1>
      <Http />
      <Pet_Res />
      <Formato />
      <Metodos />
      <Encabezado />
      Página de la información: <a href="https://openwebinars.net/">Cursos de Openwbinars</a>
      <br />
      <h1 id="estado">CÓDIGOS DE ESTADO</h1>
      <Estado />
      Página de la información: <a href="https://developer.mozilla.org/es/docs/Web/HTTP/Status">Códigos de estado de respuesta HTTP</a>
      <br />
      <h1 id="axios">AXIOS</h1>
      <Explicacion />
      <Incorporar />
      <Get />
      <Post />
      <Delete />
      Página de la información: <a href="https://www.digitalocean.com/community/tutorials/react-axios-react-es">Cómo usar Axios con React</a>
      <br />
      <h1 id="laravel_api">LARAVEL API</h1>
      <Rest />
      <Verbs />
      <Setting />
      <Seeding />
      <Route />
      <Error />
      Página de la información: <a href="https://www.toptal.com/laravel/restful-laravel-api-tutorial">Laravel API Tutorial: How to Build and Test a RESTful API</a>
      <br />
      <h1 id="laravel">LARAVEL API RESTful</h1>
      <Preparacion />
      <Modelos />
      <Migraciones />
      <Seeders />
      <Controladores />
      <Rutas />
      <CodigosEstado />
      <Operaciones />
      <Cache />
      Página de la información: <a href="https://manuais.iessanclemente.net/index.php/LARAVEL_Framework_-_Tutorial_01_-_Creaci%C3%B3n_de_API_RESTful_(actualizado)">LARAVEL Framework - Tutorial 01 - Creación de API RESTful (actualizado)</a>
      <br />
      <h1 id="sanctum">LARAVEL SANCTUM API RESTful</h1>
      <Requisitos />
      <Instalacion />
      <ModeloUser />
      <Register />
      <Login />
      <DataUser />
      Página de la información: <a href="https://diarioprogramador.com/laravel-sanctum-crear-api-restful/">Laravel Sanctum crear API Restful</a>
      <br />
      <Navbars2 />
    </div>
  );
}

export default App;
