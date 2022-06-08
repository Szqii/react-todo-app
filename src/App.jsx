import "./App.scss";
import Header from "./components/header/header.component";
import Main from "./components/main/main.component";

const App = () => {
  return (
    <div className="app-container">
      <Header />
      <Main />
    </div>
  );
};

export default App;
