import React from 'react';
import CategoriesList from './CategoriesList.react';
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
       <div className= {classes.cardListWrapper}>
          <CategoriesList/>
      </div>
  )
  
}

export default App;
