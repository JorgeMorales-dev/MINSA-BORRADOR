import React from "react"
import "../styles/ui.css"

function FormRegistro() {
    return (
        <div className="ui-card">
            <form className="ui-form" aria-label="Formulario de Registro">
                    <div>
                        <h1 className="ui-title">Formulario de Registro</h1>
                    </div>

                    <section className="ui-section">
                        <h3 className="ui-section-title">Tipo de Solicitud</h3>
                        <select className="ui-control" aria-label="Tipo de solicitud">
                            <option>Nuevo Registro</option>
                            <option>Renovación</option>
                        </select>
                    </section>

                    <section className="ui-section">
                        <h3 className="ui-section-title">Información del Solicitante</h3>
                        <div className="grid-2">
                            <input className="ui-control" placeholder="Nombre de la empresa" />
                            <input className="ui-control" placeholder="RUC" />
                            <input className="ui-control" placeholder="Correo" />
                            <input className="ui-control" placeholder="Teléfono" />
                        </div>
                    </section>

                    <section className="ui-section">
                        <h3 className="ui-section-title">Información del Producto</h3>
                        <div className="grid-2">
                            <input className="ui-control" placeholder="Nombre del producto" />
                            <select className="ui-control" aria-label="Tipo de producto">
                                <option>Medicamento</option>
                                <option>Alimento</option>
                                <option>Cosmético</option>
                            </select>
                            <textarea className="ui-control ui-textarea full" placeholder="Descripción"></textarea>
                            <input className="ui-control" placeholder="País de Origen" />
                            <input className="ui-control" placeholder="Fabricante" />
                        </div>
                    </section>

                    <div className="ui-actions">
                        <button type="submit" className="btn btn-primary">Enviar Solicitud</button>
                    </div>
            </form>
        </div>
    )
}

export default FormRegistro
