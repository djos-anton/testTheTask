import React, {useState, useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import PropTypes from 'prop-types';
import classes from './ProductsList.module.css';
import {DialogTitle, DialogContent, DialogActions} from './../../Customers/CustomerList/CustomerDialog';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from "@material-ui/core/styles/makeStyles";
import TextField from '@material-ui/core/TextField';
import {PRODUCTS_DELETE, PRODUCTS_SAVE} from "../../../redux/action";

const ProductsList = (props) => {

    const [open, setOpen] = useState(false);
    const [food, setFood] = useState('');
    const [cost, setCost] = useState('');
    const [currentProduct, setCurrentProduct] = useState({});
    const dispatch = useDispatch();

    /*useEffect( () => {
        console.log(state.windowFood.foodReducer)
    }, [state.windowFood.foodReducer])*/

    const handleClickOpen = (currentProduct) => {
        setCurrentProduct(currentProduct);
        setOpen(true);
        setFood(currentProduct.food);
        setCost(currentProduct.cost);
    };
    const handleClose = () => {
        setOpen(false);
    };
    const handleChangeFood = (event) => {
        setFood(event.target.value);
    };
    const handleChangeCost = (event) => {
        setCost(event.target.value);
    };

    let onDispatchSave = (id) => {
        dispatch({ type: PRODUCTS_SAVE,
            data:{
                id,
                food,
                cost
            }})
        setOpen(false);
    }
    let onDispatchDelete = (id) => {
        dispatch({ type: PRODUCTS_DELETE,
            data: {
                id
            }
        })
    }

    //debugger;
    return (
<div className={classes.item}>
                <ul>
                    <li  onClick={() => handleClickOpen(props.product)}>

                            <div>
                                <div className={classes.div}>{props.product.food}</div>
                                <span>${props.product.cost}</span>
                            </div>

                    </li>
                </ul>
                <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
                    <DialogTitle id="customized-dialog-title" onClose={handleClose}>
                        Modal title
                    </DialogTitle>
                    <DialogContent dividers>
                        <Typography gutterBottom>
                            <form className={classes.root} noValidate autoComplete="off">
                                <div>
                                    <TextField
                                        label="Outlined"
                                        value={food}
                                        onChange={handleChangeFood}
                                        label="Food"
                                        margin='normal'
                                        variant="outlined" />
                                </div>
                                <div>
                                    <TextField
                                        label="Outlined"
                                        value={cost}
                                        onChange={handleChangeCost}
                                        label="Cost"
                                        margin='normal'
                                        variant="outlined" />
                                </div>
                            </form>
                        </Typography>
                    </DialogContent>
                    <DialogActions>
                        <Button autoFocus onClick={()=>onDispatchDelete(currentProduct.id)} color="primary">
                            Delete
                        </Button>
                        <Button autoFocus onClick={() => onDispatchSave(currentProduct.id)} color="primary">
                            Save
                        </Button>
                        <Button autoFocus onClick={handleClose} color="primary">
                            Cansel
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
    );
}

ProductsList.propTypes = {
    product: PropTypes.object.isRequired,
    index: PropTypes.number,
    onChange: PropTypes.func.isRequired
}

export default ProductsList;