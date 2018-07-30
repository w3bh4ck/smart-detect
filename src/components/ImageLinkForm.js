import React from 'react';

const ImageLinkForm = ({onInputChange, onButtonSubmit}) => {
  
    return (
        <div>

            <div className="input-group mb-1 px-5">
                <input type="text" 
                    className="form-control" placeholder="Image Url..." 
                    aria-label="Recipient's username" 
                    aria-describedby="button-addon2" 
                    onChange={onInputChange}
                />
                <div className="input-group-append">
                    <button 
                    className="btn btn-outline-secondary text-white btn-default" 
                    type="button" id="button-addon2"
                    onClick={onButtonSubmit}
                    >Scan Image</button>
                 </div>
            </div>
        </div>
    );
  }


export default ImageLinkForm;
