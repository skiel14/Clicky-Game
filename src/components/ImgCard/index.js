import React, { Component } from "react";
import pics from "../../pics.json";
import "./style.css";

class ImgCard extends Component {

  state = {
    pics,
    score: 0,
    topScore: 0,
    picked: []
  }

  imgClick = event => {
    let pickedPic = event;

    let pickedTwice = this.state.picked.indexOf(pickedPic) > -1;

    if (pickedTwice) {
      this.secondPick();
      this.shuffle();
      alert("Try again");
    } else {
      this.setState({ picked: this.state.picked.concat(pickedPic) })
      this.scoreUp();
      this.shuffle();
      console.log(this.state.picked.concat(pickedPic));
    }

    this.win();
  }

  scoreUp = () => {
    if(this.state.score+1 > this.state.topScore) {
      this.setState({ topScore: this.state.score + 1});
    }
    this.setState({ score: this.state.score + 1 });
  }

  shuffle = () => {
    this.state.pics.sort(function (a, b) { return 0.5 - Math.random() });
  }

  secondPick = () => {
    this.setState({ score: 0 });
    this.setState({ picked: [] });
  }

  win = () => {
    if (this.state.score === 11) {
      alert("Good job you won!");
      this.shuffle();
      this.secondPick();
      return;
    }
  }

  render() {

    const allPics = pics.map(pic => {
      return (
        <div className="card" key={pic.id} id={pic.id}>
          <div className="img-container">
            <img alt={pic.name} src={require("../../images/" + pic.image)} onClick={this.imgClick.bind(this, pic.id)} />
          </div>
        </div>
      )
    });
    return (<>
      <div><h3><strong>Score: {this.state.score} | Top Score: {this.state.topScore}</strong></h3></div>
      <div className="container image-list">
        {allPics}
      </div>
    </>)
  }
}

export default ImgCard;
