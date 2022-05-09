import React, { Component } from "react";
import CartList from "./CartList";
import { dataPhones } from "./dataPhones";
import ItemDetail from "./ItemDetail";
import ModalCart from "./ModalCart";

export default class Cart extends Component {
  state = {
    dataPhones: dataPhones,
    itemDetail: dataPhones[0],
    shoppingCart: [],
  };

  handleViewItemDetail = (item) => {
    this.setState({ itemDetail: item });
  };

  handleAddItem = (item) => {
    let shoppingCartCopy = [...this.state.shoppingCart];

    let index = this.state.shoppingCart.findIndex((i) => {
      return item.maSP === i.maSP;
    });

    if (index === -1) {
      shoppingCartCopy.push({ ...item, quantity: 1 });
    } else {
      shoppingCartCopy[index].quantity++;
    }

    this.setState({
      shoppingCart: shoppingCartCopy,
    });
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
        <ModalCart
          shoppingCart={this.state.shoppingCart}
          handleChangeQuantity={this.handleChangeQuantity}
        ></ModalCart>
        <CartList
          dataPhones={this.state.dataPhones}
          handleViewItemDetail={this.handleViewItemDetail}
          handleAddItem={this.handleAddItem}
        ></CartList>
        <ItemDetail dataItem={this.state.itemDetail}></ItemDetail>
      </div>
    );
  }
}
