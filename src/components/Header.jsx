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
import SearchForm from "./SearchForm";

const HeaderWrapper = styled.div`
  background-image: url("https://www.spacex.com/static/images/backgrounds/f9_feature.jpg");
  background-size: contain;
  color: white;
  display: flex;
  justify-content: center;
  position: relative;
  height: 82vh;
`;
const HeaderContainer = styled.div`
  width: 100%;
  height: 100%;
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

function Header({ type }) {
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
            <span>Falcon 9</span>
          </HeaderListItem>
          <HeaderListItem>
            <RocketLaunchIcon />
            <span>Starship</span>
          </HeaderListItem>
          <HeaderListItem>
            <RocketLaunchIcon />
            <span>Starshield</span>
          </HeaderListItem>
          <HeaderListItem>
            <RocketLaunchIcon />
            <span>Dragon</span>
          </HeaderListItem>
        </HeaderList>
        <>
          <HeaderTitle>
            <h1>A Lifetime of discovery It's Genius</h1>
            <HeaderDesc>
              <span>FIRST ORBITAL CLASS ROCKET CAPABLE OF REFLIGHT</span>
            </HeaderDesc>

            <SearchForm />
          </HeaderTitle>
        </>
      </HeaderContainer>
    </HeaderWrapper>
  );
}

export default Header;
