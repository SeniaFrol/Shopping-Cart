import React from 'react';

const GoodsItem = (props) => {
  const {id, name, description, price, src, features} = props.gooditem;
  return (
    <div className="large-6 column">
      <div className="item_goods cf">

        <div>
          <p className="gd_name">{name}</p>
          <p className="gd_price">{price}$</p>
        </div>

        <p className="gd_desc">{description}</p>
        <div className="gd_photo" >
          <img src={src}></img>
        </div>
        <div className="gd_features">{features}</div>

        <button className="button add_btn"
                onClick={() => props.addToCart(id, name, src, price)}>
          Add to Cart
        </button>

      </div>
    </div>
  );
};

export default GoodsItem;
