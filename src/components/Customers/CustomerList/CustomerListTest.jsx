import React, {useState, useEffect} from "react";
import List from '@material-ui/core/List';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import Typography from '@material-ui/core/Typography';
import {DialogTitle, DialogContent, DialogActions} from './CustomerDialog';
import {useDispatch, useSelector} from "react-redux";
import {required, maxLengtCreator} from './../../../utils/validators/validators';
import {makeStyles} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import {TEST_ADD, TEST_DELETE, TEST_SAVE} from "../../../redux/action";
import Dialogs from './../../Dialogs/Dialogs';

const DEFeRROR =  {
    name:false,
    price: false,
    number: false,
}

const Child = ({match}) => {
    return <div>
        <h3>{match.params.id}</h3>
    </div>
}

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '80%',
        },
    },
}));

const CustomerListTest = (props) => {


const classes = useStyles();

    const usersEdit = (id) => {
        let customersUrl = '/customers/' + id;

    }
    const [open, setOpen] = useState(false);
    const [currentUser, setCurrentUser] = useState({});
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [number, setNumber] = useState('');
    const [id, setId] = useState('');
    const dataListTest = useSelector(state => state.windowModalTest.itemsListTest);
    const dispatch = useDispatch();
    const [buttonRename, setButtonRename] = useState(true);
    const [errorValue, setErrorValue] = useState(DEFeRROR);
    //useEffect(()=>{console.log(name)}, [name])

    const handleClickOpen = (currentUser) => {
        setCurrentUser(currentUser);
        setOpen(true);
        setName(currentUser.name);
        setPrice(currentUser.price);
        setNumber(currentUser.number);
        setButtonRename(true);
        setErrorValue(DEFeRROR);
    };

    const handleClose = () => {
        setOpen(false);
    };

    let onDispatchSave = (id) => {
        if (id===null) {
            dispatch({
                type: TEST_ADD,
                data: {
                    id,
                    name,
                    price,
                    number
                }
            })
        } else {
            dispatch({
                type: TEST_SAVE,
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
                type: TEST_DELETE,
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
        setErrorValue(DEFeRROR);
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

    const f =() => {
        if(!name || !price || !number) {
            setErrorValue({
                name: !name,
                price: !price,
                number: !number,
            })
        } else {
            onClickSave()
        }
    }

    const onClickSave=()=>{
        onDispatchSave(currentUser && currentUser.id);
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
            <Dialogs onClose={handleClose}
                     open={open}
                     ModalTitle={
                         <DialogTitle id="customized-dialog-title" onClose={handleClose}>
                             Modal title
                         </DialogTitle>
                     }
                     form={
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
                                     helperText={!price  ? 'Введите номер' : ''}
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
                     }
                     buttonSave={
                         <Button autoFocus onClick={f} color="primary">
                             Save
                         </Button>
                     }
                     buttonDelete={
                         buttonRename ?
                         <Button autoFocus onClick={() => onDispatchDelete(currentUser.id)}
                                 color="primary">
                             Delete
                         </Button> :
                         null
                     }
                     buttonCancel={
                         <Button autoFocus onClick={handleClose} color="primary">
                             Cancel
                         </Button>
                     }
                     />
{/*            useEffect( () => {
            console.log(open)
        }, [open])*/}
          {/* <Dialog onClose={handleClose}
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
                                    helperText={!price  ? 'Введите номер' : ''}
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
                        <Button autoFocus onClick={f} color="primary">
                            Save
                        </Button>
                    }

                    {
                        buttonRename ?
                            <Button autoFocus onClick={() => onDispatchDelete(currentUser.id)}
                                    color="primary">
                                Delete
                            </Button> :
                            null
                    }
                    <Button autoFocus onClick={handleClose} color="primary">
                        Cancel
                    </Button>

                </DialogActions>
            </Dialog>*/}


        </div>
    );
}

export default CustomerListTest;
