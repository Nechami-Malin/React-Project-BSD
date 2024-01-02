import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { TextField } from "@mui/material";
import ServiceStore from '../AppStore/serviceStore';
import { observer } from 'mobx-react';
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import SendIcon from '@mui/icons-material/Send';
import { green, pink } from '@mui/material/colors';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const AddServicer=observer(()=> {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [dataForm,setDataForm]=React.useState({
    id: "",
    name: "",
    description: "",
    price:"",
    duration:"",
  })
  const handleChange = (event) => {
    const { name, value } = event.target;
    setDataForm({...dataForm,[name]:value})
  }

  const addSevice=async (event) =>{
    event.preventDefault();
    ServiceStore.editServices(dataForm)
    setOpen(false);
  }
  return (
    <div>
      <Fab size="large" sx={{ bgcolor: pink[500] }}   aria-label="add" onClick={handleOpen}>
        <AddIcon />
      </Fab>
      <Modal
        keepMounted
        open={open}
        onClose={handleClose}
      >
    <Box sx={style}>
  <form onSubmit={addSevice} >
    <TextField  fullWidth type="text" label="id" name="id"onChange={handleChange} /><br/>
    <TextField  fullWidth type="text" label="name" name="name" onChange={handleChange}/><br/>
    <TextField  fullWidth type="text" label="description"name="description"onChange={handleChange}/><br/>
    <TextField  fullWidth type="text" label="price"name="price" onChange={handleChange}/><br />
    <TextField  fullWidth type="text" label="duration" name="duration" onChange={handleChange}/><br/>
    <Button sx={{ bgcolor: pink[500] }} fullWidth type="submit" variant="contained" endIcon={<SendIcon />}>Save</Button>
    
  </form> 
        </Box>
      </Modal>
    </div>
  );
})
export default AddServicer;