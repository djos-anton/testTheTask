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
            <h1>Customer list</h1>
            <div className={classes.container}>
                <Button onClick={fn}/>
            </div>
            <PostCustomers/>
            <Modal isOpen={isOpen} onSubmit ={fn} onCancel={fn}/>
        </div>
    );
}

export default Customers;