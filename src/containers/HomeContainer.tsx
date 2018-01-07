import { connect } from "react-redux";
import * as React from "react";
import Home from "../components/Home";

function HomeContainer(props: any) {
  return <Home {...props} />;
}

const mapStateToProps = (state: any) => {
  return {};
};
const mapDispatchToProps = (dispatch: any) => {
  return {};
};

const connector = connect(mapStateToProps, mapDispatchToProps);

export default connector(HomeContainer);
