import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

//nuevo componente
import Login from "./componentes/autenticacion/login"
import FormRegistro from './componentes/formularios/registro'
import FormRenovacion from './componentes/formularios/renovacion'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/*<Login />*/}
    {/*<FormRegistro/>*/}
    <FormRenovacion />
      {/*div de ejemplo
      <div>
        <h1>Hola soy un componente sin diseño</h1>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
          <p>HOLASOY UN LOGO</p>
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
          <p>HOLASOY UN LOGO 2</p>
        </a>
      </div>*/}
    </>
  )
}

export default App
