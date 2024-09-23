import { createTheme, ThemeProvider } from "@mui/material";
import "./App.css";
import HomePage from "./component/HomePage";

const customTheme = createTheme({
  palette: {
    primary: {
      main: "#007AFF",
    },
    secondary: {
      main: "#7F56D9",
    },
    tertiory: {
      main: "#ffffff",
    },
  },
  typography: {
    h1: {
      font: "inter",
      fontSize: "40px",
      lineHeight: "48px",
      fontWeight: 700,
    },
    h2: {
      font: "inter",
      fontSize: "28px",
      lineHeight: "36px",
      fontWeight: 500,
    },
    h3: {
      font: "inter",
      fontSize: "20px",
      lineHeight: "30px",
      fontWeight: 700,
    },
    h4: {
      font: "inter",
      fontSize: "18px",
      lineHeight: "28px",
      fontWeight: 500,
    },
  },
  bodyBold: {
    font: "inter",
    fontSize: "14px",
    lineHeight: "20px",
    fontWeight: 400,
  },
});

const App = () => {
  return (
    <div>
      <ThemeProvider theme={customTheme}>
        <HomePage />
      </ThemeProvider>
    </div>
  );
};

export default App;
