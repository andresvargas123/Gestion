import React, { useState } from "react";
import InscripcionFamiliar from './InscripcionFamiliar';
import '../assets/css/style.bundle.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const BusquedaFamilia = ({ onBuscarRut, onBuscarApellido, bloqueado, onCancelarClick }) => {
  const [open, setOpen] = useState(false);
  const [metodoSeleccionado, setMetodoSeleccionado] = useState("rut");
  
  return (
    <div className="container-fluid py-5 px-0" style={{ backgroundColor: '#eef0f8', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      {/* Título superior */}

      <div className="mb-1 p-4 border-0 d-flex flex-column w-100 ">
        <h2 className="mb-1">Antecedentes Inscripción Familiar</h2>
        <p className="text-muted">Complete los criterios para buscar la información familiar del paciente</p>
      </div>

      {/* Card principal */}
      <div className="card shadow-sm p-10 border-0 d-flex flex-column w-100 " style={{ borderRadius: '14px', width: '100%', margin: '0 auto', paddingLeft: '4vw', paddingRight: '4vw'}}>
        <h5 style={{height:"30px"}} className="mb-1">Opciones de Búsqueda y Creación</h5>
        
        <div className="row row-cols-1 row-cols-md-3 gx-4 gy-3 mb-6">
          {/* Rut */}
          <div className="col">
            <div className="form-group mb-0">
              <div className="row align-items-end">
                <div className="col-auto">
                  <div className="form-check">
                    <input
                      type="radio"
                      name="busqueda"
                      id="rut"
                      className="form-check-input"
                      checked={metodoSeleccionado === "rut"}
                      onChange={() => setMetodoSeleccionado("rut")}
                    />
                    <label htmlFor="rut" className="form-check-label">RUN</label>
                  </div>
                </div>
                <div className="col">
                  <input
                    type="text"
                    maxLength={8}
                    className="form-control form-control-solid form-control-sm"
                    disabled={bloqueado || metodoSeleccionado !== "rut"}
                    placeholder="123456789"
                  />
                </div>
                <div className="col">
                  <button
                    className="btn btn-outline-primary btn-sm"
                    onClick={onBuscarRut}
                    disabled={bloqueado || metodoSeleccionado !== "rut"}
                  >
                    Buscar
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Nº Familia */}
          <div className="col">
            <div className="form-group mb-0">
              <div className="row align-items-end">
                <div className="col-auto">
                  <div className="form-check">
                    <input
                      type="radio"
                      name="busqueda"
                      id="familia"
                      className="form-check-input"
                      checked={metodoSeleccionado === "familia"}
                      onChange={() => setMetodoSeleccionado("familia")}
                    />
                    <label htmlFor="familia" className="form-check-label">Nº Familia</label>
                  </div>
                </div>
                <div className="col">
                  <input
                    type="text"
                    className="form-control form-control-solid form-control-sm"
                    disabled={bloqueado || metodoSeleccionado !== "familia"}
                    placeholder="Ingrese Nº"
                  />
                </div>
                <div className="col">
                  <button
                    className="btn btn-outline-primary btn-sm"
                    onClick={onBuscarRut}
                    disabled={bloqueado || metodoSeleccionado !== "familia"}
                  >
                    Buscar
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Apellidos */}
          <div className="col">
            <div className="form-group mb-0">
              <div className="row align-items-end">
                <div className="col-auto">
                  <div className="form-check">
                    <input
                      type="radio"
                      name="busqueda"
                      id="apellido"
                      className="form-check-input"
                      checked={metodoSeleccionado === "apellido"}
                      onChange={() => setMetodoSeleccionado("apellido")}
                    />
                    <label htmlFor="apellido" className="form-check-label">Apellidos</label>
                  </div>
                </div>
                <div className="col">
                  <input
                    type="text"
                    className="form-control form-control-solid form-control-sm"
                    disabled={bloqueado || metodoSeleccionado !== "apellido"}
                    placeholder="Paterno"
                  />
                </div>
                <div className="col">
                  <input
                    type="text"
                    className="form-control form-control-solid form-control-sm"
                    disabled={bloqueado || metodoSeleccionado !== "apellido"}
                    placeholder="Materno"
                  />
                </div>
                <div className="col">
                  <button
                    className="btn btn-outline-primary btn-sm"
                    onClick={onBuscarApellido}
                    disabled={bloqueado || metodoSeleccionado !== "apellido"}
                  >
                    Buscar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>


        {/* Datos Familiares y Última inscripción (en fila y responsivo) */}
        <div className="row mb-4 gx-4 gy-3">
          {/* Datos Familiares */}
          <div className="col-12 col-md-6">
            <div className="shadow-sm bg-light rounded p-3 border h-100">
              <p className="mb-1"><strong>Nº de Familia:</strong> <span className="text-muted"> </span></p>
              <p className="mb-1"><strong>Estado Grupo:</strong> <span className="text-muted"> </span></p>
              <p className="mb-1"><strong>Estado Paciente:</strong> <span className="text-muted"> </span></p>
            </div>
          </div>

          {/* Última inscripción */}
          <div className="col-12 col-md-6">
            <div className="shadow-sm bg-light rounded p-3 border h-100">
              <p className="text-success fw-bold mb-1">Última Inscripción</p>
              <p className="mb-1"><strong>Fecha:</strong> <span className="text-muted"></span></p>
              <p className="mb-0"><strong>Establecimiento:</strong> <span className="text-muted"> </span></p>
            </div>
          </div>
        </div>

        {!bloqueado && (
          <div className="d-flex flex-wrap gap-2 mt-4 justify-content-center">
            <button
              className="btn btn-outline-danger btn-sm"
              onClick={onCancelarClick}
            >
              Cancelar
            </button>
          </div>
        )}



       </div>
    </div>       


  );
};

export default BusquedaFamilia;
