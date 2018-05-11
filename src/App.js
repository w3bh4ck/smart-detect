import React, { Component } from 'react';
//import components
import Navigation from './components/Navigation';
import ImageLinkForm from './components/ImageLinkForm';
import Rank from './components/Rank';
import Logo from './components/Logo';
import Signin from './components/signin/Signin';
import Register from './components/register/Register';
import FaceRecognition from './components/FaceRecognition';
import Style from './App.css';
import tachyons from 'tachyons';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';

const app = new Clarifai.App({
  apiKey: 'daa2d1dd523a45df93cc157a9cd933ab'
 });

const particleConfig = {
  particles: {
    number: {
      value: 70,
      density: {
        enable: true,
        value_area: 800
      }
    }
  }
}

class App extends Component {
  constructor(){
    super();
    this.state = {
      input: '',
      imageUrl: '',
      box: {},
      route: 'signin'
    }
  }

  //function for the box that get the location of the face
calculateFaceLocation = (data)=>{
  const  clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
  const image = document.getElementById("inputImage");
  const height = Number(image.height);
  const width = Number(image.width);
  console.log(height, width);
  return {
    leftCol: clarifaiFace.left_col * width,
    topRow: clarifaiFace.top_row * height,
    rightCol: width - (clarifaiFace.right_col * width),
    bottomRow: height - (clarifaiFace.bottom_row * height)
  }
}

displayFaceBox = (box) => {
  this.setState({box: box});
}

//get the value of the inputed image link
onInputChange = (event) =>{
 this.setState({input: event.target.value});
}

//function to run when the route changes
onRouteChange = (route) => {
  this.setState({route: route});
}


//get info from the API when the button is clicked
onButtonSubmit = () =>{
  this.setState({imageUrl: this.state.input});
  app.models.predict(
  Clarifai.FACE_DETECT_MODEL, 
  this.state.input)
    .then(response => this.displayFaceBox(this.calculateFaceLocation(response)))
    .catch(err => console.log(err));
}

  render() {
    return (
      <div className="App">
      <Particles className="particles"
         params={particleConfig}
        />
        <Navigation onRouteChange={this.onRouteChange} />
        <Logo />
        
        {this.state.route === 'home' ? 
        <div>
        <Rank />
        <ImageLinkForm 
        onInputChange={this.onInputChange} 
        onButtonSubmit={this.onButtonSubmit}
        />
        <FaceRecognition box={this.state.box} imageUrl={this.state.imageUrl} />
        </div>
        :(
          this.state.route === 'signin' ?
          <Signin onRouteChange = {this.onRouteChange} />
          :
            <Register onRouteChange = {this.onRouteChange} />
        )
        }
      </div>
    );
  }
}

export default App;
