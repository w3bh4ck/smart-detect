import React, { Component } from 'react';

//import components
import Navigation from './components/Navigation';
import ImageLinkForm from './components/ImageLinkForm';
import Logo from './components/Logo';
import FaceRecognition from './components/FaceRecognition';
import './App.css';
import tachyons from 'tachyons';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';
import PhotoInfo from './components/PhotoInfo';

const app = new Clarifai.App({
  apiKey: 'daa2d1dd523a45df93cc157a9cd933ab'
 });

const particleConfig = {
  particles: {
    number: {
      value: 70,
      density: {
        enable: true,
        value_area: 2000
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
      info: {}
    }
  }

// loadUser = (data) => {
//   this.setState({user: {
//           id: data.id,
//           name: data.name,
//           email: data.email,
//           password: data.password,
//           entries: data.entries,
//           joined: data.joined
//   }
//   })
// }



  //function for the box that get the location of the face
calculateFaceLocation = (data)=>{
  const  clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
  const image = document.getElementById("inputImage");
  const height = Number(image.height);
  const width = Number(image.width);
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



//get info from the API when the button is clicked
onButtonSubmit = () =>{
  app.models.predict("c0c0ac362b03416da06ab3fa36fb58e3", this.state.input).then(response => {
    let imageData = {
      age: {
        years: "",
        percent: ""
      },
      gender: {
        actualGender: "",
        percent: " "
      },
      cultural:{
        appearance: "",
        percent: ""
      }
    };
    //age
    imageData.age.years = response.outputs[0].data.regions[0].data.face.age_appearance.concepts[0].name;
    imageData.age.percent = Math.floor(response.outputs[0].data.regions[0].data.face.age_appearance.concepts[0].value * 100);
    //gender
    imageData.gender.actualGender = response.outputs[0].data.regions[0].data.face.gender_appearance.concepts[0].name;
    imageData.gender.percent = Math.floor(response.outputs[0].data.regions[0].data.face.gender_appearance.concepts[0].value * 100);
    //cultural
    imageData.cultural.appearance = response.outputs[0].data.regions[0].data.face.multicultural_appearance.concepts[0].name;
    imageData.cultural.percent = Math.floor(response.outputs[0].data.regions[0].data.face.multicultural_appearance.concepts[0].value * 100);
    console.log("image data", imageData);
    
        
    this.setState({
      imageUrl: this.state.input,
      info: imageData
    });
  // console.log('imageData', imageData);
  
  this.displayFaceBox(this.calculateFaceLocation(response))}).catch(err => console.log(err));
  
}

  render() {
    return (
      <div className="app">
      <Particles className="particles"
      params={particleConfig}
      />
      <Navigation />
        <Logo />
          
          <PhotoInfo />
        
        <div className="row">
          <div className="col-md-6 offset-md-3 pt-2">
              <ImageLinkForm 
              onInputChange={this.onInputChange} 
              onButtonSubmit={this.onButtonSubmit}
              />
              <FaceRecognition box={this.state.box} imageUrl={this.state.imageUrl} />
          </div>
        </div>
      
      </div>
    );
  }
}

export default App;
