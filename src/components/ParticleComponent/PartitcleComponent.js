import React from 'react'
import Particles from 'react-tsparticles'
import { loadFull } from 'tsparticles'


import ConfigDark from "../../assets/config/particlesjs-config.json";
import ConfigLight from "../../assets/config/particlesjs-config-light.json";
import { Box } from '../../assets/AllStyles/ParticleStyled';


const PartitcleComponent = (props) => {
    const particlesInit = async(main) =>{
        await loadFull(main)
    }
  return (
    <Box>
      <Particles
        id="tsparticles"
        style={{ position: "absolute", top: 0 }}
        params={props.theme === "light" ? ConfigLight : ConfigDark}
        init={particlesInit} 
      />
    </Box>
  )
}

export default PartitcleComponent