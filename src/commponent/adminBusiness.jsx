import { Button, Card } from "@mui/material";
import { observer } from "mobx-react";
import BusinessStore from "../AppStore/businessStore";
import EditIcon from '@mui/icons-material/Edit';
import Fab from '@mui/material/Fab';
import { green, pink } from '@mui/material/colors';
import ViewDetails from "./viewDetails";
const AdminBusiness=(observer(({setEditForm})=>{

    const handleClick=async(e)=>{
        e.preventDefault();
        setEditForm(true);
    }

    return(<>
    <Card>
    {console.log("view",Object.entries(BusinessStore.business))}
        
     
      <ViewDetails data={BusinessStore.business}/>

        <Fab sx={{ bgcolor: pink[500] }}  aria-label="edit" onClick={(e)=>handleClick(e)}>
        <EditIcon />
      </Fab>
      </Card>
        </>)
}))
export default AdminBusiness