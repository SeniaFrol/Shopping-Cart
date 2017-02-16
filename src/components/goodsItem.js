import React, {Component} from 'react';

export default class GoodsItem extends Component {

  onInputChange(id, name, src, price) {
    this.props.addToCart(id, name, src, price);
  }
  render() {
     const {id, name, description, price, brand, src, features} = this.props.gooditem;
    return(
      <div className="medium-6 column">
        <div className="callout">
          <p>{name}</p>
          <p>{description}</p>
          <p>{price}$</p>
          <img src={src}></img>
          <p>{features}</p>
          <button className="button hollow"  onClick={() => this.onInputChange(id, name, src, price)}>Add to cart</button>
        </div>
      </div>
    );
  }
}
