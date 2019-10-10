import React from 'react';
import './App.css';

/* function HelloIsaac(props) {
  console.log(props)
  return (
    <div id="hello">
      <h3>{props.subtitle}</h3>
      {props.mytext}{props.text}{props.Titt}
    </div>
  )
} */

//Escribir la misma funcion, pero ya con arrow function asignada a una const
// const App = () => <div>This the second greetting: <HelloIsaac /></div>

//Escribir la misma funcion, pero con definicion de Clase
class HelloIsaac extends React.Component {

  state = {
    show: true
  }
  //metodo de la clase para cambiar el estado del botón (arrow function para evitar bind)
  toggleShow = () => {
    this.setState({ show: !this.state.show })
  }
  render() {
    if (this.state.show) {
      return (
        <div id="hello">
          <h3>{this.props.subtitle}</h3>
          {this.props.text}{this.props.Titt}<br />
          <button onClick={this.toggleShow}>Toggle Show</button>
          {/* Para evitar usar enlaces con bind, se usa arrow function desde el metodo toggleShow
          <button onClick={this.toggleShow.bind(this)}>Toggle Show</button> */}
        </div >
      )
    } else {
      return (
        <div id="hello">
          <h1>{this.props.other}</h1><br />
          <h3>{this.props.mytext}</h3>
          <button onClick={this.toggleShow}>Returner</button>
        </div>
      )
    }
  }
}

function App() {
  return (
    <div>
      <h1 id="tit">The Components Isaac:</h1>
      <HelloIsaac mytext="Hello Elkin" subtitle="First position" other="The First Hide" />
      <HelloIsaac text="Isaac is very Genius" subtitle="Second position" other="The Second Hide" />
      <HelloIsaac Titt="Expert" subtitle="Third position" other="The Third Hide" />
    </div>
  )
}


export default App;
