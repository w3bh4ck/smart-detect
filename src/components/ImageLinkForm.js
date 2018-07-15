import React from 'react';

const ImageLinkForm = ({onInputChange, onButtonSubmit}) => {
  
    return (
        <div>
            <div>
                <p className="text-center text-white">Detect Faces in your picture</p>
              
            </div>

            <div class="input-group mb-3 px-5">
                <input type="text" 
                    class="form-control" placeholder="Image Url..." 
                    aria-label="Recipient's username" 
                    aria-describedby="button-addon2" 
                    onChange={onInputChange}
                />
                <div class="input-group-append">
                    <button 
                    class="btn btn-outline-secondary text-white" 
                    type="button" id="button-addon2"
                    onClick={onButtonSubmit}
                    >Scan Image</button>
                 </div>
            </div>
        </div>
    );
  }


export default ImageLinkForm;
