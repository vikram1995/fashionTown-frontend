import React from "react";
import Search from "../search/search";
import { Layout, Menu, Button, Input, Typography, Space, Row, Col } from "antd";
import { HeartOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import {
  NavBar,
  NavBarItems,
  NavBarGroup,
  NavText,
  Logo,
  SearchInput,
  NavBarActionGroup,
  NavBarActionItems,
  NavBarSpace,
} from "./styledComponent";
import Wishlist from "../wishlist/wishlist";
import Cart from "../cart/cart";
import Auth from "../auth/auth";
const { Title, Text } = Typography;
const { Header, Content, Footer } = Layout;

function header() {
  return (
    <NavBar>
      {/* <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col className="gutter-row" span={2}>
          <Logo level={3}>Fashion Town</Logo>
        </Col>
        <Col className="gutter-row" span={4}>
          <NavBarGroup>
            <NavBarItems>
              <NavText>MEN</NavText>
            </NavBarItems>
            <NavBarItems>
              <NavText>WOMEN</NavText>
            </NavBarItems>
            <NavBarItems>
              <NavText>ACCESSORIES</NavText>
            </NavBarItems>
          </NavBarGroup>
        </Col>
        <Col className="gutter-row" span={4}></Col>
        {/* <NavBarSpace></NavBarSpace> 
        <Col className="gutter-row" span={4}>
          <NavBarGroup>
            <NavBarItems>
              <Search />
            </NavBarItems>
          </NavBarGroup>
        </Col>
        <Col>
          <NavBarActionGroup>
            <NavBarActionItems>
              <Auth />
            </NavBarActionItems>
            <NavBarActionItems>
              <Wishlist />
            </NavBarActionItems>
            <NavBarActionItems>
              <Cart />
            </NavBarActionItems>
          </NavBarActionGroup>
        </Col>
      </Row> */}

      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col className="gutter-row" span={3}>
          <Logo level={3}>Fashion Town</Logo>
        </Col>
        
        <Col className="gutter-row" span={5} >
          <NavBarGroup>
            <Space size={'large'}>
              <NavBarItems>
                <NavText>MEN</NavText>
              </NavBarItems>
              <NavBarItems>
                <NavText>WOMEN</NavText>
              </NavBarItems>
              <NavBarItems>
                <NavText>ACCESSORIES</NavText>
              </NavBarItems>
            </Space>
          </NavBarGroup>
        </Col>
    
        <Col className="gutter-row" span={5}></Col>
        <Col className="gutter-row" span={8}>
          <NavBarItems>
            <Search />
          </NavBarItems>
        </Col>
        {/* <Col className="gutter-row" span={1}></Col> */}
        <Col className="gutter-row" span={3}>
        <NavBarActionGroup>
          <Space size={"large"}>
            <NavBarActionItems>
              <Auth />
            </NavBarActionItems>
            <NavBarActionItems style={{marginTop:"-12px"}}>
              <Wishlist />
            </NavBarActionItems>
            <NavBarActionItems style={{marginTop:"-12px"}}>
              <Cart />
            </NavBarActionItems>
            </Space>
          </NavBarActionGroup>
        </Col>
      </Row>
    </NavBar>
  );
}

export default header;
