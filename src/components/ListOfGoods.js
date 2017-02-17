import React, {Component} from 'react';
import GoodsItem from './GoodsItem';

export default class ListOfGoods extends Component {
  render() {
    const goodsItems = this.props.goods.map(item => {
        return (
            <GoodsItem
                key={item.id}
                gooditem={item}
                addToCart={this.props.addToCart} />
        )
});
    //  Shows list of items
    return(
      <div>
        {goodsItems}
      </div>
    );
  }
}
