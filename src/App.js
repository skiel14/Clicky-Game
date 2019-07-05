import React, { Component } from "react";
import ImgCard from "./components/ImgCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import pics from "./pics.json";

class App extends Component {
  state = {
    pics
  };

  render() {
    return (<>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container">
          <h2 className="nav-brand">CLICKY GAME</h2>
          <ul className="navbar-nav mr-auto"></ul>
        </div>
      </nav>
      <Title></Title>
      <Wrapper>
          <ImgCard/>
      </Wrapper>
    </>);
  }
}

export default App;
