import React from 'react';
import './App.css';

function HelloIsaac(props) {
  console.log(props)
  return (

    <div id="hello">
      <h3>{props.subtitle}</h3>
      {props.mytext}{props.text}{props.Titt}
    </div>
  )
}

//Escribir la misma funcion, pero ya con arrow function asignada a una const

// const App = () => <div>This the second greetting: <HelloIsaac /></div>

//Escribir la misma funcion, pero con definicion de Clase

// class App extends React.Component {
//   render() {
//     return (
//       <div> This the third new greetting for my son: <HelloIsaac /> </div >
//     )
//   }
// }

function App() {
  return (
    <div>
      The Component Isaac:
      <HelloIsaac mytext="Hello Elkin" subtitle="First position" />
      <HelloIsaac text="Isaac is very Genius" subtitle="Second position" />
      <HelloIsaac Titt="Expert" subtitle="Third position" />
    </div>
  );
}


export default App;
