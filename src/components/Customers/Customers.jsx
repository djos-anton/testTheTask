import React from "react";
import classes from "./Customers.module.css";
import PostCustomers from './PostCustomers/PostCustomers';
import ButtonCustomers from './ButtonCustomers/ButtonCustomers';

const Customers = () => {
    return (
        <div className={classes.users}>
            <h1>Customer list</h1>
            <div className={classes.container}>
                <ButtonCustomers/>
            </div>
            <PostCustomers/>
        </div>
    );
}

export default Customers;