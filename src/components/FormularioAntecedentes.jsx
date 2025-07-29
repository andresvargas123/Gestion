
import React, { useState } from "react";

export default function FormularioAntecedentes({ onVolverFormAnt }) {
  const [modoEdicion, setModoEdicion] = useState(false);

  const [nivelEducacional, setNivelEducacional] = useState("Media Completa");
  const [estadoCivil, setEstadoCivil] = useState("Soltera");
  const [previsionSalud, setPrevisionSalud] = useState("Fonasa B");
  const [previsionPension, setPrevisionPension] = useState("AFP Modelo");
  const [situacionLaboral, setSituacionLaboral] = useState("Activa");
  const [condicionTrabajo, setCondicionTrabajo] = useState("Dependiente");
  const [nombreTrabajo, setNombreTrabajo] = useState("Escuela Los Pensamientos");
  const [telefonoTrabajo, setTelefonoTrabajo] = useState("412582000");
  const [direccionTrabajo, setDireccionTrabajo] = useState("Av. Libertador Bernardo O’Higgins 2345");

  return (
    <div className="container mt-4">
      <div className="card shadow-sm p-4 border-0 p-10" style={{ borderRadius: "14px" }}>
        <h5 className="font-weight-bolder mb-3">Antecedentes de Identificación Individual</h5>

        <div className="mb-3">
          <strong>Nombre:</strong> LUISA DANIELA FORT DIMAS
          <span className="ms-4"><strong>RUT:</strong> 91520240-3</span>
        </div>

        <div className="accordion" id="accordionAntecedentes">

          {/* 1. Socialdemográficos */}
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingSocial">
              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSocial">
                Socialdemográficos
              </button>
            </h2>
            <div id="collapseSocial" className="accordion-collapse collapse show">
              <div className="accordion-body">
                <div className="row mb-5">
                  <div className="col-md-4">
                    <label className="form-label">Nivel educacional</label>
                    <select className="form-select" value={nivelEducacional} onChange={(e) => setNivelEducacional(e.target.value)}>
                      <option>Básica Incompleta</option>
                      <option>Básica Completa</option>
                      <option>Media Incompleta</option>
                      <option>Media Completa</option>
                      <option>Superior Incompleta</option>
                      <option>Superior Completa</option>
                    </select>
                  </div>
                  <div className="col-md-4">
                    <label className="form-label">Último curso aprobado</label>
                    <input type="text" className="form-control form-control-solid form-control-sm"/>
                  </div>
                  <div className="col-md-4">
                    <label className="form-label">Religión o Credo</label>
                        <select className="form-select">
                        <option>Seleccione</option>
                        <option>Católica</option>
                        <option>Evangélica</option>
                        <option>Testigo de Jehová</option>
                        <option>Judaica</option>
                        <option>Otra</option>
                        <option>Ninguna</option>
                        </select>
                  </div>
                  </div>
                  <div className="row mb-3">
                  <div className="col-md-4">
                    <label className="form-label">Parentesco con él Jefe(a) de Familia</label>
                    <select className="form-select">
                      <option>Seleccione</option>
                      <option>Jefe de Familia</option>
                      <option>Madre</option>
                      <option>Padre</option>
                      <option>Hermano(a)</option>
                      <option>Conyuge</option>
                      <option>Hijo(a)</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 2. Seguridad Social */}
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingSeguridad">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeguridad">
                Seguridad Social
              </button>
            </h2>
            <div id="collapseSeguridad" className="accordion-collapse collapse">
              <div className="accordion-body">
                <div className="row mb-5">
                  <div className="col-md-4">
                    <label className="form-label">Seguro de Accidentes y Enfermedad del Trabajo (Ley 16.744)</label>
                    <select className="form-select">
                      <option>Seleccione</option>
                      <option>Asociación Chilena de Seguridad</option>
                      <option>Instituto de Seguridad del Trabajo</option>
                      <option>Instituto de Normalización Previsional</option>
                      <option>Desprotegido</option>
                    </select>
                  </div>
                    <div className="col-md-4">
                        <label className="form-label">Otro Seguro</label>
                        <select className="form-select">
                        <option>Seleccione</option>
                        <option>Seguro Escolar</option>
                        <option>Seguro Privado</option>
                        <option>Seguro Obligatorio contra terceros</option>
                        <option>Desprotegido</option>
                        </select>
                    </div>
                    <div className="col-md-4">
                    <label className="form-label">Subsidios y Pensiones</label>
                    <select className="form-select">
                      <option>Seleccione</option>
                      <option>Pensión de Reparación Ley 19.234</option>
                      <option>Subsidio Único Familiar (SUF)</option>
                      <option>Pensión de Invalidez</option>
                      <option>Pensión de Gracia</option>
                      <option>Otras Pensiones</option>
                    </select>
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col-md-4">
                    <label className="form-label">Otra Pensión</label>
                    <input type="text" className="form-control form-control-solid form-control-sm" value={previsionPension} onChange={(e) => setPrevisionPension(e.target.value)} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 3. Datos del Empleo */}
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingEmpleo">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEmpleo">
                Datos del Empleo
              </button>
            </h2>
            <div id="collapseEmpleo" className="accordion-collapse collapse">
              <div className="accordion-body">
                <div className="row mb-5">
                  <div className="col-md-4">
                    <label className="form-label">Condición Ocupacional</label>
                    <select className="form-select" value={situacionLaboral} onChange={(e) => setSituacionLaboral(e.target.value)}>
                      <option>Seleccione</option>
                      <option>Trabajando Actualmente</option>
                      <option>Busca Trabajo por primera vez</option>
                      <option>Cesante</option>
                      <option>Quehaceres del Hogar</option>
                      <option>Estudiante</option>
                      <option>Pensionado(a) o Jubilado(a) sin trabajar</option>
                    </select>
                  </div>
                  <div className="col-md-4">
                    <label className="form-label">Categoría Ocupacional</label>
                    <select className="form-select" value={condicionTrabajo} onChange={(e) => setCondicionTrabajo(e.target.value)}>
                      <option>Seleccione</option>
                      <option>Independiente</option>
                      <option>Asalariado</option>
                      <option>Familiar No Renumerado</option>
                      <option>Trabajador Voluntario</option>
                    </select>
                  </div>
                  <div className="col-md-4">
                        <label className="form-label">Ocupación</label>
                        <input type="text" className="form-control form-control-solid form-control-sm" />
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-md-4">
                        <label className="form-label">Ingreso Monetario</label>
                        <input type="number" className="form-control form-control-solid form-control-sm" />
                    </div>
                </div>
              </div>
            </div>
          </div>

          {/* 4. Información Lugar de Trabajo */}
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingLugarTrabajo">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseLugarTrabajo">
                Información Lugar de Trabajo
              </button>
            </h2>
            <div id="collapseLugarTrabajo" className="accordion-collapse collapse">
              <div className="accordion-body">
                <div className="row mb-5">
                    <div className="col-md-4">
                        <label className="form-label">Rama Actividad</label>
                        <select className="form-select">
                        <option>Seleccione</option>
                        <option>Actividades de Asociaciones</option>
                        <option>Actividades Empresariales</option>
                        <option>Actividades Inmobiliarias</option>
                        </select>
                  </div>
                  <div className="col-md-4">
                    <label className="form-label">Nombre o Razón Social</label>
                    <input type="text" className="form-control form-control-solid form-control-sm" value={nombreTrabajo} onChange={(e) => setNombreTrabajo(e.target.value)}/>
                  </div>
                  <div className="col-md-4">
                        <label className="form-label">Región</label>
                        <select className="form-select">
                        <option>Seleccione</option>
                        <option>Arica y Parinacota</option>
                        <option>Valparaíso</option>
                        <option>Bío-Bío</option>
                        <option>Magallanes y la Antártica Chilena</option>
                        <option>Metropolitana</option>
                        </select>
                    </div>
                </div>
                <div className="row mb-5">
                    <div className="col-md-4">
                        <label className="form-label">Comuna</label>
                        <select className="form-select">
                        <option>Seleccione</option>
                        <option>Arica</option>
                        <option>Valparaíso</option>
                        <option>Concepción</option>
                        <option>Punta Arenas</option>
                        <option>Santiago</option>
                        </select>
                    </div>
                    <div className="col-md-4">
                        <label className="form-label">Tipo Dirección</label>
                        <select className="form-select">
                        <option>Seleccione</option>
                        <option>Avenida</option>
                        <option>Calle</option>
                        <option>Pasaje</option>
                        <option>Otro</option>
                        </select>
                    </div>
                  <div className="col-md-4">
                    <label className="form-label">Dirección</label>
                    <input type="text" className="form-control form-control-solid form-control-sm" value={nombreTrabajo} onChange={(e) => setNombreTrabajo(e.target.value)}/>
                  </div>
                </div>
                <div className="row mb-3">
                    <div className="col-md-4">
                    <label className="form-label">Número</label>
                    <input type="text" className="form-control form-control-solid form-control-sm" value={nombreTrabajo} onChange={(e) => setNombreTrabajo(e.target.value)}/>
                  </div>
                  <div className="col-md-4">
                    <label className="form-label">Resto Dirección</label>
                    <input type="text" className="form-control form-control-solid form-control-sm" value={nombreTrabajo} onChange={(e) => setNombreTrabajo(e.target.value)}/>
                  </div>
                  <div className="col-md-4">
                    <label className="form-label">Teléfono</label>
                    <input type="text" className="form-control form-control-solid form-control-sm" value={nombreTrabajo} onChange={(e) => setNombreTrabajo(e.target.value)}/>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        <div className="d-flex justify-content-between align-items-center bg-white"
            style={{ marginTop:"20px"}}>        
          <div className="d-flex align-items-center">
          <button
            className="btn btn-text-primary btn-hover-light-primary font-weight-bold"
            onClick= {onVolverFormAnt}
          >
            ← VOLVER
          </button>
        </div>
        <div>
          <button className="btn btn-outline-primary btn-sm mr-4">CANCELAR</button>
          <button className="btn btn-primary btn-sm" onClick={() => setModoEdicion(!modoEdicion)}>GUARDAR CAMBIOS</button>
        </div>
      </div>


      </div>
    </div>
  );
}
