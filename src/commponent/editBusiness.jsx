import { useState } from "react"
import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import BusinessStore from "../AppStore/businessStore";
import SaveIcon from '@mui/icons-material/Save';
import LoadingButton from '@mui/lab/LoadingButton';
import { Box } from "@mui/material";
import { purple, pink } from '@mui/material/colors';

export default function EditBusiness({setEditForm}){
   // const accent = red.A400
    const [id,setId]=useState("");
    const [name,setName]=useState("");
    const [address,setAddress]=useState("");
    const [phone,setPhone]=useState("");
    const [owner,setOwner]=useState("");
    const [logo,setLogo]=useState("");
    const [description,setDescription]=useState("");
    const style = {
        width: 250,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
      };
    const handleSubmit=async(e)=>{
        console.log("handle-submit")
        e.preventDefault();
        BusinessStore.editBusiness({ id, name, address, phone, owner, logo, description})
        setEditForm(false);
    }
    return(<>
    <Box sx={style}>
    <form onSubmit={handleSubmit}>
    <TextField type="text" required label="id" onChange={(e) => setId(e.target.value)} />  <br />
    <TextField type="text" label="name" onChange={(e) => setName(e.target.value)} />  <br />
    <TextField type="text" label="address" onChange={(e) => setAddress(e.target.value)} />  <br />
    <TextField type="text" label="phone" onChange={(e) => setPhone(e.target.value)} />  <br />
    <TextField type="text" label="owner" onChange={(e) => setOwner(e.target.value)} />  <br />
    <TextField type="text" label="logo" onChange={(e) => setLogo(e.target.value)} />  <br />
    <TextField type="text" label="Description" onChange={(e) => setDescription(e.target.value)}/><br />
    {/* <Button type="sumbit">save</Button> */}
    <LoadingButton
          fullWidth
          type="submit"
          sx={{ bgcolor: pink[500] }}
          type="sumbit"
          loadingPosition="start"
          startIcon={<SaveIcon />}
          variant="contained"
        >
          <span>Save</span>
        </LoadingButton>

    <br />
    </form>
    </Box>
    </>)
}