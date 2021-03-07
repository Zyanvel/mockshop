import {React, useState} from 'react';
import {useSelector} from 'react-redux';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import ButtonBase from '@material-ui/core/ButtonBase';
import Button from '@material-ui/core/Button';

import { 
    makeStyles, 
    Typography,
  } from '@material-ui/core';

  
  const useStyles = makeStyles({

        root: {
          flexGrow: 1,

        '& > *': {
          margin: (1),
        },
        '& .MuiTextField-root': {
            margin: (1),
            width: '25ch',
        }
        },

        paper: {
          padding: (2),
          margin: 'auto',
          maxWidth: 500,
        },

        image: {
          width: 128,
          height: 128,
        },

        img: {
          margin: 'auto',
          display: 'block',
          maxWidth: '100%',
          maxHeight: '100%',
        }
    });


    const sizes = [
        {
          value: 'Small',
          label: 'S',
        },
        {
          value: 'Medium',
          label: 'M',
        },
        {
          value: 'Large',
          label: 'L',
        },
        {
          value: 'Extra Large',
          label: 'XL',
        },
      ];

function Product() {

    const selectedProductId = useSelector(state => state.app.selectedProductId)
    const productsById = useSelector(state => state.products.productsById)
    const selectedCategory = useSelector(state => state.app.selectedCategory);
    const isSizeSelectorEnabled = selectedCategory === "men clothing" || selectedCategory === 'women clothing';

    
    const styles = useStyles();
    const [size, setSize] = useState('Small');

    const handleChange = (event) => {
    setSize(event.target.value);
  };

    return (
      <div className={styles.root}>  
         {isSizeSelectorEnabled ? 
            <Paper className={styles.paper}>
            <Grid container spacing={2}>
              <Grid item>
                <ButtonBase className={styles.image}>
                  <img className={styles.img} 
                  alt={productsById[selectedProductId].title} 
                  src={productsById[selectedProductId].image} />
                </ButtonBase>
              </Grid>
              <Grid item xs={12} sm container>
                <Grid item xs container direction="column" spacing={2}>
                  <Grid item xs>
                    <Typography gutterBottom variant="subtitle1">
                      {productsById[selectedProductId].title}
                    </Typography>
                    <Typography variant="body2" gutterBottom>
                      {productsById[selectedProductId].description}
                    </Typography>
                  </Grid>
                </Grid>
                <Grid item>
                  <Typography variant="subtitle1">
                    Price: ${productsById[selectedProductId].price}
                    </Typography>
                </Grid>
                <Grid item >  
                  <Grid item className={styles.sizeSelector}>
                      <TextField
                        id="outlined-select-size"
                        select
                        label="Select"
                        value={size}
                        onChange={handleChange}
                        helperText="Please select your size"
                        variant="outlined"
                        >
                        {sizes.map((option) => (
                          <MenuItem key={option.value} value={option.value}>
                          {option.label}
                          </MenuItem>
                          ))}
                      </TextField>
                    </Grid>
                    <Grid item>
                      <TextField
                          id="outlined-number"
                          label="Number"
                          type="number"
                          InputLabelProps={{
                              shrink: true,
                                }}
                          className={styles.numberSelector}
                          variant="outlined"
                      />
                    </Grid>    
                </Grid>
                <Grid>
                <Button variant="contained" style={{backgroundColor: "#43A7BE", color:"white"}}>
                  Add to cart!
                </Button>
                </Grid>         
              </Grid>
            </Grid>
          </Paper> :
          <Paper className={styles.paper}>
          <Grid container spacing={2}>
            <Grid item>
              <ButtonBase className={styles.image}>
                <img className={styles.img} 
                alt={productsById[selectedProductId].title} 
                src={productsById[selectedProductId].image} />
              </ButtonBase>
            </Grid>
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column" spacing={2}>
                <Grid item xs>
                  <Typography gutterBottom variant="subtitle1">
                    {productsById[selectedProductId].title}
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    {productsById[selectedProductId].description}
                  </Typography>
                </Grid>
              </Grid>
              <Grid item>
                <Typography variant="subtitle1">
                  Price: ${productsById[selectedProductId].price}
                  </Typography>
              </Grid>
              <Grid>
              <Button variant="contained" style={{backgroundColor: "#43A7BE", color:"white"}}>
                Add to cart!
              </Button>
              </Grid>         
            </Grid>
          </Grid>
        </Paper>
      }    
    </div>
    )
}

export default Product;

// color="secondary"