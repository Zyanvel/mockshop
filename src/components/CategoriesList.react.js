import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import  { fetchProducts }  from '../actions/productsActions'

function CategoriesList( { productData, fetchProducts }) {
    useEffect(() => {
        fetchProducts()
    }, [])
    return productData.loading ? (
        <h2>Loading!</h2>
    ) : productData.error ? (
        <h2>{productData.error}</h2>
    ) : (
        <div>
            <h2>Product List</h2>
            <div>
                {
                    productData && productData.products && productData.products.map(product => <p>{product.title} {product.category.charAt(0).toUpperCase() + product.category.slice(1)}</p>)
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