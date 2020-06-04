import React from "react";
import classes from "./PostCustomers.module.css";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const PostCustomers = (props) => {
    return (
            <div className={classes.item}>
                <List aria-label="main mailbox folders">
                        {props.items.map((item, key) => {
                            return <ListItem button><ListItemText primary="Mark Benson" /></ListItem>
                        })}
                </List>
            </div>
    );
}

export default PostCustomers;