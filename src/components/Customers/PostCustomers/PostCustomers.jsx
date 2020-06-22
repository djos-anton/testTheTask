import React, { useState } from "react";
import classes from "./PostCustomers.module.css";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Link from '@material-ui/core/Link';
import Products from "../../Products/Products";
import { Route } from "react-router-dom";
import ModalCustomers from "./ModalCustomers";
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import {DialogTitle, DialogContent, DialogActions} from './CustomerDialog';
import { styles } from './CustomerDialog';
import { makeStyles } from '@material-ui/core/styles';
import FilledInput from '@material-ui/core/FilledInput';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';

const Child = ({match}) => {
  return <div>
        <h3>{match.params.id}</h3>
    </div>
}

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
}));

 const PostCustomers = (props) => {

     const {handleSave} = props;

    const usersEdit = (id) => {
        let customersUrl = '/customers/' + id;
        console.log(customersUrl);
    }
        const [open, setOpen] = useState(false);
        const [currentUser, setCurrentUser] = useState(null);
        const [name, setName] = useState(' ');
        const [price, setPrice] = useState(' ');
        const [number, setNumber] = useState(' ');

        const handleAddClick = () => {
            setOpen(true);
        }

        const handleClickOpen = (currentUser) => {
           setCurrentUser(currentUser);
            setOpen(true);
        };
        const handleClose = () => {
            setOpen(false);
        };

        let rename = (id) => {
            const data={
                id: id,
                name,
                price,
                number,
            }
            handleSave(data);
        }


        const handleChangeName = (event) => {
            setName(event.target.value);
        };
        const handleChangePrice = (event) => {
            setPrice(event.target.value);
        };
        const handleChangeNumber = (event) => {
            setNumber(event.target.value);
        };

    return (
            <div className={classes.item}>
                <Button variant="outlined" color="primary" onClick={()=>handleAddClick()}>Add</Button>

                <List className={classes.table}>
                    {props.items.map((item, key)=>{
                        return (
                            <div key={item.id}
                                 className={classes.choice}
                                 onClick={()=>usersEdit(item.id)}>
                            <Link onClick={() => handleClickOpen(item)} >
                                <ListItemText primary={`${item.name } ${item.price}` }
                                              secondary={item.number}/>
                            </Link>
                                <Divider />
                            </div>
                        )
                    })}
                </List>
                <Dialog onClose={handleClose}
                        aria-labelledby="customized-dialog-title"
                        open={open}
                        >
                    <DialogTitle id="customized-dialog-title" onClose={handleClose}>
                        Modal title
                    </DialogTitle>
                    <DialogContent dividers>

                        <Typography gutterBottom>
                            <div className={classes.textForm}><span>Name:</span> {currentUser ? currentUser.name : ''}</div>
                            <div className={classes.textForm}><span>Price:</span> {currentUser ? currentUser.price : ''}</div>
                            <div className={classes.textForm}><span>Number:</span> {currentUser ? currentUser.number : ''}</div>

                            <form className={classes.root} noValidate autoComplete="off">
                                <div className={classes.inputForm}>
                                <FormControl variant="outlined">
                                    <InputLabel htmlFor="component-outlined">Name</InputLabel>
                                    <OutlinedInput id="component-outlined"
                                                   value={name}
                                                   onChange={handleChangeName}
                                                   label="Name"/>
                                </FormControl>
                                </div>
                                <div className={classes.inputForm}>
                                <FormControl variant="outlined">
                                    <InputLabel htmlFor="component-outlined">Price</InputLabel>
                                    <OutlinedInput id="component-outlined"
                                                   value={price} onChange={handleChangePrice}
                                                   label="Name" />
                                </FormControl>
                                </div>
                                <div className={classes.inputForm}>
                                <FormControl variant="outlined">
                                    <InputLabel htmlFor="component-outlined">Number</InputLabel>
                                    <OutlinedInput id="component-outlined"
                                                   value={number} onChange={handleChangeNumber}
                                                   label="Name" />
                                </FormControl>
                                </div>
                            </form>


                        </Typography>

                    </DialogContent>
                    <DialogActions>
                        <Button autoFocus color="primary">
                            Delete
                        </Button>
                        <Button autoFocus onClick={()=>rename(currentUser.id) || setOpen(false)} color="primary">
                            Rename
                        </Button>
                        <Button autoFocus onClick={handleClose} color="primary">
                            Cancel
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
    );
}

export default PostCustomers;
