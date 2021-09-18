import React, {Component} from 'react'
import Navigation from './components/navigation/navigation'
import Logo from './components/logo/logo'
import Rank from './components/Rank/Rank'
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm'
import './App.css';
import Particles from 'react-particles-js';
// import Clarifai from 'clarifai';

// const app = new Clarifai.app({
//   apiKey: 'e1e29699a6504336ae0ffa788524d16a'
// });

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
    }
  }

  onInputChange = (event) => {
    console.log(event.target.value);
  }

  onDetect = () => {
    console.log('Click!');
    // app.models.predict('f3c31e1ed15044bdaa5bc8239e8ebef3', this.state.input).then(
    //   function(response) {
    //     console.log(response);
    //   },
    //   function(err) {

    //   }
    // );
  }

  render() {
    return (
      <div className="App">
        <Particles params={particlesOptions} className='particlesCSS'/>
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm onInputChange={this.onInputChange} onDetect={this.onDetect}/>
      </div>
    );
  }
}

export default App;
