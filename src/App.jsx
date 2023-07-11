import "./sass/app.scss";
import HomeBanner from "./components/HomeBanner";
import Nav from "./components/Nav";
import Gallery from "./components/Gallery";

function App() {
  return (
    <div className="app">
      <Nav />
      <HomeBanner />
      <Gallery />
    </div>
  );
}

export default App;
