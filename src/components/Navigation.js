import React from 'react';

const Navigation = ( {onRouteChange, isSignedIn} ) => {
      return(
            <nav style = {{display: 'flex', justifyContent: 'flex-start'}}>
                <h2 className="text-white px-2">Smart Brain</h2>
            </nav>
      );
    
    
}

export default Navigation;
