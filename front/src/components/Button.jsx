import React from 'react';
import Button from './Button';

const App = () => {
  const handleClick = () => {
    console.log('Le bouton a été cliqué !');
  };

  return (
    <div>
      <Button onClick={handleClick} label="Cliquez-moi !" />
    </div>
  );
};

export default App;
