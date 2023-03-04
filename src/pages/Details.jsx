import styled from "styled-components";

import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import CloseIcon from "@mui/icons-material/Close";
import spaceman from "../assets/images/spaceman.png";

import { useContext, useState } from "react";
// import useFetch from "../hooks/useFetch";
import { useLocation, useNavigate } from "react-router-dom";
import { SearchContext } from "../context/SearchContext";
import Footer from "../components/Footer";

const HotelContainer = styled.div`
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
const HotelImages = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
const HotelImgWrapper = styled.div`
  width: 33%;

  img {
    width: 100%;
    object-fit: cover;
  }
`;
const HotelDetails = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  margin-top: 20px;
`;

const HotelDetailsTexts = styled.div`
  flex: 3;
`;
const HotelDetailsPrice = styled.div`
  flex: 1;
  background-color: #ebf3ff;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;

  h1 {
    font-size: 18px;
    color: #555;
  }

  h2 {
    font-weight: 300;
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

function Hotel() {
  const location = useLocation();
  const id = location.pathname.split("/")[2];

  const [sliderIndex, setSliderIndex] = useState(0);
  const [openSliderIndex, setOpenSliderIndex] = useState(false);

  const navigate = useNavigate();

  const handleOpen = (imgindex) => {
    setSliderIndex(imgindex);
    setOpenSliderIndex(true);
  };

  const handleSlider = (direction) => {
    let newSlideIndex;

    if (direction === "leftSlide") {
      newSlideIndex = sliderIndex === 0 ? 8 : sliderIndex - 1;
    } else {
      newSlideIndex = sliderIndex === 8 ? 0 : sliderIndex + 1;
    }

    setSliderIndex(newSlideIndex);
  };

  const photos = [
    {
      src: "https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/124542521.jpg?k=f08d9f36a994f98ef8e2361c53d069c30f96dd448c05393d62ab3df116e7aef2&o=&hp=1",
    },

    {
      src: "https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/303550971.jpg?k=8066624b39d46370e7d23a08e80edc124a4500da3e1cefe6d0107954ea447791&o=&hp=1",
    },
    {
      src: "https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/303551162.jpg?k=66d08247265f46a5dfbe1c52c8fbd380c77095827c5b97427dd40e6db1bfd75a&o=&hp=1",
    },
    {
      src: "https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/303551021.jpg?k=0cdfe34a3a7966d4c2056ab1d81ef89abe2ed7ca6785a464828f0760d86f888b&o=&hp=1",
    },
    {
      src: "https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/303551965.jpg?k=568a783dd70ac06d0aa6a00100a9bb27af63d4873848aa6c1c36c60f199a73ef&o=&hp=1",
    },
    {
      src: "https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/124542582.jpg?k=dd5e8ee9654ae4e09ad138c21a363ee363aa787979f35f9dae6de2bdaabc316b&o=&hp=1",
    },
    {
      src: "https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/272858248.jpg?k=d15e23ec4ea700afa92fc9c73dfbc65dd8b7b7358af414b7e200858e3612d152&o=&hp=1",
    },
    {
      src: "https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/287696852.jpg?k=1ab4ecffc8b23b2456d0598a1bb744f6fea4082e3f7fdf4b7562b169e0ca0df4&o=&hp=1",
    },
    {
      src: "https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/287808131.jpg?k=f9698ed1b64679fd173fc994051f5d01c49b8d4e7f442ce7427209c6da318e59&o=&hp=1",
    },
  ];

  return (
    <>
      <HotelContainer>
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
          <Button1>Reserve or Book Now!</Button1>
          <HotelTitle>Rocket Title</HotelTitle>
          <HotelAddress>
            <RocketLaunchIcon />
            <span>Rocket Address</span>
          </HotelAddress>
          <HotelDistance>Excellent location - 500m from center</HotelDistance>
          <HotelPriceHighlight>
            Book a stay over 50 at this property and get a free airport taxi
          </HotelPriceHighlight>
          <HotelImages>
            {photos.map((photo, i) => (
              <HotelImgWrapper key={i}>
                <img onClick={() => handleOpen(i)} src={photo.src} alt="" />
              </HotelImgWrapper>
            ))}
          </HotelImages>
          <HotelDetails>
            <HotelDetailsTexts>
              <h1>Rocket Ship</h1>
              <p>Testing</p>
            </HotelDetailsTexts>
            <HotelDetailsPrice>
              <h1>Perfect for a 10-night stay!</h1>
              <span>
                Located off Interstate 270, this hotel in Dublin, Ohio is 15
                miles from central Columbus. Facilities include an
                indoor-outdoor swimming pool and free WiFi access.
              </span>
              <h2>
                <b>$10</b> (20 nights)
              </h2>
              <button>Reserve or Book Now!</button>
            </HotelDetailsPrice>
          </HotelDetails>
        </HotelWrapper>
        <Footer />
      </HotelContainer>
    </>
  );
}
export default Hotel;
