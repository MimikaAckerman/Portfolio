import styled from "styled-components";

export const RedirectBtn = styled.button`
  font-size: 13px;
  padding: 1em 3.3em;
  transform: perspective(200px) rotateX(15deg);
  font-weight: 900;
  border: none;
  border-radius: 5px;

 background-color:#6c6c6c ;
  box-shadow: black;
  will-change: transform;
  transition: all 0.3s;
  border-bottom: 2px solid black;

  &:hover {
    transform: perspective(180px) rotateX(30deg) translateY(2px);
  }
  &:active {
    transform: perspective(170px) rotateX(36deg) translateY(5px);
  }
`;
export const AllLinksPage = styled.div`

  width: 80%;
  max-width: 510px;
  height: 50px;
  float: left;
  box-sizing: border-box;
  padding: 15px;
  margin-top: 29rem;
  margin-left: -30.4rem;
 

  
  

  @media (max-width: 768px) {
    width: 100%;
    max-width: none;
    height: auto;
    float: none;
    margin-left:0.1rem ;
    margin-top:3rem ;
  }
`
