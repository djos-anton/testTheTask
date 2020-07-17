import React, {useState, useEffect} from "react";
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
import {ReNaME} from "../../../redux/modalReducer";
import {required, maxLengtCreator} from './../../../utils/validators/validators';
import {makeStyles} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import {reduxForm, Field} from "redux-form";

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

const CustomerListTest = (props) => {

    const usersEdit = (id) => {
        let customersUrl = '/customers/' + id;

    }
    const [open, setOpen] = useState(false);
    const [currentUser, setCurrentUser] = useState({});
    const [name, setName] = useState(' ');
    const [nameError, setNameError] = useState(' ');
    const [priceError, setPriceError] = useState(' ');
    const [numberError, setNumberError] = useState(' ');
    const [price, setPrice] = useState(' ');
    const [number, setNumber] = useState(' ');
    const [id, setId] = useState(' ');
    const dataListTest = useSelector(state => state.windowModalTest.itemsListTest);
    const dispatch = useDispatch();
    const [buttonRename, setButtonRename] = useState(true);

    //useEffect(()=>{console.log(name)}, [name])

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
                type: 'ADDTEST',
                data: {
                    id,
                    name,
                    price,
                    number
                }
            })
        } else {
            dispatch({
                type: 'SAVETEST',
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

    //useEffect(()=>{console.log(id)}, [id])

    let onDispatchDelete = (id) => {
        dispatch({
                type: 'DELETETEST',
                data: {
                    id
                }
            },
            setOpen(false))
    }

    let windiwModalAdd = () => {
        setButtonRename(false);
        setOpen(true);
        setName(' ');
        setPrice(' ');
        setNumber(' ');
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
                {dataListTest.map((item, key) => {
                    return (
                        <div key={item.id}
                             className={classes.choice}
                             onClick={() => usersEdit(item.id)}>
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

                        <ModalInputFormTest/>
/*                        <form>
                            <div>
                                <TextField
                                    label="Name"
                                    value={name}
                                    onChange={handleChangeName}
                                    variant="outlined"
                                />
                            </div>
                            <div>
                                <TextField
                                    label="Price"
                                    value={price}
                                    onChange={handleChangePrice}
                                    variant="outlined"
                                />
                            </div>
                            <div>
                                <TextField
                                    label="Number"
                                    value={number}
                                    onChange={handleChangeNumber}
                                    variant="outlined"
                                />
                            </div>

                            <Button autoFocus onClick={() => onDispatchSave(currentUser && currentUser.id)} color="primary">
                                Save
                            </Button>


                        </form>*/
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
                    <Button autoFocus onClick={handleClose} color="primary">
                        Cancel
                    </Button>

                </DialogActions>
            </Dialog>


        </div>
    );
}

const ModalInputFormTest = (props) => {
                    console.log(props.handleSubmit);
    return (
    <form onSubmit={props.handleSubmit}>
        <div>
            <Field component="TextField" variant="outlined" label="Name" name="name"/>
        </div>
        <div>
            <Field component="TextField" variant="outlined" label="Price" name="price"/>
        </div>
        <div>
            <Field component="TextField" variant="outlined" label="Number" name="number"/>
        </div>
        <div><button>Save</button></div>
    </form>

)
}

export default CustomerListTest;
