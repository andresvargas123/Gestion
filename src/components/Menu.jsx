
import React from "react";
import '../assets/css/style.bundle.css';

export default function Menu() {
  const menuStyle = {
    background: 'linear-gradient(to right, #0188D4, #007dd0)',
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '10px 100px',
    fontFamily: 'Poppins, sans-serif',
    boxShadow: '0 2px 4px rgba(255,255,255,0.4)',
    position: 'sticky',
    top: 0,
    zIndex: 999
  };
  const logoStyle = { height: '36px', paddingRight: '10px' };
  const centerStyle = { textAlign: 'center', flexGrow: 1, lineHeight: '1.2' };
  const titleStyle = { fontSize: '1.5rem', fontWeight: '550', color: 'white' };
  const subtitleStyle = { fontSize: '0.8rem', color: '#FFF9C4' };
  const userStyle = { display: 'flex', alignItems: 'center', gap: '12px', fontSize: '0.8rem' };
  const buttonStyle = {
    backgroundColor: 'rgb(53, 168, 235)',
    color: 'white',
    border: 'none',
    borderRadius: '15%',
    width: '28px',
    height: '28px',
    fontWeight: 'bold',
    cursor: 'pointer'
  };

  return (
    <>
      <div style={menuStyle}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <img src="https://sinetqa.ssconcepcion.cl/demosinetsur/assets/media/logos/logo-trans.png" alt="Logo" style={logoStyle} />
        </div>
        <div className="center-text" style={centerStyle}>
          <div className="menu-title" style={titleStyle}>GESTIÓN FAMILIAR</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end" }}>
          <div style={{ fontSize: "0.75rem", color: "white", marginBottom: "2px" }}>
            DIRECCION SERVICIO SALUD CONCEPCION
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <span style={{ color: "white", fontSize: "0.8rem" }}>10026332</span>
            <button style={buttonStyle}>F</button>
          </div>
        </div>
      </div>

      <div style={{
        background: "white",
        padding: "15px 100px",
        boxShadow: "0 3px 6px rgba(0,0,0,0.06)",
        display: "flex",
        gap: "40px",
        fontFamily: "Roboto, Helvetica, sans-serif",
        fontSize: "13px",
        fontWeight: "300"
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: "6px", cursor: "pointer", color: "#333" }}>
          Gestión <span style={{ fontSize: "10px" }}>▼</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "6px", cursor: "pointer", color: "#333" }}>
          Informes <span style={{ fontSize: "10px" }}>▼</span>
        </div>
      </div>
    </>
  );
}
 