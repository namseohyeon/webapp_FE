import React, { useState } from "react";
import {ListItem, ListItemText, InputBase} from '@mui/material';

const Shoppingitem = (props) => {
    const [item, setItem] = useState(props.item);
    return(
        <ListItem>
            <ListItemText>
                <InputBase InputProps={{ "aria-label":"naked" }}
                type = "text"
                id={item.id}
                name={item.id}
                value={item.title}
                multiline={true}
                fullWidth={true}                
                />
            </ListItemText>
            <ListItemText>
                <InputBase InputProps={{ "aria-label":"naked" }}
                type = "text"
                id={item.id}
                name={item.id}
                value={item.bookId}
                multiline={true}
                fullWidth={true}                
                />
            </ListItemText>
            <ListItemText>
                <InputBase InputProps={{ "aria-label":"naked" }}
                type = "text"
                id={item.id}
                name={item.id}
                value={item.bookId}
                multiline={true}
                fullWidth={true}                
                />
            </ListItemText>
        </ListItem>
    );
};

export default Shoppingitem;