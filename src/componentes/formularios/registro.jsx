import React, { useState } from "react"
import "../styles/ui.css"

function FormRegistro() {
    // controlled state for all fields
    const [tipoSolicitud, setTipoSolicitud] = useState("");
    const [empresa, setEmpresa] = useState("");
    const [ruc, setRuc] = useState("");
    const [correo, setCorreo] = useState("");
    const [telefono, setTelefono] = useState("");

    const [productName, setProductName] = useState("");
    const [productType, setProductType] = useState("Medicamento");
    const [descripcion, setDescripcion] = useState("");
    const [paisOrigen, setPaisOrigen] = useState("");
    const [fabricante, setFabricante] = useState("");
    const [showCountries, setShowCountries] = useState(false);

    const COUNTRIES = [
        "Alemania","Andorra","Angola","Antigua y Barbuda","Arabia Saudita","Argelia","Argentina","Armenia","Australia","Austria","Azerbaiyán","Bahamas","Bangladés","Barbados","Baréin","Bélgica","Belice","Benín","Bielorrusia","Birmania","Bolivia","Bosnia y Herzegovina","Botsuana","Brasil","Brunéi","Bulgaria","Burkina Faso","Burundi","Bután","Cabo Verde","Camboya","Camerún","Canadá","Catar","Chad","Chile","China","Chipre","Colombia","Comoras","Congo","Corea del Norte","Corea del Sur","Costa de Marfil","Costa Rica","Croacia","Cuba","Dinamarca","Dominica","Dominicana, República","Ecuador","Egipto","El Salvador","Emiratos Árabes Unidos","Eritrea","Eslovaquia","Eslovenia","España","Estados Unidos","Estonia","Esuatini","Etiopía","Filipinas","Finlandia","Fiyi","Francia","Gabón","Gambia","Georgia","Ghana","Granada","Grecia","Guatemala","Guinea","Guinea-Bisáu","Guinea Ecuatorial","Guyana","Haití","Honduras","Hungría","India","Indonesia","Irak","Irán","Irlanda","Islandia","Islas Marshall","Islas Salomón","Israel","Italia","Jamaica","Japón","Jordania","Kazajistán","Kenia","Kuwait","Kirgistán","Laos","Letonia","Líbano","Lesoto","Liberia","Libia","Liechtenstein","Lituania","Luxemburgo","Madagascar","Malasia","Malaui","Maldivas","Malta","Marruecos","Mauricio","Mauritania","México","Micronesia","Moldavia","Mónaco","Mongolia","Montenegro","Mozambique","Namibia","Nauru","Nepal","Nicaragua","Níger","Nigeria","Noruega","Nueva Zelanda","Omán","Países Bajos","Pakistán","Palaos","Panamá","Papúa Nueva Guinea","Paraguay","Perú","Polonia","Portugal","Reino Unido","República Centroafricana","República Checa","República Democrática del Congo","República Dominicana","Rumania","Rusia","Ruanda","San Cristóbal y Nieves","San Marino","San Vicente y las Granadinas","Santa Lucía","Santo Tomé y Príncipe","Senegal","Serbia","Seychelles","Sierra Leona","Singapur","Siria","Somalia","Sri Lanka","Sudáfrica","Sudán","Sudán del Sur","Suecia","Suiza","Surinam","Taiwán","Tanzania","Tayikistán","Tailandia","Togo","Tonga","Trinidad y Tobago","Túnez","Turkmenistán","Turquía","Tuvalu","Ucrania","Uganda","Uruguay","Uzbekistán","Vanuatu","Vaticano","Venezuela","Vietnam","Yemen","Yibuti","Zambia","Zimbabue"
    ];

    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            {isOpen && (
                <div className="modal-overlay">
                    <div className="modal ui-card">
                        <form className="ui-form" aria-label="Verificación de Registro">
                            <h1 className="ui-title">Verificación de Datos</h1>

                            <section className="ui-section">
                                <h3 className="ui-section-title">Tipo de Solicitud</h3>
                                <div className="grid-2">
                                    <input className="ui-control" value={tipoSolicitud} readOnly />
                                </div>
                            </section>

                            <section className="ui-section">
                                <h3 className="ui-section-title">Información del Solicitante</h3>
                                <div className="grid-2">
                                    <input className="ui-control" value={empresa} readOnly placeholder="Nombre de la empresa" />
                                    <input className="ui-control" value={ruc} readOnly placeholder="RUC" />
                                    <input className="ui-control" value={correo} readOnly placeholder="Correo" />
                                    <input className="ui-control" value={telefono} readOnly placeholder="Teléfono" />
                                </div>
                            </section>

                            <section className="ui-section">
                                <h3 className="ui-section-title">Información del Producto</h3>
                                <div className="grid-2">
                                    <input className="ui-control" value={productName} readOnly placeholder="Nombre del producto" />
                                    <input className="ui-control" value={productType} readOnly placeholder="Tipo de producto" />
                                    <textarea className="ui-control ui-textarea full" value={descripcion} readOnly placeholder="Descripción" />
                                    <input className="ui-control" value={paisOrigen} readOnly placeholder="País de Origen" />
                                    <input className="ui-control" value={fabricante} readOnly placeholder="Fabricante" />
                                </div>
                            </section>

                            <div className="ui-actions">
                                <button type="button" className="btn btn-danger" onClick={() => setIsOpen(false)}>Cancelar</button>
                                <button type="submit" className="btn btn-primary" onClick={() => setIsOpen(false)}>Enviar Solicitud</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            <div className="ui-card">
                <form className="ui-form" aria-label="Formulario de Registro">
                    <div>
                        <h1 className="ui-title">Formulario de Registro</h1>
                    </div>

                    <section className="ui-section">
                        <h3 className="ui-section-title">Tipo de Solicitud</h3>
                        <select className="ui-control" aria-label="Tipo de solicitud" value={tipoSolicitud} onChange={(e) => setTipoSolicitud(e.target.value)}>
                            <option value="" hidden disabled>Seleccione su trámite</option>
                            <option>Nuevo Registro</option>
                            <option>Renovación</option>
                        </select>
                    </section>

                    <section className="ui-section">
                        <h3 className="ui-section-title">Información del Solicitante</h3>
                        <div className="grid-2">
                            <input className="ui-control" placeholder="Nombre de la empresa" value={empresa} onChange={(e) => setEmpresa(e.target.value)} />
                            <input className="ui-control" placeholder="RUC" value={ruc} onChange={(e) => setRuc(e.target.value.replace(/\D/g, ""))} inputMode="numeric" pattern="\d*" />
                            <input className="ui-control" placeholder="Correo" type="email" value={correo} onChange={(e) => setCorreo(e.target.value)} />
                            <input className="ui-control" placeholder="Teléfono" value={telefono} onChange={(e) => setTelefono(e.target.value.replace(/\D/g, ""))} inputMode="numeric" />
                        </div>
                    </section>

                    <section className="ui-section">
                        <h3 className="ui-section-title">Información del Producto</h3>
                        <div className="grid-2">
                            <input className="ui-control" placeholder="Nombre del producto" value={productName} onChange={(e) => setProductName(e.target.value)} />
                            <select className="ui-control" aria-label="Tipo de producto" value={productType} onChange={(e) => setProductType(e.target.value)}>
                                <option>Medicamento</option>
                                <option>Alimento</option>
                                <option>Cosmético</option>
                            </select>
                            <textarea className="ui-control ui-textarea full" placeholder="Descripción" value={descripcion} onChange={(e) => setDescripcion(e.target.value)} maxLength={200}></textarea>
                            <div className="combo">
                                <input
                                    className="ui-control"
                                    placeholder="País de Origen"
                                    value={paisOrigen}
                                    onChange={(e) => { setPaisOrigen(e.target.value); setShowCountries(true); }}
                                    onFocus={() => setShowCountries(true)}
                                    onBlur={() => setTimeout(() => setShowCountries(false), 150)}
                                />
                                {showCountries && (
                                    <div className="combo-list" role="listbox">
                                        {COUNTRIES.filter(c => c.toLowerCase().includes(paisOrigen.toLowerCase())).map(c => (
                                            <div
                                                key={c}
                                                className="combo-item"
                                                onMouseDown={(e) => { e.preventDefault(); setPaisOrigen(c); setShowCountries(false); }}
                                            >
                                                {c}
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                            <input className="ui-control" placeholder="Fabricante" value={fabricante} onChange={(e) => setFabricante(e.target.value)} />
                        </div>
                    </section>

                    <div className="ui-actions">
                        <button type="button" className="btn btn-primary" onClick={() => setIsOpen(true)}>Verificar Datos</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default FormRegistro
