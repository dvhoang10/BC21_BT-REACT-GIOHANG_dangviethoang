import React, { Component } from "react";
import { connect } from "react-redux";
import { CHANGE_QUANTITY } from "./redux_baiTapGioHang/constants/product";

const increase = 1;
const decrease = -1;

class ModalCart extends Component {
  renderShoppingCart = () => {
    return this.props.shoppingCart.map((item) => {
      return (
        <tr>
          <td>{item.maSP}</td>
          <td>{item.tenSP}</td>
          <td>
            <img style={{ width: "100px" }} src={item.hinhAnh} alt="" />
          </td>
          <td>{item.giaBan}</td>
          <td>
            <button
              onClick={() => {
                this.props.handleChangeQuantity(item.maSP, decrease);
              }}
              className="btn btn-danger mx-2 "
            >
              -
            </button>
            {item.quantity}
            <button
              onClick={() => {
                this.props.handleChangeQuantity(item.maSP, increase);
              }}
              className="btn btn-success mx-2 "
            >
              +
            </button>
          </td>
          <td>{item.quantity * item.giaBan}</td>
        </tr>
      );
    });
  };

  getQuantity = () => {
    return this.props.shoppingCart.reduce((sum, item) => {
      return (sum += item.quantity);
    }, 0);
  };

  render() {
    return (
      <div className="mb-5 d-flex justify-content-end my-5 ">
        {/* Button trigger modal */}
        <button
          type="button"
          className="btn btn-primary"
          data-toggle="modal"
          data-target="#exampleModal"
        >
          Giỏ hàng
          <iteman className="font-weight-bold"> ({this.getQuantity()})</iteman>
        </button>
        {/* Modal */}
        <div
          className="modal fade"
          id="exampleModal"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div
            style={{ maxWidth: "50vw" }}
            className="modal-dialog d-flex align-items-center"
            role="document"
          >
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Giỏ hàng
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <iteman aria-hidden="true">×</iteman>
                </button>
              </div>
              <div className="modal-body">
                <table className="table">
                  <thead>
                    <th>Mã sản phẩm</th>
                    <th>Tên sản phẩm</th>
                    <th>Hình ảnh</th>
                    <th>Giá</th>
                    <th>Số lượng</th>
                    <th>Tổng tiền</th>
                  </thead>
                  <tbody>{this.renderShoppingCart()}</tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    shoppingCart: state.item.shoppingCart,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleChangeQuantity: (id, value) => {
      dispatch({
        type: CHANGE_QUANTITY,
        payload: {
          id,
          value,
        },
      });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalCart);
