import React, { useState } from "react"
import "../styles/ui.css"

function FormularioUsuario() {
  // Estados controlados
  const [nombre, setNombre] = useState("")
  const [apellido, setApellido] = useState("")
  const [correo, setCorreo] = useState("")
  const [telefono, setTelefono] = useState("")
  const [cedula, setCedula] = useState("")
  const [rol, setRol] = useState("")

  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {isOpen && (
        <div className="modal-overlay">
          <div className="modal ui-card">
            <form className="ui-form" aria-label="Verificación de Usuario">
              <h1 className="ui-title">Verificación de Datos</h1>

              <section className="ui-section">
                <h3 className="ui-section-title">Información Personal</h3>
                <div className="grid-2">
                  <input className="ui-control" value={nombre} readOnly placeholder="Nombre" />
                  <input className="ui-control" value={apellido} readOnly placeholder="Apellido" />
                  <input className="ui-control" value={cedula} readOnly placeholder="Cédula de Identidad" />
                  <input className="ui-control" value={correo} readOnly placeholder="Correo Electrónico" />
                  <input className="ui-control" value={telefono} readOnly placeholder="Teléfono" />
                </div>
              </section>

              <section className="ui-section">
                <h3 className="ui-section-title">Rol de Usuario</h3>
                <div className="grid-2">
                  <input className="ui-control" value={rol} readOnly placeholder="Rol" />
                </div>
              </section>

              <div className="ui-actions">
                <button type="button" className="btn btn-danger" onClick={() => setIsOpen(false)}>Cancelar</button>
                <button type="submit" className="btn btn-primary" onClick={() => setIsOpen(false)}>Crear Usuario</button>
              </div>
            </form>
          </div>
        </div>
      )}

      <div className="ui-card">
        <form className="ui-form" aria-label="Formulario de Registro de Usuario">
          <div>
            <h1 className="ui-title">Crear Nuevo Usuario</h1>
          </div>

          <section className="ui-section">
            <h3 className="ui-section-title">Información Personal</h3>
            <div className="grid-2">
              <input
                className="ui-control"
                placeholder="Nombre"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
              />
              <input
                className="ui-control"
                placeholder="Apellido"
                value={apellido}
                onChange={(e) => setApellido(e.target.value)}
              />
              <input
                className="ui-control"
                placeholder="Cédula de Identidad"
                value={cedula}
                onChange={(e) => setCedula(e.target.value.replace(/\D/g, ""))}
                inputMode="numeric"
              />
              <input
                className="ui-control"
                placeholder="Correo Electrónico"
                type="email"
                value={correo}
                onChange={(e) => setCorreo(e.target.value)}
              />
              <input
                className="ui-control"
                placeholder="Teléfono"
                value={telefono}
                onChange={(e) => setTelefono(e.target.value.replace(/\D/g, ""))}
                inputMode="numeric"
              />
            </div>
          </section>

          <section className="ui-section">
            <h3 className="ui-section-title">Rol de Usuario</h3>
            <div className="grid-2">
              <select
                className="ui-control"
                aria-label="Selecciona el rol del usuario"
                value={rol}
                onChange={(e) => setRol(e.target.value)}
              >
                <option value="" hidden disabled>Seleccione</option>
                <option>Usuario</option>
                <option>Funcionario</option>
                <option>Administrador</option>
              </select>
            </div>
          </section>

          <div className="ui-actions">
            <button type="button" className="btn btn-primary" onClick={() => setIsOpen(true)}>
              Verificar Datos
            </button>
          </div>
        </form>
      </div>
    </>
  )
}

export default FormularioUsuario
