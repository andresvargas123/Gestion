
import React, { useState } from "react";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../assets/css/style.bundle.css';

export default function EntornoFamiliar({ onVolverEntornoFam }) {
  const [acordeonAbierto, setAcordeonAbierto] = useState('vivienda');
  const [modoEdicion, setModoEdicion] = useState(false);
  const [tieneAnimales, setTieneAnimales] = useState(null);
  const toggleAcordeon = (key) => {
    setAcordeonAbierto((prev) => (prev === key ? null : key));
  };

  return (
    <div className="container mt-4">
        <div className="card shadow-sm p-10 border-0 flex-column" style={{ borderRadius: '14px', width: '100%', margin: '0 auto', paddingLeft: '4vw', paddingRight: '4vw'}}>
      <h5 className="font-weight-bolder" style={{height:"30px", marginTop:"5px"}} >Antecedentes del Entorno Familiar</h5>
      <div className="accordion" id="acordeonEntorno">

        {/* Vivienda */}
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className={"accordion-button" + (acordeonAbierto === 'vivienda' ? "" : " collapsed")}
                    onClick={() => toggleAcordeon('vivienda')}>
              Vivienda
            </button>
          </h2>
          <div className={"accordion-collapse collapse" + (acordeonAbierto === 'vivienda' ? " show" : "")}>
            <div className="accordion-body row">
                <div className="row mb-5">
                    <div className="col-md-4">
                        <label className="form-label">Tipo</label>
                        <select className="form-select"><option>CASA</option></select>
                    </div>
                    <div className="col-md-4">
                        <label className="form-label">Tenencia</label>
                        <select className="form-select"><option>PROPIA SIN DEUDA</option></select>
                    </div>
                    <div className="col-md-4">
                        <label className="form-label">Conservación</label>
                        <select className="form-select"><option>BUENA</option></select>
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-md-4">
                        <label className="form-label">Material</label>
                        <select className="form-select"><option>MIXTO</option></select>
                    </div>
                    <div className="col-md-4">
                        <label className="form-label">Piso</label>
                        <select className="form-select"><option>CERÁMICO</option></select>
                    </div>
                    <div className="col-md-4">
                        <label className="form-label">Techo</label>
                        <select className="form-select"><option>ZINC</option></select>
                    </div>
                </div>
            </div>
          </div>
        </div>

        {/* Distribución Vivienda */}
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className={"accordion-button" + (acordeonAbierto === 'distribucion' ? "" : " collapsed")}
                    onClick={() => toggleAcordeon('distribucion')}>
              Distribución de la Vivienda
            </button>
          </h2>
          <div className={"accordion-collapse collapse" + (acordeonAbierto === 'distribucion' ? " show" : "")}>
            <div className="accordion-body row">
                <div className="row mb-5">
                    <div className="col-md-4">
                        <label className="form-label">N° de Piezas</label>
                        <input type="number" className="form-control form-control-solid form-control-sm" />
                    </div>
                    <div className="col-md-4">
                        <label className="form-label">N° Dormitorios</label>
                        <input type="number" className="form-control form-control-solid form-control-sm" />
                    </div>
                    <div className="col-md-4">
                        <label className="form-label">N° Camas</label>
                        <input type="number" className="form-control form-control-solid form-control-sm" />
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-md-4">
                        <label className="form-label">¿Baño dentro de la casa?</label>
                        <div className="d-flex gap-2">
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="bano" id="banoSi" />
                            <label className="form-check-label" htmlFor="banoSi">Sí</label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="bano" id="banoNo" />
                            <label className="form-check-label" htmlFor="banoNo">No</label>
                        </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <label className="form-label">¿Cocina dentro de la casa?</label>
                        <div className="d-flex gap-2">
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="cocina" id="cocinaSi" />
                            <label className="form-check-label" htmlFor="cocinaSi">Sí</label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="cocina" id="cocinaNo" />
                            <label className="form-check-label" htmlFor="cocinaNo">No</label>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </div>

        {/* Distribución del Sitio */}
        <div className="accordion-item">
        <h2 className="accordion-header">
            <button className={"accordion-button" + (acordeonAbierto === 'sitio' ? "" : " collapsed")}
                    onClick={() => toggleAcordeon('sitio')}>
            Distribución del Sitio
            </button>
        </h2>
        <div className={"accordion-collapse collapse" + (acordeonAbierto === 'sitio' ? " show" : "")}>
            <div className="accordion-body row">
            <div className="col-md-4">
                <label className="form-label">Total Familias</label>
                <input type="number" className="form-control form-control-solid form-control-sm" />
            </div>
            <div className="col-md-4">
                <label className="form-label">Total Hogares</label>
                <input type="number" className="form-control form-control-solid form-control-sm" />
            </div>
            </div>
        </div>
        </div>

        {/* Saneamiento y Basura */}
        <div className="accordion-item">
        <h2 className="accordion-header">
            <button className={"accordion-button" + (acordeonAbierto === 'saneamiento' ? "" : " collapsed")}
                    onClick={() => toggleAcordeon('saneamiento')}>
            Saneamiento Básico y Eliminación
            </button>
        </h2>
        <div className={"accordion-collapse collapse" + (acordeonAbierto === 'saneamiento' ? " show" : "")}>
            <div className="accordion-body row">
                <div className="row mb-5">
                    <div className="col-md-4">
                        <label className="form-label">Fuente origen del Agua</label>
                        <select className="form-select form-control-sm">
                        <option>AGUA POTABLE</option>
                        </select>
                    </div>
                    <div className="col-md-4">
                        <label className="form-label">¿Cómo llega el agua?</label>
                        <select className="form-select form-control-sm">
                        <option>CON LLAVE DENTRO DE VIVIENDA</option>
                        </select>
                    </div>
                    <div className="col-md-4">
                        <label className="form-label">Sistema de eliminación de Excretas</label>
                        <select className="form-select form-control-sm">
                        <option>ALCANTARILLADO</option>
                        </select>
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-md-4">
                        <label className="form-label">Sistema disposición de Basura</label>
                        <select className="form-select form-control-sm">
                        <option>RETIRO MUNICIPAL</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
        </div>

        {/* Electricidad, Cocina y Calefacción */}
        <div className="accordion-item">
        <h2 className="accordion-header">
            <button className={"accordion-button" + (acordeonAbierto === 'energia' ? "" : " collapsed")}
                    onClick={() => toggleAcordeon('energia')}>
            Electricidad y Calefacción
            </button>
        </h2>
        <div className={"accordion-collapse collapse" + (acordeonAbierto === 'energia' ? " show" : "")}>
            <div className="accordion-body row">
            <div className="col-md-4">
                <label className="form-label">Sistema eléctrico</label>
                <select className="form-select form-control-sm">
                <option>CONECTADO A RED PÚBLICA</option>
                </select>
            </div>
            <div className="col-md-4">
                <label className="form-label">Combustible que usa</label>
                <select className="form-select form-control-sm">
                <option>GAS</option>
                </select>
            </div>
            <div className="col-md-4">
                <label className="form-label">Sistema de calefacción</label>
                <select className="form-select form-control-sm">
                <option>LEÑA O ASERRÍN</option>
                </select>
            </div>
            </div>
        </div>
        </div>

       {/* Animales y Vectores */}
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className={"accordion-button" + (acordeonAbierto === 'animales' ? "" : " collapsed")}
              onClick={() => toggleAcordeon('animales')}
            >
              Animales y Vectores
            </button>
          </h2>
          <div className={"accordion-collapse collapse" + (acordeonAbierto === 'animales' ? " show" : "")}>
            <div className="accordion-body">
              {/* Pregunta si tiene animales domésticos */}
              <div className="row mb-5">
                <div className="col-md-12">
                  <label className="form-label">¿Tiene animales domésticos?</label>
                  <div className="d-flex gap-3">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="animalesDom"
                        id="animalesSi"
                        checked={tieneAnimales === 'Si'}
                        onChange={() => setTieneAnimales('Si')}
                      />
                      <label className="form-check-label" htmlFor="animalesSi">Sí</label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="animalesDom"
                        id="animalesNo"
                        checked={tieneAnimales === 'No'}
                        onChange={() => setTieneAnimales('No')}
                      />
                      <label className="form-check-label" htmlFor="animalesNo">No</label>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contenedor con borde para mejorar la apariencia - Animales domésticos */}
                {tieneAnimales === 'Si' && (
                <div className="row mb-5">
                    <div className="col-md-12">
                    <label className="form-label">Animales Domésticos</label>
                    <div className="border rounded p-4 shadow-sm bg-light">
                        <div className="row">
                        <div className="col-md-4">
                            <div className="form-check"><input className="form-check-input" type="checkbox" /> AVES DE CORRAL</div>
                            <div className="form-check"><input className="form-check-input" type="checkbox" /> PERROS</div>
                            <div className="form-check"><input className="form-check-input" type="checkbox" /> PORCINOS</div>
                            <div className="form-check"><input className="form-check-input" type="checkbox" /> REPTILES Y PECES</div>
                        </div>
                        <div className="col-md-4">
                            <div className="form-check"><input className="form-check-input" type="checkbox" /> BOVINOS</div>
                            <div className="form-check"><input className="form-check-input" type="checkbox" /> CAMELIDOS</div>
                            <div className="form-check"><input className="form-check-input" type="checkbox" /> CAPRINOS</div>
                            <div className="form-check"><input className="form-check-input" type="checkbox" /> CONEJOS Y ROEDORES</div>
                        </div>
                        <div className="col-md-4">
                            <div className="form-check"><input className="form-check-input" type="checkbox" /> EQUINOS</div>
                            <div className="form-check"><input className="form-check-input" type="checkbox" /> GATOS</div>
                            <div className="form-check"><input className="form-check-input" type="checkbox" /> MULARES</div>
                            <div className="form-check"><input className="form-check-input" type="checkbox" /> OVINOS</div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                )}

                {/* Contenedor con borde para mejorar la apariencia - Vectores */}
                <div className="row">
                <div className="col-md-12">
                    <label className="form-label">Vectores</label>
                    <div className="border rounded p-4 shadow-sm bg-light">
                    <div className="row">
                        <div className="col-md-4">
                        <div className="form-check"><input className="form-check-input" type="checkbox" /> CHINCHES</div>
                        <div className="form-check"><input className="form-check-input" type="checkbox" /> VINCHUCAS</div>
                        <div className="form-check"><input className="form-check-input" type="checkbox" /> ZANCUDOS</div>
                        <div className="form-check"><input className="form-check-input" type="checkbox" /> CUCARACHAS</div>
                        </div>
                        <div className="col-md-4">
                        <div className="form-check"><input className="form-check-input" type="checkbox" /> GARRAPATAS</div>
                        <div className="form-check"><input className="form-check-input" type="checkbox" /> MOSCAS</div>
                        <div className="form-check"><input className="form-check-input" type="checkbox" /> OTROS</div>
                        <div className="form-check"><input className="form-check-input" type="checkbox" /> PIOJOS</div>
                        </div>
                        <div className="col-md-4">
                        <div className="form-check"><input className="form-check-input" type="checkbox" /> PULGAS</div>
                        <div className="form-check"><input className="form-check-input" type="checkbox" /> RATONES</div>
                        <div className="form-check"><input className="form-check-input" type="checkbox" /> TERMITAS</div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                </div>
                </div>
                </div>

        {/* Entorno Domiciliario */}
        <div className="accordion-item">
        <h2 className="accordion-header">
            <button className={"accordion-button" + (acordeonAbierto === 'entorno' ? "" : " collapsed")}
                    onClick={() => toggleAcordeon('entorno')}>
            Entorno Domiciliario
            </button>
        </h2>
        <div className={"accordion-collapse collapse" + (acordeonAbierto === 'entorno' ? " show" : "")}>
            <div className="accordion-body">
            <label className="form-label">¿Qué problemas de contaminación o deterioro del entorno identifica en su barrio o localidad?</label>

            {/* Contenedor con borde para mejorar la apariencia */}
            <div className="border rounded p-4 shadow-sm bg-light">
                <div className="row">
                {/* Mapeo de los problemas en filas */}
                {[
                    "Contaminación del agua",
                    "Contaminación lumínica",
                    "Malos olores",
                    "Perros vagos",
                    "Contaminación del aire",
                    "Deficiente evacuación de aguas lluvias o inundación",
                    "Microbasurales",
                    "Ruidos molestos",
                    "Contaminación del suelo"
                ].map((item, idx) => (
                    <div key={idx} className="col-md-4 mb-2">
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" id={`problema-${idx}`} />
                        <label className="form-check-label" htmlFor={`problema-${idx}`}>{item}</label>
                    </div>
                    </div>
                ))}
                </div>
            </div>
            </div>
        </div>
        </div>


        {/* Información Familiar */}
        <div className="accordion-item">
        <h2 className="accordion-header">
            <button className={"accordion-button" + (acordeonAbierto === 'infoFamiliar' ? "" : " collapsed")}
                    onClick={() => toggleAcordeon('infoFamiliar')}>
            Información Familiar
            </button>
        </h2>
        <div id="collapseSelector" className={"accordion-collapse collapse" + (acordeonAbierto === 'infoFamiliar' ? " show" : "")}>
            <div className="accordion-body row">

            {/* Columna 1: Selector e ingreso */}
            <div className="col-md-4 mb-3">
                <label className="form-label">Rango Ingreso Familiar</label>
                <select className="form-select form-control-sm">
                <option>Seleccionar</option>
                <option>Menor o igual que 1 IM</option>
                <option>Mayor que 1 IM y menor o igual que 2 IM</option>
                <option>Mayor que 2 IM y menor o igual que 3 IM</option>
                <option>Mayor que 3 IM y menor o igual que 4 IM</option>
                <option>Mayor que 4 IM</option>
                </select>
                <label className="form-label mt-3">Total Ingreso Familiar</label>
                <input type="number" className="form-control form-control-solid form-control-sm"  disabled/>
                <label className="form-label mt-3">Ingreso Percápita</label>
                <input type="number" className="form-control form-control-solid form-control-sm" disabled/>
            </div>

            {/* Columna 2: Tabla ingresos */}
            <div className="col-md-8">
                <div className="d-flex align-items-end gap-2 mb-2">
                <div className="flex-grow-1">
                    <label className="form-label">Agregar otros ingresos</label>
                    <select className="form-select form-control-sm">
                    <option>Seleccionar</option>
                    <option>SUF</option>
                    <option>PASIS</option>
                    <option>Becas</option>
                    <option>Otros</option>
                    </select>
                </div>
                <div>
                    <label className="form-label"> $ Monto:</label>
                    <input type="number" className="form-control form-control-sm form-control-solid" />
                </div>
                <button className="btn btn-primary btn-sm mt-3">Grabar</button>
                </div>

                {/* Tabla */}
                <div className="table-responsive border rounded bg-white shadow-sm" style={{ maxHeight: "200px", overflowY: "auto" }}>
                <table className="table table-bordered mb-0">
                    <thead className="table-light text-center">
                    <tr>
                        <th>Detalle</th>
                        <th>$ Monto Ingreso</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td colSpan="2" className="text-center text-muted">No existen registros</td>
                    </tr>
                    </tbody>
                </table>
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
            onClick= {onVolverEntornoFam}
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
