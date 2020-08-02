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
import {useDispatch, useSelector} from "react-redux";
import TextField from "@material-ui/core/TextField/TextField";

const CustomerList = (props) => {
//debugger;
    const [open, setOpen] = useState(false);
    const [currentUser, setCurrentUser] = useState({});
    const [name, setName] = useState(' ');
    const [price, setPrice] = useState(' ');
    const [number, setNumber] = useState(' ');
    const [id, setId] = useState(' ');
    const dataList = useSelector(state => state.windowModal.itemsList);
    const dispatch = useDispatch();
    const [buttonRename, setButtonRename] = useState(true);
    const [errorValue, setErrorValue] = useState({
        name: false,
        price: false,
        number: false,
    });

    const handleClickOpen = (currentUser) => {
        setCurrentUser(currentUser);
        setOpen(true);
        setName(currentUser.name);
        setPrice(currentUser.price);
        setNumber(currentUser.number);
        setButtonRename(true);
        setErrorValue({
            name: false,
            price: false,
            number: false,
        });
    };

    const handleClose = () => {
        setOpen(false);
    };

    let onDispatchSave = (id) => {
        if (id === null) {
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
        setErrorValue({
            name: false,
            price: false,
            number: false,
        });
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
//debugger;
    return (
        <div className={classes.item}>
            <Button variant="outlined" color="primary" onClick={() => windiwModalAdd()}>Add</Button>

            <List className={classes.table}>
                {dataList.map((item, key) => {
                    return (
                        <div key={item.id}
                             className={classes.choice}>
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
                        <form>
                            <div>
                                <TextField
                                    required={true}
                                    value={name}
                                    onChange={handleChangeName}
                                    variant="outlined"
                                    error={errorValue.name}
                                    label='Name'
                                    margin='normal'
                                    helperText={!name ? 'Введите имя' : ''}
                                />
                            </div>
                            <div>
                                <TextField
                                    required={true}
                                    value={price}
                                    onChange={handleChangePrice}
                                    variant="outlined"
                                    error={errorValue.price}
                                    label='Price'
                                    margin='normal'
                                    helperText={!price ? 'Введите номер' : ''}
                                />
                            </div>
                            <div>
                                <TextField
                                    required={true}
                                    value={number}
                                    onChange={handleChangeNumber}
                                    variant="outlined"
                                    error={errorValue.number}
                                    label='Number'
                                    margin='normal'
                                    helperText={!number ? 'Введите улицу' : ''}
                                />
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
                        !name || !price || !number ?
                            <Button onClick={() => setErrorValue({name: !name, price: !price, number: !number})}>
                                Save
                            </Button>
                            :

                            <Button autoFocus onClick={() => onDispatchSave(currentUser && currentUser.id)}
                                    color="primary">
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
