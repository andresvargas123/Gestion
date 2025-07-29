import React, { useState } from "react";
import '../assets/css/style.bundle.css';

export default function AntecedentesClinicosFam({onVolverAntClin}) {
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

  return (
    <div className="container mt-4" >
      <div className="card shadow-sm p-4 border-0 p-10" style={{ borderRadius: "14px" }}>
      <h5 className="fw-bold">Antecedentes Clínicos del Integrante</h5>

      {/* Datos del integrante */}
     
        <div className="row mb-2" style={{marginTop:"5px" }}>
          <div className="col-md-3"><strong>RUT:</strong> 91520240 - 3</div>
          <div className="col-md-3"><strong>Edad:</strong> 38 AÑOS 11 MESES 27 DÍAS</div>
          <div className="col-md-3"><strong>Nombre:</strong> LUISA DANIELA FORT DIMAS ()</div>
          <div className="col-md-3"><strong>Domicilio:</strong> BERNARDO O’HIGGINS 297</div>
        </div>


  <div className="row" style={{ minHeight: "200px", marginTop:"15px" }}>
    
    {/* Tabla de patologías */}
    <div className="col-md-8 d-flex flex-column">
      <div
        className="table-responsive border rounded bg-white shadow-sm flex-grow-1"
        style={{ maxHeight: "300px", overflowY: "auto"}}
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
          <h6 className="fw-bold">Ingreso de Patologías</h6>
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


        {/* Botón volver */}
        <div className="d-flex justify-content-between align-items-center bg-white"
              style={{ marginTop:"20px"}}>        
            <div className="d-flex align-items-center">
            <button
              className="btn btn-text-primary btn-hover-light-primary font-weight-bold"
              onClick= {onVolverAntClin}
            >
              ← VOLVER
            </button>
          </div>
        </div>
    </div>
    </div>
  );
}
