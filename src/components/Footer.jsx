import styled from "styled-components";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";

const FooterContainer = styled.div`
  width: 100%;
  /* max-width: 1024px; */
  font-size: 12px;
  color: ${({ theme }) => theme.text};
  background-color: ${({ theme }) => theme.bg};
  padding: 7px 0px;
`;
const FooterList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  list-style: none;
  padding: 0;
`;
const FooterListItem = styled.li`
  margin-bottom: 10px;
  color: ${({ theme }) => theme.text};
  cursor: pointer;
`;
const FooterCopyright = styled.div`
  text-align: center;
`;

function Footer() {
  return (
    <FooterContainer>
      <FooterCopyright>
        Copyright © 1996–2023 Payecard.com™. All rights reserved.
        <FooterList>
          <Stack
            direction="row"
            divider={<Divider orientation="vertical" flexItem />}
            spacing={2}
          >
            <Button color="inherit">Twitter</Button>
            <Button color="inherit">Youtube</Button>
            <Button color="inherit">FLICKR</Button>
          </Stack>
        </FooterList>
      </FooterCopyright>
    </FooterContainer>
  );
}

export default Footer;
