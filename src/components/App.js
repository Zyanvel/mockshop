import React from 'react';
import CategoriesList from './CategoriesList.react';
import store from '../store';
import { Provider } from 'react-redux'

function App() {
  return (
    <Provider store={store}>
       <div>
          <CategoriesList/>
      </div>
    </Provider>
  )
  
}

export default App;
