import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { ORDER_DETAILS_MUTATION } from "../../graphQlQueries/orderDetails";

import { Row, Col, Spin, Card } from "antd";
import {
  CheckoutPageWrapper,
  SamplePaymentInfo,
} from "./checkoutStyledComponent";

import CartList from "../cart/cartList";
import OrderSummary from "./orderSummary";
import CheckOutSteps from "./checkOutSteps";
import AddressDisplay from "../address/addressDisplay";
import AddressForm from "../address/addressForm";
import PaymentResult from "../payment/paymentResult";
import config from "../../config/config";
import { setCart, setStatus } from "../../redux/actions/cartActions";
import { LoadingIcon } from "components/loadingAnimations/loadingAnimationsStyledComponent";
import links from "config/routeLinks";
import openNotification from "components/notification/messageNotification";

function CheckOutPage({
  cart,
  address,
  status,
  order,
  storeAuth,
  setStatus,
  userName,
  setCart,
}) {
  const deliveryCharge = config.deliveryCharge;
  const navigate = useNavigate();

  const calculateTotalMRP = () => {
    let totalMRP = 0;
    cart.forEach((product) => {
      const productTotalPrice = product.price * product.qty;
      totalMRP += productTotalPrice;
    });
    console.log(totalMRP + deliveryCharge);
    return parseInt(totalMRP + deliveryCharge);
  };

  const { id, orderItems, paymentDetails, paymentLoader } = order;

  const [createNewOrder] = useMutation(ORDER_DETAILS_MUTATION, {
    variables: {
      id: id,
      orderByEmailId: storeAuth.email,
      address: JSON.stringify(address),
      items: orderItems,
      totalPrice: calculateTotalMRP(),
      paymentDetails: JSON.stringify(paymentDetails),
    },
  });

  useEffect(() => {
    if (status === "paymentSuccessful") {
      setStatus("orderPlaced");
      createNewOrder();
      setCart([]);
    }
  }, [status, setStatus, createNewOrder, setCart]);

  useEffect(() => {
    if (cart.length === 0 && status === "bag") {
      openNotification("All items are removed from cart");
      navigate(links.home);
    }
  }, [cart, status, navigate]);

  const antIcon = <LoadingIcon spin />;
  console.log(paymentLoader);
  return (
    <>
      <Spin indicator={antIcon} spinning={paymentLoader}>
        <CheckoutPageWrapper>
          <Row>
            <Col xs={0} sm={4} md={4} lg={4}></Col>
            <Col xs={24} sm={8} md={8} lg={16}>
              <>
                {(status === "bag" ||
                  status === "address" ||
                  status === "payment") && (
                  <>
                    <Row>
                      <CheckOutSteps />
                    </Row>
                    <Row>
                      <Col xs={24} sm={24} md={12} lg={12}>
                        {status === "bag" && <CartList />}
                        {status === "address" && <AddressForm />}
                        {status === "payment" && <AddressDisplay />}
                      </Col>

                      <Col xs={24} sm={24} md={12} lg={12}>
                        <OrderSummary calculateTotalMRP={calculateTotalMRP} />
                      </Col>
                    </Row>
                    <Row>
                      <Col xs={24} sm={8} md={8} lg={12}></Col>
                      <Col lg={12}>
                        {userName === "Guest User" && status === "payment" && (
                          <Card title="Test payment details">
                            <SamplePaymentInfo>
                              <p>Card Number: 5267 3181 8797 5449</p>
                              <p>CVV: 123</p>
                              <p>Exp date : 10/2030</p>

                              <br />
                              <p>
                                UPI ID: <code>success@razorpay</code>
                              </p>
                              <p>
                                <strong>Note: </strong>Only visible to Guest
                                user
                              </p>
                            </SamplePaymentInfo>
                          </Card>
                        )}
                      </Col>
                    </Row>
                  </>
                )}
                {status === "orderPlaced" && (
                  <Row>
                    <Col xs={24} sm={24} md={24} lg={24}>
                      <PaymentResult />
                    </Col>
                  </Row>
                )}
              </>
            </Col>
            <Col xs={0} sm={4} md={4} lg={4}></Col>
          </Row>
        </CheckoutPageWrapper>
      </Spin>
    </>
  );
}
const mapStateToProps = ({ Cart, Auth, Order }) => {
  return {
    cart: Cart.cart,
    address: Cart.address,
    status: Cart.status,
    storeAuth: Auth.storeAuth,
    order: Order,
    userName: Auth.userName,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setStatus: (status) => {
      dispatch(setStatus(status));
    },
    setCart: (cart) => {
      dispatch(setCart(cart));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CheckOutPage);
