import React, { useContext, useState } from "react";
import styled from "styled-components";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Button from "@mui/material/Button";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";
import { SearchContext } from "./../context/SearchContext";

const Container = styled.div`
  height: 8em;
  background-color: white;
  border: 3px solid #e3014d;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px 0px 5px 0px;
  border-radius: 8px;
  position: absolute;
  bottom: 200px;
  width: 80%;
  max-width: 80%;
`;

const SearchForm = () => {
  const [name, setName] = useState("");
  const [startDates, setStartDates] = useState(null);
  const [endDates, setEndDates] = useState(null);
  const navigate = useNavigate();

  const { dispatch } = useContext(SearchContext);

  const handleSearch = () => {
    dispatch({ type: "NEW_SEARCH", payload: { name, startDates, endDates } });
    navigate("/lists", { state: { name, startDates, endDates } });
  };

  const { getLauch } = useContext(SearchContext);

  //   const handleName = (e) => {
  //     e.setName(e.target.value);
  //   };

  return (
    <>
      <Container>
        <Stack direction="row" spacing={2}>
          {/* <FormControl sx={{ width: "50ch" }} variant="standard">
            <TextField
              id="1"
              select
              label="Select a rocket"
              defaultValue={name}
              variant="standard"
              onChange={(e) => setName(e.target.value)}
            >
              {getLauch.map((data) => {
                <MenuItem value={data?.name}>select</MenuItem>;
              })}
              <MenuItem value="English">English</MenuItem>
              <MenuItem value="French">French</MenuItem>
              <MenuItem value="Spanish">Spain</MenuItem>
            </TextField>
          </FormControl> */}
          <DatePicker
            label="Start Date"
            value={startDates}
            variant="standard"
            onChange={(newValue) => {
              setStartDates(newValue);
            }}
            renderInput={(params) => <TextField {...params} />}
          />
          <DatePicker
            label="End Date"
            value={endDates}
            variant="standard"
            onChange={(newValue) => {
              setEndDates(newValue);
            }}
            renderInput={(params) => <TextField {...params} />}
          />
          <Button
            onClick={handleSearch}
            variant="contained"
            size="large"
            endIcon={<SearchIcon />}
          >
            Search
          </Button>
        </Stack>
      </Container>
    </>
  );
};

export default SearchForm;
