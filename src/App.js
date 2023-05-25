import "./App.css";
import NavBar from "./components/navBar";
import Info from "./pages/Info";
import Home from "./pages/Home";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";

function App() {
  let components;
  switch (window.location.pathname) {
    default:
      components = <Home />;
      break;
    case "/info":
      components = <Info />;
      break;
    case "/skills":
      components = <Skills />;
      break;
    case "/contact":
      components = <Contact />;
      break;
  }
  return (
    <div className="App">
      <div className="container">
        <NavBar />
        {components}
      </div>
    </div>
  );
}

export default App;
