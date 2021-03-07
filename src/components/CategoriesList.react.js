import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { setCategory } from '../actions/appActions';

import { 
  makeStyles, 
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  CircularProgress,
} from '@material-ui/core';

const useStyles = makeStyles({
    container: {
        padding: '20px',
        display: 'flex',
        justifyContent: 'center',
    },

    card: {
        marginLeft: 8,
        width: 200,
    },

    categoryImage: {
      height: 200
    },

    titleCase: {
        textTransform: 'capitalize',
    },
  });


  export default function CategoriesList() {
    const productsByCategory = useSelector(
      state => state.products?.productsByCategory
    );
    const styles = useStyles();

    const dispatch = useDispatch();

    return (
      <div className={styles.container}>
        {productsByCategory != null ? (
          Object.keys(productsByCategory).map((category, index) => {
            return (
              <Card key={index} className={styles.card}>
                <CardActionArea onClick={()=>dispatch(setCategory(category))}>
                  <CardMedia
                    className={styles.categoryImage}
                    image={productsByCategory[category][0].image}
                    />
                  <CardContent>
                    <Typography
                      variant='h6'
                      className={styles.titleCase}
                    >
                      {category}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            );
          })
        ) : (
          <CircularProgress size={24} />
        )}
      </div>
    )
  }
    
     
     
