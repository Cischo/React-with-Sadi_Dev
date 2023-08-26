// import Tarea from "./Tarea"
import Usuarias from "./components/Usuarias"
import Usuarios from "./components/Usuarios"
import avatar from "./assets/logo192.png"
import estilos from "./App.css"
function App() {
//   const tareas = [
//     {text: 'nombre: hacer las compras'},
//     {text: 'estudiar con Sadi_dev'},
//     {text: 'pasear al perro'}
//   ]; 
//  const mensaje = "Suscríbete para seguir recibiendo mis actualizaciones!!"
//   return (
//  <div>
//   <img src={avatar} alt="perfilUser"/>
//   <h1>{mensaje}</h1>
//   <h3>Lista de tareas</h3>
//   {tareas.map((tarea, index) => (
//     <Tarea key={index} texto={tarea.text}/>
//   ))}
const usuarias = [
  {text: "Nombre completo: Nina Calderón"},
  {text: "Edad: 27 años"},
  {text: "Descripción: Encargada del área de marketing"},
  {text: "Profesión: Community manager junior"},
  {text: "Rol: Admin"}
];
return (
  <main class="container">
  <h3>Perfil de usuarios</h3>
  <div class="main">
    <img src={avatar} alt="fotoAdmin" class="foto" />
  <Usuarios 
   nombre="Eliecer Aché" 
   edad="35 años"
   descripcion="Encargado del administrativa del equipo backend"
   profesion="Desarrollador web Full Stack"
   rol="Admin"/>
    </div>
    <div class="secondary">
    <img src={avatar} alt="fotoAdmin" class="foto2"/>
    {usuarias.map((usuaria, index) => (
    <Usuarias key={index} perfil={usuaria.text} class="usuaria"/>
   ))}
</div>
    </main>   
   );
}

export default App;
