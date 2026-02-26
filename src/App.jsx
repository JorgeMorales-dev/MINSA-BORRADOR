import { useState } from "react";
import "./App.css";

import Login from "./componentes/autenticacion/login";
import FormRegistro from "./componentes/formularios/registro";
import FormRenovacion from "./componentes/formularios/renovacion";
import FormConsulta from "./componentes/formularios/consulta";
import FormularioUsuario from "./componentes/formularios/formulariousuario";

function App() {
  const [vista, setVista] = useState("login"); 
  // login | home | registro | renovacion | consulta | usuario

  return (
    <>
      {vista === "home" && (
        <div className="app-layout">
          <header className="app-header">
            <div className="header-content">
              <div className="logo-section">
                <h1 className="app-title">Registro Sanitario</h1>
                <p className="app-subtitle">Portal de Gestión de Trámites</p>
              </div>
              <button className="btn-logout" onClick={() => setVista("login")}>Cerrar Sesión</button>
            </div>
          </header>

          <main className="app-main">
            <section className="hero-section">
              <div className="hero-content">
                <h2>Bienvenido al Portal</h2>
                <p>Realiza tus gestiones de forma rápida y segura. Selecciona una opción para comenzar.</p>
              </div>
            </section>

            <section className="cards-grid">
              <div className="feature-card" onClick={() => setVista("registro")}>
                <div className="card-icon">📝</div>
                <h3>Nuevo Registro</h3>
                <p>Solicita el registro de un nuevo producto sanitario.</p>
                <button className="btn btn-primary">Comenzar</button>
              </div>

              <div className="feature-card" onClick={() => setVista("renovacion")}>
                <div className="card-icon">🔄</div>
                <h3>Renovación</h3>
                <p>Renueva el registro de un producto existente.</p>
                <button className="btn btn-primary">Comenzar</button>
              </div>

              <div className="feature-card" onClick={() => setVista("consulta")}>
                <div className="card-icon">💬</div>
                <h3>Consulta</h3>
                <p>Realiza consultas o reporta problemas sobre tus trámites.</p>
                <button className="btn btn-primary">Comenzar</button>
              </div>

              <div className="feature-card" onClick={() => setVista("usuario")}>
                <div className="card-icon">👤</div>
                <h3>Crear Usuario</h3>
                <p>Registra un nuevo usuario en el sistema.</p>
                <button className="btn btn-primary">Comenzar</button>
              </div>
            </section>
          </main>

          <footer className="app-footer">
            <p>&copy; 2026 Registro Sanitario. Todos los derechos reservados.</p>
          </footer>
        </div>
      )}

      {vista === "registro" && (
        <>
          <header className="app-header compact">
            <div className="header-content">
              <button className="btn-back" onClick={() => setVista("home")}>⬅ Volver</button>
              <h1 className="app-title small">Formulario de Registro</h1>
            </div>
          </header>
          <main className="app-main">
            <FormRegistro />
          </main>
        </>
      )}

      {vista === "renovacion" && (
        <>
          <header className="app-header compact">
            <div className="header-content">
              <button className="btn-back" onClick={() => setVista("home")}>⬅ Volver</button>
              <h1 className="app-title small">Solicitud de Renovación</h1>
            </div>
          </header>
          <main className="app-main">
            <FormRenovacion />
          </main>
        </>
      )}

      {vista === "consulta" && (
        <>
          <header className="app-header compact">
            <div className="header-content">
              <button className="btn-back" onClick={() => setVista("home")}>⬅ Volver</button>
              <h1 className="app-title small">Formulario de Consulta</h1>
            </div>
          </header>
          <main className="app-main">
            <FormConsulta />
          </main>
        </>
      )}

      {vista === "usuario" && (
        <>
          <header className="app-header compact">
            <div className="header-content">
              <button className="btn-back" onClick={() => setVista("home")}>⬅ Volver</button>
              <h1 className="app-title small">Crear Nuevo Usuario</h1>
            </div>
          </header>
          <main className="app-main">
            <FormularioUsuario />
          </main>
        </>
      )}

      {vista === "login" && (
        <main className="app-main">
          <Login onSuccess={() => setVista("home")} />
        </main>
      )}
    </>
  );
}

export default App;