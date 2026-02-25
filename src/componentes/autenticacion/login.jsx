import { useState } from "react"

function Login() {

  // 1️⃣ Estados (variables dinámicas)
  const [correo, setCorreo] = useState("")
  const [password, setPassword] = useState("")
  const [rol, setRol] = useState("Solicitante")

  // 2️⃣ Función que se ejecuta al enviar
  function handleLogin(e) {
    e.preventDefault()  // evita que recargue la página

    console.log("Correo:", correo)
    console.log("Password:", password)
    console.log("Rol:", rol)

    alert("Login estructural (no funcional)")
  }

  // 3️⃣ Lo que se renderiza
  return (
  <div style={styles.container}>
    <div style={styles.card}>
      <h2 style={styles.title}>Sistema de Registro Sanitario</h2>

      <form onSubmit={handleLogin} style={styles.form}>

        <input
          type="email"
          placeholder="Correo"
          value={correo}
          onChange={(e) => setCorreo(e.target.value)}
          style={styles.input}
        />

        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={styles.input}
        />

        <select
          value={rol}
          onChange={(e) => setRol(e.target.value)}
          style={styles.input}
        >
          <option>Solicitante</option>
          <option>Evaluador</option>
          <option>Administrador</option>
        </select>

        <button type="submit" style={styles.button}>
          Ingresar
        </button>

      </form>
    </div>
  </div>

  )
}

export default Login

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f4f6f9"
  },

  card: {
    backgroundColor: "white",
    padding: "40px",
    borderRadius: "10px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    width: "350px"
  },

  title: {
    textAlign: "center",
    marginBottom: "20px"
  },

  form: {
    display: "flex",
    flexDirection: "column",
    gap: "15px"
  },

  input: {
    padding: "10px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    fontSize: "14px"
  },

  button: {
    padding: "10px",
    borderRadius: "5px",
    border: "none",
    backgroundColor: "#1976d2",
    color: "white",
    fontWeight: "bold",
    cursor: "pointer"
  }
}
