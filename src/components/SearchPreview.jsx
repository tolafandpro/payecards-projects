import { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import spaceman from "../assets/images/spaceman.png";
import { SearchContext } from "../context/SearchContext";
// import useFetch from "../hooks/useFetch";

const SearchPreviewContainer = styled.div`
  border: 2px solid lightgray;
  padding: 10px;
  display: flex;
  border-radius: 5px;
  justify-content: space-between;
  margin-bottom: 15px;
`;
const PreviewImage = styled.img`
  width: 200px;
  height: 200px;
  object-fit: cover;
  margin-right: 10px;
  border-radius: 5px;
`;
const PreviewDesc = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const SearchTitle = styled.span`
  font-size: 20px;
  color: #0071c2;
`;
const SearchDistance = styled.span`
  font-size: 12px;
`;
const SearchTaxi = styled.span`
  font-size: 12px;
  background-color: #008009;
  color: white;
  width: max-content;
  padding: 3px;
  border-radius: 5px;
`;
const SearchSubtitle = styled.span`
  font-size: 12px;
  font-weight: bold;
`;
const SearchFeatures = styled.span`
  font-size: 12px;
`;
const SearchCancel = styled.span`
  font-size: 12px;
  color: #008009;
  font-weight: bold;
`;
const SearchCancelSuptitle = styled.span`
  font-size: 12px;
  color: #008009;
`;
const SearchDetails = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const SearchRating = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center span {
    font-size: 24px;
    font-weight: 500;
  }
  button {
    background-color: #003580;
    color: white;
    padding: 8px;
    font-weight: bold;
    border: none;
    border-radius: 6px 6px 6px 0px;
  }
`;
const SearchDetailsPrice = styled.span`
  font-size: 24px;
`;
const SrTaxOp = styled.span`
  font-size: 12px;
  color: gray;
`;
const SearchItemCheckBtn = styled.button`
  background-color: #0071c2;
  color: white;
  font-weight: bold;
  padding: 10px 5px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  width: 40%;
  margin-left: 4.6rem;
`;
const SearchDetailsText = styled.div`
  display: flex;
  flex-direction: column;
  text-align: right;
  gap: 5px;
`;

/**
 * This is right section for the search result containing all the search item
 * from the search input at the home page or at the left yellow searchbar at the left hand side
 */
const SearchPreview = ({ item }) => {
  let { id } = useParams();

  return (
    <>
      {!item ? (
        "loading Please wait..."
      ) : (
        <SearchPreviewContainer>
          <PreviewImage src={item?.links.patch.small} alt="Hotel1" />

          <PreviewDesc>
            <Link to={`http://localhost:3000/details/${item?.id}`}>
              <SearchTitle>{item?.name}</SearchTitle>
            </Link>
            <SearchDistance>Success:{item?.success}</SearchDistance>
            <SearchTaxi>Upcoming: {String(item?.upcoming)}</SearchTaxi>
            <SearchSubtitle>Rocket: {String(item?.rocket)}</SearchSubtitle>
            <SearchFeatures>Details: {String(item?.details)}</SearchFeatures>
            <SearchCancel>Net: {String(item?.net)}</SearchCancel>
            <SearchCancelSuptitle>
              {item?.static_fire_date_utc}
            </SearchCancelSuptitle>
          </PreviewDesc>
          <SearchDetails>
            <SearchRating>
              <span>{item?.cores.flight}</span>
              <button>Date Precision: {item?.date_precision}</button>
            </SearchRating>

            <SearchDetailsText>
              <SearchDetailsPrice>$50000</SearchDetailsPrice>
              <SrTaxOp>Includes Taxes and fees</SrTaxOp>
              <Link to={`http://localhost:3000/details/${item?.id}`}>
                <SearchItemCheckBtn>Learn More</SearchItemCheckBtn>
              </Link>
            </SearchDetailsText>
          </SearchDetails>
        </SearchPreviewContainer>
      )}
    </>
  );
};

export default SearchPreview;
