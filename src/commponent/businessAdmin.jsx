import { Outlet, Link } from "react-router-dom"
import BusinessData from "./businessData"
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import ButtonGroup from '@mui/material/ButtonGroup';
import { green, pink } from '@mui/material/colors';
import GroupsIcon from '@mui/icons-material/Groups';
import AssignmentIcon from '@mui/icons-material/Assignment';

export default function BusinessAdmin(){
    return(<>
    <BusinessData />
    <br/>
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        '& > *': {
          m: 1,
        },
      }}sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        '& > *': {
          m: 1,
        },
      }}
    >
    <ButtonGroup     >
    <Button sx={{ color: pink[500] }} variant="outlined" key="services"  startIcon={<AssignmentIcon/>}><Link   to="./services">services</Link></Button>
    <Button sx={{ color: pink[500] }} variant="outlined"key="meeting"  endIcon={<GroupsIcon/>}><Link  to="./meeting">meeting</Link></Button>
    </ButtonGroup>
    </Box>
    <Outlet/>
    </>)
}

