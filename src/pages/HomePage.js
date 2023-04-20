import React from "react";
import Animation from "../components/Animation/Animation";
import {
  DescriptionTitle,
  GlobalContainerHome,
  ProfileContainer,
  Saludo,
  TitleName,
} from "../assets/AllStyles/HomePageStyled";

import Style from "../assets/AllStyles/SocialMedia.module.css";

import { Email, Github, LinkedIn } from "../assets/allSvg";
import PartitcleComponent from "../components/ParticleComponent/PartitcleComponent";
import {
  AllLinksPage,
  RedirectBtn,
} from "../assets/AllStyles/RedirectPageStyled";
import Me from '../assets/img/profile-img .png'
import { ProfileImage } from "../assets/AllStyles/ImageProfile";

const HomePage = () => {
  return (
    <>
      <GlobalContainerHome>
        <PartitcleComponent theme="light" />
        <ProfileImage>
        <img className="pic" src={Me} alt="Profile Pic"  />
        </ProfileImage>


        <ProfileContainer>
          <TitleName>Mimika Ackerman</TitleName>
          <DescriptionTitle>
            Full stack developer | Administradora de Sistemas Informaticos en
            Red
          </DescriptionTitle>

          {/* socialmedia */}

          <div className={Style.share} target="_black">
            <button className={Style.btn2}>
              <a href="https://github.com/MimikaAckerman" style={{textDecoration:'none' , color:'black'}}>
                <LinkedIn />
              </a>

              <span className={Style.tooltiptext2}>
                <div className={Style.card}>
                  💻 Github
                </div>
              </span>
            </button>

            <button className={Style.btn3} target="_black">
              <a href="https://www.linkedin.com/in/emilyehg/" style={{textDecoration:'none'  ,color:'black'}}>
                <Github />
              </a>

              <span className={Style.tooltiptext3}>
                <div className={Style.card}>☕ Linkedin</div>
              </span>
            </button>

            <button className={Style.btn4} target="_blank">
              <a href="mailto:emily.herreragomez@gmail.com" style={{textDecoration:'none'}}>
                <Email />
              </a>

              <span className={Style.tooltiptext4}>
                <div className={Style.card}>📧 Email</div>
              </span>
            </button>
          </div>

          <Saludo>Hola! 👋</Saludo>
        </ProfileContainer>

        <AllLinksPage>
          <RedirectBtn>
            <a
              href="/WorkPage"
              style={{ textDecoration: "none", color: "white" }}
            >
              Mis Trabajos
            </a>
          </RedirectBtn>
          <RedirectBtn>
            <a
              href="/AboutPage"
              style={{ textDecoration: "none", color: "white" }}
            >
              Sobre mi
            </a>
          </RedirectBtn>
          <RedirectBtn>
            <a
              href="/MySkillsPage"
              style={{ textDecoration: "none", color: "white" }}
            >
              Mis Skills
            </a>
          </RedirectBtn>
        </AllLinksPage>
      </GlobalContainerHome>
    </>
  );
};

export default HomePage;
