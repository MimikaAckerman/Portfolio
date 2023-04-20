import styled from "styled-components";

export const GlobalDiv = styled.div`
 
  width: 50%;
  max-width: 570px;
  height: 450px;
  position: fixed;
  margin-right:1rem ;
  
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  box-sizing: border-box;
  padding: 20px;

  @media (max-width: 768px) {
    width: 100%;
    max-width: none;
    height: auto;
    position: static;
    transform: none;
  }

`
