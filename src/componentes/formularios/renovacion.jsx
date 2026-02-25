import React from "react"
import "../styles/ui.css"

function FormRenovacion() {
  return (
    <div className="ui-card">
      <form className="ui-form" aria-label="Solicitud de Renovación">
        <h1 className="ui-title">Solicitud de Renovación</h1>

        <section className="ui-section">
          <h3 className="ui-section-title">Datos del Registro</h3>
          <div className="grid-2">
            <input className="ui-control" placeholder="Número de Registro Sanitario" />
            <input className="ui-control" placeholder="Nombre del Producto" />
            <input className="ui-control" placeholder="Empresa Titular" />
          </div>
        </section>

        <section className="ui-section">
          <h3 className="ui-section-title">Información de Renovación</h3>
          <div className="grid-2">
            <input className="ui-control" type="date" />
            <textarea className="ui-control ui-textarea full" placeholder="Motivo de la renovación" />
            <textarea className="ui-control ui-textarea full" placeholder="Cambios realizados (si aplica)" />
          </div>
        </section>

        <div className="ui-actions">
          <button type="submit" className="btn btn-primary">Enviar Solicitud de Renovación</button>
        </div>
      </form>
    </div>
  )
}

export default FormRenovacion