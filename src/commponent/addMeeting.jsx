import  { useState, useEffect } from "react";
import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import { observer } from "mobx-react"
import MeetingStore from '../AppStore/meetingStore';
import MyDatePicker from './MyDatePicker';
import { TextField } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';


import Typography from '@mui/material/Typography';

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

const AddMeeting=observer(({serviceType})=>{
    
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [service, setService] = useState({
    serviceType,
    dateTime: "",
    clientName: "",
    clientPhone: "",
    clientEmail: "",
  });

 const handleChange = (e) => {
    const { name, value } = e.target;
    setService({
      ...service,
      [name]: value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    await MeetingStore.editMeeting(service)
    if(MeetingStore.isAdd)
      setOpen(false)
      
        
     e.target.reset();
  }

  return (
    <div>
      <Button onClick={handleOpen}>Schedule a business meeting</Button>
      <Modal
        keepMounted
        open={open}
        onClose={handleClose}
      >
        <Box sx={style}>
    <form onSubmit={handleSubmit}>
      <TextField fullWidth name="serviceType" label="Service type"value={serviceType}disabled={true}/>
      <MyDatePicker
        name="dateTime"
        onChange={(data)=>{setService((prevService)=>({
          ...prevService,
          dateTime:data,
        }));
        }}/>
      <TextField fullWidth name="clientName" label="Client name" value={service.clientName} onChange={handleChange}/>
      <TextField fullWidth name="clientPhone" label="Client phone" onChange={handleChange}/>
      <TextField fullWidth type='email'name="clientEmail"label="Client email" onChange={handleChange}/>
      <Button fullWidth type="submit" variant="contained" endIcon={<SendIcon />}> Send </Button>

    </form>
        </Box>


      </Modal>
    </div>
  );
});
export default AddMeeting;



