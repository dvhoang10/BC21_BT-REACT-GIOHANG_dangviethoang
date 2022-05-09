import React, { Component } from "react";
import CartItem from "./CartItem";

export default class CartList extends Component {
  renderPhonesList = () => {
    return this.props.dataPhones?.map((item) => {
      return (
        <CartItem
          key={item.maSP}
          dataItem={item}
          handleViewItemDetail={this.props.handleViewItemDetail}
          handleAddItem={this.props.handleAddItem}
        ></CartItem>
      );
    });
  };

  render() {
    return <div className="row">{this.renderPhonesList()}</div>;
  }
}
