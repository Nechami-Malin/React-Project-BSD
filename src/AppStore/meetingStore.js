import {observable,makeObservable,action} from 'mobx';
class MeetingSrore
{
  meetingList=[];
  id=1;
  isAdd=false;
  constructor(){
    makeObservable(this,{
        meetingList:observable,
        id:observable,
        isAdd:observable,
        editMeeting:action,
        initMeeting:action,
        
    });
  }
 


editMeeting = async(dataForm) => { 
  dataForm.id=this.id;
  const response = await fetch("http://localhost:8787/appointment", {
      method: "POST",
      body: JSON.stringify(dataForm),
      headers: {"Content-Type": "application/json"},
  });
  if(response.status===200){
    this.meetingList.push(dataForm)
    this.id+=1;;
    this.isAdd=true;
  }
  else
    this.isAdd=false
  
}

  initMeeting = async() => {
    const response = await fetch("http://localhost:8787/appointments")
    const jsData= await response.json();
    this.meetingList=jsData;
  }
}
export default new MeetingSrore();
