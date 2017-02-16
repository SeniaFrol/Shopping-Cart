import React, {Component} from 'react';

export default class Cart extends Component {
  constructor(props) {
    super(props);
  }

  onSpanChange(id){
    this.props.removeItem(id);
  }

  sumPrice(prices, items) {
    if(items.length > 1){
      prices = prices.toFixed(2);
      return "Total count: $" + prices;
    } else {
      return '';
    }
  }

  render() {
    let sum = 0;
    const items = this.props.items.map((item) => {
        sum+= parseFloat(item.price);
        return (
          <ul key={item.DateID}>
            <li><button  onClick={() => this.onSpanChange(item.DateID)}>X</button>{item.id}{item.DateID}{item.name}{item.src}{item.price}</li>
          </ul>
        )
      });
      const showSum = this.sumPrice(sum, items);

    return(
      <div>
        <div>{items}</div>
        <p>{showSum}</p>
      </div>
    );
  }
}
