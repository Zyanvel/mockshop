import {React} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {setSelectedProductId} from '../actions/appActions';
import Backdrop from '@material-ui/core/Backdrop';



import { 
    makeStyles, 
    Card,
    CardActionArea,
    CardContent,
    CardMedia,
    Typography,
  } from '@material-ui/core';

  const useStyles = makeStyles ((theme) => ({
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

      backdrop: {
        backgroundColor: '#fff',
        zIndex: theme.zIndex.drawer +1,
        top: 64,
      }
    }));

function SearchResults({search}) {
    const products = useSelector(state => state.products.products)
    const dispatch = useDispatch();
    const styles = useStyles();
    const searchProducts =  products.filter(product => product.title.toLowerCase().indexOf(search.toLowerCase()) !== -1 || product.description.toLowerCase().indexOf(search.toLowerCase()) !== -1);

    
    return (
        <Backdrop className={styles.backdrop} open={true}>
            <div className={styles.container}>
                    {searchProducts.map((selectedCategory, index) => {
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
        </Backdrop>
    )
}

export default SearchResults;
