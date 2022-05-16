import React, { Component } from "react";
import { connect } from "react-redux";

class ItemDetail extends Component {
  render() {
    let { hinhAnh, tenSP, manHinh, heDieuHanh, giaBan } = this.props.itemDetail;
    return (
      <div>
        <h2 style={{ paddingTop: "20px" }}>Chi tiết sản phẩm</h2>
        <div className="row">
          <img
            style={{
              width: "100%",
              height: "500px",
              objectFit: "contain",
              paddingTop: "15px",
            }}
            src={hinhAnh}
            alt=""
            className="col-5"
          />
          <div className="col-7 pt-5">
            <h3>{tenSP}</h3>
            <div className="table">
              <tr>
                <td>Màn hình</td>
                <td>{manHinh}</td>
              </tr>
              <tr>
                <td>Hệ điều hành</td>
                <td>{heDieuHanh}</td>
              </tr>
              <tr>
                <td>Giá bán</td>
                <td className="font-weight-bold">{giaBan} VND</td>
              </tr>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    itemDetail: state.item.itemDetail,
  };
};

export default connect(mapStateToProps)(ItemDetail);
