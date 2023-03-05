import React, { useState, useEffect, useContext } from "react";
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
import { Link, useLocation } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import axios from "axios";
import { SearchContext } from "./../context/SearchContext";

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
  border-radius: 5px;

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
  const location = useLocation();

  const [name, setName] = useState(location.state.name);
  const [startDates, setStartDates] = useState(location.state.startDates);
  const [endDates, setEndDates] = useState(location.state.endDates);
  const [datas, setDatas] = useState([]);

  let { getLauch, getLauchData, getSingleLaunch } = useContext(SearchContext);

  // const { data, loading, error } = useFetch(
  //   `https://api.spacexdata.com/v4/launches`
  // );

  // console.log(location);

  // useEffect(() => {
  //   const fetchLauchDetails = async () => {
  //     try {
  //       const res = await axios.get(
  //         "https://api.spacexdata.com/v4/launches?limit=10"
  //       );
  //       setDatas(res.data);
  //     } catch (error) {
  //       console.log(error);
  //     }

  //     fetchLauchDetails();
  //     console.log(fetchLauchDetails());
  //   };
  // }, []);

  return (
    <>
      {!getLauch ? (
        "Loading please wait "
      ) : (
        <Container>
          <ListWrapper>
            <ListSearch>
              <ListSearchItem>
                <Stack spacing={5} sx={{ p: 1 }}>
                  {/* <FormControl sx={{ width: "31ch" }} variant="standard">
                    <TextField
                      id="1"
                      select
                      label="Select a rocket"
                      defaultValue={name}
                      //   helperText="Please select your currency"
                      variant="standard"
                    >
                      <MenuItem value="">select</MenuItem>
                      <MenuItem value="English">English</MenuItem>
                      <MenuItem value="French">French</MenuItem>
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
                    label="Check Out"
                    value={endDates}
                    variant="standard"
                    onChange={(newValue) => {
                      setEndDates(newValue);
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
              {!getLauch ? (
                "Loading Please wait ..."
              ) : (
                <>
                  {getLauch.map((data) => {
                    return <SearchPreview key={data.id} item={data} />;
                  })}
                </>
              )}
              <SearchPreview />
            </ListResult>
          </ListWrapper>
        </Container>
      )}

      <Footer />
    </>
  );
};

export default List;
