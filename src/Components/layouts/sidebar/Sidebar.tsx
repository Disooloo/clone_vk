import React, { FC } from "react";
import {Box} from "@mui/material";
import {Link} from "react-router-dom";
import UserItems from './userItems'
import Menu from "./menu";

const Sidebar:FC = () => {
    return (
        <div>
           <UserItems />
           <Menu />
        </div>
    )
}

export default Sidebar