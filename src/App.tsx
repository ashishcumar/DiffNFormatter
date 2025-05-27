import DiffChecker from "./Components/DiffChecker";
import JsonFormatter from "./Components/JsonFormatter";
import LandingPage from "./Components/LandingPage";
import ToolsShowcase from "./Components/ToolsShowcase";

function App() {

// DiffNFormatter
  return (
    <div>
      <LandingPage />
      <ToolsShowcase />
      <DiffChecker />
      <JsonFormatter />
    </div>
  );
}

export default App;
