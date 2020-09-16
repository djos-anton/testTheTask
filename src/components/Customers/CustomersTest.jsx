/*
import React, {useState} from "react";
import classes from "./Customers.module.css";
import PostCustomers from './PostCustomers/PostCustomers';
import Button from './Button/Button';
import Modal from './Modal/Modal';

const Customers = (props) => {

    const [isOpen, setIsOpen]  = useState(false);
    const fn = () => setIsOpen(!isOpen);



    return (
        <div className={classes.users}>
            <h1>Test list</h1>
            <div className={classes.container}>
                <Button onClick={fn}/>
            </div>
            <PostCustomers items={props.items}
                           />
            <Modal isOpen={isOpen}
                   onSubmit ={fn}
                   onCancel={fn}/>
        </div>
    );
}

export default Customers;*/
import React, {useState} from "react";
import classes from "./Customers.module.css";
import CustomerListTest from './CustomerList/CustomerListTest';
//import Button from './Button/Button';
import Modal from './Modal/Modal';
import {DialogActions} from "./CustomerList/CustomerDialog";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import {useDispatch, useSelector} from "react-redux";


const CustomersTest = (props) => {
    //console.log(props);
    const {handleClickOpen, windiwModalAdd} = props;
    //console.log(props);
    return (
        <div className={classes.users}>
            <h1>Customer list Test111</h1>
            <CustomerListTest items={props.items}
                              //handleClickOpen={handleClickOpen}
                              //windiwModalAdd={windiwModalAdd}
                          usersEdit={props.usersEdit}
            />
        </div>
    );
}

export default CustomersTest;