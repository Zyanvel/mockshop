import React, { useEffect } from 'react'
import  { fetchProducts }  from '../actions/productsActions'
import { makeStyles } from '@material-ui/core/styles';
import { useSelector, useDispatch } from 'react-redux';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress'

const useStyles = makeStyles({
    root: {
        width: 250,
        height: 250,
        margin: 15
    },

    cardActionArea: {
        height: '100%'
    },

    cardMedia: {
      height: '60%'
    },

    productCategory: {
        textTransform: 'capitalize',
        height: '100%'
    },

  });


  const CategoriesList = () => {
    
    const classes = useStyles();
    const products = useSelector(state => state.products);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchProducts());
      }, [dispatch]);

      console.log("i am here");
    return products === undefined ? (
      <CircularProgress className={classes.loadingSpinner}/>
    ) : products.error ? (
      <h2>{products.error}</h2>
    ) : (
      Object.keys(products).map((category) => {
        return (
            <Card key={category} className={classes.root}>
                <CardActionArea className={classes.cardActionArea}>
                    <CardMedia
                        className={classes.cardMedia}
                        image={products[category][0].image}
                    />
                    <CardContent>
                        <Typography className={classes.productCategory} gutterBottom variant="h5" component="h2">
                            {category}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
              )
          }
        )
      )
  }
    
     
     
export default CategoriesList