import React from "react";
import {Button, Card, List, ListItem, ListItemButton, ListItemIcon, ListItemText} from "@mui/material";
import {QuestionAnswer} from "@mui/icons-material";
import {useHistory} from "react-router-dom";
import { menu } from "./dataMenu";

const Menu = () => {

    const history = useHistory()

    return (
        <div>
            <Card
                variant='outlined'
                sx={{
                    padding: 2,
                    backgroundColor: '#F1F7FA',
                    border: 'none',
                    borderRadius: 3,
                    marginTop: 5,
                    marginBottom: 10}}>

                <List>
                    {menu.map(item => (

                    <ListItem key={item.link} disablePadding>
                        <ListItemButton onClick={ () => history.push(item.link)}>
                            <ListItemIcon sx={{
                                minWidth: 36
                            }}>
                                <item.icon />
                            </ListItemIcon>
                            <ListItemText primary={item.title} />
                        </ListItemButton>
                    </ListItem>

                    ))}
                </List>
            </Card>
        </div>
    )
}

export default Menu