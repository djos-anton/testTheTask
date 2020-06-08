import React from "react";
import classes from "./PostCustomers.module.css";


import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Checkbox from '@material-ui/core/Checkbox';


const PostCustomers = (props) => {
    return (
            <div className={classes.item}>
                <List className={classes.table}>
                    {props.items.map((item, key)=>{
                        return (
                            <div key={key}>
                            <ListItem button>
                                <Checkbox
                                    edge="start"
                                    checked={item.checked}
                                    tabIndex={-1}
                                    disableRipple
                                    onChange={(event)=>{props.onChange(event.target.checked)}}
                                />
                                <ListItemText primary={`${item.name } ${item.price}` }
                                              secondary={item.number}/>
                            </ListItem>
                                <Divider />
                            </div>
                        )
                    })}

                </List>

            </div>
    );
}

export default PostCustomers;