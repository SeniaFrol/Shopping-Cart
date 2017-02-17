import React, {Component} from 'react';

export default class GoodsItem extends Component {

  onInputChange(id, name, src, price) {
    this.props.addToCart(id, name, src, price);
  }
  render() {
     const {id, name, description, price, brand, src, features} = this.props.gooditem;
    return(
      <div className="large-6 column">
        <div className="item_goods cf">

          <div>
            <p className="gd_name">{name}</p>
            <p className="gd_price">{price}$</p>
          </div>

          <p className="gd_desc cf">{description}</p>
          <div className="gd_photo cf" ><img src={src}></img></div>
          <div className="gd_features">{features}</div>

            <button className="button hollow add_btn"  onClick={() => this.onInputChange(id, name, src, price)}>Add to cart</button>
        </div>
      </div>
    );
  }
}
