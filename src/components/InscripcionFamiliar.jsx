import React, { useState, useRef } from "react";

import '../assets/css/style.bundle.css';
import EntornoFamiliar from "./EntornoFamiliar";

const initialForm = {
  apellidoPaterno: "",
  apellidoMaterno: "",
  numFamilia: "",
  fechaApertura: "",
  region: "",
  comuna: "",
  tipoDireccion: "",
  nombreCalle: "",
  numero: "",
  restoDireccion: "",
  sector: "",
  codUnidadVecinal: "",
  telefonoFijo: "",
  telefonoMovil: "",
  email: "",
  codPostal: "",
  puntaje: "",
  clasificacion: "",
  tipoFamilia: "",
  cicloVital: "",
  scoreRiesgo: "",
  fechaCierre: "",
  motivoCierre: "",
};



const initialIntegrantes = [
  {
    rut: "91537276-7",
    nombre: "ANGELICA BEATRIZ BRAGA MOREIRA",
    edad: "65 años",
    parentesco: "JEFE DE FAMILIA",
    fechaIng: "05/06/2025",
    estado: "Ingresado",
    certificado: "",
    fechaEgre: "",
    fechaReing: "",
    historico: "",
    patologias: "",
  },
  {
    rut: "91512376-7",
    nombre: "MARCOS ADAM BRAGA MOREIRA",
    edad: "42 años",
    parentesco: "HIJO(A)",
    fechaIng: "05/06/2025",
    estado: "Ingresado",
    certificado: "",
    fechaEgre: "",
    fechaReing: "",
    historico: "",
    patologias: "",
  },
  {
    rut: "20543219-8",
    nombre: "SOFIA ELENA BRAGA SANTANDER",
    edad: "38 años",
    parentesco: "NUERA",
    fechaIng: "15/07/2025",
    estado: "Egresado",
    certificado: "",
    fechaEgre: "",
    fechaReing: "",
    historico: "",
    patologias: "",
  },
];

export default function InscripcionFamiliar({onCerrarInsFam, onModificarPaciente, onModificarAntecedentes, onAntecedentesClinicos, onAntecedentesClinicosFam, onEntornoFamiliar}) {
  const [form, setForm] = useState(initialForm);
  const [integranteSeleccionado, setIntegranteSeleccionado] = useState(null);
  const [integrantes, setIntegrantes] = useState(initialIntegrantes);
  const [seccionExpandida, setSeccionExpandida] = useState({
    ubicacion: true,
    contacto: false,
    clasificacion: false,
    cierre: false,
  });
  const [nuevoIntegrante, setNuevoIntegrante] = useState({ rut: "", parentesco: "" });
  const btnModificarPacienteRef = useRef(null);
  const btnModificarIdentificacionRef = useRef(null);
  const btnModificarAntecedentesClinicosRef = useRef(null);
  const btnModificarCertificadoGrupoFamiliarRef = useRef(null);


  const buscarPorApellidos = () => {
    if (!form.apellidoPaterno || !form.apellidoMaterno) {
      alert("Por favor complete ambos apellidos");
      return;
    }
    alert(`Buscar por apellidos: ${form.apellidoPaterno} ${form.apellidoMaterno}`);
  };

  const buscarPorNumFamilia = () => {
    if (!form.numFamilia) {
      alert("Por favor ingrese el número de familia");
      return;
    }
    alert(`Buscar por N° Familia: ${form.numFamilia}`);
  };



  const [textVisible, setTextVisible] = useState({
    modificarPaciente: false,
    modificarCierre: false,
    modificarAntecedentesClinicos: false,
    modificarCertificadoGrupoFamiliar: false,
  });



  const limpiar = () => {
    setForm(initialForm);
    setSeccionExpandida({
      ubicacion: true,
      contacto: false,
      clasificacion: false,
      cierre: false,
    });
    setIntegranteSeleccionado(null);
    setNuevoIntegrante({ rut: "", parentesco: "" });
  };

  const guardar = () => {
    const camposRequeridos = ["apellidoPaterno", "apellidoMaterno"];
    const camposVacios = camposRequeridos.filter((campo) => !form[campo]);
    if (camposVacios.length > 0) {
      alert("Por favor complete los campos requeridos: " + camposVacios.join(", "));
      return;
    }
    alert("Datos guardados correctamente");
  };

  const agregarIntegrante = () => {
    if (!nuevoIntegrante.rut || !nuevoIntegrante.parentesco) {
      alert("Por favor complete RUN y Parentesco para agregar un integrante");
      return;
    }
    setIntegrantes([
      ...integrantes,
      {
        rut: nuevoIntegrante.rut,
        nombre: "NOMBRE POR DEFINIR",
        edad: "Edad no especificada",
        parentesco: nuevoIntegrante.parentesco,
        fechaIng: new Date().toLocaleDateString("es-CL"),
        estado: "Ingresado",
        certificado: "",
        fechaEgre: "",
        fechaReing: "",
        historico: "",
        patologias: "",
      },
    ]);
    setNuevoIntegrante({ rut: "", parentesco: "" });
  };

  const handleEgresar = (index) => {
    setIntegrantes((prev) =>
      prev.map((integrante, i) =>
        i === index
          ? { ...integrante, estado: "Egresado", fechaEgre: new Date().toLocaleDateString("es-CL") }
          : integrante
      )
    );
  };

  const handleReingresar = (index) => {
    setIntegrantes((prev) =>
      prev.map((integrante, i) =>
        i === index
          ? { ...integrante, estado: "Ingresado", fechaReing: new Date().toLocaleDateString("es-CL") }
          : integrante
      )
    );
  };

  const handleEliminar = (index) => {
    setIntegrantes((prev) => prev.filter((_, i) => i !== index));
    setIntegranteSeleccionado(null);
  };

  const handleModificarPaciente = () => {
  // Lógica para modificar los datos del paciente
  alert("Modificar datos del paciente");
};

const handleModificarIdentificacion = () => {
  // Lógica para modificar los datos de identificación personal
  alert("Modificar datos de identificación personal");
};

const handleModificarAntecedentesClinicos = () => {
  // Lógica para modificar los antecedentes clínicos
  alert("Modificar antecedentes clínicos");
};

const handleModificarCertificadoGrupoFamiliar = () => {
  // Lógica para modificar el certificado del grupo familiar
  alert("Modificar certificado grupo familiar");
};


  const toggleSeccion = (seccion) => {
    const seccionesExpandidas = Object.keys(seccionExpandida).filter((key) => seccionExpandida[key]);
    if (seccionExpandida[seccion]) {
      setSeccionExpandida((prev) => ({ ...prev, [seccion]: false }));
    } else {
      if (seccionesExpandidas.length >= 2) {
        const primeraExpandida = seccionesExpandidas[0];
        setSeccionExpandida((prev) => ({
          ...prev,
          [primeraExpandida]: false,
          [seccion]: true,
        }));
      } else {
        setSeccionExpandida((prev) => ({ ...prev, [seccion]: true }));
      }
    }
  };

  const irASeccion = (seccion) => {
    const nuevasSeccionesExpandidas = Object.keys(seccionExpandida).reduce(
      (acc, key) => ({ ...acc, [key]: key === seccion }),
      {}
    );
    setSeccionExpandida(nuevasSeccionesExpandidas);
  };

  const esSeccionCompleta = (seccion) => {
    switch (seccion) {
      case "ubicacion":
        return form.region && form.comuna;
      case "contacto":
        return form.telefonoFijo || form.telefonoMovil || form.email;
      case "clasificacion":
        return form.puntaje || form.clasificacion;
      case "cierre":
        return form.fechaCierre && form.motivoCierre;
      default:
        return false;
    }
  };

  const estiloHeaderOriginal = {
    borderBottom: "1px solid var(--blue-100)",
    marginBottom: 14,
  };

  const estiloTituloOriginal = {
    fontWeight: 700,
    color: "var(--blue-700)",
    marginBottom: 2,
    fontSize: "1rem",
    letterSpacing: 0.08,
    lineHeight: 1.2,
    fontFamily: "var(--font-family-sans-serif)",
  };

  const estiloSeccionHeader = {
    ...estiloHeaderOriginal,
    padding: "0.75rem 1rem",
    cursor: "pointer",
    transition: "all 0.3s ease",
    borderBottom: "1px solid var(--blue-100)",
    marginBottom: "0.5rem",
    borderRadius: "8px",
    backgroundColor: "var(--blue-50)",
  };

  const estiloTituloSeccion = {
    ...estiloTituloOriginal,
    fontSize: "0.9rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    margin: 0,
  };

  const secciones = [
    { key: "ubicacion", titulo: "Dirección", icono: "📍" },
    { key: "contacto", titulo: "Contacto", icono: "📞" },
    { key: "clasificacion", titulo: "Clasificación", icono: "📊" },
    { key: "cierre", titulo: "Cierre", icono: "❌" },
  ];

  const renderNavegacionRapida = () => (
    <div
      style={{
        display: "flex",
        gap: "0.5rem",
        marginBottom: "1rem",
        padding: "0.75rem",
        backgroundColor: "var(--grey-100)",
        borderRadius: "8px",
        flexWrap: "wrap",
        border: "1px solid var(--grey-200)",
      }}
    >
      {secciones.map((seccion) => (
        <button
          key={seccion.key}
          className="btn"
          style={{
            backgroundColor: seccionExpandida[seccion.key] ? "var(--blue-500)" : "var(--white)",
            color: seccionExpandida[seccion.key] ? "var(--white)" : "var(--grey-700)",
            border: `1px solid ${seccionExpandida[seccion.key] ? "var(--blue-500)" : "var(--grey-300)"}`,
            fontSize: "0.85rem",
            padding: "0.5rem 1rem",
            borderRadius: "8px",
            transition: "all 0.2s ease",
            position: "relative",
            fontWeight: 500,
            flex: "1 1 auto",
            minWidth: "120px",
          }}
          onClick={() => irASeccion(seccion.key)}
          onMouseOver={(e) => {
            if (!seccionExpandida[seccion.key]) {
              e.target.style.backgroundColor = "var(--blue-100)";
              e.target.style.borderColor = "var(--blue-400)";
            }
          }}
          onMouseOut={(e) => {
            if (!seccionExpandida[seccion.key]) {
              e.target.style.backgroundColor = "var(--white)";
              e.target.style.borderColor = "var(--grey-300)";
            }
          }}
        >
          <span style={{ marginRight: "0.5rem" }}>{seccion.icono}</span>
          <span>{seccion.titulo}</span>
          {esSeccionCompleta(seccion.key) && (
            <span
              style={{
                position: "absolute",
                top: "-0.4rem",
                right: "-0.4rem",
                backgroundColor: "var(--green-500)",
                color: "var(--white)",
                borderRadius: "50%",
                width: "1rem",
                height: "1rem",
                fontSize: "0.6rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: "bold",
              }}
            >
              ✓
            </span>
          )}
        </button>
      ))}
    </div>
  );

  const renderSeccionCierre = () => (
    <div>
      <div
        style={{
          ...estiloSeccionHeader,
          backgroundColor: seccionExpandida.cierre ? "var(--blue-100)" : "var(--blue-50)",
        }}
        onClick={() => toggleSeccion("cierre")}
        onMouseOver={(e) => {
          if (!seccionExpandida.cierre) {
            e.target.style.backgroundColor = "var(--blue-100)";
          }
        }}
        onMouseOut={(e) => {
          if (!seccionExpandida.cierre) {
            e.target.style.backgroundColor = "var(--blue-50)";
          }
        }}
      >
        <h6 style={estiloTituloSeccion}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
            <span style={{ fontSize: "1rem" }}>❌</span>
            <span>Cierre de Grupo Familiar</span>
            {esSeccionCompleta("cierre") && (
              <span style={{ color: "var(--green-600)", fontSize: "1rem" }}>✓</span>
            )}
          </div>
          <span style={{ fontSize: "1rem", color: "var(--blue-600)" }}>
            {seccionExpandida.cierre ? "▼" : "▶"}
          </span>
        </h6>
      </div>
      {seccionExpandida.cierre && (
        <div
          style={{
            paddingLeft: "1rem",
            marginBottom: "1rem",
            animation: "slideDown 0.3s ease-out",
          }}
        >
          <div className="row mb-3 g-3">
            <div className="col-12 col-md-6">
              <label className="form-label fw-bold mb-1" style={{ color: "var(--grey-800)", fontSize: "0.85rem" }}>
                Fecha de Cierre
              </label>
              <input
                type="date"
                className="form-control form-control-solid"
                value={form.fechaCierre}
                onChange={(e) => setForm((f) => ({ ...f, fechaCierre: e.target.value }))}
                style={{
                  height: "2.25rem",
                  fontSize: "0.85rem",
                  borderColor: "var(--grey-300)",
                  backgroundColor: "var(--grey-100)",
                  borderRadius: "6px",
                }}
              />
            </div>
            <div className="col-12 col-md-6">
              <label className="form-label fw-bold mb-1" style={{ color: "var(--grey-800)", fontSize: "0.85rem" }}>
                Motivo de Cierre
              </label>
              <input
                className="form-control form-control-solid"
                placeholder="Ingrese motivo del cierre"
                value={form.motivoCierre}
                onChange={(e) => setForm((f) => ({ ...f, motivoCierre: e.target.value }))}
                style={{
                  height: "2.25rem",
                  fontSize: "0.85rem",
                  borderColor: "var(--grey-300)",
                  backgroundColor: "var(--grey-100)",
                  borderRadius: "6px",
                }}
              />
            </div>
          </div>


          
        </div>
      )}
    </div>
  );

  const renderSeccionUbicacion = () => (
    <div>
      <div
        style={{
          ...estiloSeccionHeader,
          backgroundColor: seccionExpandida.ubicacion ? "var(--blue-100)" : "var(--blue-50)",
        }}
        onClick={() => toggleSeccion("ubicacion")}
        onMouseOver={(e) => {
          if (!seccionExpandida.ubicacion) {
            e.target.style.backgroundColor = "var(--blue-100)";
          }
        }}
        onMouseOut={(e) => {
          if (!seccionExpandida.ubicacion) {
            e.target.style.backgroundColor = "var(--blue-50)";
          }
        }}
      >
        <h6 style={estiloTituloSeccion}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
            <span style={{ fontSize: "1rem" }}>📍</span>
            <span>Datos de Dirección</span>
            {esSeccionCompleta("ubicacion") && (
              <span style={{ color: "var(--green-600)", fontSize: "1rem" }}>✓</span>
            )}
          </div>
          <span style={{ fontSize: "1rem", color: "var(--blue-600)" }}>
            {seccionExpandida.ubicacion ? "▼" : "▶"}
          </span>
        </h6>
      </div>
      {seccionExpandida.ubicacion && (
        <div
          style={{
            paddingLeft: "1rem",
            marginBottom: "1rem",
            animation: "slideDown 0.3s ease-out",
          }}
        >
          <div className="row mb-3 g-3">
            <div className="col-12 col-md-4">
              <label className="form-label fw-bold mb-1" style={{ color: "var(--grey-800)", fontSize: "0.85rem" }}>
                Región
              </label>
              <input
                className="form-control form-control-solid"
                placeholder="Seleccione o ingrese región"
                value={form.region}
                onChange={(e) => setForm((f) => ({ ...f, region: e.target.value }))}
                style={{
                  height: "2.25rem",
                  fontSize: "0.85rem",
                  borderColor: "var(--grey-300)",
                  backgroundColor: "var(--grey-100)",
                  borderRadius: "6px",
                }}
              />
            </div>
            <div className="col-12 col-md-4">
              <label className="form-label fw-bold mb-1" style={{ color: "var(--grey-800)", fontSize: "0.85rem" }}>
                Comuna
              </label>
              <input
                className="form-control form-control-solid"
                placeholder="Seleccione o ingrese comuna"
                value={form.comuna}
                onChange={(e) => setForm((f) => ({ ...f, comuna: e.target.value }))}
                style={{
                  height: "2.25rem",
                  fontSize: "0.85rem",
                  borderColor: "var(--grey-300)",
                  backgroundColor: "var(--grey-100)",
                  borderRadius: "6px",
                }}
              />
            </div>
            <div className="col-12 col-md-4">
              <label className="form-label fw-bold mb-1" style={{ color: "var(--grey-800)", fontSize: "0.85rem" }}>
                Tipo Dirección
              </label>
              <select
                className="form-control form-control-solid"
                value={form.tipoDireccion}
                onChange={(e) => setForm((f) => ({ ...f, tipoDireccion: e.target.value }))}
                style={{
                  height: "2.35rem",
                  fontSize: "0.85rem",
                  borderColor: "var(--grey-300)",
                  backgroundColor: "var(--grey-100)",
                  borderRadius: "6px",
                }}
              >
                <option value="">Seleccione tipo</option>
                <option value="Calle">Calle</option>
                <option value="Avenida">Avenida</option>
                <option value="Pasaje">Pasaje</option>
                <option value="Camino">Camino</option>
              </select>
            </div>

          </div>
          <div className="row mb-3 g-3">
            <div className="col-12 col-md-8">
              <label className="form-label fw-bold mb-1" style={{ color: "var(--grey-800)", fontSize: "0.85rem" }}>
                Nombre Calle
              </label>
              <input
                className="form-control form-control-solid"
                placeholder="Ingrese nombre de la calle"
                value={form.nombreCalle}
                onChange={(e) => setForm((f) => ({ ...f, nombreCalle: e.target.value }))}
                style={{
                  height: "2.25rem",
                  fontSize: "0.85rem",
                  borderColor: "var(--grey-300)",
                  backgroundColor: "var(--grey-100)",
                  borderRadius: "6px",
                }}
              />
            </div>
            <div className="col-12 col-md-4">
              <label className="form-label fw-bold mb-1" style={{ color: "var(--grey-800)", fontSize: "0.85rem" }}>
                Número
              </label>
              <input
                className="form-control form-control-solid"
                placeholder="N°"
                value={form.numero}
                onChange={(e) => setForm((f) => ({ ...f, numero: e.target.value }))}
                style={{
                  height: "2.25rem",
                  fontSize: "0.85rem",
                  borderColor: "var(--grey-300)",
                  backgroundColor: "var(--grey-100)",
                  borderRadius: "6px",
                }}
              />
            </div>
           
          </div>
          <div className="row mb-3 g-3">
             <div className="col-12 col-md-4">
              <label className="form-label fw-bold mb-1" style={{ color: "var(--grey-800)", fontSize: "0.85rem" }}>
                Resto Dirección
              </label>
              <input
                className="form-control form-control-solid"
                placeholder="Depto, casa, oficina, etc."
                value={form.restoDireccion}
                onChange={(e) => setForm((f) => ({ ...f, restoDireccion: e.target.value }))}
                style={{
                  height: "2.25rem",
                  fontSize: "0.85rem",
                  borderColor: "var(--grey-300)",
                  backgroundColor: "var(--grey-100)",
                  borderRadius: "6px",
                }}
              />
            </div>
            <div className="col-12 col-md-4">
              <label className="form-label fw-bold mb-1" style={{ color: "var(--grey-800)", fontSize: "0.85rem" }}>
                Sector
              </label>
              <input
                className="form-control form-control-solid"
                placeholder="Ingrese sector"
                value={form.sector}
                onChange={(e) => setForm((f) => ({ ...f, sector: e.target.value }))}
                style={{
                  height: "2.25rem",
                  fontSize: "0.85rem",
                  borderColor: "var(--grey-300)",
                  backgroundColor: "var(--grey-100)",
                  borderRadius: "6px",
                }}
              />
            </div>
            <div className="col-12 col-md-4">
              <label className="form-label fw-bold mb-1" style={{ color: "var(--grey-800)", fontSize: "0.85rem" }}>
                Código unid. vecin.
              </label>
              <input
                className="form-control form-control-solid"
                placeholder="Código unid. vecin."
                value={form.codPostal}
                onChange={(e) => setForm((f) => ({ ...f, codPostal: e.target.value }))}
                style={{
                  height: "2.25rem",
                  fontSize: "0.85rem",
                  borderColor: "var(--grey-300)",
                  backgroundColor: "var(--grey-100)",
                  borderRadius: "6px",
                }}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );

  const renderSeccionContacto = () => (
    <div>
      <div
        style={{
          ...estiloSeccionHeader,
          backgroundColor: seccionExpandida.contacto ? "var(--blue-100)" : "var(--blue-50)",
        }}
        onClick={() => toggleSeccion("contacto")}
        onMouseOver={(e) => {
          if (!seccionExpandida.contacto) {
            e.target.style.backgroundColor = "var(--blue-100)";
          }
        }}
        onMouseOut={(e) => {
          if (!seccionExpandida.contacto) {
            e.target.style.backgroundColor = "var(--blue-50)";
          }
        }}
      >
        <h6 style={estiloTituloSeccion}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
            <span style={{ fontSize: "1rem" }}>📞</span>
            <span>Datos de Contacto</span>
            {esSeccionCompleta("contacto") && (
              <span style={{ color: "var(--green-600)", fontSize: "1rem" }}>✓</span>
            )}
          </div>
          <span style={{ fontSize: "1rem", color: "var(--blue-600)" }}>
            {seccionExpandida.contacto ? "▼" : "▶"}
          </span>
        </h6>
      </div>
      {seccionExpandida.contacto && (
        <div
          style={{
            paddingLeft: "1rem",
            marginBottom: "1rem",
            animation: "slideDown 0.3s ease-out",
          }}
        >
          <div className="row mb-3 g-3">
            <div className="col-12 col-md-6">
              <label
                className="form-label fw-bold mb-1"
                style={{ color: "var(--grey-800)", fontSize: "0.85rem" }}
              >
                Teléfono Fijo
              </label>
              <div style={{ display: "flex", gap: "0.5rem" }}>
                <select
                  className="form-select form-select-sm"
                  style={{
                    width: "70px",
                    fontSize: "0.85rem",
                    borderColor: "var(--grey-300)",
                    backgroundColor: "var(--grey-100)",
                    borderRadius: "6px",
                  }}
                  value={form.codigoAreaFijo}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, codigoAreaFijo: e.target.value }))
                  }
                >
                  <option value="">Cod.</option>
                  <option value="2">2</option>
                  <option value="32">32</option>
                  <option value="41">41</option>
                  <option value="45">45</option>
                  <option value="57">57</option>
                  <option value="58">58</option>
                </select>

                <input
                  className="form-control form-control-solid"
                  placeholder="Ej: 5551234"
                  value={form.telefonoFijo}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, telefonoFijo: e.target.value }))
                  }
                  style={{
                    height: "2.25rem",
                    fontSize: "0.85rem",
                    borderColor: "var(--grey-300)",
                    backgroundColor: "var(--grey-100)",
                    borderRadius: "6px",
                    flex: 1,
                  }}
                />
              </div>
            </div>

            <div className="col-12 col-md-6">
              <label
                className="form-label fw-bold mb-1"
                style={{ color: "var(--grey-800)", fontSize: "0.85rem" }}
              >
                Teléfono Móvil
              </label>
              <div style={{ display: "flex", gap: "0.5rem" }}>
                <span
                  style={{
                    display: "flex",
                    alignItems: "center",
                    padding: "0 0.5rem",
                    fontSize: "0.85rem",
                    backgroundColor: "var(--grey-100)",
                    border: "1px solid var(--grey-300)",
                    borderRadius: "6px",
                    height: "2.25rem",
                  }}
                >
                  + 56
                </span>
                <input
                  className="form-control form-control-solid"
                  placeholder="Ej: 987654321"
                  value={form.telefonoMovil}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, telefonoMovil: e.target.value }))
                  }
                  style={{
                    height: "2.25rem",
                    fontSize: "0.85rem",
                    borderColor: "var(--grey-300)",
                    backgroundColor: "var(--grey-100)",
                    borderRadius: "6px",
                    flex: 1,
                  }}
                />
              </div>
            </div>

          </div>
          <div className="row mb-3 g-3">
            <div className="col-12 col-md-6">
              <label
                className="form-label fw-bold mb-1"
                style={{ color: "var(--grey-800)", fontSize: "0.85rem" }}
              >
                Email
              </label>
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <input
                  type="text"
                  className="form-control form-control-solid"
                  placeholder="Usuario"
                  value={form.emailUsuario}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, emailUsuario: e.target.value }))
                  }
                  style={{
                    height: "2.25rem",
                    fontSize: "0.85rem",
                    borderColor: "var(--grey-300)",
                    backgroundColor: "var(--grey-100)",
                    borderRadius: "6px",
                    flex: 1,
                  }}
                />
                <span style={{ fontSize: "0.9rem", color: "var(--grey-600)" }}>@</span>
                <select
                  className="form-select form-select-sm"
                  style={{
                    fontSize: "0.85rem",
                    borderColor: "var(--grey-300)",
                    backgroundColor: "var(--grey-100)",
                    borderRadius: "6px",
                    width: "100px",
                    display: "flex",
                    alignItems: "center",
                    padding: "0 0.5rem",
                    border: "1px solid var(--grey-300)",
                    height: "2.25rem",
                  }}
                  value={form.emailDominio}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, emailDominio: e.target.value }))
                  }
                >
                  <option value="">Dominio</option>
                  <option value="gmail.com">gmail.com</option>
                  <option value="hotmail.com">hotmail.com</option>
                  <option value="outlook.com">outlook.com</option>
                  <option value="ssconcepcion.cl">ssconcepcion.cl</option>
                  {/* Agrega más dominios si deseas */}
                </select>
              </div>
            </div>


              <div className="col-12 col-md-6">
              <label className="form-label fw-bold mb-1" style={{ color: "var(--grey-800)", fontSize: "0.85rem" }}>
                Código unid. vecin.
              </label>
              <input
                className="form-control form-control-solid"
                placeholder="Código unid. vecin."
                value={form.codPostal}
                onChange={(e) => setForm((f) => ({ ...f, codPostal: e.target.value }))}
                style={{
                  height: "2.25rem",
                  fontSize: "0.85rem",
                  borderColor: "var(--grey-300)",
                  backgroundColor: "var(--grey-100)",
                  borderRadius: "6px",
                }}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );

  const handleMouseOver = (button) => {
    setTextVisible((prevState) => ({
      ...prevState,
      [button]: true,
    }));
  };

  const handleMouseOut = (button) => {
    setTextVisible((prevState) => ({
      ...prevState,
      [button]: false,
    }));
  };



  const renderSeccionClasificacion = () => (
    <div>
      <div
        style={{
          ...estiloSeccionHeader,
          backgroundColor: seccionExpandida.clasificacion ? "var(--blue-100)" : "var(--blue-50)",
        }}
        onClick={() => toggleSeccion("clasificacion")}
        onMouseOver={(e) => {
          if (!seccionExpandida.clasificacion) {
            e.target.style.backgroundColor = "var(--blue-100)";
          }
        }}
        onMouseOut={(e) => {
          if (!seccionExpandida.clasificacion) {
            e.target.style.backgroundColor = "var(--blue-50)";
          }
        }}
      >
        <h6 style={estiloTituloSeccion}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
            <span style={{ fontSize: "1rem" }}>📊</span>
            <span>Datos de Clasificación</span>
            {esSeccionCompleta("clasificacion") && (
              <span style={{ color: "var(--green-600)", fontSize: "1rem" }}>✓</span>
            )}
          </div>
          <span style={{ fontSize: "1rem", color: "var(--blue-600)" }}>
            {seccionExpandida.clasificacion ? "▼" : "▶"}
          </span>
        </h6>
      </div>
      {seccionExpandida.clasificacion && (
        <div
          style={{
            paddingLeft: "1rem",
            marginBottom: "1rem",
            animation: "slideDown 0.3s ease-out",
          }}
        >
          <div className="row mb-3 g-3">
            <div className="col-12 col-md-4">
              <label className="form-label fw-bold mb-1" style={{ color: "var(--grey-800)", fontSize: "0.85rem" }}>
                Puntaje (FPS)
              </label>
              <input
                className="form-control form-control-solid"
                placeholder="Ingrese puntaje"
                value={form.puntaje}
                onChange={(e) => setForm((f) => ({ ...f, puntaje: e.target.value }))}
                style={{
                  height: "2.25rem",
                  fontSize: "0.85rem",
                  borderColor: "var(--grey-300)",
                  backgroundColor: "var(--grey-100)",
                  borderRadius: "6px",
                }}
              />
            </div>
            <div className="col-12 col-md-4">
              <label className="form-label fw-bold mb-1" style={{ color: "var(--grey-800)", fontSize: "0.85rem" }}>
                Clasificación (FPS)
              </label>
              <input
                className="form-control form-control-solid"
                placeholder="Clasificación"
                disabled
                value={form.clasificacion}
                onChange={(e) => setForm((f) => ({ ...f, clasificacion: e.target.value }))}
                style={{
                  height: "2.25rem",
                  fontSize: "0.85rem",
                  borderColor: "var(--grey-300)",
                  backgroundColor: "var(--grey-100)",
                  borderRadius: "6px",
                }}
              />
            </div>
            <div className="col-12 col-md-4">
              <label className="form-label fw-bold mb-1" style={{ color: "var(--grey-800)", fontSize: "0.85rem" }}>
                Tipo de Familia
              </label>
              <select
                className="form-control form-control-solid" disabled
                value={form.tipoFamilia}
                onChange={(e) => setForm((f) => ({ ...f, tipoFamilia: e.target.value }))}
                style={{
                  height: "2.40rem",
                  fontSize: "0.85rem",
                  borderColor: "var(--grey-300)",
                  backgroundColor: "var(--grey-100)",
                  borderRadius: "6px",
                }}
              >
                <option value="Nuclear Monoparental">Nuclear Monoparental</option>
                <option value="Extendida">Extendida</option>
                <option value="Nuclear Biparental">Nuclear Biparental</option>
                <option value="Compuesta">Compuesta</option>
              </select>
            </div>
          </div>
          <div className="row mb-3 g-3">
            <div className="col-12 col-md-6">
              <label className="form-label fw-bold mb-1" style={{ color: "var(--grey-800)", fontSize: "0.85rem" }}>
                Ciclo Vital Familiar
              </label>
              <select
                className="form-control form-control-solid" disabled
                value={form.cicloVital}
                onChange={(e) => setForm((f) => ({ ...f, cicloVital: e.target.value }))}
                style={{
                  height: "2.40rem",
                  fontSize: "0.85rem",
                  borderColor: "var(--grey-300)",
                  backgroundColor: "var(--grey-100)",
                  borderRadius: "6px",
                }}
              >
                <option value="Hijo Escolar">Hijo Escolar</option>
                <option value="Familia con adolescentes">Familia con adolescentes</option>
                <option value="Pareja joven">Pareja joven</option>
                <option value="Familia con hijos adultos">Familia con hijos adultos</option>
              </select>
            </div>
            <div className="col-12 col-md-6">
              <label className="form-label fw-bold mb-1" style={{ color: "var(--grey-800)", fontSize: "0.85rem" }}>
                Score de Riesgo
              </label>
              <select
                className="form-control form-control-solid" disabled
                value={form.scoreRiesgo}
                onChange={(e) => setForm((f) => ({ ...f, scoreRiesgo: e.target.value }))}
                style={{
                  height: "2.40rem",
                  fontSize: "0.85rem",
                  borderColor: "var(--grey-300)",
                  backgroundColor: "var(--grey-100)",
                  borderRadius: "6px",
                }}
              >
                <option value="Bajo">Bajo</option>
                <option value="Medio">Medio</option>
                <option value="Alto">Alto</option>
                <option value="Muy Alto">Muy Alto</option>
              </select>
            </div>
          </div>
        </div>
      )}
    </div>
  );

  const renderIntegrantes = () => (
    <div
      style={{
        borderRadius: "1rem",
        border: "1px solid var(--blue-300)",
        background: "var(--white)",
        boxShadow: "0 4px 5px var(--blue-300, rgba(1, 136, 212, 0.12))",
        padding: "1rem",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          background: "linear-gradient(90deg, var(--blue-500) 0%, var(--blue-400) 100%)",
          borderRadius: "0.75rem 0.75rem 0 0",
          padding: "0.75rem 1.5rem",
          color: "var(--white)",
          margin: "-1rem -1rem 1rem -1rem",
          flexShrink: 0,
        }}
      >
        <div
          style={{
            fontWeight: 600,
            fontSize: "1.1rem",
            letterSpacing: "0.05rem",
          }}
        >
          Integrantes Grupo Familiar
        </div>
        <div style={{ fontWeight: 400, fontSize: "0.85rem", marginTop: "0.25rem" }}>
          Familia: <span style={{ fontWeight: 700 }}>RAMIREZ SANTANDER</span>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "0.75rem",
          marginBottom: "1rem",
          padding: "1rem",
          backgroundColor: "var(--grey-50)",
          borderRadius: "0.75rem",
          border: "1px solid var(--grey-200)",
          flexShrink: 0,
        }}
      >
        <div style={{ flex: "1 1 120px", minWidth: "120px" }}>
          <label className="form-label fw-bold mb-1" style={{ color: "var(--grey-800)", fontSize: "0.75rem" }}>
            RUN
          </label>
          <input
            placeholder="12345678-9"
            className="form-control form-control-solid"
            value={nuevoIntegrante.rut}
            onChange={(e) => setNuevoIntegrante((prev) => ({ ...prev, rut: e.target.value }))}
            style={{
              height: "2rem",
              fontSize: "0.85rem",
              borderColor: "var(--grey-300)",
              backgroundColor: "var(--white)",
              borderRadius: "6px",
            }}
          />
        </div>
        <div style={{ flex: "1 1 140px", minWidth: "140px" }}>
          <label className="form-label fw-bold mb-1" style={{ color: "var(--grey-800)", fontSize: "0.75rem" }}>
            Parentesco
          </label>
          <select
            className="form-select form-select-solid"
            value={nuevoIntegrante.parentesco}
            onChange={(e) => setNuevoIntegrante((prev) => ({ ...prev, parentesco: e.target.value }))}
            style={{
              height: "2rem",
              fontSize: "0.85rem",
              borderColor: "var(--grey-300)",
              backgroundColor: "var(--white)",
              borderRadius: "6px",
            }}
          >
            <option value="">Seleccione...</option>
            <option value="JEFE DE FAMILIA">JEFE DE FAMILIA</option>
            <option value="HIJO(A)">HIJO(A)</option>
            <option value="CONYUGE">CONYUGE</option>
            <option value="NUERA">NUERA</option>
            <option value="NIETO(A)">NIETO(A)</option>
            <option value="HERMANO(A)">HERMANO(A)</option>
          </select>
        </div>
        <div style={{ flex: "0 0 auto", display: "flex", alignItems: "end" }}>
          <button
            className="btn btn-primary"
            style={{
              backgroundColor: "var(--blue-500)",
              borderColor: "var(--blue-500)",
              fontSize: "0.85rem",
              height: "2rem",
              padding: "0 1rem",
              borderRadius: "6px",
              fontWeight: 600,
            }}
            onClick={agregarIntegrante}
            onMouseOver={(e) => (e.target.style.backgroundColor = "var(--blue-600)")}
            onMouseOut={(e) => (e.target.style.backgroundColor = "var(--blue-500)")}
          >
            ✚ Agregar
          </button>
        </div>
      </div>
      <div
        style={{
          flex: 1,
          overflowX: "auto",
          border: "1px solid var(--grey-300)",
          borderRadius: "0.75rem",
          backgroundColor: "var(--white)",
        }}
      >
        <table className="table table-hover mb-0" style={{ fontSize: "0.85rem", minWidth: "600px" }}>
          <thead
            style={{
              background: "var(--blue-200)",
              fontWeight: 700,
              color: "var(--grey-800)",
              position: "sticky",
              top: 0,
              zIndex: 1,
            }}
          >
            <tr>
              <th style={{ width: "2.5rem", textAlign: "center", padding: "0.75rem 0.5rem" }}>✓</th>
              <th style={{ width: "8rem", padding: "0.75rem 0.5rem" }}>RUN</th>
              <th style={{ minWidth: "12rem", padding: "0.75rem 0.5rem" }}>Nombre Completo</th>
              <th style={{ width: "5rem", padding: "0.75rem 0.5rem", textAlign: "center" }}>Edad</th>
              <th style={{ width: "8rem", padding: "0.75rem 0.5rem" }}>Parentesco</th>
              <th style={{ width: "6rem", padding: "0.75rem 0.5rem", textAlign: "center" }}>Estado</th>
              <th style={{ width: "5rem", padding: "0.75rem 0.5rem", textAlign: "center" }}>Cert.</th>
              <th style={{ width: "6rem", padding: "0.75rem 0.5rem", textAlign: "center" }}>F. Egreso</th>
              <th style={{ width: "6rem", padding: "0.75rem 0.5rem", textAlign: "center" }}>F. Reing.</th>
              <th style={{ width: "5rem", padding: "0.75rem 0.5rem", textAlign: "center" }}>Hist.</th>
              <th style={{ width: "5rem", padding: "0.75rem 0.5rem", textAlign: "center" }}>Pat.</th>
            </tr>
          </thead>
          <tbody>
            {integrantes.map((row, idx) => (
              <tr
                key={row.rut}
                style={{
                  cursor: "pointer",
                  backgroundColor: integranteSeleccionado === idx ? "var(--blue-100)" : "transparent",
                  transition: "background-color 0.2s ease",
                }}
                onClick={() => setIntegranteSeleccionado(integranteSeleccionado === idx ? null : idx)}
              >
                <td style={{ textAlign: "center", padding: "0.75rem 0.5rem" }}>
                  {integranteSeleccionado === idx && (
                    <span style={{ color: "var(--green-500)", fontWeight: 700, fontSize: "1rem" }}>✓</span>
                  )}
                </td>
                <td style={{ fontSize: "0.8rem", padding: "0.75rem 0.5rem", fontFamily: "monospace" }}>{row.rut}</td>
                <td style={{ fontSize: "0.8rem", padding: "0.75rem 0.5rem", maxWidth: "12rem" }}>
                  <div
                    style={{
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      fontWeight: 500,
                    }}
                  >
                    {row.nombre}
                  </div>
                </td>
                <td style={{ fontSize: "0.8rem", padding: "0.75rem 0.5rem", textAlign: "center" }}>{row.edad}</td>
                <td style={{ fontSize: "0.75rem", padding: "0.75rem 0.5rem" }}>
                  <select
                    className="form-select form-select-sm"
                    value={row.parentesco}
                    style={{
                      fontSize: "0.75rem",
                      height: "1.75rem",
                      borderColor: "var(--grey-300)",
                      backgroundColor: "var(--grey-100)",
                      color: "var(--grey-800)",
                      borderRadius: "6px",
                    }}
                    onChange={(e) =>
                      setIntegrantes((prev) =>
                        prev.map((integrante, i) =>
                          i === idx ? { ...integrante, parentesco: e.target.value } : integrante
                        )
                      )
                    }
                  >
                    <option value="JEFE DE FAMILIA">JEFE DE FAMILIA</option>
                    <option value="HIJO(A)">HIJO(A)</option>
                    <option value="CONYUGE">CONYUGE</option>
                    <option value="NUERA">NUERA</option>
                    <option value="NIETO(A)">NIETO(A)</option>
                    <option value="HERMANO(A)">HERMANO(A)</option>
                  </select>
                </td>
                <td style={{ padding: "0.75rem 0.5rem", textAlign: "center" }}>
                  <span
                    className="badge"
                    style={{
                      backgroundColor: row.estado === "Ingresado" ? "var(--green-100)" : "var(--orange-100)",
                      color: row.estado === "Ingresado" ? "var(--green-700)" : "var(--orange-700)",
                      fontSize: "0.7rem",
                      padding: "0.25rem 0.5rem",
                      borderRadius: "0.75rem",
                      fontWeight: 600,
                    }}
                  >
                    {row.estado}
                  </span>
                </td>
                <td style={{ textAlign: "center", padding: "0.75rem 0.5rem" }}>
                  <button
                    className="btn btn-outline-info btn-sm"
                    style={{
                      width: "2rem",
                      height: "2rem",
                      padding: 0,
                      borderRadius: "6px",
                      fontSize: "0.9rem",
                    }}
                    title="Certificado"
                    onClick={() => alert(`Ver certificado para ${row.nombre}`)}
                  >
                    📄
                  </button>
                </td>
                <td style={{ fontSize: "0.8rem", padding: "0.75rem 0.5rem", textAlign: "center" }}>{row.fechaEgre}</td>
                <td style={{ fontSize: "0.8rem", padding: "0.75rem 0.5rem", textAlign: "center" }}>{row.fechaReing}</td>
                <td style={{ textAlign: "center", padding: "0.75rem 0.5rem" }}>
                  <button
                    className="btn btn-outline-info btn-sm"
                    style={{
                      width: "2rem",
                      height: "2rem",
                      padding: 0,
                      borderRadius: "6px",
                      fontSize: "0.9rem",
                    }}
                    title="Historial"
                    onClick={() => alert(`Ver historial para ${row.nombre}`)}
                  >
                    📋
                  </button>
                </td>
                <td style={{ textAlign: "center", padding: "0.75rem 0.5rem" }}>
                  <button
                    className="btn btn-outline-warning btn-sm"
                    style={{
                      width: "2rem",
                      height: "2rem",
                      padding: 0,
                      borderRadius: "6px",
                      fontSize: "0.9rem",
                    }}
                    title="Patologías"
                    onClick={() => alert(`Ver patologías para ${row.nombre}`)}
                  >
                    🔑
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: "1rem",
          padding: "0.75rem",
          backgroundColor: "var(--grey-50)",
          borderRadius: "0.75rem",
          flexShrink: 0,
        }}
      >

      <div
          className="d-flex flex-wrap gap-2"
          style={{
            gap: "0.5rem",
            rowGap: "0.75rem",
            maxWidth: "100%",
            overflowX: "auto",
          }}
        >
        <button className="btn btn-outline-primary" onClick={() => handleEgresar(integranteSeleccionado)} disabled={integranteSeleccionado === null}
          style={{            
            fontSize: "0.85rem",
            padding: "0.5rem 1rem",
            borderRadius: "6px",
            fontWeight: 500,
            minWidth: "fit-content",
            whiteSpace: "nowrap", 
          }}>
          📤 Egresar
        </button>
        <button className="btn btn-outline-primary" onClick={() => handleReingresar(integranteSeleccionado)} disabled={integranteSeleccionado === null}
          style={{            
            fontSize: "0.85rem",
            padding: "0.5rem 1rem",
            borderRadius: "6px",
            fontWeight: 500,
            minWidth: "fit-content",
            whiteSpace: "nowrap", 
          }}>
          📥 Reingresar
        </button>

        {/* Nuevos botones con visibilidad controlada */}
        <div>
        <button disabled={integranteSeleccionado === null}
          className="btn btn-outline-primary" 
          style={{
            color: "var(--white)",
            fontSize: "0.85rem",
            padding: "0.4rem 1rem",
            borderRadius: "6px",
            fontWeight: 500,
            position: "relative",
            overflow: "hidden", // Para que el texto no se desborde fuera del botón
            minWidth: "fit-content",
            whiteSpace: "nowrap",
          }}
          onClick={onModificarPaciente}
          onMouseOver={() => handleMouseOver('modificarPaciente')}
          onMouseOut={() => handleMouseOut('modificarPaciente')}
        >
          📝
        </button>
        </div> 
             {textVisible.modificarPaciente && (
             <span style={{
              transform: "translateX(-50%)",  // Centrado horizontal
              fontSize: "0.75rem",
              padding: "0.3rem 1rem",
              visibility: "visible", // Para asegurar que se vea
              zIndex: 10,  // Asegura que esté encima del ícono
              position: "absolute",
              bottom: "0%",
              left: "0%",
              transform: "translateX(0%)",
              backgroundColor: "#ffffff",
              color: "#000000",
              borderRadius: "4px",
              whiteSpace: "nowrap",
              boxShadow: "0 2px 6px rgba(0, 0, 0, 0.2)",
            }}>
              Modificar Datos del Paciente
            </span>
          )}
        <div>
        <button disabled={integranteSeleccionado === null}
          className="btn btn-outline-primary" 
          style={{
            color: "var(--white)",
            fontSize: "0.85rem",
            padding: "0.4rem 1rem",
            borderRadius: "6px",
            fontWeight: 500,
            position: "relative",
            overflow: "hidden", // Para que el texto no se desborde fuera del botón
            minWidth: "fit-content",
            whiteSpace: "nowrap",         
          }}
          onClick={onModificarAntecedentes}
          onMouseOver={() => handleMouseOver('modificarIdentificacion')}
          onMouseOut={() => handleMouseOut('modificarIdentificacion')}
        >
          👤
          
        </button>
            {textVisible.modificarIdentificacion && (
            <span style={{
              transform: "translateX(-50%)",  // Centrado horizontal
              fontSize: "0.75rem",
              padding: "0.3rem 1rem",
              visibility: "visible", // Para asegurar que se vea
              zIndex: 10,  // Asegura que esté encima del ícono
              position: "absolute",
              bottom: "0%",
              left: "0%",
              transform: "translateX(0%)",
              backgroundColor: "#ffffff",
              color: "#000000",
              borderRadius: "4px",
              whiteSpace: "nowrap",
              boxShadow: "0 2px 6px rgba(0, 0, 0, 0.2)",
            }}>
              Modificar Datos de Identificación
            </span>
          )}
        </div>
        <div>
        <button disabled={integranteSeleccionado === null}
          className="btn btn-outline-primary" 
          style={{
            color: "var(--white)",
            fontSize: "0.85rem",
            padding: "0.4rem 1rem",
            borderRadius: "6px",
            fontWeight: 500,
            position: "relative",
            overflow: "hidden", // Para que el texto no se desborde fuera del botón
            minWidth: "fit-content",
            whiteSpace: "nowrap", 
          }}
          onClick={onAntecedentesClinicos}
          onMouseOver={() => handleMouseOver('modificarAntecedentesClinicos')}
          onMouseOut={() => handleMouseOut('modificarAntecedentesClinicos')}
        >
          🗂️
        </button>
            {textVisible.modificarAntecedentesClinicos && (
            <span style={{
              transform: "translateX(-50%)",  // Centrado horizontal
              fontSize: "0.75rem",
              padding: "0.3rem 1rem",
              visibility: "visible", // Para asegurar que se vea
              zIndex: 10,  // Asegura que esté encima del ícono
              position: "absolute",
              bottom: "0%",
              left: "0%",
              transform: "translateX(0%)",
              backgroundColor: "#ffffff",
              color: "#000000",
              borderRadius: "4px",
              whiteSpace: "nowrap",
              boxShadow: "0 2px 6px rgba(0, 0, 0, 0.2)",
            }}>
              Antecedentes Clínicos
            </span>
          )}
          </div>
        <div>
        <button disabled={integranteSeleccionado === null}
          className="btn btn-outline-primary" 
          style={{
            color: "var(--white)",
            fontSize: "0.85rem",
            padding: "0.4rem 1rem",
            borderRadius: "6px",
            fontWeight: 500,
            position: "relative",
            overflow: "hidden", // Para que el texto no se desborde fuera del botón
            minWidth: "fit-content",
            whiteSpace: "nowrap", 
          }}
          onClick={handleModificarCertificadoGrupoFamiliar}
          onMouseOver={() => handleMouseOver('modificarCertificadoGrupoFamiliar')}
          onMouseOut={() => handleMouseOut('modificarCertificadoGrupoFamiliar')}
        >
          📄
        </button>
            {textVisible.modificarCertificadoGrupoFamiliar && (
            <span style={{
              transform: "translateX(-50%)",  // Centrado horizontal
              fontSize: "0.75rem",
              padding: "0.3rem 1rem",
              visibility: "visible", // Para asegurar que se vea
              zIndex: 10,  // Asegura que esté encima del ícono
              position: "absolute",
              bottom: "0%",
              left: "0%",
              transform: "translateX(0%)",
              backgroundColor: "#ffffff",
              color: "#000000",
              borderRadius: "4px",
              whiteSpace: "nowrap",
              boxShadow: "0 2px 6px rgba(0, 0, 0, 0.2)",
            }}>
              Certificado Grupo Familiar
            </span>
          )}
        </div>
      </div>






        <button
          className="btn btn-danger"
          style={{
            backgroundColor: "var(--red-500)",
            borderColor: "var(--red-500)",
            color: "var(--white)",
            fontSize: "0.85rem",
            padding: "0.5rem 1rem",
            borderRadius: "6px",
            fontWeight: 500,
            minWidth: "fit-content",
            whiteSpace: "nowrap", 
          }}
          onClick={() => handleEliminar(integranteSeleccionado)}
          disabled={integranteSeleccionado === null}
          onMouseOver={(e) => (e.target.style.backgroundColor = "var(--red-600)")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "var(--red-500)")}
        >
          🗑️ Eliminar
        </button>
      </div>
    </div>
  );

  const estilosCSS = `
    @keyframes slideDown {
      from {
        opacity: 0;
        transform: translateY(-10px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    .table-hover tbody tr:hover {
      background-color: var(--blue-50) !important;
    }

    .inscripcion-container {
      width: 100%;
      max-width: 100vw;
      min-height: 100vh;
      margin: 0;
      padding: 0;
      overflow: auto;
    }

    .inscripcion-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1.5rem;
      padding: 1.5rem;
      box-sizing: border-box;
      max-width: 100%;
      margin: 0 auto;
    }

    @media (max-width: 1200px) {
      .inscripcion-grid {
        grid-template-columns: 1fr;
        grid-template-rows: auto auto;
        gap: 1rem;
      }
      .inscripcion-container {
        padding: 1rem;
      }
    }

    @media (max-width: 768px) {
      .inscripcion-grid {
        gap: 0.75rem;
        padding: 0.75rem;
      }
      .inscripcion-container {
        padding: 0.5rem;
      }
      .form-control, .form-select {
        font-size: 0.8rem !important;
        height: 2.3rem !important;
      }
      .btn {
        font-size: 0.8rem !important;
        padding: 0.4rem 0.8rem !important;
      }
      .form-label {
        font-size: 0.75rem !important;
      }
      h5 {
        font-size: 1rem !important;
      }
      h6 {
        font-size: 0.85rem !important;
      }
      .navegacion-rapida button {
        min-width: 100px !important;
        font-size: 0.75rem !important;
      }
    }

    @media (max-width: 576px) {
      .inscripcion-grid {
        gap: 0.5rem;
        padding: 0.5rem;
      }
      .form-control, .form-select {
        font-size: 0.75rem !important;
        height: 1.75rem !important;
      }
      .btn {
        font-size: 0.75rem !important;
        padding: 0.3rem 0.6rem !important;
      }
      .form-label {
        font-size: 0.7rem !important;
      }
      h5 {
        font-size: 0.9rem !important;
      }
      h6 {
        font-size: 0.8rem !important;
      }
      .navegacion-rapida {
        flex-direction: column;
        align-items: stretch;
      }
      .navegacion-rapida button {
        min-width: 100% !important;
        font-size: 0.7rem !important;
      }
      .table {
        font-size: 0.75rem !important;
      }
      .table th, .table td {
        padding: 0.5rem 0.3rem !important;
      }
    }
  `;



  return (
    
    <div style={{ width: "100%", margin: "-30px auto"}}>
      <style>{estilosCSS}</style>
      <div className="card shadow-sm p-10 border-0 d-flex flex-column w-100 " style={{ borderRadius: '14px', width: '100%', margin: '0 auto', paddingLeft: '4vw', paddingRight: '4vw'}}>

      <div className="row gx-5 gy-5 flex-lg-nowrap" style={{ marginRight: 50, display: "flex", flexWrap: "wrap", gap: "50px" }}>
        <div className="col-12 col-lg-6 mb-4 d-flex flex-column">
          <div
            style={{
              borderRadius: "1rem",
              border: "1px solid var(--blue-300)",
              background: "var(--white)",
              boxShadow: "0 4px 5px var(--blue-300, rgba(1, 136, 212, 0.12))",
              padding: "1.5rem",
              display: "flex",
              flexDirection: "column",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                borderBottom: "1px solid var(--blue-100)",
                marginBottom: "1rem",
                flexShrink: 0,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <h5
                style={{
                  fontWeight: 700,
                  color: "var(--blue-700)",
                  marginBottom: 0,
                  fontSize: "1.1rem",
                  letterSpacing: 0.08,
                  lineHeight: 1.2,
                  fontFamily: "var(--font-family-sans-serif)",
                }}
              >
                Antecedentes del Grupo Familiar
              </h5>
              <button
                className="btn btn-outline-danger"
                style={{
                  fontSize: "0.75rem",
                  padding: "0.4rem 0.8rem",
                  borderRadius: "6px",
                }}
                onClick={onCerrarInsFam}
                aria-label="Cerrar formulario"
              >
                ✕ Cerrar
              </button>
            </div>
            <div className="navegacion-rapida" style={{ flexShrink: 0 }}>
              {renderNavegacionRapida()}
            </div>
            <div style={{ flex: 1, overflowY: "auto", paddingRight: "0.75rem" }}>
              <form>
                {renderSeccionUbicacion()}
                {renderSeccionContacto()}
                {renderSeccionClasificacion()}
                {renderSeccionCierre()}
              </form>
            </div>
            <div
              style={{
                flexShrink: 0,
                borderTop: "1px solid var(--grey-200)",
                paddingTop: "1rem",
                marginTop: "1rem",
              }}
            >
              <div className="d-flex flex-wrap justify-content-between align-items-center gap-2">
                <div style={{marginLeft:"10px", marginTop:"-10px"}}>
                  <span
                    style={{
                      fontSize: "0.85rem",
                      color: "var(--grey-600)",
                      fontWeight: 500,
                    }}
                  >
                    Fecha Apertura
                    <div className="row mb-3 g-3">
                    <input
                      disabled
                      type="date"
                      className="form-control form-control-solid"
                      style={{
                        height: "2.25rem",
                        fontSize: "0.85rem",
                        borderColor: "var(--grey-300)",
                        backgroundColor: "var(--grey-100)",
                        borderRadius: "6px",
                      }}
                  />  
                  </div>
                  </span>
                </div>
                <div className="d-flex flex-wrap gap-2 justify-content-end" style={{flex: "1 1 auto", gap:"5px"}}>
                  <button
                    className="btn btn-outline-primary"
                    style={{
                      borderColor: "var(--blue-500)",
                      color: "var(--blue-500)",
                      fontSize: "0.85rem",
                      padding: "0.5rem 1rem",
                      borderRadius: "6px",
                      fontWeight: 500,
                    }}
                    onClick={onEntornoFamiliar}
                    onMouseOver={(e) => (e.target.style.backgroundColor = "var(--blue-100)")}
                    onMouseOut={(e) => (e.target.style.backgroundColor = "transparent")}
                    aria-label="Entorno Familiar"
                  >
                    🚪 Entorno Familiar
                  </button>

                  <button
                    className="btn btn-outline-primary"
                    style={{
                      borderColor: "var(--blue-500)",
                      color: "var(--blue-500)",
                      fontSize: "0.85rem",
                      padding: "0.5rem 1rem",
                      borderRadius: "6px",
                      fontWeight: 500,
                    }}
                    onClick={onAntecedentesClinicosFam}
                    onMouseOver={(e) => (e.target.style.backgroundColor = "var(--blue-100)")}
                    onMouseOut={(e) => (e.target.style.backgroundColor = "transparent")}
                    aria-label="Antecentes Clínicos Familiares"
                  >
                    🗂️ Ant. Clínicos Fami.
                  </button>




                  <button
                    className="btn btn-outline-danger"
                    style={{
                      borderColor: "var(--red-500)",
                      color: "var(--red-500)",
                      fontSize: "0.85rem",
                      padding: "0.5rem 1rem",
                      borderRadius: "6px",
                      fontWeight: 500,
                    }}
                    onClick={limpiar}
                    onMouseOver={(e) => (e.target.style.backgroundColor = "var(--red-100)")}
                    onMouseOut={(e) => (e.target.style.backgroundColor = "transparent")}
                    aria-label="Limpiar formulario"
                  >
                    🗑️ Limpiar
                  </button>
                  <button
                    className="btn btn-success"
                    style={{
                      backgroundColor: "var(--green-500)",
                      borderColor: "var(--green-500)",
                      color: "var(--white)",
                      fontSize: "0.85rem",
                      padding: "0.5rem 1rem",
                      borderRadius: "6px",
                      fontWeight: 600,
                    }}
                    onClick={guardar}
                    onMouseOver={(e) => (e.target.style.backgroundColor = "var(--green-600)")}
                    onMouseOut={(e) => (e.target.style.backgroundColor = "var(--green-500)")}
                    aria-label="Guardar cambios"
                  >
                    💾 Guardar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-6 mb-4 d-flex flex-column">{renderIntegrantes()}</div>
      </div>
      </div>
      </div>
  );
  
}