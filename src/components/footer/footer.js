import React, { useState } from "react";
import { Row, Col, Space, Input,Drawer } from "antd";

import {
  FooterContainer,
  QuickLinksText,
  HorizontalLine,
  SocialMediaHandleWrapper,
  SubscribeButton,
  InstaGramIcon,
  FacebookIcon,
  TwitterIcon,
  SocialMediaHandleCol,
  BottomFilterBox,
} from "./footerStyledComponent";
import Text from "antd/lib/typography/Text";
import { FilterOutlined } from "@ant-design/icons";
import Filter from "../productListing/filter";

function Footer() {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };
  return (
    <>
      <Col xs={0} sm={24} md={24} lg={24} xl={24}>
        <FooterContainer>
          <Row>
            <Col xs={0} sm={0} md={6} lg={6} align="center">
              <Space direction="vertical" size={"large"} align="start">
                <QuickLinksText>MEN</QuickLinksText>
                <QuickLinksText>WOMEN</QuickLinksText>
                <QuickLinksText>ACCESSORIES</QuickLinksText>
                <QuickLinksText>ADMIN</QuickLinksText>
              </Space>
            </Col>
            <Col xs={24} sm={24} md={12} lg={12} align="center">
              <Space direction="vertical" size={"large"}>
                <QuickLinksText>
                  Receive exclusive promotions, private sales and news
                </QuickLinksText>
                <QuickLinksText>
                  <Input placeholder="Enter your e-mail" bordered={false} />
                  <HorizontalLine />
                </QuickLinksText>
                <QuickLinksText>
                  <SubscribeButton size={"large"} shape="round">
                    Subscribe
                  </SubscribeButton>
                </QuickLinksText>
              </Space>
            </Col>
            <SocialMediaHandleCol xs={24} sm={24} md={6} lg={6}>
              <SocialMediaHandleWrapper>
                <Space size={"large"} align="center">
                  <InstaGramIcon />
                  <FacebookIcon />
                  <TwitterIcon />
                </Space>
              </SocialMediaHandleWrapper>
            </SocialMediaHandleCol>
          </Row>
        </FooterContainer>
      </Col>
      <Col xs={24} sm={0} md={0} lg={0} xl={0}>
        <BottomFilterBox onClick={showDrawer}>
          <Space>
            <FilterOutlined />
            <Text>FILTERS</Text>
          </Space>
        </BottomFilterBox>
      </Col>
      <Drawer
        title="FILTERS"
        placement="bottom"
        onClose={onClose}
        visible={visible}
        height={'100%'}
      >
        <Filter />
      </Drawer>
    </>
  );
}

export default Footer;
