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
import {TEST_ADD, TEST_DELETE, TEST_SAVE, DEFAULT_ERROR} from "../../../redux/action";
import Dialogs from './../../Dialogs/Dialogs';
import DialogsTest from "../../Dialogs/DialogsTest";

/*const DEFERROR =  {
    name:false,
    price: false,
    number: false,
}*/

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

    //console.log(props.handleClickOpen);
    const {product,
           windiwModalAdd,
           open,
           handleClose
    } = props;
    //console.log(props);
const classes = useStyles();

    const usersEdit = (id) => {
        let customersUrl = '/customers/' + id;

    }

    const dataListTest = useSelector(state => state.windowModalTest.itemsListTest);
    const [editPerson, setEditPerson] = useState(null);

    const handleClickOpen = (item) => {
        setEditPerson(item)
    }

    //useEffect(()=>{console.log(dataListTest)}, [dataListTest])

    //useEffect(()=>{console.log(id)}, [id])

    /*let windiwModalAdd = () => {
        setButtonRename(false);
        setOpen(true);
        setName('');
        setPrice('');
        setNumber('');
        setCurrentUser(null);
        setId(null);
        setErrorValue(DEFAULT_ERROR);
    }*/



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
            <DialogsTest open={open}
                         onClose={handleClose}
                         product={product}
                         person={editPerson}
                         //handleClickOpen={handleClickOpen}
                         windiwModalAdd={windiwModalAdd}
                         />
{/*            useEffect( () => {
            console.log(open)
        }, [open])*/}
          {/*<Dialog onClose={handleClose}
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
