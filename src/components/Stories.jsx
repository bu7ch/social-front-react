import React from "react";
import Story from "./Story";
import styled from "styled-components";
import billy from "../assets/billy.avif";
import js from "../assets/jb.avif";
import forest from "../assets/forest.jpg";
import miles from "../assets/miles.jpg";
function Stories() {
  return (
    <StoriesWrapper>
      <Story image={forest} profileSrc={billy} title="billy" />
      <Story image={miles} profileSrc={js} title="Jean-Sebastien" />
    </StoriesWrapper>
  );
}
const StoriesWrapper = styled.div`
  display: flex;
`;
export default Stories;
