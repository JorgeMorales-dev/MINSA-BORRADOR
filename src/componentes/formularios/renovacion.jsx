
import React, { useState } from "react";
import "../styles/ui.css";

function FormRenovacion() {
  // track every field so we can show them in the modal
  // inicialmente vacíos; el usuario debe completarlos
  const [registroNumber, setRegistroNumber] = useState("");
  const [productName, setProductName] = useState("");
  const [empresaTitular, setEmpresaTitular] = useState("");
  const [renewalDate, setRenewalDate] = useState("");
  const [motivo, setMotivo] = useState("");
  const [cambios, setCambios] = useState("");

  // reference to the date input so the calendar icon can trigger focus
  const dateInputRef = React.useRef(null);


  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* modal comes first in the markup so that it sits on top */}
      {isOpen && (
        <div className="modal-overlay">
          <div className="modal ui-card">
            <form className="ui-form" aria-label="Verificación de Renovación">
              <h1 className="ui-title">Verificación de Datos</h1>

              <section className="ui-section">
                <h3 className="ui-section-title">Datos del Registro</h3>
                <div className="grid-2">
                  <input
                    className="ui-control"
                    value={registroNumber || ""}
                    readOnly
                    placeholder="Número de Registro Sanitario"
                  />
                  <input
                    className="ui-control"
                    value={productName || ""}
                    readOnly
                    placeholder="Nombre del Producto"
                  />
                  <input
                    className="ui-control"
                    value={empresaTitular || ""}
                    readOnly
                    placeholder="Empresa Titular"
                  />
                </div>
              </section>

              <section className="ui-section">
                <h3 className="ui-section-title">Información de Renovación</h3>
                <div className="grid-2">
                  <input
                    className="ui-control"
                    value={renewalDate || ""}
                    readOnly
                    placeholder="Fecha de renovación"
                  />
                  <textarea
                    className="ui-control ui-textarea full"
                    value={motivo || ""}
                    readOnly
                    placeholder="Motivo de la renovación"
                  />
                  <textarea
                    className="ui-control ui-textarea full"
                    value={cambios || ""}
                    readOnly
                    placeholder="Cambios realizados (si aplica)"
                  />
                </div>
              </section>

              <div className="ui-actions">
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => setIsOpen(false)}
                >
                  Cerrar
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <div className="ui-card">
        <form className="ui-form" aria-label="Solicitud de Renovación">
          <h1 className="ui-title">Solicitud de Renovación</h1>

          <section className="ui-section">
            <h3 className="ui-section-title">Datos del Registro</h3>
            <div className="grid-2">
              <input
                value={registroNumber}
                onChange={(e) => setRegistroNumber(e.target.value.replace(/\D/g, ""))}
                className="ui-control"
                placeholder="Número de Registro Sanitario"
                inputMode="numeric"
                pattern="\d*"
              />
              <input
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
                className="ui-control"
                placeholder="Nombre del Producto"
                // allow letters and numbers
              />
              <input
                value={empresaTitular}
                onChange={(e) => setEmpresaTitular(e.target.value)}
                className="ui-control"
                placeholder="Empresa Titular"
                // allow letters and numbers
              />
            </div>
          </section>

          <section className="ui-section">
            <h3 className="ui-section-title">Información de Renovación</h3>
            <div className="grid-2">
              {/* custom wrapper to show calendar icon and formatted placeholder */}
              {/* input with ref so icon click focuses it */}
              <div className="date-input-wrapper">
                <input
                  ref={dateInputRef}
                  value={renewalDate}
                  onChange={(e) => setRenewalDate(e.target.value)}
                  className="ui-control"
                  type="date"
                  placeholder="día de mes de año"
                />
                <svg
                  className="calendar-icon clickable"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  onClick={() => {
                    const el = dateInputRef.current;
                    if (!el) return;
                    if (typeof el.showPicker === "function") {
                      el.showPicker();
                    } else {
                      el.focus();
                    }
                  }}
                >
                  <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 
2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z" />
                </svg>
              </div>
              <textarea
                value={motivo}
                onChange={(e) => setMotivo(e.target.value)}
                className="ui-control ui-textarea full"
                placeholder="Motivo de la renovación"
                maxLength={200}
              />
              <textarea
                value={cambios}
                onChange={(e) => setCambios(e.target.value)}
                className="ui-control ui-textarea full"
                placeholder="Cambios realizados (si aplica)"
                maxLength={200}
              />
            </div>
          </section>

          <div className="ui-actions">
            <button type="button" onClick={() => setIsOpen(true)} className="btn btn-primary">
              Verificar Datos
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default FormRenovacion;
