import React, {Component} from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Contact from "./Components/Contact/Contact";
import Main from "./Components/Main/Main";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" Component={Main} />
          <Route path="/contact" Component={Contact} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
