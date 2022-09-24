import { React, useState } from "react";
import TextField from "@mui/material/TextField";
import List from "./Components/List"
import "./style.css";

function CardapioSearch() {
  return (
    <div className="main">
      <h1>Buscar no cardápio</h1>
      <div className="search">
        <TextField
          id="outlined-basic"
          variant="outlined"
          fullWidth
          label="Search"
        />
      </div>
      <List />
    </div>
  );
}

export default CardapioSearch;