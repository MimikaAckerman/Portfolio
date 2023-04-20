import React from "react";
import PartitcleComponent from "../components/ParticleComponent/PartitcleComponent";
import { Box, Grid, Paper, styled } from "@mui/material";
import { Work } from "../assets/data/WorkData";

import {
  BoxGreen,
  BoxRed,
  BoxYellow,
  Circle,
  Tools,
} from "../assets/AllStyles/WorkPageCardStyled";
import { Show } from "../assets/allSvg";

import BtnBack from "../components/BtnBack";
import Style from "../assets/AllStyles/SocialMedia.module.css";
const Workpage = () => {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  return (
    <>
      <PartitcleComponent theme="light" />
      <BtnBack />
      <Box sx={{ width: "100%" }}>
        <Grid
          container
          rowSpacing={1}
          columnSpacing={{ xs: 0.1, sm: 2, md: 3 }}
          style={{marginTop:'1em'}}
        >
          {Work.map((data) => (
            <Grid item xs={3}>
              <Item
                key={data.id}
                style={{
                  zIndex: "1",
                  borderRadius: "8px",
                  backgroundColor: "#f8fbfe",
                  margin: "0 auto",
                }}
              >
                <Tools>
                  <Tools>
                    <BoxRed></BoxRed>
                  </Tools>
                  <Circle>
                    <BoxYellow></BoxYellow>
                  </Circle>
                  <Circle>
                    <BoxGreen></BoxGreen>
                  </Circle>
                </Tools>

                <h2>{data.name}</h2>
                <p>{data.description}</p>
                <button target="_black" className={Style.btn5}>
                  <a
                    href={data.github}
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    <Show />
                  </a>
                </button>
              </Item>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default Workpage;
