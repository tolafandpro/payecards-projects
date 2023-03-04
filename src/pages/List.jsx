import React, { useState } from "react";
import styled from "styled-components";
// import SearchForm from "../components/SearchForm";
import SearchPreview from "../components/SearchPreview";
import Footer from "./../components/Footer";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Button from "@mui/material/Button";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import SearchIcon from "@mui/icons-material/Search";

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  color: ${({ theme }) => theme.text};
  background-color: ${({ theme }) => theme.bg};
`;
const ListWrapper = styled.div`
  width: 100%;
  max-width: 1224px;
  display: flex;
  gap: 20px;
`;
const ListSearch = styled.div`
  flex: 1;
  background-color: ${({ theme }) => theme.bg};
  padding: 10px;
  border-radius: 10px;
  position: sticky;
  height: max-content;
  margin-top: 10px;
  top: 10px;

  h1 {
    font-size: 20px;
    color: #555;
    margin-bottom: 10px;
  }
`;
const ListResult = styled.div`
  flex: 3;
`;
const ListSearchItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding: 5px;
  background-color: white;

  label {
    font-size: 14px;
  }

  input {
    height: 30px;
    border: none;
    border-radius: 4px;
    padding: 2px;
    font-size: 14px;
    display: flex;
    align-items: center;
    cursor: pointer;
  }
`;

const List = () => {
  const [dates, setDates] = useState(null);
  return (
    <>
      <Container>
        <ListWrapper>
          {/* <SearchForm /> */}
          <ListSearch>
            <ListSearchItem>
              <Stack spacing={2}>
                <FormControl sx={{ width: "25ch" }} variant="standard">
                  <TextField
                    id="1"
                    select
                    label="Select a rocket"
                    defaultValue=""
                    //   helperText="Please select your currency"
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
                <Button
                  variant="contained"
                  size="large"
                  endIcon={<SearchIcon />}
                >
                  Search
                </Button>
              </Stack>
            </ListSearchItem>
          </ListSearch>
          <ListResult>
            <SearchPreview />
            <SearchPreview />
            <SearchPreview />
            <SearchPreview />
            <SearchPreview />
            <SearchPreview />
            <SearchPreview />
            <SearchPreview />
          </ListResult>
        </ListWrapper>
      </Container>
      <Footer />
    </>
  );
};

export default List;
