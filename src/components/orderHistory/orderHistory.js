import React from "react";
import { connect } from "react-redux";
import { useQuery } from "@apollo/client";

import { ORDER_HISTORY_QUERY } from "../../graphQlQueries/orderHistory";

import OrderHistoryLoading from "../loadingAnimations/orderHistoryLoading";
import ServerError from "../result/serverError";
import OrderHistoryList from "./orderHistoryList";

function OrderHistory({ storeAuth }) {
  const { email } = storeAuth;
  const { error, loading, data } = useQuery(ORDER_HISTORY_QUERY, {
    variables: { orderByEmailId: email },
  });

  return (
    <>
      {loading && <OrderHistoryLoading />}
      {error && <ServerError />}
      {data && <OrderHistoryList orderHistory={data.getOrderHistory} />}
    </>
  );
}
const mapStateToProps = (state) => {
  return { storeAuth: state.Auth.storeAuth };
};

export default connect(mapStateToProps)(OrderHistory);
