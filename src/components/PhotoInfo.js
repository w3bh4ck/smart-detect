import React, {Component} from 'react';

class PhotoInfo extends Component {
    constructor(props){
        super(props);
       
    }
    
    componentDidMount(){
        console.log('from info', this.props.info);
    }

    render(){
        return(
            <div>
                <p className="text-center text-white">Photo Information</p>
                <p className="text-white">Age: </p>
            </div>
        );
    }
}

export default PhotoInfo;