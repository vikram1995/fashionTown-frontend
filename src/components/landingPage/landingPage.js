import React, { Component } from "react";
import { Button ,Space} from "antd";
import { HeroBanner, HeroText, ActionButtonContainer } from "./styledComponent";
export class landingPage extends Component {
  render() {
    return (
      <div>
        <HeroBanner>
          <HeroText>
            ITS TIME TO STAND
            <br /> OUT FROM THE <br />
            CROWED
          </HeroText>
          <ActionButtonContainer>
              <Space size={"large"}>
            <Button size={"large"} shape="round">BUY NOW</Button>
            <Button size={"large"} shape="round">SELL NOW</Button>
            </Space>
          </ActionButtonContainer>
        </HeroBanner>
      </div>
    );
  }
}

export default landingPage;
