import React, { useEffect } from 'react'
import  { fetchProducts }  from '../actions/productsActions'
import { makeStyles } from '@material-ui/core/styles';
import { useSelector, useDispatch } from 'react-redux';
//import { groupBy } from '../actions/productsActions'

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

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
    
    if (products === undefined || Object.keys(products).length === 0 ) {
        return <span>Loading</span>
      }
      else {
          return (
            <div>
                    {
                        Object.keys(products).map((item) => 
                            {
                                return (
                            <Card className={classes.root}>
                            <CardActionArea className={classes.cardActionArea}>
                                <CardMedia
                                    className={classes.cardMedia}
                                    image={products[item].image[0]}
                                />
                                <CardContent>
                                    <Typography className={classes.productCategory} gutterBottom variant="h5" component="h2">
                                        {item}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                                )})}
                
         </div>
          )
       
      }
        
        
    
}

export default CategoriesList