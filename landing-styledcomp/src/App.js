import Header from "./components/Header";
import Container from "./components/styled/Container.styled";
import { GlobalStyles } from "./components/styled/GlobalStyles.styled";
import { ThemeProvider } from "styled-components"; // Global State Alani
import data from "./data";
import Card from "./components/Card";
import FlexColumn from "./components/styled/FlexColumn.styled";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

const styles = {
  colors: {
    primary: "#eee",
    secondary: "#666",
  },
  margins: {},
  paddings: {},
  breakpoints: {
    xs: "300px",
    sm: "500px",
    md: "700px",
  },
};

const App = () => {
  return (
    // Context API'de ThemeProvider ile ayni sekilde calisir, herseyi sarmalar.
    <ThemeProvider theme={styles}>
      <GlobalStyles />
      <Navbar />
      <Container marginBottom="5rem">
        <Header />
        <FlexColumn gap="1rem">
          {data.map((item, index) => {
            return <Card key={index} {...item} index={index + 1} />;
          })}
        </FlexColumn>
      </Container>
      <Footer />
    </ThemeProvider>
  );
};

export default App;
