import React from "react";
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
//import CloseIcon from '@material-ui/icons/Close';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import {DialogTitle, DialogContent, DialogActions, styles} from './CustomerDialog';



const Child = ({match}) => {
  return <div>
        <h3>{match.params.id}</h3>
    </div>
}




 const PostCustomers = (props) => {

    const usersEdit = (id) => {
        let customersUrl = '/customers/' + id;
        console.log(customersUrl);
    }

     DialogTitle();
     DialogContent();
     DialogActions();
     styles(theme);

        const [open, setOpen] = React.useState(false);

        const handleClickOpen = () => {
            setOpen(true);
        };
        const handleClose = () => {
            setOpen(false);
        };
    return (
            <div className={classes.item}>
                <List className={classes.table}>
                    {props.items.map((item, key)=>{
                        return (
                            <div key={item.id}
                                 className={classes.choice}
                                 onClick={()=>usersEdit(item.id)}>
                            <Link to={'/customers/' + item.id}  onClick={handleClickOpen}>
                                <ListItemText primary={`${item.name } ${item.price}` }
                                              secondary={`${item.number} ${item.id}` }/>
                            </Link>
                                <Divider />
                            </div>
                        )
                    })}
                </List>
                <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
                    <DialogTitle id="customized-dialog-title" onClose={handleClose}>
                        Modal title
                    </DialogTitle>
                    <DialogContent dividers>
                        <Typography gutterBottom>
                            Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
                            in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                        </Typography>
                        <Typography gutterBottom>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis
                            lacus vel augue laoreet rutrum faucibus dolor auctor.
                        </Typography>
                        <Typography gutterBottom>
                            Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel
                            scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus
                            auctor fringilla.
                        </Typography>
                    </DialogContent>
                    <DialogActions>
                        <Button autoFocus onClick={handleClose} color="primary">
                            Save changes
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
    );
}

export default PostCustomers;
