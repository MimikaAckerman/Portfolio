import React from 'react'
import PartitcleComponent from "../components/ParticleComponent/PartitcleComponent";
import styled from 'styled-components';
import BtnBack from '../components/BtnBack';

const MySkillsPage = () => {
  return (
    <>
    <PartitcleComponent theme="light" />
    <BtnBack/>
    <TerminalContainer>
      <TerminalHeader>
        <TerminalTitle>Terminal</TerminalTitle>
      </TerminalHeader>
      <TerminalBody>
        <TerminalLine>
          <TerminalPrompt>user@computer:~$ </TerminalPrompt>
          <TerminalLineText>Mis fortalezas como programadora son:</TerminalLineText>
        </TerminalLine>
        <TerminalLine>
          <TerminalLineText>- Experiencia en múltiples lenguajes de programación</TerminalLineText>
        </TerminalLine>
        <TerminalLine>
          <TerminalLineText>- Conocimientos en bases de datos y tecnologías de desarrollo web</TerminalLineText>
        </TerminalLine>
        <TerminalLine>
          <TerminalLineText>- Capacidad para trabajar en proyectos desde el concepto hasta la implementación en producción</TerminalLineText>
        </TerminalLine>
        <TerminalLine>
          <TerminalLineText>- Innovación a nuevas ideas dado los diferentes entornos en los que me he desarrollado</TerminalLineText>
        </TerminalLine>



        <TerminalLine>
          <TerminalPrompt>user@computer:~$ </TerminalPrompt>
          <TerminalLineText>Mis fortalezas como persona y trabajadora:</TerminalLineText>
          </TerminalLine>
          <TerminalLine>
          <TerminalLineText>-Soy una persona que siempre busca el aprendizaje constante y continuo</TerminalLineText>
        </TerminalLine>
        <TerminalLine>
          <TerminalLineText>-Atenta , soy una persona que se fija mucho en los detalles y manera de realizar tareas </TerminalLineText>
        </TerminalLine>
        <TerminalLine>
          <TerminalLineText>- Determinada , una vez que me propongo algo siempre me gusta terminarlo y disfrutar el proceso del aprendizaje</TerminalLineText>
        </TerminalLine>
        <TerminalLine>
          <TerminalLineText>- Dinamica , me gusta la comunicación en grupo , el conocer personas y crear buenos ambientes para que las personas se sientan bienvenidas</TerminalLineText>
        </TerminalLine>


          </TerminalBody>
          </TerminalContainer>

    </>
  )
}

export default MySkillsPage

const TerminalContainer = styled.div`
  width: 600px;
  height: 400px;
  background-color: #000;
  border-radius: 4px;
  overflow: hidden;
  font-family: monospace;
  font-size: 14px;
  margin-left:25% ;
`;

const TerminalHeader = styled.div`
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;
  background-color: #555;
  color: #fff;
`;

const TerminalTitle = styled.h1`
  font-size: 16px;
  margin: 0;
`;

const TerminalBody = styled.div`
  height: calc(100% - 30px);
  padding: 10px;
  box-sizing: border-box;
  overflow: auto;
`;

const TerminalLine = styled.div`
  margin-bottom: 10px;
`;

const TerminalLineText = styled.span`
  color: #fff;
`;

const TerminalPrompt = styled.span`
  color: #0f0;
`;

const TerminalInfo = styled.div`
  color: #fff;
  margin-top: 20px;
  font-size: 16px;
`;

const TerminalInfoTitle = styled.h2`
  font-size: 20px;
  margin: 0;
  margin-bottom: 10px;
`;

const TerminalInfoText = styled.p`
  margin: 0;
`;
