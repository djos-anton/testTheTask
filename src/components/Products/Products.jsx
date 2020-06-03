import React from "react";
import classes from './Products.module.css';
import PostProducts from './PostProducts/PostProducts';

const Products = () => {
    return (
        <div className={classes.grocery}>
            <PostProducts/>
        </div>
    );
}

export default Products;