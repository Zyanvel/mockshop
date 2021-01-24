import React from 'react';
import CategoriesList from './CategoriesList.react';
import store from '../store';
import { Provider } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  cardListWrapper: {
      display: 'flex',
      justifyContent: 'center',
      width: '80%',
      margin: 'auto'
  }
});

function App() {
  const classes = useStyles();
  return (
    <Provider store={store}>
       <div className= {classes.cardListWrapper}>
          <CategoriesList/>
      </div>
    </Provider>
  )
  
}

export default App;
