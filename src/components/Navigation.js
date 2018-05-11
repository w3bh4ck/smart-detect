import React, { Component } from 'react';

const Navigation = ( {onRouteChange} ) => {
    return (
      <div>
            <nav style = {{display: 'flex', justifyContent: 'flex-end'}}>
                <p onClick={() => onRouteChange('signin')} className="f3 link dim white underline pa3 pointer">Sign out</p>
            </nav>
      </div>
    );
}

export default Navigation;
