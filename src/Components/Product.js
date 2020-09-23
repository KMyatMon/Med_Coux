import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { ShoppingCart } from "@material-ui/icons";
import { ProductConsumer } from "../context";
import PropTypes from "prop-types";
export default class Product extends Component {
  render() {
    const { id, title, img, price, inCart } = this.props.product;
    return (
      <ProductWrapper className="col col-md-4 col-lg-3 my-3">
        <div className="card">
          <ProductConsumer>
            {(value) => (
              <div
                className="img-container p-4"
                onClick={() => value.handleDetail(id)}
              >
                <Link to="/details">
                  <img src={img} alt="product" className="card-img-top" />
                </Link>
                <div className="d">
                  {title}
                  <br />
                  MMK : {price}
                </div>
                <br />

                <button
                  className="btn"
                  disabled={inCart ? true : false}
                  onClick={() => {
                    value.addToCart(id);
                    value.openModal(id);
                  }}
                >
                  {inCart ? (
                    <p className="text-capitalize" disabled>
                      {" "}
                      in cart
                    </p>
                  ) : (
                    <p>
                      Add To Cart{" "}
                      <ShoppingCart
                        style={{ color: "black", alignItems: "center" }}
                      />
                    </p>
                  )}
                </button>
              </div>
            )}
          </ProductConsumer>
        </div>
      </ProductWrapper>
    );
  }
}

Product.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    img: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
    inCart: PropTypes.bool,
  }).isRequired,
};

const ProductWrapper = styled.div`
  .card {
    border-color: transparent;
    transition: all 1s linear;
    border: 0;
  }
  .card-footer {
    background: transparent;
    border-top: transparent;
    transition: all 1s linear;
  }
  &:hover {
    box-shadow: 0 60px -20px rgba(12, 5, 62, 0.15);
    z-index: 100;

    .card {
      border: 0.04rem solid rgba(0, 0, 0, 0.2);
      box-shadow: 0 10px 20px rgba(0,0,0,.12), 0 4px 8px rgba(0,0,0,.06);
    }
  }
  .card-img-top {
    transition: all 1s linear;
  }
  .img-container:hover .card-img-top {
    transform: scale(1.3);
  }
  .btn {
    position: absolute;
    bottom: 0;
    right: 30px;
    
    padding: 3px;
    height: 18%;
    border: none;
    cursor: pointer;
    width: 20%;
  }
  .footer {
    position: absolute;
    bottom: 0;
    left: 30px;
    
    padding: 3px;
    height: 20%;
    border: none;
  }
`;
