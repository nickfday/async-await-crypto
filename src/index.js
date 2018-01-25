import React from 'react';
import { render } from 'react-dom';
import Bitcoin from './Bitcoin';


const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center',
};

const App = () => (
  <div style={styles}>
    <h2>How much is 1 bitcoin worth?</h2>
    <Bitcoin />
    
  </div>
);

render(<App />, document.getElementById('root'));
