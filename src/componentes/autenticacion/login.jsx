import { useState } from "react"
import "../styles/ui.css"

function Login({ onSuccess }) {
  // Estados
  const [correo, setCorreo] = useState("")
  const [password, setPassword] = useState("")

  // Función que se ejecuta al enviar
  function handleLogin(e) {
    e.preventDefault()

    // Sin validación real - solo redirige al home
    if (onSuccess) {
      onSuccess()
    }
  }

  /*
    Código comentado para integrar con backend más adelante.
    Mantener comentado evita romper la funcionalidad actual.

    Ejemplo usando fetch (descomentar cuando quieras conectar al backend):

    async function handleLoginBackend(e) {
      e.preventDefault()
      try {
        const res = await fetch('https://api.tuservidor.com/auth/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email: correo, password })
        })

        if (!res.ok) {
          // manejar error (mostrar mensaje al usuario)
          console.error('Login failed', res.status)
          return
        }

        const data = await res.json()
        // ejemplo: data.token
        // guardar token en localStorage o cookie según sea necesario
        // localStorage.setItem('token', data.token)

        // llamar onSuccess para navegar a home
        if (onSuccess) onSuccess()
      } catch (err) {
        console.error('Error connecting to auth service', err)
      }
    }

    // También puedes usar axios si lo instalas:
    // import axios from 'axios'
    // const res = await axios.post('/auth/login', { email: correo, password })
    // manejar res.data
  */

  return (
    <div className="ui-card">
      <form className="ui-form" aria-label="Iniciar Sesión" onSubmit={handleLogin}>
        <h1 className="ui-title">Iniciar Sesión</h1>

        <section className="ui-section">
          <h3 className="ui-section-title">Credenciales</h3>
          <div className="grid-2">
            <input
              type="email"
              placeholder="Correo Electrónico"
              value={correo}
              onChange={(e) => setCorreo(e.target.value)}
              className="ui-control"
            />
            <input
              type="password"
              placeholder="Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="ui-control"
            />
          </div>
        </section>

        <div className="ui-actions">
          <button type="submit" className="btn btn-primary">
            Ingresar
          </button>
        </div>
      </form>
    </div>
  )
}

export default Login
