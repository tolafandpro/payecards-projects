import { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from './utils/Theme';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import List from "./pages/List";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

function App() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <ThemeProvider theme={darkMode ? lightTheme : darkTheme}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Container>
          <Navbar darkMode={darkMode} setDarkMode={setDarkMode}/>
            <Router>
              <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/lists" element={<List/>} />
              </Routes>
            </Router>
          <Footer />
        </Container>
      </LocalizationProvider>
    </ThemeProvider>
  );
}

export default App;
