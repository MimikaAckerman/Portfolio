import { Box } from "@mui/material";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const links =[
    {
        name: 'Home',
        to: '/',
        active: 'home',
      }, 
      {
        name: 'Work',
        to: '/WorkPage',
        active: 'Work',
      },
      {
        name: 'About',
        to: '/AboutPage',
        active: 'About',
      },
      {
        name: 'Skills',
        to: '/MySkills',
        active: 'Skills',
      },
];

