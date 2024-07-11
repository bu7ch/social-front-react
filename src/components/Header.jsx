import React from "react";
import styled from "styled-components";
import faker from "../assets/faker.svg";
import avatar from "../assets/avatar.png";
import {
  Add,
  ExpandMore,
  Flag,
  Forum,
  Home,
  Notifications,
  Search,
  StorefrontOutlined,
  SubscriptionsOutlined,
  SupervisedUserCircle,
} from "@mui/icons-material";
import { Avatar, IconButton } from "@mui/material";

function Header() {
  return (
    <HeaderWrapper>
      <HeaderLeft>
        <img src={faker} alt="Popular" />
      </HeaderLeft>
      <HeaderInput>
        <Search />
        <input type="text" placeholder="Recherche" />
      </HeaderInput>
      <HeaderCenter>
        <div className="header__option header__option--active">
          <Home fontsize="large" />
        </div>
        <div className="header__option">
          <Flag fontsize="large" />
        </div>
        <div className="header__option">
          <SubscriptionsOutlined fontsize="large" />
        </div>
        <div className="header__option">
          <StorefrontOutlined fontsize="large" />
        </div>
        <div className="header__option">
          <SupervisedUserCircle fontsize="large" />
        </div>
      </HeaderCenter>
      <HeaderRight>
        <div className="header__info">
          <Avatar src={avatar} />
        </div>
        <IconButton>
          <Add />
        </IconButton>
        <IconButton>
          <Forum />
        </IconButton>
        <IconButton>
          <Notifications />
        </IconButton>
        <IconButton>
          <ExpandMore />
        </IconButton>
      </HeaderRight>
    </HeaderWrapper>
  );
}
const HeaderWrapper = styled.div`
  display: flex;
  padding: 15px 20px;
  justify-content: space-between;
  align-items: center;
  position: sticky;
`;
const HeaderLeft = styled.div`
  display: flex;
  justify-content: space-evenly;
  img {
    height: 40px;
  }
`;
const HeaderInput = styled.div`
  display: flex;
  align-items: center;
  background-color: #eff2f5;
  padding: 10px;
  margin-left: 10px;
  border-radius: 33px;
  input {
    border: none;
    background-color: transparent;
    outline-width: 0;
  }
`;
const HeaderCenter = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  .header__option {
    display: flex;
    align-items: center;
    padding: 10px 30px;
    cursor: pointer;
    .MuiSvgIcon-root {
      color: red;
    }
    &:hover {
      background-color: #eff2f5;
      border-radius: 10px;
      align-items: center;
      padding: 0 30px;
      border-bottom: none;
      .MuiSvgIcon-root {
        color: #2e81f4;
      }
    }
  }
  .header__option--active {
    border-bottom: 4px solid #2e81f4;
    .MuiSvgIcon-root {
      color: #2e81f4;
    }
  }
`;

const HeaderRight = styled.div`
  display: flex;
  .header__info {
    display: flex;
    align-items: center;
    h4 {
      margin-left: 10px;
    }
  }
`;
export default Header;
