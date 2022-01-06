import styled from "styled-components";
import HeroBannerImage from "../../assets/images/hero-banner.jpg";
const HeroBanner = styled.section`
  height: 80vh;
  width: 100%;
  background-image: url(${HeroBannerImage}),linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5));
  background-position: center;
  position: relative;
  background-size: cover;
`;

const HeroText = styled.div`
  position: absolute;
  top: 20%;
  left: 8%;
  font-size: 3.5em;
  color: white;
`;

const ActionButtonContainer = styled.div`
  position: absolute;
  top: 70%;
  left: 8%;
`;

export { HeroBanner, HeroText, ActionButtonContainer };
