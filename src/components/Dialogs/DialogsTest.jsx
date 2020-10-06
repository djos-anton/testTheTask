import React, {useState, useEffect} from 'react';
import {DialogActions, DialogContent, DialogTitle} from "../Customers/CustomerList/CustomerDialog";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField/TextField";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog/Dialog";
import {DEFAULT_ERROR, TEST_ADD, TEST_DELETE, TEST_SAVE} from "../../redux/action";
import {useDispatch} from "react-redux";

const DialogsTest = (props) => {
    // debugger;
    const {person} = props;
    //console.log(props);
//    const [open, setOpen] = useState(!!props.open);
    const [name, setName] = useState( props.person && props.person.name ? person.name : "");
    const [price, setPrice] = useState(props.person && props.person.price ? props.person.price : "");
    const [number, setNumber] = useState(props.person && props.person.number ? props.person.number : "");
    const [errorValue, setErrorValue] = useState(DEFAULT_ERROR);
    const [currentUser, setCurrentUser] = useState(props.person ? props.person : {});
    const [buttonRename, setButtonRename] = useState(true);
    const dispatch = useDispatch();
    const [id, setId] = useState('');

    const handleChangeName = (event) => {
        setName(event.target.value);
    };
    const handleChangePrice = (event) => {
        setPrice(event.target.value);
    };
    const handleChangeNumber = (event) => {
        setNumber(event.target.value);
    };

    const handleClose = () => {
        props.onClose();
    };

    const setPerson = (person) => {

        if(person.name !== name ) {
            setName(person.name)
        } ;

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

        handleClose();
        // setOpen(false)
    }

    let onDispatchDelete = (id) => {
        dispatch({
                type: TEST_DELETE,
                data: {
                    id
                }
            }
            // ,
//             setOpen(false)
        )
        handleClose();
    }

    let windiwModalAdd = () => {
         setButtonRename(false);
         //setOpen(true);
         setName('');
         setPrice('');
         setNumber('');
         setCurrentUser(null);
         setId(null);
         setErrorValue(DEFAULT_ERROR);
    }
    /*useEffect( () => {
        console.log('change render', price)
    }, [price])*/

    useEffect( () => { 
        console.log('нет значения для отслеживания')})
    useEffect( () => {
        console.log('пустое значение для отслеживания')},
        [])
    useEffect( () => {
        console.log('значение для отслеживания  person', person)},
        [person])
    useEffect( () => {
        console.log('значение для отслеживания  props', props)},
        [props])
    useEffect( () => {
        console.log('значение для отслеживания  number', number)},
        [number])

    return (
        <div>
            <Dialog onClose={handleClose}
                    aria-labelledby="customized-dialog-title"
                    open={props.open}
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
                        <Button onClick={f} color="primary">
                            Save
                        </Button>
                    }
                    {
                        buttonRename ?
                            <Button onClick={() => onDispatchDelete(currentUser.id)}
                                    color="primary">
                                Delete
                            </Button> :
                            null
                    }
                    <Button onClick={handleClose} color="primary">
                        Cancel
                    </Button>

                </DialogActions>
            </Dialog>
        </div>
    );
}
export default DialogsTest;