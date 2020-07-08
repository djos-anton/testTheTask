import React from "react";
import PropTypes from 'prop-types';
import classes from './Products.module.css';
import ProductsList from './ProductsList/ProductsList';


const Products = (props) => {
    //debugger;
    const {handleSave} = props;
    return (
        <div className={classes.grocery}>
            <h1>Products list</h1>
            {props.foodsList.map((product, key) => {
                return <ProductsList
                    product={product}
                    key={product.id}
                    handleSave={data => handleSave(data)}/>
            })}
        </div>
    );
}

Products.propTypes = {
    foodsList: PropTypes.arrayOf(PropTypes.object).isRequired,
    onCorrection: PropTypes.func.isRequired
}

export default Products;