import logo from "../assets/images/logo.svg";
import {
  AccessAlarmOutlined,
  ThreeDRotation,
  FacebookOutlined,
} from "@mui/icons-material";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import ToggleColorMode from "../components/ToggleColorMode";
import AnimatedComponent from "../components/AnimatedComponent";
import CardComponent from "../components/CardComponent";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="App-icons">
          <FacebookOutlined className="icon-app" sx={{ fontSize: 40 }} />
          <AccessAlarmOutlined className="icon-app" sx={{ fontSize: 40 }} />
          <ThreeDRotation className="icon-app" sx={{ fontSize: 40 }} />
        </div>
        <p>
          Edit{" "}
          <span className="code-app">
            <code>src/App.js</code>
          </span>{" "}
          and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Button className="button-app" variant="contained">
          Hello World
        </Button>
        <Box sx={{ color: "primary.main" }}>primary.main</Box>
        <Box sx={{ color: "secondary.main" }}>secondary.main</Box>
        <Box sx={{ color: "error.main" }}>error.main</Box>
        <Box sx={{ color: "warning.main" }}>warning.main</Box>
        <Box sx={{ color: "info.main" }}>info.main</Box>
        <Box sx={{ color: "success.main" }}>success.main</Box>
        <Box sx={{ color: "text.primary" }}>text.primary</Box>
        <Box sx={{ color: "text.secondary" }}>text.secondary</Box>
        <Box sx={{ color: "text.disabled" }}>text.disabled</Box>
      </header>
      <ToggleColorMode />
      <AnimatedComponent />
      <CardComponent />
    </div>
  );
}

export default App;
