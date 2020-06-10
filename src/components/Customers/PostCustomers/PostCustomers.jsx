import React from "react";
import classes from "./PostCustomers.module.css";


import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Checkbox from '@material-ui/core/Checkbox';



const PostCustomers = (props) => {

    let UsersEdit = () => {
        alert("Считай id");
    }

    return (
            <div className={classes.item}>
                <List className={classes.table}>
                    {props.items.map((item, key)=>{
                        return (
                            <div key={key}
                                 className={classes.choice}
                                 onClick={UsersEdit}>
                            <ListItem button>
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