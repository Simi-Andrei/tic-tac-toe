import { Header } from "./components/header";
import { PlayingField } from "./components/playing-field";

const App = () => {
  return (
    <div className="h-screen flex flex-col">
      {/* Render header */}
      <Header />
      {/* Render boards and chats */}
      <PlayingField />
    </div>
  );
};

export default App;
