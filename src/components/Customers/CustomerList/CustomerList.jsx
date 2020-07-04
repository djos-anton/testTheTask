import React, {useState, useEffect} from "react";
import classes from "./CustomerList.module.css";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Link from '@material-ui/core/Link';
import Products from "../../Products/Products";
import {Route} from "react-router-dom";
import ModalCustomers from "./ModalCustomers";
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import Typography from '@material-ui/core/Typography';
import {withStyles} from '@material-ui/core/styles';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import {DialogTitle, DialogContent, DialogActions} from './CustomerDialog';
import {styles} from './CustomerDialog';
import {makeStyles} from '@material-ui/core/styles';
import FilledInput from '@material-ui/core/FilledInput';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import {useDispatch, useSelector} from "react-redux";
import {ReNaME} from "../../../redux/modalReducer";

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

const CustomerList = (props) => {
    //debugger;
    //const {handleSave} = props;

    const usersEdit = (id) => {
        let customersUrl = '/customers/' + id;
        //console.log(customersUrl);
    }
    const [open, setOpen] = useState(false);
    const [currentUser, setCurrentUser] = useState({});
    const [name, setName] = useState(' ');
    const [price, setPrice] = useState(' ');
    const [number, setNumber] = useState(' ');
    const [id, setId] = useState(' ');
    const dataList = useSelector(state => state.windowModal.itemsList);
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

    /*     let handleSave = data => {
             for (let key in dataList) {
                 if (dataList[key].id === data.id) {
                     dataList[key] = data;
                 }
             }
         }

            let rename = (id) => {
                //debugger
                const data={
                    id: id,
                    name,
                    price,
                    number,
                }
                handleSave(data);
                //console.log(data);
            }*/
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

    //useEffect(()=>{console.log(id)}, [id])

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
        setName(' ');
        setPrice(' ');
        setNumber(' ');
        setButtonRename(false);
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
                        {/*<div className={classes.textForm}><span>Id:</span> {currentUser ? currentUser.id : ''}</div>
                            <div className={classes.textForm}><span>Name:</span> {currentUser ? currentUser.name : ''}</div>
                            <div className={classes.textForm}><span>Price:</span> {currentUser ? currentUser.price : ''}</div>
                            <div className={classes.textForm}><span>Number:</span> {currentUser ? currentUser.number : ''}</div>*/}
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
                                                   label="Name"/>
                                </FormControl>
                            </div>
                            <div className={classes.inputForm}>
                                <FormControl variant="outlined">
                                    <InputLabel htmlFor="component-outlined">Number</InputLabel>
                                    <OutlinedInput id="component-outlined"
                                                   value={number} onChange={handleChangeNumber}
                                                   label="Name"/>
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
                    <Button autoFocus onClick={() => onDispatchSave(currentUser && currentUser.id)} color="primary">
                        Save
                    </Button>
                    <Button autoFocus onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default CustomerList;
