import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import  { fetchProducts }  from '../actions/productsActions'
import { makeStyles } from '@material-ui/core/styles';

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


function CategoriesList( { productData, fetchProducts }) {
    
    const classes = useStyles();
    useEffect(() => {
        fetchProducts()
    })
    return productData.loading ? (
        <h2>Loading!</h2>
    ) : productData.error ? (
        <h2>{productData.error}</h2>
    ) : (
        
        <div>
            <div>
                {
                    productData && productData.products && productData.products.map(
                        product => 
                        // {const reGroup = (list, key) => {
                        //     const newGroup = {};
                        //     list.forEach(item => {
                        //         const newItem = Object.assign({}, item);
                        //         delete newItem[key];
                        //         newGroup[item[key]] = newGroup[item[key]] || [];
                        //         newGroup[item[key]].push(newItem);
                        //     });
                        //     return newGroup;
                        // }
                        <Card className={classes.root}>
                        <CardActionArea className={classes.cardActionArea}>
                            <CardMedia
                                className={classes.cardMedia}
                                image={product.image}
                            />
                            <CardContent>
                                <Typography className={classes.productCategory} gutterBottom variant="h5" component="h2">
                                    {product.category}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                        )
                }
            </div>
        </div>
    )
}



const mapStateToProps = state => {
    return {
        productData: state.product
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchProducts: () => dispatch(fetchProducts())
    }
}

export default connect(
    mapStateToProps, 
    mapDispatchToProps
    )(CategoriesList)