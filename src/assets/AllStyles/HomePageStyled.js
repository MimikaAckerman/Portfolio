import styled from "styled-components";


export const GlobalContainerHome = styled.div``




export const ProfileContainer = styled.div`
  border-radius: 30px;
  background: linear-gradient(145deg);
  box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 50px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 26px -18px inset;
  width: 50%;
  max-width: 480px;
  height: 290px;
  float: left;
  box-sizing: border-box;
  padding: 15px;
  margin-top: 9rem;
  margin-left: 5rem;
  background: lightgrey;

  @media (max-width: 768px) {
    width: 100%;
    max-width: none;
    height: auto;
    float: none;
    margin-left:0.1rem ;
    margin-top:3rem ;
  }
`;
export const Saludo = styled.h3`
font-family: 'Pacifico', cursive;
font-size:2.3em ;
margin-top:-5% ;
color:#0E0E0E;
margin-left:7em ;

`
export const TitleName = styled.h3`
font-family: 'Pacifico', cursive;
font-size:2.5em ;
word-spacing:0.1em ;
margin-top:-0.1em ;
color:white;

`
export const DescriptionTitle = styled.h4`
font-family: 'Nova Oval', cursive;
margin-top:-1em ;
color:white;
`
