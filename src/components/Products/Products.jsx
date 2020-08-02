import React from "react";
import PropTypes from 'prop-types';
import classes from './Products.module.css';
import ProductsList from './ProductsList/ProductsList';
import {useSelector} from "react-redux";

//console.log(state.windowFood);

const Products = (props) => {

    const newState=useSelector(state=>state.windowFood)
    //debugger;
    //const foodDataList = useSelector(state => state);

    //const {handleSave} = props;
    return (
        <div className={classes.grocery}>
            <h1>Products list</h1>
            {newState.foodDataList.map((product, key) => {
                console.log(product);
                return <ProductsList
                    product={product}
                    key={product.id}
                    />
            })}
        </div>
    );

}

/*Products.propTypes = {
    foodDataList: PropTypes.arrayOf(PropTypes.object).isRequired,
    onCorrection: PropTypes.func.isRequired
}*/

export default Products;