import React, { Component } from 'react';
import logoStyle from '../styling/ImageLinkForm.css';

const ImageLinkForm = ({onInputChange, onButtonSubmit}) => {
  
    return (
        <div>
            <div className="main br3 shadow-6">
                <p className="f5 white">Detect Faces in your picture</p>
                <div className="formContainer center">
                    <input type='text' className="f4 pa2  center" onChange={onInputChange}/>
                    <button 
                    className=" grow f4 link ph3 pv2 dib white "
                    onClick={onButtonSubmit}
                    >Detect</button>
                </div>
            </div>
        </div>
    );
  }


export default ImageLinkForm;
