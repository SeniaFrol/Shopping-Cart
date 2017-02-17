import React, {Component} from 'react';

export default class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {clicked: false};
  }

  onSpanChange(id){
    this.props.removeItem(id);
  }

  sumPrice(prices, items) {
    if(items.length > 1){
      prices = prices.toFixed(2);
      return `Total count: $${prices}`;
    } else {
      return '';
    }
  }

  btnChange(e) {
    let x = this.state.clicked;
    this.setState({ clicked: !x});
  }

  render() {
    const stat = this.state.clicked;
    let sum = 0;
    const items = this.props.items.map(item => {
        sum+= parseFloat(item.price);
        return (
            <li className="add_item" key={item.DateID} ><button  className="x_btn" onClick={() => this.onSpanChange(item.DateID)}>X</button>
              <img src={item.src}/><span className="add_name">{item.name}</span><span className="add_price">{item.price}$</span>
            </li>
        )
      });
      const showSum = this.sumPrice(sum, items);

    return(
      <div>
      <button className="button cart_btn" onClick={e => this.btnChange(e)}>Cart</button>
        <div className={stat ? "show_cart" : "hide_cart"}>
          <ul>{items}
          <li className="count">{showSum}</li></ul>
        </div>

      </div>
    );
  }
}
