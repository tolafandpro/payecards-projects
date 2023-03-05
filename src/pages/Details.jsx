import styled from "styled-components";

import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import CloseIcon from "@mui/icons-material/Close";
import spaceman from "../assets/images/spaceman.png";

import { useContext, useState, useEffect } from "react";
// import useFetch from "../hooks/useFetch";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { SearchContext } from "../context/SearchContext";
import Footer from "../components/Footer";
import useFetch from "../hooks/useFetch";
import Navbar from "../components/Navbar";

//mui
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import axios from "axios";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  // justify-content: center;
  margin-top: 20px;
  background-color: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.text};
`;
const HotelWrapper = styled.div`
  width: 100%;
  max-width: 1024px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  position: relative;
`;
const Button1 = styled.button`
  position: absolute;
  border: none;
  color: white;
  top: 10px;
  right: 0;
  padding: 10px 20px;
  background-color: #0071c2;
  border-radius: 5px;
  font-weight: bold;
  cursor: pointer;
`;

const HotelTitle = styled.h1`
  font-size: 24px;
`;
const HotelAddress = styled.div`
  font-size: 12px;
  display: flex;
  align-items: center;
  gap: 10px;
`;
const HotelDistance = styled.span`
  color: #0071c2;
  font-weight: 500;
`;
const HotelPriceHighlight = styled.span`
  color: #008009;
  font-weight: 500;
`;
const RocketImages = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
const ImageWrapper = styled.div`
  width: 33%;

  img {
    width: 100%;
    object-fit: cover;
  }
`;
const HotelDetails = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
  margin-top: 10px;
`;

const HotelDetailsTexts = styled.div`
  flex: 1;
`;
const HotelDetailsPrice = styled.div`
  flex: 3;
  background-color: ${({ theme }) => theme.bg};
  padding: 5px 10px;
  display: flex;
  flex-direction: column;
  gap: 20px;

  h4 {
    font-size: 16px;
    margin: 0px;
    color: #555;
  }

  span {
    font-size: 14px;
  }

  button {
    border: none;
    padding: 10px 20px;
    background-color: #0071c2;
    color: white;
    cursor: pointer;
    border-radius: 5px;
  }
`;
const SliderImg = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.426);
  z-index: 99;
  display: flex;
  align-items: center;
`;
const SliderModelWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SlImg = styled.img`
  width: 80vw;
  height: 80vh;
`;

const Details = () => {
  let { id } = useParams();
  let { getSingleLaunch, lauchDetails: data } = useContext(SearchContext);

  const location = useLocation();

  const [sliderIndex, setSliderIndex] = useState(0);
  const [openSliderIndex, setOpenSliderIndex] = useState(false);
  const [datas, setDatas] = useState([]);
  const [error, setError] = useState();
  const [dataInfo, setDataInfo] = useState({});

  useEffect(() => {
    getSingleLaunch(id);
  }, [id]);

  const navigate = useNavigate();

  const handleOpen = (imgindex) => {
    setSliderIndex(imgindex);
    setOpenSliderIndex(true);
  };

  const handleSlider = (direction) => {
    let newSlideIndex;

    if (direction === "leftSlide") {
      newSlideIndex = sliderIndex === 0 ? 5 : sliderIndex - 1;
    } else {
      newSlideIndex = sliderIndex === 5 ? 0 : sliderIndex + 1;
    }

    setSliderIndex(newSlideIndex);
  };

  const photos = [
    {
      src: "https://sxcontent9668.azureedge.us/cms-assets/assets/Homepage_Desktop_5ebdeb0c6c.webp",
    },
    {
      src: "https://www.spacex.com/static/images/falcon-heavy/FH_3.jpg",
    },
    {
      src: "https://www.spacex.com/static/images/falcon-9/refresh/F9_DM2_LAUNCH_3840x2560.jpg",
    },
    {
      src: "https://www.spacex.com/static/images/falcon-heavy/FH_1.jpg",
    },
    {
      src: "https://www.spacex.com/static/images/falcon-heavy/FH_2.jpg",
    },
    {
      src: "https://www.spacex.com/static/images/falcon-heavy/FH_4.jpg",
    },
  ];

  return (
    <>
      {!data ? (
        <div>Loading Please wait ... </div>
      ) : (
        <Container>
          {openSliderIndex && (
            <SliderImg>
              <ArrowCircleLeftIcon
                onClick={() => handleSlider("leftSlide")}
                style={{
                  fontSize: "50px",
                  position: "relative",
                  left: "50px",
                  color: "lightgray",
                  cursor: "pointer",
                }}
              />
              <SliderModelWrapper>
                {<SlImg src={photos[sliderIndex].src} alt="" />}
              </SliderModelWrapper>
              <ArrowCircleRightIcon
                onClick={() => handleSlider("rightSlide")}
                style={{
                  fontSize: "50px",
                  position: "relative",
                  right: "50px",
                  color: "lightgray",
                  cursor: "pointer",
                }}
              />
              <CloseIcon
                style={{
                  position: "absolute",
                  top: "20px",
                  right: "20px",
                  color: "lightgrey",
                  fontSize: "30px",
                  cursor: "pointer",
                }}
                onClick={() => setOpenSliderIndex(!openSliderIndex)}
              />
            </SliderImg>
          )}
          <HotelWrapper>
            <Link to={data.links.article}></Link>
            <Button1>Read More!</Button1>
            <HotelTitle>{data.cores.flight}</HotelTitle>
            <HotelAddress>
              <RocketLaunchIcon />

              <span>No of Flight: {data.flight_number}</span>
            </HotelAddress>
            <HotelDistance>
              Date Precision - {data.date_precision}
            </HotelDistance>
            <HotelPriceHighlight>Details: {data.details}</HotelPriceHighlight>
            <RocketImages>
              {photos.map((photo, i) => (
                <ImageWrapper key={i}>
                  <img
                    onClick={() => handleOpen(i)}
                    src={photo.src}
                    alt="images"
                  />
                </ImageWrapper>
              ))}
            </RocketImages>
            <HotelDetails>
              <HotelDetailsTexts>
                <h1> {data.name} </h1>
                <img src={data.links.patch.small} width={200} height={200} />
              </HotelDetailsTexts>
              <HotelDetailsPrice>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography>Fairings</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      Reused: {String(data.fairings.reused)}
                      <br />
                      Recovered: {JSON.stringify(data.fairings.recovered)}
                      <br />
                      Recovery Attempt: {String(data.fairings.recovery_attempt)}
                    </Typography>
                  </AccordionDetails>
                </Accordion>

                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                  >
                    <Typography>Failures</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>failures: {data.failures.reason}</Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                  >
                    <Typography>Links</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      Article:{" "}
                      <Link to={data.links.article}>{data.links.article}</Link>
                    </Typography>
                    <Typography>
                      <Link to={data.links.patch.small}>
                        Patch: {data.links.patch.small}
                      </Link>
                    </Typography>
                    <Typography>
                      <Link to={data.links.webcast}>
                        Webcast: {data.links.webcastl}
                      </Link>
                    </Typography>
                    <Typography>
                      <Link to={data.links.Wikipedia}>
                        Wikipedia: {data.links.Wikipedia}
                      </Link>
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3a-content"
                    id="panel3a-header"
                  >
                    <Typography>Disabled Accordion</Typography>
                  </AccordionSummary>
                </Accordion>

                <button>Reserve or Fly Now!</button>
              </HotelDetailsPrice>
            </HotelDetails>
          </HotelWrapper>
          <Footer />
        </Container>
      )}
    </>
  );
};
export default Details;
