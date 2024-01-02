import ServiceStore from "../AppStore/serviceStore"
import ViewDetails from "./viewDetails"
import AddServicer from "./addServicer"
import { useEffect } from 'react';
import { observer } from "mobx-react";
import GlobalStore from "../AppStore/globalStore";
import { Card } from "@mui/material";
import Divider from '@mui/material/Divider';
import { green, pink } from '@mui/material/colors';
import Avatar from '@mui/material/Avatar';
import AssignmentIcon from '@mui/icons-material/Assignment';




import * as React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
const Services=observer(()=>{

    useEffect(()=>{
        ServiceStore.initServices()
    },[])

    return(<>

        {ServiceStore.servicesList.map((service,index)=><>

        <ListItem>
          <ListItemAvatar>
            <Avatar sx={{ bgcolor: pink[500] }}>
                <AssignmentIcon />
            </Avatar>
            </ListItemAvatar>
            <div><ViewDetails key={index} data={service} component="nav"></ViewDetails></div>
        </ListItem>
        <Divider variant="inset" />
            
            </>)
            }
        {GlobalStore.isLogin&&<AddServicer></AddServicer>}

    </>)
})
export default Services;
