import React, { Component } from "react";
import Navigation from "./components/Navigation/Navigation";
import Logo from "./components/Logo/Logo";
import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm";
import FaceRecognition from "./components/FaceRecognition/FaceRecognition";
import Rank from "./components/Rank/Rank";
import Clarifai from "clarifai";
import "./App.css";

const app = new Clarifai.App({
  apiKey: "6213007769ed4420b43bca2f66390f69"
});

class App extends Component {
  constructor() {
    super();

    this.state = {
      input: "",
      imageUrl: ""
    };
  }

  onInputChange = e => {
    this.setState({ input: e.target.value });
  };

  onButtonSubmit = () => {
    this.setState({ imageUrl: this.state.input });

    app.models.predict(
      Clarifai.FACE_DETECT_MODEL,
      this.state.input.then(
        function(resp) {
          console.log(resp.outputs[0].data.regions[0].region_info.bounding_box);
        },
        function(err) {}
      )
    );
  };

  render() {
    return (
      <div className="App">
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm
          onInputChange={this.onInputChange}
          onButtonSubmit={this.onButtonSubmit}
        />
        <FaceRecognition imageUrl={this.state.imageUrl} />
      </div>
    );
  }
}

export default App;
