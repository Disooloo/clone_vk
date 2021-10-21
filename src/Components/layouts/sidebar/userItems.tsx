import React, { FC } from "react";
import {Avatar, Box, Card} from "@mui/material";
import {Link} from "react-router-dom";

const UserItems:FC = () => {
    return (
        <div>
            <Card
            variant='outlined'
            sx={{
            padding: 2,
            backgroundColor: '#F1F7FA',
            border: 'none',
            borderRadius: 3,
        }}>
                <Link
                    to='/profile'
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        textDecoration: 'none',
                        color: '#111',
                        marginBottom: 12,
                    }}>
                    <Box
                        sx={{
                            position: 'relative',
                            marginRight: 2,
                            width: 50,
                            height: 50,
                        }}>
                        <Avatar
                            src='https://w-dog.ru/wallpapers/16/18/292169328627663/avatar-nejtiri-na-vi.jpg'
                            alt=''
                            sx={{ width: 46, height: 46, borderRadius: '50%' }}
                        />
                            <Box
                                sx={{
                                    backgroundColor: '#4FB14F',
                                    border: '2px solid #F1F7FA',
                                    width: 12,
                                    height: 12,
                                    position: 'absolute',
                                    bottom: 0,
                                    right: 0,
                                    borderRadius: '50%',
                                }}
                            />
                    </Box>
                    <span style={{ fontSize: 14 }}>User Name</span>
                </Link>

        </Card>
        </div>
    )
}

export default UserItems