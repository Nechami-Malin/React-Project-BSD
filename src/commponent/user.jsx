
import React, { useState, useEffect } from "react";
import ServiceStore from "../AppStore/serviceStore";
import ViewDetails from "./ViewDetails";
import { observer } from "mobx-react";
import AddMeeting from "./addMeeting";
import BusinessStore from "../AppStore/businessStore";
import { Card, CardContent, Typography, Button } from "@mui/material";
import styled from "styled-components";

const StyledCard = styled(Card)`
  background-color: green;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const User = observer(() => {
  const [service, setService] = useState({});
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    BusinessStore.initBusinessData();
    ServiceStore.initServices();
  }, []);

  const handleClick = (service) => {
    setService(service);
    setShowForm(true);
  };

  return (
    <>
      <h1>Welcome </h1>

      {/* Business Card */}
      <StyledCard elevation={3}>
        <CardContent>
          <Typography variant="h5" color="white">
            Business Details
          </Typography>
          <ViewDetails data={BusinessStore.business} />
        </CardContent>
      </StyledCard>

      {/* Service Buttons */}
      <div>
        {ServiceStore.servicesList.map((s) => (
          <Button
            key={s.id}
            variant="contained"
            onClick={() => handleClick(s)}
            sx={{ margin: 1 }}
          >
            <ViewDetails
              key={s.id}
              data={{ name: s.name, description: s.description }}
            />
          </Button>
        ))}
      </div>

      {/* Add Meeting Form */}
      {showForm && <AddMeeting serviceType={service.description} />}
    </>
  );
});

export default User;
