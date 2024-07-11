import React from "react";
import styled from "styled-components";
import Stories from "./Stories";
import Messenger from "./Messenger";
function Feed() {
  return (
    <FeedWrapper>
      <Stories />
      <Messenger />
    </FeedWrapper>
  );
}

const FeedWrapper = styled.div`
  flex: 1;
  padding: 30px 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export default Feed;
