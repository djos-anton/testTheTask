import React, {useEffect} from 'react';
import {DialogActions, DialogContent, DialogTitle} from "../Customers/CustomerList/CustomerDialog";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import PropTypes from 'prop-types';
import Dialog from '@material-ui/core/Dialog';
import TextField from '@material-ui/core/TextField';

const Dialogs = (props) => {
const {f, buttonRename, onDispatchDelete, currentUser, handleClose, open, setOpen} = props;
    useEffect( () => {
            console.log(open)
        }, [open]);
    return (
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
                            <div>
                                <TextField
                                    required
                                    value
                                    onChange
                                    variant
                                    error
                                    label
                                    margin
                                    helperText
                                />
                            </div>
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
        </Dialog>
    );
}

/*Dialog.propTypes = {
    handleClose: PropTypes.func,
    handleChangeName: PropTypes.func,
    errorValue: PropTypes.bool,
    open: PropTypes.bool,
    name:PropTypes.string
};*/

export default Dialogs;