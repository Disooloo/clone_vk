import React, { FC } from "react";
import {Avatar, Box, Card, ListItem, ListItemButton, ListItemIcon, ListItemText, List } from "@mui/material";
import {Link, useHistory} from "react-router-dom";
import { QuestionAnswer } from "@mui/icons-material";

const UserItems:FC = () => {

    const users = [
        {
            id: 0,
            avatar: "https://w-dog.ru/wallpapers/16/18/292169328627663/avatar-nejtiri-na-vi.jpg",
            nameUSer: "User 1",
            isInNetwork: true,
        },
        {
            id: 1,
            avatar: "https://img2.freepng.ru/20180626/fhs/kisspng-avatar-user-computer-icons-software-developer-5b327cc98b5780.5684824215300354015708.jpg",
            nameUSer: "User 2",
            isInNetwork: false
        },
        {
            id: 2,
            avatar: "https://img.favpng.com/4/8/8/loan-business-search-engine-optimization-interest-rate-car-finance-png-favpng-x0aqxWfrhEMXSt8Q7i83HmBFc.jpg",
            nameUSer: "User 3",
            isInNetwork: true
        }
    ]

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
        }}>
                {users.map( user => (

                <Link
                    to={`/profile/${user.id}`}
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
                            src={user.avatar}
                            alt=''
                            sx={{ width: 46, height: 46, borderRadius: '50%' }}
                        />

                        {user.isInNetwork &&
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
                        }
                    </Box>
                    <span style={{ fontSize: 14 }}>{user.nameUSer}</span>
                </Link>
                ))}

                <List>
                    <ListItem disablePadding>
                        <ListItemButton onClick={ () => history.push('/messages')}>
                            <ListItemIcon>
                                <QuestionAnswer />
                            </ListItemIcon>
                            <ListItemText primary="Сообщения" />
                        </ListItemButton>
                    </ListItem>
                </List>
            </Card>
        </div>
    )
}

export default UserItems