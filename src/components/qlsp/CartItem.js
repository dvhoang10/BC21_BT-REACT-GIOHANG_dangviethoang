import React, { Component } from "react";

export default class CartItem extends Component {
  render() {
    let { hinhAnh, tenSP, giaBan } = this.props.dataItem;
    return (
      <div className="card col-4">
        <img
          style={{
            width: "100%",
            height: "200px",
            objectFit: "contain",
            paddingTop: "15px",
          }}
          src={hinhAnh}
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{tenSP}</h5>
          <p
            style={{ color: "#d0021c" }}
            className="card-text font-weight-bold"
          >
            {giaBan} VND
          </p>
          <div>
            <button
              className="btn btn-primary"
              onClick={() => {
                this.props.handleViewItemDetail(this.props.dataItem);
              }}
            >
              Xem chi tiết
            </button>
            <button
              className="btn btn-success mx-2"
              onClick={() => {
                this.props.handleAddItem(this.props.dataItem);
              }}
            >
              Thêm vào giỏ hàng
            </button>
          </div>
        </div>
      </div>
    );
  }
}
