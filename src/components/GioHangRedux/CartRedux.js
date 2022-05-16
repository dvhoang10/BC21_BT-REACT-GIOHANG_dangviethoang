import React, { Component } from "react";
import CartList from "./CartList";
import { dataPhones } from "./dataPhones";
import ItemDetail from "./ItemDetail";
import ModalCart from "./ModalCart";

export default class CartRedux extends Component {
  state = {
    dataPhones: dataPhones,
    itemDetail: dataPhones[0],
    shoppingCart: [],
  };

  handleChangeQuantity = (id, value) => {
    let index = this.state.shoppingCart.findIndex((item) => {
      return item.maSP === id;
    });

    let shoppingCartCopy = [...this.state.shoppingCart];
    if (index !== -1) {
      shoppingCartCopy[index].quantity =
        shoppingCartCopy[index].quantity + value;

      shoppingCartCopy[index].quantity === 0 &&
        shoppingCartCopy.splice(index, 1);
    }

    this.setState({
      shoppingCart: shoppingCartCopy,
    });
  };

  render() {
    return (
      <div className="container">
        <ModalCart></ModalCart>
        <CartList dataPhones={this.state.dataPhones}></CartList>
        <ItemDetail></ItemDetail>
      </div>
    );
  }
}
