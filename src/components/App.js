import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import {getProducts} from '../actions/productsActions'
import { PAGES } from '../reducers/appReducer';
import CategoriesList from './CategoriesList.react';
import ProductList from './Category.react';
import Product from './Product.react';
import NavBar from './NavBar';
import SearchResults from './SearchResults.react';


const useStyles = makeStyles({
      app: {
      fontFamily: 'Roboto, Arial, Helvetica, sans-serif',
  },
});

function App() {
  const dispatch = useDispatch();
  const styles = useStyles();
  const {activePage, selectedCategory, selectedProductId, search} = useSelector(state=>state.app)
  
  
  useEffect(()=> dispatch(getProducts()), [dispatch])
  


  const renderPage = () => {
    switch (activePage) {
      case PAGES.HOME:
        return <CategoriesList/>;
      case PAGES.CATEGORY:
        return <ProductList selectedCategory={selectedCategory}/>;
      case PAGES.PRODUCT:
        return <Product selectedProductId={selectedProductId}/>;
      default:
        return <CategoriesList />;
  
    }
  }

    return (
    <>
  
        <NavBar/>
        <div className={styles.app}>{renderPage()}</div>;
        {search ? <SearchResults search={search}/> : null}    
       
    </>
    )
    
}

export default App;


