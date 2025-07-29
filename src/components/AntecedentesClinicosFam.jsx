import React, { useState } from 'react';

export default function AntecedentesFamilia({onVolverAntClinFam}) {
  const [nuevaPatologia, setNuevaPatologia] = useState("");
    const [patologias, setPatologias] = useState([
      { nombre: "DEPRESIÓN", fecha: "15/07/2024", establecimiento: "CESFAM VMF" },
      { nombre: "EPILEPSIA", fecha: "14/02/2011", establecimiento: "CESFAM VMF" },
      { nombre: "TRASTORNO SALUD MENTAL", fecha: "20/06/2012", establecimiento: "CESFAM VMF" },
    ]);
  
    const handleAgregar = () => {
      if (nuevaPatologia.trim()) {
        const nueva = {
          nombre: nuevaPatologia.toUpperCase(),
          fecha: new Date().toLocaleDateString("es-CL"),
          establecimiento: "CESFAM VMF"
        };
        setPatologias([...patologias, nueva]);
        setNuevaPatologia("");
      }
    };
  
    const handleEliminar = (index) => {
      const nuevas = [...patologias];
      nuevas.splice(index, 1);
      setPatologias(nuevas);
    };
  const [patologiasFamilia, setPatologiasFamilia] = useState([
    "DEPRESION",
    "EPILEPSIA",
    "HIPOTIROIDISMO",
    "RESISTENCIA A LA INSULINA",
    "TRASTORNO SALUD MENTAL"
  ]);

  const [heredable, setHeredable] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [registroHeredables, setRegistroHeredables] = useState([]);

  const handleGuardar = () => {
    if (heredable && descripcion) {
      const nuevaPatologia = {
        nombre: heredable,
        fecha: new Date().toLocaleDateString(),
        descripcion
      };
      setRegistroHeredables([...registroHeredables, nuevaPatologia]);
      setHeredable('');
      setDescripcion('');
    }
  };

  return (
    <div className="container mt-4">
      <div className="card shadow-sm p-4 border-0 p-10" style={{ borderRadius: "14px" }}>
        <h5 className="font-weight-bolder" style={{height:"30px", marginTop:"5px"}} >Antecedentes Clínicos de la Familia</h5>
      {/* Familia */}
      <div className="mb-3">
        <label className="form-label fw-semibold">Nombre Familia</label>
        <div><strong>Familia :</strong> RIFO LACOUTURE</div>
      </div>


          {/* Patologías Familia */}
      <div className="row mt-4">
      <div className="accordion mb-4" id="acordeonFamilia">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingPat">
            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapsePat1" aria-expanded="true" aria-controls="collapsePat1">
              Patologías Familia
            </button>
          </h2>
          <div id="collapsePat1" className="accordion-collapse collapse show">
            <div className="accordion-body">
              <ul className="list-group">
                {patologiasFamilia.map((p, index) => (
                  <li key={index} className="list-group-item">{p}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

    <div className="accordion-item">
          <h2 className="accordion-header" id="headingPat2">
            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapsePat2"aria-expanded="false" aria-controls="collapsePat2">
              Antecedentes Patológicos Heredables
            </button>
          </h2>
          <div id="collapsePat2" className="accordion-collapse collapse show">
            <div className="accordion-body"></div>
  <div className="row" style={{ minHeight: "200px" }}>
    
    {/* Tabla de patologías */}
    <div className="col-md-8 d-flex flex-column">
      <div
        className="table-responsive border rounded bg-white shadow-sm flex-grow-1"
        style={{ maxHeight: "300px", overflowY: "auto" }}
      >
        <table className="table table-bordered mb-0">
          <thead className="table-light text-center">
            <tr>
              <th>Patología</th>
              <th>Fecha Ingreso</th>
              <th>Establecimiento</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {patologias.map((pat, index) => (
              <tr key={index}>
                <td>{pat.nombre}</td>
                <td>{pat.fecha}</td>
                <td>{pat.establecimiento}</td>
                <td className="text-center">
                  <button className="btn btn-sm btn-danger" onClick={() => handleEliminar(index)}>✖</button>
                </td>
              </tr>
            ))}
            {patologias.length === 0 && (
              <tr>
                <td colSpan="4" className="text-center text-muted">No existen registros</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>

    {/* Formulario ingreso de patología */}
    <div className="col-md-4 d-flex">
      <div className="p-3 border rounded bg-white shadow-sm w-100 d-flex flex-column justify-content-between">
        <div>
          <h6 className="fw-bold">Ingreso de Patologías Heredables</h6>
          <div className="mb-3">
            <label className="form-label">Nueva Patología</label>
            <input
              type="text"
              className="form-control"
              value={nuevaPatologia}
              onChange={(e) => setNuevaPatologia(e.target.value)}
              maxLength={100}
            />
          </div>
        </div>
        <div className="text-center">
          <button className="btn btn-primary btn-sm" onClick={handleAgregar}>GUARDAR</button>
        </div>
      </div>
    </div>

  </div>

        </div> 
    </div>
    </div>
            {/* Botón volver */}
        <div className="d-flex justify-content-between align-items-center bg-white"
              style={{ marginTop:"20px"}}>        
            <div className="d-flex align-items-center">
            <button
              className="btn btn-text-primary btn-hover-light-primary font-weight-bold"
              onClick= {onVolverAntClinFam}
            >
              ← VOLVER
            </button>
          </div>
        </div>
    </div>
    </div>
    </div>
  );
}
