import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import CategoriesList from './CategoriesList.react';
import {getProducts} from '../actions/productsActions'
import ProductList from './Category.react';

const useStyles = makeStyles({
      app: {
      fontFamily: 'Roboto, Arial, Helvetica, sans-serif',
  },
});

function App() {
  const dispatch = useDispatch();
  const styles = useStyles();
  const selectedCategory = useSelector(state => state.category.selectedCategory);

  useEffect(() => dispatch(getProducts()), [dispatch]);
  return (
       <div className= {styles.app}>
         {selectedCategory ? <ProductList selectedCategory={selectedCategory}/> : <CategoriesList/>} 
      </div>
  )
  
}

export default App;
