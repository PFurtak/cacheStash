import React from 'react';

const About = () => {
  return (
    <div>
      <h1>About This Application</h1>
      <p className='my-1'>
        {' '}
        Application for managing your supplies during the apocalypse
      </p>
      <p className='bg-dark p'>
        <strong>Version: 0.0.4</strong>
      </p>
    </div>
  );
};

export default About;
