import { Header } from "./components/header";
import { PlayingField } from "./components/playing-field";

function App() {
  return (
    <div className="h-screen flex flex-col">
      <Header />
      <PlayingField />
    </div>
  );
}

export default App;
