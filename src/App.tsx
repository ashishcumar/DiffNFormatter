import { Grid } from "@chakra-ui/react";
import DiffChecker from "./Components/DiffChecker";
import JsonFormatter from "./Components/JsonFormatter";
import LandingPage from "./Components/LandingPage";
import ToolsShowcase from "./Components/ToolsShowcase";

function App() {
  return (
    <>
      <Grid
        sx={{
          overflowY: "scroll",
          scrollSnapType: "y mandatory",
          scrollBehavior: "smooth",
          height: "100vh",
        }}
      >
        <LandingPage />
        <ToolsShowcase />
        <DiffChecker />
        <JsonFormatter />
      </Grid>
      {/* <Footer /> */}
    </>
  );
}

export default App;
