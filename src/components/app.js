import React, {Component} from 'react';
import ListOfGoods from './ListOfGoods.js';
import Goods from './data.js';
import Search from './search.js';
import CheckBoxes from './checkboxes.js';
import Cart from './cart.js';
import Filters from './filters.js';

export default class Store extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: "",
      checked: [{name: "nokia", status: false}, {name: "lg", status: false},
                {name: "samsung", status: false}],
      opt: [{name: "camera", status: false},
                {name: "radio", status: false}, {name: "mp3", status: false},
                {name: "internet", status: false}],
      cartItems: []
    };
  }
  handleChange = (searchText) => {
    this.setState({
      searchText
    });
  }
  // Reverses checkbox and sets states if fired.
  //For brand
  handleCheckBoxed = (name) => {
    const updatedCheck = this.state.checked.map((item) => {
      if(item.name === name) {
        item.status = !item.status;
      }
      return item;
    });
     this.setState({checked: updatedCheck});
  }
  // Reverses checkbox and sets states if fired.
  //For features
  handleCheckOption = (optName) => {
    const updatedCheckOpt = this.state.opt.map((item) => {
      if(item.name === optName) {
        item.status = !item.status;
      }
      return item;
    });
     this.setState({opt: updatedCheckOpt});
  }

  // Does all checked options exist in Item features list?
  // Return true or false
  // sayCondition = (arrFe, arrCh) => {
  //   const lenAC = arrCh.length;
  //   const xss = [];
  //   for(let i = 0; i < lenAC; i++) {
  //     if(arrFe.indexOf(arrCh[i]) > -1) {
  //         xss.push(arrCh[i]);
  //     }
  //   }
  //   const vbb = xss.length;
  //
  //
  //   if(lenAC === vbb) {
  //     return true;
  //   } else return false;
  // }
  //
  // filterSearch = (searchText, checked, option) => {
  //   // List is array of goods from data.js
  //   let list = Goods;
  //   const data = checked;
  //   const opt = option;
  //   const sText = searchText.toLowerCase();
  //
  //   // Filter by search text
  //   list = list.filter((item) => {
  //     const name = item.name.toLowerCase();
  //     return (sText.length === 0 || name.indexOf(sText) > -1);
  //   });
  //   // All checked BRANDS
  //   const checkedList = data.filter((dt) => {
  //     if(dt.status === true) {
  //       return dt;
  //     }
  //   });
  //   //All checked OPTIONS
  //   const checkedOpt = opt.filter((option) => {
  //     if(option.status === true) {
  //       return option;
  //     }
  //   });
  //   // List of checked brands - string
  //   let list2 = "";
  //   const x = checkedList.length;
  //   for( let i = 0; i<x; i++) {
  //     list2+=checkedList[i].name + ", ";
  //   };
  //   // List of checked options - array
  //   let list3 = '';
  //   const x1 = checkedOpt.length;
  //   for( let j = 0; j<x1; j++) {
  //     list3+=checkedOpt[j].name + ", ";
  //   };
  //   let list4 = [];
  //   list4 = list3.split(", ");
  //   list4.pop();
  //
  //   // Filter by BRAND
  //   const listBR = list.filter((item) => {
  //     const name = item.brand.toLowerCase();
  //     return (list2.indexOf(name) > -1 || x === 0);
  //   });
  //
  //   // Filter by OPTIONS
  //   let count = 0;
  //   const len = list4.length;
  //
  //   const listOP = listBR.filter((item) => {
  //             let optionItem = item.features;
  //             let x = this.sayCondition(optionItem, list4);
  //             return (x || x1 === 0);
  //   });
  //   return listOP;
  // }

  // GET ID HERE
  handleAdd = (id, name, src, price) => {
    this.setState({
      cartItems: [
        ...this.state.cartItems,
        {
          id,
          name,
          src,
          price,
          DateID: Date.now()
        }
      ]
    });
  }

  handleRemove = (id) => {
    const removeitem = this.state.cartItems.filter((item) => {
      if(item.DateID !== id) {
        return true;
      }
    });
    this.setState({
      cartItems: removeitem
    });
  }

  render() {
    const filteredGoods = Filters.filterSearch(this.state.searchText, this.state.checked, this.state.opt);
    const data = this.state.checked;
    const option = this.state.opt;
    const added = this.state.cartItems;
    return (
      <div className="">
        Store component
        <Search onFormChange={this.handleChange}/>
        <Cart items={added} removeItem={this.handleRemove}/>
        <CheckBoxes boxes={this.handleCheckBoxed} data={data} opt={option} option={this.handleCheckOption}/>
        <ListOfGoods goods={filteredGoods} addToCart={this.handleAdd}/>
      </div>
    );
  }
}
