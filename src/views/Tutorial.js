import React from 'react';

const Tutorial = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col s12" />
        <h1>Hello from Tutorial</h1>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/A3Bl8VECdLo"
          frameborder="0"
          allowfullscreen
          title="tutorial-video"
        />
      </div>
    </div>
  );
};

export default Tutorial;
