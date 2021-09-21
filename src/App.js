import React, {Component} from 'react'
import Navigation from './components/navigation/navigation'
import Logo from './components/logo/logo'
import Rank from './components/Rank/Rank'
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm'
import FaceRecognition from './components/faceRecognition/faceRecognition'
import './App.css';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';

const app = new Clarifai.App({
  apiKey: 'e1e29699a6504336ae0ffa788524d16a'
});

const particlesOptions = {
  particles: {
    number: {
      value: 80,
      density: {
        enable: true,
        value_area: 1000
      }
    }    
  }
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: "",
      imageUrl: "",
      box: {}
    }
  }


  calculateFaceLocation = (data) => {
    const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('inputimage');
    const widthNum = Number(image.width);
    const heightNum = Number(image.height);
    // console.log(widthNum, heightNum); ---> Just checking if everything works
    return {
      leftCol: clarifaiFace.left_col * widthNum,
      topRow: clarifaiFace.top_row * heightNum,
      rightCol: widthNum - (clarifaiFace.right_col * widthNum),
      bottomRow: heightNum - (clarifaiFace.bottom_row * heightNum)
    }
  }

  displayFaceBox = (box) => {
    // console.log(box); ---> Just checking if everything works
    this.setState({box: box});
  }

  onInputChange = (event) => {
    this.setState({input: event.target.value});
  }

  onDetect = () => {
    this.setState({imageUrl: this.state.input})
    app.models.predict(Clarifai.FACE_DETECT_MODEL, this.state.input)
    .then(response => this.displayFaceBox(this.calculateFaceLocation(response)))
    .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="App">
        <Particles params={particlesOptions} className='particlesCSS'/>
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm onInputChange={this.onInputChange} onDetect={this.onDetect}/>
        <FaceRecognition box={this.state.box} imageUrl={this.state.imageUrl}/>
      </div>
    );
  }
}

export default App;
