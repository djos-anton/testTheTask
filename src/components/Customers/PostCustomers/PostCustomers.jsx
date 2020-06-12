import React from "react";
import classes from "./PostCustomers.module.css";

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Link from '@material-ui/core/Link';
import Products from "../../Products/Products";
import { Route } from "react-router-dom";
import ModalCustomers from "./ModalCustomers"
import {NavLink} from "react-router-dom";

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

    return (
            <div className={classes.item}>
                <List className={classes.table}>
                    {props.items.map((item, key)=>{
                        return (
                            <div key={item.id}
                                 className={classes.choice}
                                 onClick={()=>usersEdit(item.id)}>
                            <Link to={'/customers/' + item.id}>
                                <ListItemText primary={`${item.name } ${item.price}` }
                                              secondary={`${item.number} ${item.id}` }/>
                            </Link>
                                <Divider />
                            </div>
                        )
                    })}
                </List>

            </div>
    );
}

export default PostCustomers;