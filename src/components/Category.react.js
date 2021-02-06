// import React, { useState } from 'react'
// import { useSelector } from 'react-redux';
// import { 
//   makeStyles, 
//   Card,
//   CardActionArea,
//   CardContent,
//   CardMedia,
//   Typography,
//   CircularProgress,
// } from '@material-ui/core';

// const useStyles = makeStyles({
//     container: {
//         padding: '20px',
//         display: 'flex',
//         justifyContent: 'center',
//     },

//     card: {
//         marginLeft: 8,
//         width: 200,
//     },

//     categoryImage: {
//       height: 200
//     },

//     titleCase: {
//         textTransform: 'capitalize',
//     },
//   });

//   export default function Category() {
//     const [currentCategory, setCurrentCategory] = useState(null);
    
//     function onClick({ target }) {
//         target.classList.add("selected");
//         if (isSelected) {
//           isSelected.classList.remove("selected");
//         }
//         setIsSelected(target);
//       }
    
    
//     const filterProductsByCategory = useSelector(
//       state => state.category?.filterProductsByCategory
//     );
//     const styles = useStyles();

//     return (
//       <div className={styles.container}>
//         {filterProductsByCategory != null ? (
//           Object.keys(filterProductsByCategory).map((item, index) => {
//             return (
//               <Card key={index} className={styles.card}>
//                 <CardActionArea>
//                   <CardMedia
//                     className={styles.categoryImage}
//                     image={filterProductsByCategory[item][0].image}
//                     />
//                   <CardContent>
//                     <Typography
//                       variant='h6'
//                       color='pink'
//                       className={styles.titleCase}
//                     >
//                       {item}
//                     </Typography>
//                   </CardContent>
//                 </CardActionArea>
//               </Card>
//             );
//           })
//         ) : (
//           <CircularProgress size={24} />
//         )}
//       </div>
//     )
//   }
//map through line 91


import React from 'react';
import {useSelector} from 'react-redux';

function ProductList({selectedCategory}) {
    const productCatalog = useSelector(state => state.products.productsByCategory)
    return (
        <div>
            {productCatalog[selectedCategory]}
            
        </div>
    )
}

export default ProductList;


