import PartitcleComponent from "../components/ParticleComponent/PartitcleComponent";
import BtnBack from "../components/BtnBack";
import styled from "styled-components";

const AboutPage = () => {
  return (
    <>
    <PartitcleComponent theme="light" />
    <BtnBack/>
    <TerminalContainer>
      <TerminalHeader>
        <TerminalTitle>Terminal</TerminalTitle>
      </TerminalHeader>
      <TerminalBody>
      
          <TerminalPrompt>user@computer:~$ </TerminalPrompt>
        <TerminalLine>
          <TerminalLineText>
          ¡Hola! Soy una programadora Full Stack y administradora de sistemas<br/>
              en redes apasionada por la ilustración videojuegos y deporte.<br/> Mi

              enfoque es crear soluciones técnicas innovadoras que resuelvan<br/>
              problemas del mundo real y mejoren la experiencia del usuario. <br/>
              Con experiencia en múltiples lenguajes de programación, bases de datos<br/>
              y tecnologías de desarrollo web, he trabajado en proyectos desde<br/>
              el concepto hasta la implementación en producción. <br/>
              Además, tengo habilidades en administración de sistemas en redes, lo que me<br/>
              permite entender el funcionamiento de aplicaciones y servicios en<br/>
              entornos complejos. Cuando no estoy programando, disfruto<br/>
              ilustrando en mi tiempo libre y manteniéndome activo con deportes<br/>
              como el Gym y Videojuegos. También me encanta pasar tiempo<br/>
              pintando y aprendiendo sobre nuevas tecnologías.<br/>
            
            
            </ TerminalLineText>
        </TerminalLine>
        <TerminalLine>
          <TerminalPrompt>user@computer:~$ </TerminalPrompt>
          </TerminalLine>
          </TerminalBody>
          </TerminalContainer>

    </>
  );
};

export default AboutPage;

const TerminalContainer = styled.div`
  width: 600px;
  height: 400px;
  background-color: #000;
  border-radius: 4px;
  overflow: hidden;
  font-family: monospace;
  font-size: 15px;
  margin-left:23% ;
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
