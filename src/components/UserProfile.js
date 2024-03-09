import React from "react";
import { Card, CardContent, Typography, Box } from "@mui/material";

function UserProfile() {
  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <Card sx={{ maxWidth: 345 }}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            John Doe
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Software Engineer passionate about creating impactful web
            applications.
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}

export default UserProfile;
