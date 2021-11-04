import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import AMenu from "./pages/AMenu/AMenu";
import BMenu from "./pages/BMenu/BMenu";
import CMenu from "./pages/CMenu/CMenu";
import DMenu from "./pages/DMenu/DMenu";
import MovieDetail from "./pages/MovieDetail/MovieDetail";
import Login from "./pages/Login/Login";
import Logout from "./components/Logout/Logout";
import { HelmetProvider } from "react-helmet-async";
import { Component } from "react";

class App extends Component {
  render() {
    const { helmetContext } = [];
    return (
      <div className="min-h-screen flex flex-col text-center">
        <BrowserRouter>
          <Navbar />
          <div className="flex-grow py-14 px-32 bg-gray-50">
            <Switch>
              <HelmetProvider context={helmetContext}>
                <Route path="/" exact component={Home}></Route>
                <Route path="/a-menu" component={AMenu}></Route>
                <Route path="/b-menu" component={BMenu}></Route>
                <Route path="/c-menu" component={CMenu}></Route>
                <Route path="/d-menu" component={DMenu}></Route>
                <Route path="/login" component={Login}></Route>
                <Route path="/logout" component={Logout} />
                <Route
                  path="/movie-detail/:movie_id"
                  component={MovieDetail}
                ></Route>
              </HelmetProvider>
            </Switch>
          </div>
        </BrowserRouter>
        <Footer />
      </div>
    );
  }
}

export default App;
