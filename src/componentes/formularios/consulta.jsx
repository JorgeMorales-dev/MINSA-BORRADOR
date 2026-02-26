import React, { useState } from "react";
import "../styles/ui.css";

function FormConsulta() {
  // Estados controlados
  const [tipoConsulta, setTipoConsulta] = useState("");
  const [producto, setProducto] = useState("");
  const [numeroRegistro, setNumeroRegistro] = useState("");
  const [asunto, setAsunto] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [correo, setCorreo] = useState("");
  const [telefono, setTelefono] = useState("");

  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {isOpen && (
        <div className="modal-overlay">
          <div className="modal ui-card">
            <form className="ui-form" aria-label="Verificación de Consulta">
              <h1 className="ui-title">Verificación de Datos</h1>

              <section className="ui-section">
                <h3 className="ui-section-title">Información de la Consulta</h3>
                <div className="grid-2">
                  <input
                    className="ui-control"
                    value={tipoConsulta}
                    readOnly
                    placeholder="Tipo de Consulta"
                  />
                  <input
                    className="ui-control"
                    value={producto}
                    readOnly
                    placeholder="Nombre del Producto"
                  />
                  <input
                    className="ui-control"
                    value={numeroRegistro}
                    readOnly
                    placeholder="Número de Registro"
                  />
                  <input
                    className="ui-control"
                    value={asunto}
                    readOnly
                    placeholder="Asunto"
                  />
                </div>
              </section>

              <section className="ui-section">
                <h3 className="ui-section-title">Detalles y Contacto</h3>
                <div className="grid-2">
                  <textarea
                    className="ui-control ui-textarea full"
                    value={descripcion}
                    readOnly
                    placeholder="Descripción del Problema"
                  />
                  <input
                    className="ui-control"
                    value={correo}
                    readOnly
                    placeholder="Correo Electrónico"
                  />
                  <input
                    className="ui-control"
                    value={telefono}
                    readOnly
                    placeholder="Teléfono"
                  />
                </div>
              </section>

              <div className="ui-actions">
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={() => setIsOpen(false)}
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="btn btn-primary"
                  onClick={() => setIsOpen(false)}
                >
                  Enviar Consulta
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <div className="ui-card">
        <form className="ui-form" aria-label="Formulario de Consulta">
          <div>
            <h1 className="ui-title">Formulario de Consulta</h1>
          </div>

          <section className="ui-section">
            <h3 className="ui-section-title">Información de la Consulta</h3>
            <div className="grid-2">
              <select
                className="ui-control"
                aria-label="Tipo de consulta"
                value={tipoConsulta}
                onChange={(e) => setTipoConsulta(e.target.value)}
              >
                <option value="" hidden disabled>
                  Seleccione tipo de consulta
                </option>
                <option>Información General</option>
                <option>Problema Técnico</option>
                <option>Seguimiento de Solicitud</option>
                <option>Reporte de Error</option>
                <option>Otra Consulta</option>
              </select>
              <input
                className="ui-control"
                placeholder="Nombre del Producto"
                value={producto}
                onChange={(e) => setProducto(e.target.value)}
              />
              <input
                className="ui-control"
                placeholder="Número de Registro"
                value={numeroRegistro}
                onChange={(e) =>
                  setNumeroRegistro(e.target.value.replace(/\D/g, ""))
                }
                inputMode="numeric"
              />
              <input
                className="ui-control"
                placeholder="Asunto"
                value={asunto}
                onChange={(e) => setAsunto(e.target.value)}
              />
            </div>
          </section>

          <section className="ui-section">
            <h3 className="ui-section-title">Detalles y Contacto</h3>
            <div className="grid-2">
              <textarea
                className="ui-control ui-textarea full"
                placeholder="Descripción del Problema"
                value={descripcion}
                onChange={(e) => setDescripcion(e.target.value)}
                maxLength={300}
              ></textarea>
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

          <div className="ui-actions">
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => setIsOpen(true)}
            >
              Verificar Consulta
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default FormConsulta;
