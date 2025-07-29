import './assets/css/style.bundle.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Menu from "./components/Menu";
import React, { useState } from "react";
import BusquedaFamilia from './components/BusquedaFamilia';
import InscripcionFamiliar from './components/InscripcionFamiliar';
import SelectorFamilia from './components/SelectorFamilia';
import FormularioPaciente from './components/FormularioPaciente';
import FormularioAntecedentes from './components/FormularioAntecedentes';
import AntecedentesClinicos from './components/AntecedentesClinicosInd';
import AntecedentesClinicosFam from './components/AntecedentesClinicosFam';
import EntornoFamiliar from './components/EntornoFamiliar.jsx';

function App() {
  const [mostrarBusquedaFamilia, setMostrarBusquedaFamilia] = useState(true);
  const [mostrarGestionFamiliar, setMostrarGestionFamiliar] = useState(false);
  const [bloqueado, setBloqueado] = useState(false);
  const [mostrarSelector, setMostrarSelector] = useState(false);
  const [mostrarFormularioPaciente, setMostrarFormularioPaciente] = useState(false);
  const [mostrarFormularioAntecedentes, setMostrarFormularioAntecedentes] = useState(false);
  const [mostrarAntecedentesClinicos, setMostrarAntecedentesClinicos] = useState(false);
  const [mostrarAntecedentesClinicosFamiliares, setMostrarAntecedentesClinicosFamiliares] = useState(false);
  const [mostrarEntornoFamiliar, setMostrarEntornoFamiliar] = useState(false);
  


  return (
    <>
      <Menu/>

      {mostrarBusquedaFamilia && (
      <BusquedaFamilia
        onBuscarRut={() => { setMostrarGestionFamiliar(true); setBloqueado(true); }}
        onBuscarApellido={() => { setMostrarSelector(true); setBloqueado(true); }}
        onCancelarClick={() => { console.log("Búsqueda cancelada"); }}
        bloqueado={bloqueado}
      />
     )}

      {mostrarSelector && (
        <SelectorFamilia
          onSeleccionar={() => {
            setMostrarSelector(false);
            setMostrarGestionFamiliar(true);
          }}
          onCancelar={() => {
            setMostrarSelector(false);
            setBloqueado(false);
          }}
        />
      )}

      {mostrarGestionFamiliar && (
        <div className="mt-5">
          <InscripcionFamiliar
            onCerrarInsFam={() => {
              setMostrarGestionFamiliar(false);
              setBloqueado(false);
            }}
            onModificarPaciente={() => {
              setMostrarGestionFamiliar(false);
              setMostrarFormularioPaciente(true);
              setMostrarBusquedaFamilia(false);
            }}
            onModificarAntecedentes={() => {
              setMostrarGestionFamiliar(false);
              setMostrarFormularioAntecedentes(true);
              setMostrarBusquedaFamilia(false);
            }}
            onAntecedentesClinicos={() => {
              setMostrarGestionFamiliar(false);
              setMostrarAntecedentesClinicos(true);
              setMostrarBusquedaFamilia(false);
            }}
            onAntecedentesClinicosFam={() => {
              setMostrarGestionFamiliar(false);
              setMostrarAntecedentesClinicosFamiliares(true);
              setMostrarBusquedaFamilia(false);
            }}
            onEntornoFamiliar={() => {
              setMostrarGestionFamiliar(false);
              setMostrarEntornoFamiliar (true);
              setMostrarBusquedaFamilia(false);
            }}
          />
        </div>
      )}

      {mostrarFormularioPaciente && (
        <FormularioPaciente
          onVolverFormPac={() => {
            setMostrarFormularioPaciente(false);
            setMostrarGestionFamiliar(true);
            setMostrarBusquedaFamilia(true);
          }}
        />
      )}

      {mostrarFormularioAntecedentes && (
        <FormularioAntecedentes
          onVolverFormAnt={() => {
            setMostrarFormularioAntecedentes(false);
            setMostrarGestionFamiliar(true);
            setMostrarBusquedaFamilia(true);
          }}

        />
      )}

      {mostrarAntecedentesClinicos && (
        <AntecedentesClinicos
          onVolverAntClin={() => {
            setMostrarAntecedentesClinicos(false);
            setMostrarGestionFamiliar(true);
            setMostrarBusquedaFamilia(true);
          }}

        />
      )}

      {mostrarAntecedentesClinicosFamiliares && (
        <AntecedentesClinicosFam
          onVolverAntClinFam={() => {
            setMostrarAntecedentesClinicosFamiliares(false);
            setMostrarGestionFamiliar(true);
            setMostrarBusquedaFamilia(true);
          }}

        />
      )}

      {mostrarEntornoFamiliar && (
        <EntornoFamiliar
          onVolverEntornoFam={() => {
            setMostrarEntornoFamiliar(false);
            setMostrarGestionFamiliar(true);
            setMostrarBusquedaFamilia(true);
          }}

        />
      )}
      
    </>
  );
}

export default App;