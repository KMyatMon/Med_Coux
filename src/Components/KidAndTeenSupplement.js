import React, { Component } from "react";
import Product from "./Product";
import Title from "./Title";
import { ProductConsumer } from "../context";
import Slider from "./Fragment/slider";
export default class Productlist extends Component {
  render() {
    return (
      <React.Fragment>
        <Slider />
        <div className="py-4">
          <div className="container">
            <Title name="Kid And Teen " title=" Supplement " />
            <div className="row">
              <ProductConsumer>
                {(value) => {
                  return value.products.map((product) => {
                    return product.id > 7 && product.id <= 12 ? (
                      <Product key={product.id} product={product} />
                    ) : (
                      <i />
                    );
                  });
                }}
              </ProductConsumer>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
