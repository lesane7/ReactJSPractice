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
  render() {
    if (this.state.show) {
      return (
        <div id="hello">
          <h3>{this.props.subtitle}</h3>
          {this.props.mytext}{this.props.text}{this.props.Titt}<br />
          <button onClick={() => this.setState({ show: false })}>Toggle Show</button>
        </div >
      )
    } else {
      return <h1>{this.props.other}<br />
        <button onClick={() => this.setState({ show: true })}>Returner</button>
      </h1>

    }
  }
}

function App() {
  return (
    <div>
      The Component Isaac:
      <HelloIsaac mytext="Hello Elkin" subtitle="First position" other="Another case" />
      <HelloIsaac text="Isaac is very Genius" subtitle="Second position" other="Another case" />
      <HelloIsaac Titt="Expert" subtitle="Third position" other="Another case" />
    </div>
  );
}


export default App;
