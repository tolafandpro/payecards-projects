import styled from "styled-components";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Stack from "@mui/material/Stack";

// import { SearchContext } from "./../context/SearchContext";
import dayjs from "dayjs";

import { DatePicker } from "@mui/x-date-pickers/DatePicker";

const HeaderWrapper = styled.div`
  background: url("https://static.vecteezy.com/system/resources/previews/000/136/812/original/starship-space-cartoon-free-vector.jpg");
  color: white;
  display: flex;
  justify-content: center;
  position: relative;
`;
const HeaderContainer = styled.div`
  width: 100%;
  max-width: 1250px;
  margin: ${(props) =>
    props.type === "list" ? "40px 0px 0px 0px" : "20px 0px 100px 0px"};
`;
const HeaderList = styled.div`
  display: flex;
  gap: 40px;
  margin-bottom: 4em;
`;
const HeaderListItem = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  // &:active{
  //     border: 1px solid white;
  //     padding: 10px;
  //     border-radius: 20px;
  // }
`;
// const HeaderListItem = styled(activ)`
//     // &:active{
//     //     border: 1px solid white;
//     //     padding: 10px;
//     //     border-radius: 20px;
//     // }
// `
const HeaderTitle = styled.div``;
const HeaderDesc = styled.p`
  margin: 5px 0px;
`;
const HeaderBtn = styled.button`
  background-color: #0071c2;
  width: 10em;
  color: white;
  font-weight: 500;
  border: none;
  padding: 10px;
  cursor: pointer;
  border-radius: 8px;

  &:hover {
    color: #0071c2;
    background-color: white;
  }
`;
const HeaderSearch = styled.div`
  height: 8em;
  background-color: white;
  border: 3px solid #e3014d;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 25px 25px 10px 25px;
  border-radius: 8px;
  position: absolute;
  bottom: -45px;
  width: 100%;
  max-width: 80%;
`;
const HeaderSearchItem = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  padding: 25px 25px 25px 25px;
`;
const HeaderSearchText = styled.div`
  color: lightgrey;
`;
const Options = styled.div`
  position: absolute;
  top: 50px;
  background: white;
  color: grey;
  border-radius: 8px;
  -webkit-box-shadow: 0px 0px 10px -5px rgba(0, 0, 0, 0.4);
  box-shadow: 0px 0px 0px -5px rgba(0, 0, 0, 0.4);
  z-index: 9;
`;
const OptionCounter = styled.div`
  display: flex;
  align-items: center;
  font-size: 12px;
  gap: 10px;
  color: black;
`;
const OptionItem = styled.div`
  width: 200px;
  display: flex;
  justify-content: space-between;
  padding: 10px;
`;
// const OptionText = styled.div`

// `
const OptionCounterButton = styled.button`
  width: 25px;
  height: 25px;
  border: 1px solid #0071c2;
  border-radius: 4px;
  color: white;
  background: #0071c2;
  cursor: pointer;
  align-items: center;

  &:disabled {
    cursor: not-allowed;
    background-color: #a10000;
  }
`;
const DateContainer = styled.div`
  position: absolute;
  top: 50px;
  z-index: 3;
`;
function Header({ type }) {
  // This section is the Date range picker on the header
  // const [openDate, setOpenDate] = useState(false);
  const [dates, setDates] = useState(null);
  console.log(dates);
  // const [destination, setDestination] = useState("");

  // for Option module in the search bar
  const [openOption, setOpenOption] = useState(false); //Controls the click to open
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });

  //This section logic sends the data and navigate to hotels page
  const navigate = useNavigate();

  /**The dispactch function from SearchContext from the Context folder
   *
   * */
  //   const { user } = useContext(SearchContext);

  const handleOption = (name, opretion) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: opretion === "increase" ? options[name] + 1 : options[name] - 1,
      };
    });
  };

  //   const { dispatch } = useContext(SearchContext);

  const handleSearch = () => {
    // dispatch({ type: "NEW_SEARCH", payload: { destination, dates, options } });
    // navigate("/hotels", { state: { destination, dates, options } });
  };

  return (
    <HeaderWrapper>
      <HeaderContainer>
        <HeaderList>
          <HeaderListItem active="active">
            <RocketLaunchIcon />
            <span>Stays</span>
          </HeaderListItem>
          <HeaderListItem>
            <RocketLaunchIcon />
            <span>Flight</span>
          </HeaderListItem>
          <HeaderListItem>
            <RocketLaunchIcon />
            <span>Car rentals</span>
          </HeaderListItem>
          <HeaderListItem>
            <RocketLaunchIcon />
            <span>Airport taxis</span>
          </HeaderListItem>
        </HeaderList>
        {type !== "list" && (
          <>
            <HeaderTitle>
              <h1>A Lifetime of discount It's Genius</h1>
              <HeaderDesc>
                <span>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Exercitationem
                </span>
              </HeaderDesc>

              <HeaderSearch>
                <Stack direction="row" spacing={2}>
                  <HeaderSearchItem>
                    <TextField
                      id="standard-select-currency"
                      select
                      label="Where do you want to go ?"
                      defaultValue="Dist"
                      helperText="Select your destination"
                      variant="standard"
                    >
                      <MenuItem value="">select</MenuItem>
                    </TextField>
                    <RocketLaunchIcon
                      style={{ color: "lightgray", marginRight: "5px" }}
                    />
                    <TextField
                      id="standard-select-currency"
                      select
                      label="Where do you want to go ?"
                      defaultValue="Dist"
                      helperText=" select a destination "
                      variant="standard"
                    >
                      <MenuItem value="">select</MenuItem>
                    </TextField>
                  </HeaderSearchItem>
                  <HeaderSearchItem>
                    <HeaderSearchText>
                      <DatePicker
                        label="Check-in"
                        value={dates}
                        minDate={dayjs("2023-03-01")}
                        onChange={(newValue) => {
                          setDates(newValue);
                        }}
                        renderInput={(params) => <TextField {...params} />}
                      />
                    </HeaderSearchText>
                  </HeaderSearchItem>
                  <HeaderSearchItem>
                    <HeaderSearchText>
                      <DatePicker
                        label="Check Out"
                        value={dates}
                        variant="standard"
                        onChange={(newValue) => {
                          setDates(newValue);
                        }}
                        renderInput={(params) => <TextField {...params} />}
                      />
                    </HeaderSearchText>
                  </HeaderSearchItem>
                  <HeaderSearchItem>
                    <HeaderBtn onClick={() => handleSearch()}>Search</HeaderBtn>
                  </HeaderSearchItem>
                </Stack>
              </HeaderSearch>
            </HeaderTitle>{" "}
          </>
        )}
      </HeaderContainer>
    </HeaderWrapper>
  );
}

export default Header;
