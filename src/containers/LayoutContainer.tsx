import { connect } from "react-redux";
import * as React from "react";
import Layout from "../components/Layout";

function LayoutContainer(props: any) {
  return <Layout {...props} />;
}

const mapStateToProps = (state: any) => {
  return {
    authorized: { ...state.auth }
  };
};
const mapDispatchToProps = (dispatch: any) => {
  return {
    login: (result: any) => dispatch({ type: "LOGIN", result })
  };
};

const connector = connect(mapStateToProps, mapDispatchToProps);

export default connector(LayoutContainer);
