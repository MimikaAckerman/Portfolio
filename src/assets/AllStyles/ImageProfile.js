import styled from "styled-components"


export const ProfileImage = styled.div`
width: 30%;
position: relative;
display: flex;
border-radius: 100%;
background-color: red;
margin-left: 69%;
position: absolute;
margin-top: 35rem;

.pic {
position: absolute;
bottom: 0;
transform: translate(-50%, 0%);
width: 120%;
height: auto;
border-radius: 50%;
}

@media only screen and (max-width: 768px) {
width: 15%;
margin-left: 80%;
margin-top: 37rem;
.pic {
width: 150%;
transform: translate(-50%, -20%);
}
}

@media only screen and (max-width: 480px) {
width: 70%;
margin-left: 15%;
margin-top: 15rem;
.pic {
width: 200%;
transform: translate(-50%, -40%);
}
}
`