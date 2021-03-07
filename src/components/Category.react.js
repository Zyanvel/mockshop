import {React} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {setSelectedProductId} from '../actions/appActions';




import { 
    makeStyles, 
    Card,
    CardActionArea,
    CardContent,
    CardMedia,
    Typography,
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

function ProductList({selectedCategory}) {
    const productCatalog = useSelector(state => state.products.productsByCategory)
    const dispatch = useDispatch();
    const styles = useStyles();
    const products = productCatalog[selectedCategory];
  
    return (
        <div className={styles.container}>
                {products.map((selectedCategory, index) => {
                    return (
                      <Card key={index} className={styles.card}>
                        <CardActionArea onClick={()=>dispatch(setSelectedProductId(selectedCategory.id))}>
                          <CardMedia
                            className={styles.categoryImage}
                            image={[selectedCategory][0].image}
                            />
                          <CardContent>
                            <Typography
                              variant='h6'
                              className={styles.titleCase}
                            >
                              {selectedCategory.title}
                            </Typography>
                          </CardContent>
                        </CardActionArea>
                      </Card>
                    );
                  })}
            

        </div>
    )
}

export default ProductList;


