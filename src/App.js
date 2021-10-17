import React, {Component} from 'react'
import Navigation from './components/navigation/navigation'
import Logo from './components/logo/logo'
import Rank from './components/Rank/Rank'
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm'
import FaceRecognition from './components/faceRecognition/faceRecognition'
import SighnIn from './components/sighnIn/sighnIn'
import Register from './components/register/register'
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
      box: {},
      route: 'signin',
      isSignedIn: false,
      user: {
        id: '',
        name: '',
        email: '',
        entries: 0,
        joined: ''
      }
    }
  }

  loadUser = (data) => {
    this.setState({
      user: {
        id: data.id,
        name: data.name,
        email: data.email,
        entries: 0,
        joined: data.joined
    }})
  }

  componentDidMount() {
    fetch('http://localhost:3001/')
      .then(response => response.json())
      .then(console.log)
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
    .then(response => {
      if (response) {
        fetch('http://localhost:3001/image', {
          method: 'put',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            id: this.state.user.id            
          })
       })
          .then(res => res.json())
          .then(entr => {
            this.setState(Object.assign(this.state.user, {entries: count}))
          })
      }
      this.displayFaceBox(this.calculateFaceLocation(response))
    })
    .catch(err => console.log(err));
  }

  onRouteChange = (route) => {
    if (route === 'signout') {
      this.setState({isSignedIn: false})
    } else if (route === 'home') {
      this.setState({isSignedIn: true})
    }
    this.setState({route: route});
  }

  render() {
    const { isSignedIn, route, box, imageUrl } = this.state;
    return (
      <div className="App">
        <Particles params={particlesOptions} className='particlesCSS'/>
        <Navigation isSignedIn={isSignedIn} onRouteChangeee={this.onRouteChange} />
        {route === 'home' 
          ?          
            <div>
              <Logo />
              <Rank rankName={this.state.user.name} rankEntries={this.state.user.entries}/>
              <ImageLinkForm onInputChange={this.onInputChange} onDetect={this.onDetect}/>
              <FaceRecognition box={box} imageUrl={imageUrl}/>
            </div>
          : (
              route === 'signin' 
              ?
                <SighnIn onRouteChangeee={this.onRouteChange} />
              :
                <Register onRouteChangeee={this.onRouteChange} loadUser={this.loadUser} />
              )
        }
      </div>
    );
  }
}

export default App;

