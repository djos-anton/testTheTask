import React, {useState} from "react";
import PropTypes from 'prop-types';
import classes from './ProductsList.module.css';
import {DialogTitle, DialogContent, DialogActions} from './../../Customers/CustomerList/CustomerDialog';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from "@material-ui/core/styles/makeStyles";
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';

const ProductsList = (product, index) => {
    debugger
    //const {handleSave} = product;

    const [open, setOpen] = useState(false);
    const [food, setFood] = useState(' ');
    const [cost, setCost] = useState(' ');
    const [currentProduct, setCurrentProduct] = useState({});

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

    let save = (id) => {
       const data={
            id,
           food,
           cost
        }
        //handleSave(data);
    }

    return (
            <div className={classes.item}>
                <ul>
                    <li  onClick={() => handleClickOpen(product)}>

                            <div>
                                <div className={classes.div}>{product.food}</div>
                                <span>${product.cost}</span>
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
                                <div className={classes.inptFrm}>
                                <FormControl variant="outlined">
                                    <InputLabel htmlFor="component-outlined">Food</InputLabel>
                                    <OutlinedInput
                                        id="component-outlined"
                                        value={food}
                                        onChange={handleChangeFood}
                                        label="Name" />
                                </FormControl>
            </div>
            <div>
                                <FormControl variant="outlined">
                                    <InputLabel htmlFor="component-outlined">Cost</InputLabel>
                                    <OutlinedInput
                                        id="component-outlined"
                                        value={cost}
                                        onChange={handleChangeCost}
                                        label="Name" />
                                </FormControl>
            </div>
                            </form>
                        </Typography>
                    </DialogContent>
                    <DialogActions>
                        <Button autoFocus onClick={handleClose} color="primary">
                            Delete
                        </Button>
                        <Button autoFocus onClick={() => save(product.id)} color="primary">
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
    foodsList: PropTypes.object.isRequired,
    index: PropTypes.number,
    onChange: PropTypes.func.isRequired
}

export default ProductsList;