import React, { Component } from 'react';
import Counter from './Counter';
import SuperMarket from './components/SuperMarket';

import DevTools from 'mobx-react-devtools';


class App extends Component {
  render(){
    return (
      <div>
        <Counter />
        <hr />
        <SuperMarket />
        
      </div>
    );
  }
  
}

export default App;
