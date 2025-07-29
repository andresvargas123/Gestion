import '../assets/css/style.bundle.css';

const SelectorFamilia = ({ onSeleccionar, onCancelar }) => {
const datos = [
    {
      integrante: "Tiene",
      apellidoPaterno: "Rifo",
      apellidoMaterno: "Aranda",
      numeroFamilia: "12345",
      sector: "Norte",
      direccion: "Av. Siempre Viva 742",
      estado: "Activo",
    },
    {
      integrante: "Tiene",
      apellidoPaterno: "Lopez",
      apellidoMaterno: "Perez",
      numeroFamilia: "67890",
      sector: "Centro",
      direccion: "Calle Falsa 123",
      estado: "Inactivo",
    },
  ];

  return (
    <div className="card shadow-sm p-10 border-0 d-flex flex-column w-100 " style={{ borderRadius: '14px', width: '100%', margin: '0 auto', paddingLeft: '4vw', paddingRight: '4vw'}}>
      <h5 style={{height:"30px"}} className="mb-1">Resultados de búsqueda por apellidos</h5>
      <p className="text-muted mb-4">Seleccione la familia correspondiente:</p>
      <div className="table-responsive">
      <table className="table table-hover table-bordered align-middle text-center">
        <thead className="table-light">
          <tr>
            <th>Integrante</th>
            <th>Apellido Pat.</th>
            <th>Apellido Mat.</th>
            <th>N° Familia</th>
            <th>Sector</th>
            <th>Dirección</th>
            <th>Estado</th>
            <th>Acción</th>
          </tr>
        </thead>
        <tbody>
          {datos.map((fila, i) => (
            <tr key={i}>
              <td>{fila.integrante}</td>
              <td>{fila.apellidoPaterno}</td>
              <td>{fila.apellidoMaterno}</td>
              <td>{fila.numeroFamilia}</td>
              <td>{fila.sector}</td>
              <td>{fila.direccion}</td>
              <td>
                <span
                  className={`badge ${
                    fila.estado === "Activo" ? "bg-success" : "bg-secondary"
                  }`}
                >
                  {fila.estado}
                </span>
              </td>
              <td>
                <button
                  className="btn btn-primary btn-sm"
                  onClick={onSeleccionar}
                >
                  Seleccionar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>

      <div className="d-flex justify-content-center mt-3">
        <button className="btn btn-outline-primary btn-sm">
          Crear Nueva Familia
        </button>
      </div>

      <div className="d-flex justify-content-end mt-3">
        <button className="btn btn-outline-danger btn-sm" onClick={onCancelar}>
          Cancelar
        </button>
      </div>
    </div>
  );
};
export default SelectorFamilia;