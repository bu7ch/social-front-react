import { Avatar } from "@mui/material";
import React from "react";
import styled from "styled-components";
function Story({ image, profileSrc, title }) {
  return (
    <StoryWrapper imageUrl={`${image}`}>
      <Avatar src={profileSrc} className="story__avatar" />
      <h4>{title}</h4>
    </StoryWrapper>
  );
}
const StoryWrapper = styled.div`
  background-image: url(${(props) => (props.imageUrl ? props.imageUrl : "")});
  position: realtive;
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 120px;
  height: 200px;
  box-shadow: 0px 5px 17px -7px rbga(0, 0, 0, 0.75);
  border-radius: 10px;
  margin-right: 10px;
  cursor: pointer;
  transition: transform 100ms ease-in;
  &:hover {
    transform: scale(1.07);
  }
  .story__avatar {
    margin: 10px;
    border: 5px solid #2e81f4;
  }
  h4 {
    position: absolute;
    bottom: 20px;
    left: 20px;
    color: white;
  }
`;
export default Story;
