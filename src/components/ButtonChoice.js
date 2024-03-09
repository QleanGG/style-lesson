import { ButtonBase, TextField,Typography } from "@mui/material";
import React from "react";
import { Button as BootButton } from "react-bootstrap";
import Button from "@mui/material/Button";

const ButtonChoice = () => {
  return (
    <div>
      <h1>ButtonChoice</h1>
      <button>Regular Button</button>
      <br /><br />
      <h3>Bootstrap</h3>
      <BootButton variant="primary">Bootstrap</BootButton>
      <BootButton variant="danger">Bootstrap</BootButton>
      <BootButton variant="success">Bootstrap</BootButton>
      <br /><br />
      <h3>MUI</h3>
      <Button variant="text">Transparent</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>

      <h2>Forms</h2>
      <input placeholder="input"></input>
      <Typography variant="h4" sx={{flexGrow: 1}}>Form Input</Typography>
      <TextField id="outlined-basic" label="Input" variant="outlined" />
    </div>
  );
};

export default ButtonChoice;
