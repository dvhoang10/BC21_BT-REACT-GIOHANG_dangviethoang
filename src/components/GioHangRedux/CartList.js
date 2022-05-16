import React, { Component } from "react";
import { connect } from "react-redux";
import CartItem from "./CartItem";

class CartList extends Component {
  renderPhonesList = () => {
    return this.props.dataPhones?.map((item) => {
      return <CartItem key={item.maSP} dataItem={item}></CartItem>;
    });
  };

  render() {
    return <div className="row">{this.renderPhonesList()}</div>;
  }
}

const mapStateToProps = (state) => {
  return {
    dataPhones: state.item.dataPhones,
  };
};

export default connect(mapStateToProps)(CartList);
