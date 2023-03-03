import styled from "styled-components";

const FooterContainer = styled.div`
  width: 100%;
  /* max-width: 1024px; */
  font-size: 12px;
  background-color: ${({ theme }) => theme.bg};
`;
const FooterLists = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 50px;
`;
const FooterList = styled.ul`
  list-style: none;
  padding: 0;
`;
const FooterListItem = styled.li`
  margin-bottom: 10px;
  color: ${({ theme }) => theme.text};
  cursor: pointer;
`;
const FooterCopyright = styled.div``;

function Footer() {
  return (
    <FooterContainer>
      <FooterLists>
        <FooterList>
          <FooterListItem>Countries</FooterListItem>
          <FooterListItem>Regions</FooterListItem>
          <FooterListItem>Cities</FooterListItem>
          <FooterListItem>Districts</FooterListItem>
          <FooterListItem>Airport</FooterListItem>
          <FooterListItem>Hotels</FooterListItem>
        </FooterList>
        <FooterList>
          <FooterListItem>Homes</FooterListItem>
          <FooterListItem>Apartments</FooterListItem>
          <FooterListItem>Resorts</FooterListItem>
          <FooterListItem>Villas</FooterListItem>
          <FooterListItem>Hotels</FooterListItem>
          <FooterListItem>Guest houses</FooterListItem>
        </FooterList>
        <FooterList>
          <FooterListItem>Unique places to stay</FooterListItem>
          <FooterListItem>Reviews</FooterListItem>
          <FooterListItem>Unpacked: Travel articles</FooterListItem>
          <FooterListItem>Travel communities</FooterListItem>
          <FooterListItem>Terms & conditions</FooterListItem>
          <FooterListItem>Seasonal and holiday deals</FooterListItem>
        </FooterList>
        <FooterList>
          <FooterListItem>Car rental</FooterListItem>
          <FooterListItem>Flight finder</FooterListItem>
          <FooterListItem>Restaurant reservations</FooterListItem>
          <FooterListItem>Districts</FooterListItem>
          <FooterListItem>Careers</FooterListItem>
          <FooterListItem>OdBooking.com for Travel Agents</FooterListItem>
        </FooterList>
        <FooterList>
          <FooterListItem>Countries</FooterListItem>
          <FooterListItem>Partner Help</FooterListItem>
          <FooterListItem>Partner Help</FooterListItem>
          <FooterListItem>Press Center</FooterListItem>
          <FooterListItem>Safety Resource Center</FooterListItem>
          <FooterListItem>Investor relations</FooterListItem>
        </FooterList>
      </FooterLists>
      <FooterCopyright>
        Copyright © 1996–2022 OyeBooking.com™. All rights reserved.
      </FooterCopyright>
    </FooterContainer>
  );
}

export default Footer;
