import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/hero/Hero";
import InfoBoxes from "./components/infoboxes/InfoBoxes";
import { ThemeProvider } from "styled-components";
import InfoSectionOne from "./components/infoSectionOne/InfoSectionOne";
import InfoSectionTwo from "./components/infoSectionTwo/InfoSectionTwo";
import InfoSectionThree from "./components/infoSectionThree/InfoSectionThree";
import InfoSectionFour from "./components/infoSectionFour/InfoSectionFour";
import Teams from "./components/team/Teams";
import Footer from "./components/footer/Footer";
import { useState } from "react";

const GlobalStyles = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
}
body{
  background-color: ${(porps) => porps.theme.colors.bgDefault};
  @import url("https://fonts.googleapis.com/css2?family=Splash&display=swap");
  *{
    font-family: 'Roboto', sans-serif;
  }
}
`;

const Container = styled.div`
  background-color: white;
  height: 100vh;
`;
const theme = {
  colors: {
    primary: "darkblue",
    secondary: "tomato",
    light: "black",
    text: "snow",
    textDark: "gray",
    bgDefault: "white",
    bgPrimary: "darkblue",
    bgLight: "aliceBlue",
  },
};

const darktheme = {
  colors: {
    primary: "white",
    secondary: "tomato",
    light: "yellow",
    text: "snow",
    textDark: "gray",
    bgDefault: "black",
    bgPrimary: "black",
    bgSecondary: "black",
    bgLight: "aliceBlue",
    hoverColor: "",
  },
};

function App() {
  const [mode, setMode] = useState(false);
  return (
    <ThemeProvider theme={mode ? darktheme : theme}>
      <GlobalStyles />
      <Container>
        <Navbar setMode={setMode} mode={mode} />
        <Hero />
        <InfoBoxes />
        <InfoSectionOne />
        <InfoSectionTwo />
        <InfoSectionThree />
        <InfoSectionFour />
        <Teams />
        <Footer />
      </Container>
    </ThemeProvider>
  );
}

export default App;
