import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { connect } from "react-redux";
import { PRODUCT_BY_ID_FILTER_QUERY } from "../../graphQlQueries/filterQuery";

import ProductImages from "./productImages";
import ProductDescription from "./productDescription";

import { Row, Col } from "antd";
import { ProductDetailsWrapper } from "./productDetailsStyledComponent";

function ProductDetailsPage(props) {
  const { id } = useParams();

  const { error, loading, data } = useQuery(PRODUCT_BY_ID_FILTER_QUERY, {
    variables: { productId: id },
  });

  if (loading) {
    console.log("loading ..");
  }
  if (error) {
    console.log(error);
  }
  if (data) {
    console.log(data);
    const productDetails = data.productByFilters[0];

    return (
      <ProductDetailsWrapper>
        <Row>
          <ProductImages productDetails={productDetails} />
          <Col xs={24} sm={24} md={12} lg={12}>
            <ProductDescription productDetails={productDetails} />
          </Col>
        </Row>
      </ProductDetailsWrapper>
    );
  }
  return <div></div>;
}
function mapStateToProps(state) {
  return { isCartUpdated: state.Cart.isCartUpdated };
}
export default connect(mapStateToProps)(ProductDetailsPage);
