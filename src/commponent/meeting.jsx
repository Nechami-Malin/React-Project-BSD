

import ServiceStore from "../AppStore/serviceStore";
import Service from "./viewDetails";
import AddServicer from "./addServicer";
import { useEffect } from 'react';
import { observer } from "mobx-react";
import GlobalStore from "../AppStore/globalStore";
import meetingStore from "../AppStore/meetingStore";
import moment from "moment";
import * as React from 'react';
import { Card } from "@mui/material";
import "./Meeting.css"; 

const Meeting = observer(() => {
  useEffect(() => {
    meetingStore.initMeeting()
  }, [])

  const getColor = (dateTime) => {
    const today = new Date();
    const nextWeek = new Date();
    nextWeek.setDate(today.getDate() + 7);

    const meetingDate = new Date(dateTime);

    if (meetingDate.toDateString() === today.toDateString()) {
      return 'red';
    }
    if (meetingDate >= today && meetingDate <= nextWeek) {
      return 'orange';
    }
    return 'green';
  };

  return (<>
    <div className="meeting-container"> 
      {[...meetingStore.meetingList].sort((a, b) => moment(a.dateTime).valueOf() - moment(b.dateTime).valueOf()).map((meeting, index) => (
        <Card key={meeting.id} style={{ border: getColor(meeting.dateTime), color: getColor(meeting.dateTime) }}>
          <h2>מידע על פגישה</h2>
          <p>
            ID: {meeting.id}
            <br />
            סוג שירות: {meeting.serviceType}
            <br />
            תאריך ושעה: {moment(meeting.dateTime).format("DD/MM/YYYY HH:mm")}
            <br />
            שם לקוח: {meeting.clientName}
            <br />
            טלפון לקוח: {meeting.clientPhone}
            <br />
            דוא"ל לקוח: {meeting.clientEmail}
          </p>
        </Card>
      ))}
    </div>
    <br />
    </>
  )
})

export default Meeting;
