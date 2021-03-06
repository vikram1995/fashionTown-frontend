import styled from "styled-components";
import { Button as AntButton, Button, Col } from "antd";
import Text from "antd/lib/typography/Text";
const ProductDetailsWrapper = styled.div`
  min-height: 90vh;
  width: 100%;
  padding: 20px;
`;
const ProductSubText = styled.p`
  font-weight: 300;
  font-size: 1em;
`;

const ProductDescriptionWrapper = styled.div`
  padding: 40px;
  padding-right: 25%;
`;
const TaxText = styled.p`
  color: green;
  font-size: 0.9em;
`;

const HorizontalLine = styled.div`
  border: 1px solid #e8e8e8;
  width: 100%;
  height: 0px;
  margin-top: 3%;
`;

const ActionButtonWrapper = styled.div`
  margin-top: 3%;
`;
const SizeButton = styled(AntButton)`
  height: 60px;
  width: 60px;
  border-color: ${(props) => (props.selected === props.size ? "orange" : "")};
  color: ${(props) => (props.selected === props.size ? "orange" : "")};
`;

const ProductTitle = styled(Text)`
  font-size: 1.3em;
`;
const AddToCartButton = styled(Button)`
  background: #ff7f3f;
  border-radius: 5px;
  color: white;
  height: 60px;
`;
const ProductImageCol = styled(Col)`
  padding: 2;
`;
export {
  ProductDetailsWrapper,
  ProductDescriptionWrapper,
  TaxText,
  HorizontalLine,
  ActionButtonWrapper,
  ProductSubText,
  SizeButton,
  ProductTitle,
  AddToCartButton,
  ProductImageCol,
};
