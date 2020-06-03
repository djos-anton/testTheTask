import React from "react";
import classes from "./Customers.module.css";
import PostCustomers from './PostCustomers/PostCustomers';
import { Button } from "react-bootstrap";

const Customers = () => {
    return (
        <div className={classes.users}>
            <h1>Customer list</h1>
            <button>Create</button>
            <PostCustomers/>
            <PostCustomers/>
            <PostCustomers/>
        </div>
    );
}

export default Customers;