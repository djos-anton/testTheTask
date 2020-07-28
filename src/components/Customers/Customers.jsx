import React from "react";
import classes from "./Customers.module.css";
import CustomerList from './CustomerList/CustomerList';

const Customers = (props) => {

    return (
        <div className={classes.users}>
            <h1>CustomerPiople list</h1>

            <CustomerList items={props.items}
                          usersEdit={props.usersEdit}
                           />
        </div>
    );
}

export default Customers;