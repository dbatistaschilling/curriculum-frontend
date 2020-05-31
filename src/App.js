import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Main from './components/Main';
import Admin from './admin/Admin'

const App = () => {
    
    return (
      <div>
			  <BrowserRouter>
          <div>
            <Route path="/" exact component={Main} />
            <Route path="/admin" component={Admin} />
          </div>
        </BrowserRouter>
      </div>
  );
}


export default App;
