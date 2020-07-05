import React from "react";
import PropTypes from 'prop-types';
import classes from './Products.module.css';
import ProductsList from './ProductsList/ProductsList';


const Products = (props) => {
    return (
        <div className={classes.grocery}>
            <h1>Products list</h1>
            {props.foodsList.map((product, index) => {
                return <ProductsList product={product} key={product.id} index={index}/>
            })}
        </div>
    );
}

Products.propTypes = {
    foodsList: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default Products