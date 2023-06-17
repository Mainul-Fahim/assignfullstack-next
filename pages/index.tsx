import { useEffect, useState } from "react";
import type { NextPage } from "next";
import PropTypes from "prop-types";
import { Tabs, Tab, ThemeProvider, createTheme } from "@mui/material";
import Footer from "../components/Layouts/Footer";
import FieldSection from "../components/Fields/FieldSection";
import Box from '@mui/material/Box';

const theme = createTheme({
  palette: {
    primary: {
      light: "#D3D3D3",
      main: "#D3D3D3",
      dark: "#545454",
      contrastText: "#fff",
    },
  },
});
//home page display
// @ts-ignore
const Home: NextPage = () => {


  return (
    <>
      <ThemeProvider theme={theme}>
        <Box sx={{margin: '10px'}} className="container">
          <>
            <ThemeProvider theme={theme}>
              <Box sx={{ marginBottom: '10px'}} className="container">
                  <FieldSection/>
              </Box>
            </ThemeProvider>
          </>
        </Box>
      </ThemeProvider>
    </>
  );
};



export default Home;
