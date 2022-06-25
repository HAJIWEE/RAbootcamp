import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  PeaceFill,
  ToggleOn,
  ToggleOff,
  PuzzleFill,
  LightningChargeFill,
  Gem,
  EggFill,
} from "react-bootstrap-icons";
import { Nav, Button } from "react-bootstrap";

class App extends React.Component {
  render() {
    return (
      <div className="Background">
        <Nav className="Header">
          <p className="Title">Tic Tac Toe</p>
        </Nav>
        <ul className="GameOptions">
          <li className="Subheader">vs Computer</li>
          <li>
            <ToggleOn className="Toggle" />
          </li>
          <li className="Subheader">vs Player</li>
        </ul>
        <div className="grid">
          <div className="GameGrid">
            <div class="GameGrid grid-view">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        </div>

        <ul className="frame2">
          <li>
            <Button className="Button1">Player Start</Button>
          </li>
          <li>
            <Button className="Button2">Computer Start</Button>
          </li>
        </ul>
        <p className="IconInstruction">Choose your Icon:</p>
        <ul className="frame2">
          <li>
            <PeaceFill className="PlayerIcon" />
          </li>
          <li>
            <PuzzleFill className="PlayerIcon" />
          </li>
          <li>
            <LightningChargeFill className="PlayerIcon" />
          </li>
          <li>
            <Gem className="PlayerIcon" />
          </li>
          <li>
            <EggFill className="PlayerIcon" />
          </li>
        </ul>
      </div>
    );
  }
}

export default App;
