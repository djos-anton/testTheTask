import React, {useState} from "react";
import classes from "./Customers.module.css";
import PostCustomers from './PostCustomers/PostCustomers';
//import Button from './Button/Button';
import Modal from './Modal/Modal';
import {DialogActions} from "./PostCustomers/CustomerDialog";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const Customers = (props) => {
    //const classes = useStyles();

    const {handleSave} = props;

/*    const [isOpen, setIsOpen]  = useState(false);
    const fn = () => setIsOpen(!isOpen);*/

    return (
        <div className={classes.users}>
            <h1>Customer list</h1>

            {/*<div className={classes.container}>
                <Button onClick={fn}/>
            </div>*/}
            <PostCustomers items={props.items}
                           usersEdit={props.usersEdit}
                           handleSave={handleSave}
                           rename={props.rename}
                           //handleChangeName={props.handleChangeName}
                           //handleChangePrice={props.handleChangePrice}
                           //handleChangeNumber={props.handleChangeNumber}
                           />
            {/*<Modal isOpen={isOpen}
                   onSubmit ={fn}
                   onCancel={fn}/>*/}
        </div>
    );
}

export default Customers;