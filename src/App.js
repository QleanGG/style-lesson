import logo from "./logo.svg";
import "./App.css";
import RegularNav from "./components/RegularNav";
import BasicList from "./components/BasicList";
import NavBootstrap from "./components/NavBootstrap";
import NavbarMui from "./components/NavbarMui";
import ButtonChoice from "./components/ButtonChoice";
import { Outlet } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    // primary: {
    //   main: "#3f51b5",
    // },
    // secondary: {
    //   main: "#f50057",
    // },
    // Other color definitions...
  },
});

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
      <RegularNav />
      {/* <NavBootstrap /> */}
      {/* <NavbarMui /> */}
      {/* <ButtonChoice /> */}
      <Outlet />
      {/* <BasicList /> */}
      </ThemeProvider>
    </div>
  );
}

export default App;
