import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import AMenu from "./pages/AMenu/AMenu";
import BMenu from "./pages/BMenu/BMenu";

function App() {
  return (
    <div className="page-container">
      <BrowserRouter>
        <Navbar />
        <div className="content-wrap">
          <Switch>
            <Route path="/" exact component={Home}></Route>
            <Route path="/a-menu" component={AMenu}></Route>
            <Route path="/b-menu" component={BMenu}></Route>
          </Switch>
        </div>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
