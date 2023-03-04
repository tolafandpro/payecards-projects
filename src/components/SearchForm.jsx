import React, { useState } from "react";
import styled from "styled-components";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Button from "@mui/material/Button";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  height: 8em;
  background-color: white;
  border: 3px solid #e3014d;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 25px 25px 10px 25px;
  border-radius: 8px;
  position: absolute;
  bottom: 200px;
  width: 100%;
  max-width: 80%;
`;

const SearchForm = () => {
  const [dates, setDates] = useState(null);
  const navigate = useNavigate();
  console.log(navigate);

  return (
    <>
      <Container>
        <Stack direction="row" spacing={2}>
          <FormControl sx={{ width: "25ch" }} variant="standard">
            <TextField
              id="1"
              select
              label="Select a rocket"
              defaultValue=""
              variant="standard"
            >
              <MenuItem value="">select</MenuItem>
              <MenuItem value="English">English</MenuItem>
              <MenuItem value="French">French</MenuItem>
            </TextField>
          </FormControl>
          <FormControl sx={{ m: 1, width: "25ch" }} variant="standard">
            <TextField
              id="2"
              select
              label="Select"
              defaultValue=""
              variant="standard"
            >
              <MenuItem value="">select</MenuItem>
              <MenuItem value="English">English</MenuItem>
              <MenuItem value="French">French</MenuItem>
            </TextField>
          </FormControl>
          <DatePicker
            label="Check Out"
            value={dates}
            variant="standard"
            onChange={(newValue) => {
              setDates(newValue);
            }}
            renderInput={(params) => <TextField {...params} />}
          />
          <DatePicker
            label="Check Out"
            value={dates}
            variant="standard"
            onChange={(newValue) => {
              setDates(newValue);
            }}
            renderInput={(params) => <TextField {...params} />}
          />
          <Button variant="contained" size="large" endIcon={<SearchIcon />}>
            Search
          </Button>
        </Stack>
      </Container>
    </>
  );
};

export default SearchForm;
