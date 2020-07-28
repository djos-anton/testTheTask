import React, {useState} from "react";
import classes from "./CustomerList.module.css";
import List from '@material-ui/core/List';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import Typography from '@material-ui/core/Typography';
import {DialogTitle, DialogContent, DialogActions} from './CustomerDialog';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import {useDispatch, useSelector} from "react-redux";
//import {ReNaME} from "../../../redux/modalReducer";


/*const Child = ({match}) => {
    return <div>
        <h3>{match.params.id}</h3>
    </div>
}*/

const CustomerList = (props) => {

/*    const usersEdit = (id) => {
        let customersUrl = '/customers/' + id;
    }*/
    const [open, setOpen] = useState(false);
    const [currentUser, setCurrentUser] = useState({});
    const [name, setName] = useState(' ');
    const [price, setPrice] = useState(' ');
    const [number, setNumber] = useState(' ');
    const [id, setId] = useState(' ');
    const dataList = useSelector(state => state.windowModal.itemsList);
    const dispatch = useDispatch();
    const [buttonRename, setButtonRename] = useState(true);
    const [buttonSave, setButtonSave] = useState(true);
    const [error, setError] = useState(false);

    const handleClickOpen = (currentUser) => {
        setCurrentUser(currentUser);
        setOpen(true);
        setName(currentUser.name);
        setPrice(currentUser.price);
        setNumber(currentUser.number);
        setButtonRename(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    let onDispatchSave = (id) => {
        if (id===null) {
            dispatch({
                type: 'ADD',
                data: {
                    id,
                    name,
                    price,
                    number
                }
            })
        } else {
            dispatch({
                type: 'SAVE',
                data: {
                    id,
                    name,
                    price,
                    number
                }
            })
        }
        setOpen(false)
    }

    let onDispatchDelete = (id) => {
        dispatch({
                type: 'DELETE',
                data: {
                    id
                }
            },
            setOpen(false))
    }

    let windiwModalAdd = () => {
        setButtonRename(false);
        setOpen(true);
        setName('');
        setPrice('');
        setNumber('');
        setCurrentUser(null);
        setId(null);
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
            <Button variant="outlined" color="primary" onClick={() => windiwModalAdd()}>Add</Button>

            <List className={classes.table}>
                {dataList.map((item, key) => {
                    return (
                        <div key={item.id}
                             className={classes.choice}
                             /*onClick={() => usersEdit(item.id)}*/>
                            <Link onClick={() => handleClickOpen(item)}>
                                <ListItemText primary={`${item.name} ${item.price}`}
                                              secondary={item.number}/>
                            </Link>
                            <Divider/>
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
                        <form className={classes.root} noValidate autoComplete="off">
                            <div className={classes.inputForm}>
                                <FormControl error={error} variant="outlined">
                                    <InputLabel required={true} htmlFor="component-outlined">Name</InputLabel>
                                    <OutlinedInput id="component-outlined"
                                                   value={name}
                                                   onChange={handleChangeName}
                                                   label="Name"/>
                                </FormControl>
                            </div>
                            <div className={classes.inputForm}>
                                <FormControl error={error} variant="outlined">
                                    <InputLabel required={true} htmlFor="component-outlined">Price</InputLabel>
                                    <OutlinedInput id="component-outlined"
                                                   value={price}
                                                   onChange={handleChangePrice}
                                                   label="Price"/>
                                </FormControl>
                            </div>
                            <div className={classes.inputForm}>
                                <FormControl error={error} variant="outlined">
                                    <InputLabel required={true} htmlFor="component-outlined">Number</InputLabel>
                                    <OutlinedInput id="component-outlined"
                                                   value={number}
                                                   onChange={handleChangeNumber}
                                                   label="Number"/>
                                </FormControl>
                            </div>
                        </form>
                    </Typography>
                </DialogContent>
                <DialogActions>
                    {
                        buttonRename ?
                        <Button id={classes.a1} autoFocus onClick={() => onDispatchDelete(currentUser.id)}
                                color="primary">
                            Delete
                        </Button> :
                            null
                    }
                    {
                        buttonSave ?
                        <Button autoFocus onClick={() => onDispatchSave(currentUser && currentUser.id)} color="primary">
                            Save
                        </Button>
                            :
                            <Button variant="contained" disabled>
                                Save
                            </Button>
                    }
                    <Button autoFocus onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default CustomerList;
