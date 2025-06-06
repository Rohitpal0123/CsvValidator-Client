import "./index.css";
import { Header } from "./components/layout/header";
import { CsvValidator } from "./components/pages/csvValidator";

function App() {
  return (
    <>
        <Header />
        <CsvValidator />
    </>
  );
}

export default App;
