import React, { useState } from "react";
import '../assets/css/style.bundle.css';


export default function FormularioPaciente({onVolverFormPac}) {
  const [identificaNombreSocial, setIdentificaNombreSocial] = useState("No");
  const [identificaPrematuro, setIdentificaPrematuro] = useState("No");
  const [prematuro, setPrematuro] = useState("");
  const [nombreSocial, setNombreSocial] = useState("");
  const [etnia, setEtnia] = useState("");
  const [discapacidad, setDiscapacidad] = useState("");
  const [tieneContacto, setTieneContacto] = useState("No");
  const [telefonoContacto, setTelefonoContacto] = useState("");
  const [tipoContacto, setTipoContacto] = useState("");
  const [edadCorrigidaAnos, setEdadCorrigidaAnos] = useState("");
  const [edadCorrigidaMeses, setEdadCorrigidaMeses] = useState("");
  const [edadCorrigidaDias, setEdadCorrigidaDias] = useState("");

  return (
    <div className="container mt-4">

       
    <div className="card shadow-sm p-10 border-0 flex-column" style={{ borderRadius: '14px', width: '100%', margin: '0 auto', paddingLeft: '4vw', paddingRight: '4vw'}}>
      <h5 className="font-weight-bolder" style={{height:"30px", marginTop:"5px"}} >Información de paciente</h5>
      <div className="accordion mt-4" id="accordionPaciente">
        {/* Identificación */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingIdentificacion">
            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseIdentificacion">
              Identificación de la persona
            </button>
          </h2>
          <div id="collapseIdentificacion" className="accordion-collapse collapse show" data-bs-parent="#accordionPaciente">
            <div className="accordion-body">
              <div className="row mb-5">
                <div className="col-md-4">
                  <label className="form-label">ID:</label>
                  <input type="text" className="form-control form-control-solid form-control-sm" value="1" disabled />
                </div>
                <div className="col-md-4">
                  <label className="form-label">Tipo de documento *</label>
                  <select className="form-select">
                    <option>RUN / DV</option>
                    <option>Pasaporte</option>
                    <option>RUT Materno</option>
                    <option>Folio comprobante parto</option>
                    <option>Identificador Fonasa</option>
                    <option>DNI</option>
                  </select>
                </div>
                <div className="col-md-4">
                  <label className="form-label">Nombres *</label>
                  <input type="text" className="form-control form-control-solid form-control-sm" defaultValue="María" />
                </div>
              </div>

              <div className="row mb-5">
                <div className="col-md-4">
                  <label className="form-label">Primer apellido *</label>
                  <input type="text" className="form-control form-control-solid form-control-sm" defaultValue="Carrasco" />
                </div>
                <div className="col-md-4">
                  <label className="form-label">Segundo apellido</label>
                  <input type="text" className="form-control form-control-solid form-control-sm" defaultValue="Arias" />
                </div>
              </div>

              <div className="mb-3">
                <label className="form-label">
                    ¿Usted se identifica con algún nombre social? *
                </label>

                <div className="radio-inline mt-2">
                    <div className="form-check form-check-inline">
                    <input
                        className="form-check-input"
                        type="radio"
                        name="nombreSocial"
                        value="Sí"
                        checked={identificaNombreSocial === "Sí"}
                        onChange={() => setIdentificaNombreSocial("Sí")}
                    />
                    <label className="form-check-label">Sí</label>
                    </div>

                    <div className="form-check form-check-inline">
                    <input
                        className="form-check-input"
                        type="radio"
                        name="nombreSocial"
                        value="No"
                        checked={identificaNombreSocial === "No"}
                        onChange={() => setIdentificaNombreSocial("No")}
                    />
                    <label className="form-check-label">No</label>
                    </div>
                </div>

                {identificaNombreSocial === "Sí" && (
                    <div className="mt-2">
                    <div className="col-md-4">
                    <input
                        type="text"
                        className="form-control form-control-solid form-control-sm"
                        placeholder="Nombre social"
                        value={nombreSocial}
                        onChange={(e) => setNombreSocial(e.target.value)}
                    />
                    </div>
                    </div>
                )}
                </div>

            </div>
          </div>
        </div>

        {/* Demográfico */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingDemo">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseDemo">
              Demográfico
            </button>
          </h2>
          <div id="collapseDemo" className="accordion-collapse collapse" data-bs-parent="#accordionPaciente">
            <div className="accordion-body">
              <div className="row mb-3">
                <div className="col-md-4">
                  <label className="form-label">Fecha de nacimiento</label>
                  <input type="date" className="form-control form-control-solid form-control-sm" />
                </div>
                <div className="col-md-4">
                  <label className="form-label">Edad</label>
                  <input type="text" className="form-control form-control-solid form-control-sm" defaultValue="35 años" />
                </div>
              </div>
                <div className="mb-5">
                    <label className="form-label">
                        ¿Es prematuro(a)? *
                    </label>

                    <div className="radio-inline mt-2">
                        <div className="form-check form-check-inline">
                        <input
                            className="form-check-input"
                            type="radio"
                            name="prematuro"
                            value="Sí"
                            checked={identificaPrematuro === "Sí"}
                            onChange={() => setIdentificaPrematuro("Sí")}
                        />
                        <label className="form-check-label">Sí</label>
                        </div>

                        <div className="form-check form-check-inline">
                        <input
                            className="form-check-input"
                            type="radio"
                            name="prematuro"
                            value="No"
                            checked={identificaPrematuro === "No"}
                            onChange={() => setIdentificaPrematuro("No")}
                        />
                        <label className="form-check-label">No</label>
                        </div>
                    </div>

                    {identificaPrematuro === "Sí" && (
                        <div className="mt-2">
                        <div className="col-md-6">
                        <label className="form-label d-block">Edad corregida de prematuro *</label>
                        <div className="row">
                            <div className="col-md-4">
                            <label className="form-label">Años</label>
                            <input
                                type="number"
                                className="form-control form-control-solid form-control-sm"
                                placeholder="Ingresar año"
                                value={edadCorrigidaAnos}
                                onChange={(e) => setEdadCorrigidaAnos(e.target.value)}
                            />
                            </div>
                            <div className="col-md-4">
                            <label className="form-label">Meses</label>
                            <input
                                type="number"
                                className="form-control form-control-solid form-control-sm"
                                placeholder="Ingresar mes"
                                value={edadCorrigidaMeses}
                                onChange={(e) => setEdadCorrigidaMeses(e.target.value)}
                            />
                            </div>
                            <div className="col-md-4">
                            <label className="form-label">Días</label>
                            <input
                                type="number"
                                className="form-control form-control-solid form-control-sm"
                                placeholder="Ingresar día"
                                value={edadCorrigidaDias}
                                onChange={(e) => setEdadCorrigidaDias(e.target.value)}
                            />
                            </div>
                        </div>
                        </div>
                        </div>
                    )}
                </div>
              <div className="row mb-5">
                <div className="col-md-4">
                  <label className="form-label">Sexo biológico</label>
                  <select className="form-select">
                    <option>Femenino</option>
                    <option>Masculino</option>
                    <option>Otro</option>
                  </select>
                </div>
                <div className="col-md-4">
                  <label className="form-label">Identidad de género</label>
                  <select className="form-select">
                    <option>Femenino</option>
                    <option>Masculino</option>
                    <option>Otro</option>
                  </select>
                </div>
                <div className="col-md-4">
                  <label className="form-label">Nacionalidad 1</label>
                  <select className="form-select">
                    <option>Chile</option>
                    <option>Argentina</option>
                    <option>Brasil</option>
                  </select>
                </div>
              </div>
              <div className="row mb-3">
                <div className="col-md-4">
                  <label className="form-label">Nacionalidad 2</label>
                  <select className="form-select">
                    <option>Chile</option>
                    <option>Argentina</option>
                    <option>Brasil</option>
                  </select>
                </div>
                <div className="col-md-4">
                  <label className="form-label">País origen</label>
                  <select className="form-select">
                    <option>Chile</option>
                    <option>Argentina</option>
                    <option>Brasil</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Situación de la persona */}
        <div className="accordion-item">
        <h2 className="accordion-header" id="headingSituacion">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSituacion">
            Situación de la persona
            </button>
        </h2>
        <div id="collapseSituacion" className="accordion-collapse collapse" data-bs-parent="#accordionPaciente">
            <div className="accordion-body">
            <div className="row mb-3">
                <div className="col-md-4">
                <label className="form-label">Estado civil *</label>
                <select className="form-select">
                    <option>Seleccione</option>
                    <option>Soltero/a</option>
                    <option>Casado/a</option>
                    <option>Viudo/a</option>
                    <option>Divorciado/a</option>
                </select>
                </div>
                <div className="col-md-4">
                <label className="form-label">Previsión *</label>
                <select className="form-select">
                    <option>Seleccione</option>
                    <option>Fonasa</option>
                    <option>Isapre</option>
                    <option>Sin previsión</option>
                </select>
                </div>
            </div>

          {/* Información FONASA */}
          <div className="alert alert-warning">
              ⚠️ Es necesario validar al paciente en FONASA
          </div>
          <div className="bg-light p-3 mb-3 border rounded" style={{padding: "2rem 2.25rem"}}>
              <h6 className="fw-bold">Datos desde FONASA</h6>
              <div className="row">
              <div className="col-md-4">
                  <p><strong>Nombre:</strong> María Carrasco Arias</p>
                  <p><strong>Tramo:</strong> No Aplica</p>
              </div>
              <div className="col-md-4">
                  <p><strong>Fecha de fallecimiento:</strong> n/a</p>
                  <p><strong>Fecha validación:</strong> 27/10/23 16:20:00</p>
              </div>
              <div className="col-md-4">
                  <p><strong>Tipo de previsión:</strong> Bloqueado - Bloqueado sin Inf.</p>
              </div>
              </div>
              <button className="btn btn-outline-primary">Validar</button>
          </div>

          {/* Pueblos originarios */}
          <div className="mb-5">
          <label className="form-label">¿Se considera perteneciente a algún pueblo indígena u originario? *</label>
          <div className="d-flex gap-3 mb-2">
            <div className="form-check form-check-inline">
              <input type="radio" className="form-check-input" name="etnia" value="Sí" onChange={() => setEtnia(true)} />
              <label className="form-check-label">Sí</label>
            </div>
            <div className="form-check form-check-inline">
              <input type="radio" className="form-check-input" name="etnia" value="No" defaultChecked onChange={() => setEtnia(false)} />
              <label className="form-check-label">No</label>
            </div>
          </div>
          {etnia && (
            <select className="form-select col-4">
              <option>Seleccione</option>
              <option>Mapuche</option>
              <option>Aymara</option>
              <option>Yagán</option>
            </select>
          )}
          </div>

          {/* Pueblo afrodescendiente */}
          <div className="mb-5">
              <label className="form-label">¿Se considera perteneciente a algún pueblo afrochileno o afrodescendiente? *</label>
              <div className="radio-inline mt-2">
                  <div className="form-check form-check-inline">
                  <input className="form-check-input" type="radio" name="puebloAfro" id="afroSi" value="Sí" />
                  <label className="form-check-label" htmlFor="afroSi">Sí</label>
                  </div>
                  <div className="form-check form-check-inline">
                  <input className="form-check-input" type="radio" name="puebloAfro" id="afroNo" value="No" defaultChecked />
                  <label className="form-check-label" htmlFor="afroNo">No</label>
                  </div>
              </div>
          </div>

          {/* Religión */}
          <div className="mb-5">
              <label className="form-label">¿Qué religión profesa?</label>
              <select className="form-select col-4">
              <option>Seleccione</option>
              <option>Católica</option>
              <option>Evangélica</option>
              <option>Testigo de Jehová</option>
              <option>Judaica</option>
              <option>Otra</option>
              <option>Ninguna</option>
              </select>
          </div>

            {/* Discapacidad condicional */}
          <div className="mb-3">
            <label className="form-label">¿Situación de discapacidad? *</label>
            <div className="d-flex gap-3 mb-5">
              <div className="form-check">
                <input type="radio" className="form-check-input" name="discapacidad" value="Sí" onChange={() => setDiscapacidad(true)} />
                <label className="form-check-label">Sí</label>
              </div>
              <div className="form-check">
                <input type="radio" className="form-check-input" name="discapacidad" value="No" defaultChecked onChange={() => setDiscapacidad(false)} />
                <label className="form-check-label">No</label>
              </div>
            </div>
            {discapacidad && (
              <>
                <label className="form-label">Discapacidad (valoración), según origen</label>
                <select className="form-select mb-5 col-4">
                  <option>Origen 1</option>
                  <option>Origen 2</option>
                </select>
                <label className="form-label">Discapacidad (valoración), según desempeño en la comunidad</label>
                <select className="form-select col-4">
                  <option>Sin discapacidad</option>
                  <option>Leve</option>
                  <option>Severa</option>
                </select>
              </>
            )}
          </div>

              </div>
          </div>
          </div>


          {/* Instrucción y trabajo */}
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingTrabajo">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTrabajo">
                Instrucción y trabajo
              </button>
            </h2>
            <div id="collapseTrabajo" className="accordion-collapse collapse" data-bs-parent="#accordionPaciente">
              <div className="accordion-body">
                <div className="row mb-5">
                  <div className="col-md-4">
                    <label className="form-label">Último curso aprobado</label>
                    <input type="text" className="form-control form-control-solid form-control-sm" />
                  </div>
                  <div className="col-md-4">
                    <label className="form-label">Último nivel aprobado</label>
                    <select className="form-select">
                      <option>Básica</option>
                      <option>Media</option>
                      <option>Superior</option>
                    </select>
                  </div>
                  <div className="col-md-4">
                    <label className="form-label">Condición de actividad</label>
                    <select className="form-select">
                      <option>Activos</option>
                      <option>Inactivos</option>
                      <option>Cesante o temporalmente sin trabajo</option>
                      <option>Ignorado</option>
                    </select>
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col-md-4">
                    <label className="form-label">Ocupaciones</label>
                    <select className="form-select">
                      <option>Miembro del poder ejecutivo</option>
                      <option>Profesional científico o intelectuales</option>
                      <option>Técnicos y profesionales del nivel medio</option>
                    </select>
                  </div>
                  <div className="col-md-4">
                    <label className="form-label">Ocupaciones detalladas</label>
                    <input type="text" className="form-control form-control-solid form-control-sm" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Dirección y contacto */}
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingDireccion">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseDireccion">
                Dirección y contacto
              </button>
            </h2>
            <div id="collapseDireccion" className="accordion-collapse collapse" data-bs-parent="#accordionPaciente">
              <div className="accordion-body">
              <div className="row mb-5">
                  <div className="col-md-4">
                    <label className="form-label">Región</label>
                    <select className="form-select">
                      <option value="">Seleccione</option>
                      <option>Arica y Parinacota</option>
                      <option>Valparaíso</option>
                      <option>Bío-Bío</option>
                      <option>Magallanes y la Antártica Chilena</option>
                      <option>Metropolitana</option>
                    </select>
                  </div>
                  <div className="col-md-4">
                    <label className="form-label">Provincia</label>
                    <select className="form-select">
                      <option value="">Seleccione</option>
                      <option>Arica</option>
                      <option>Valparaíso</option>
                      <option>Concepción</option>
                      <option>Magallanes</option>
                      <option>Santiago</option>
                    </select>
                  </div>
                  <div className="col-md-4">
                    <label className="form-label">Comuna</label>
                    <select className="form-select">
                      <option value="">Seleccione</option>
                      <option>Arica</option>
                      <option>Valparaíso</option>
                      <option>Concepción</option>
                      <option>Punta Arenas</option>
                      <option>Santiago</option>
                    </select>
                  </div>
                </div>
                <div className="row mb-5">
                  <div className="col-md-4">
                    <label className="form-label">Límite urbano censal</label>
                    <select className="form-select">
                      <option value="">Seleccione</option>
                      <option>Urbano</option>
                      <option>Rural</option>
                    </select>
                  </div>
                  <div className="col-md-4">
                    <label className="form-label">Via de la dirección</label>
                    <input type="text" className="form-control form-control-solid form-control-sm" />
                  </div>
                  <div className="col-md-4">
                    <label className="form-label">Calle</label>
                    <input type="text" className="form-control form-control-solid form-control-sm" />
                  </div>
                </div>
                <div className="row mb-5">
                  <div className="col-md-4">
                    <label className="form-label">Número</label>
                    <input type="text" className="form-control form-control-solid form-control-sm" />
                  </div>
                  <div className="col-md-4">
                    <label className="form-label">Complemento dirección</label>
                    <input type="text" className="form-control form-control-solid form-control-sm" />
                  </div>
                  <div className="col-md-4">
                    <label className="form-label">Resto de la dirección</label>
                    <input type="text" className="form-control form-control-solid form-control-sm" />
                  </div>
                </div>
                <div className="row mb-5">
                  <div className="col-md-4">
                    <label className="form-label">Teléfono 1</label>
                    <input type="text" className="form-control form-control-solid form-control-sm" />
                  </div>
                  <div className="col-md-4">
                    <label className="form-label">Teléfono 2</label>
                    <input type="text" className="form-control form-control-solid form-control-sm" />
                  </div>
                  <div className="col-md-4">
                    <label className="form-label">Correo electrónico 1</label>
                    <input type="email" className="form-control form-control-solid form-control-sm" />
                  </div>
                </div>
                <div className="row mb-5">
                  <div className="col-md-4">
                    <label className="form-label">Correo electrónico 2</label>
                    <input type="text" className="form-control form-control-solid form-control-sm" />
                  </div>
                  <div className="col-md-4">
                    <label className="form-label">Dirección 2</label>
                    <input type="text" className="form-control form-control-solid form-control-sm" />
                  </div>
                </div>
                <div className="mb-3 mt-4">
                  <label className="form-label">¿Tiene teléfono de algún contacto? *</label>
                  <div className="d-flex gap-3 mt-1 mb-5">
                      <div className="form-check">
                      <input
                          className="form-check-input"
                          type="radio"
                          name="tieneContacto"
                          id="contactoSi"
                          value="Sí"
                          checked={tieneContacto === "Sí"}
                          onChange={() => setTieneContacto("Sí")}
                      />
                      <label className="form-check-label" htmlFor="contactoSi">Sí</label>
                      </div>
                      <div className="form-check">
                      <input
                          className="form-check-input"
                          type="radio"
                          name="tieneContacto"
                          id="contactoNo"
                          value="No"
                          checked={tieneContacto === "No"}
                          onChange={() => setTieneContacto("No")}
                      />
                      <label className="form-check-label" htmlFor="contactoNo">No</label>
                      </div>
                  </div>

                  {tieneContacto === "Sí" && (
                      <div className="row mt-3">
                      <div className="col-md-4">
                          <label className="form-label">Teléfono</label>
                          <input
                          type="text"
                          className="form-control form-control-solid form-control-sm"
                          value={telefonoContacto}
                          onChange={(e) => setTelefonoContacto(e.target.value)}
                          placeholder="Ej: 987654321"
                          />
                      </div>
                      <div className="col-md-4">
                          <label className="form-label">Tipo de contacto</label>
                          <select
                          className="form-select"
                          value={tipoContacto}
                          onChange={(e) => setTipoContacto(e.target.value)}
                          >
                          <option value="">Seleccione</option>
                          <option value="Familiar">Del trabajo de la persona</option>
                          <option value="Familiar">Pareja o cónyuge</option>
                          <option value="Amigo">Familiar</option>
                          <option value="Vecino">Tutor(a)</option>
                          <option value="Otro">Vecino</option>
                          <option value="Otro">No responde</option>
                          </select>
                      </div>
                      </div>
                  )}
                  </div>
              </div>
            </div>
          </div>

      </div>
           {/* Encabezado superior con botón Volver, Cancelar y Guardar Cambios */}
        <div className="d-flex justify-content-between align-items-center bg-white"
            style={{ marginTop:"20px"}}>        
          <div className="d-flex align-items-center">
          <button
            className="btn btn-text-primary btn-hover-light-primary font-weight-bold"
            onClick= {onVolverFormPac}
          >
            ← VOLVER
          </button>
        </div>
        <div>
          <button className="btn btn-outline-primary btn-sm mr-4">CANCELAR</button>
          <button className="btn btn-primary btn-sm">GUARDAR CAMBIOS</button>
        </div>
      </div>
     </div>
    </div>
  );
  
}
