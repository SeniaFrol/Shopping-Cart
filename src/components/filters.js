import Goods from './data.js';

export default {
  sayCondition(arrFe, arrCh) {
    const lenAC = arrCh.length;
    const xss = [];
    for(let i = 0; i < lenAC; i++) {
      if(arrFe.indexOf(arrCh[i]) > -1) {
          xss.push(arrCh[i]);
      }
    }
    const vbb = xss.length;

    if(lenAC === vbb) {
      return true;
    } else return false;
  },

  filterSearch(searchText, checked, option) {
    // List is array of goods from data.js
    let list = Goods;
    const data = checked;
    const opt = option;
    const sText = searchText.toLowerCase();

    // Filter by search text
    list = list.filter(item => {
      const name = item.name.toLowerCase();
      return (sText.length === 0 || name.indexOf(sText) > -1);
    });
    // All checked BRANDS
    const checkedList = data.filter(dt => {
      if(dt.status === true) {
        return dt;
      }
    });
    //All checked OPTIONS
    const checkedOpt = opt.filter(option => {
      if(option.status === true) {
        return option;
      }
    });
    // List of checked brands - string
    let list2 = "";
    const x = checkedList.length;
    for( let i = 0; i<x; i++) {
      list2+=checkedList[i].name + ", ";
    };
    // List of checked options - array
    let list3 = '';
    const x1 = checkedOpt.length;
    for( let j = 0; j<x1; j++) {
      list3+=checkedOpt[j].name + ", ";
    };
    let list4 = [];
    list4 = list3.split(", ");
    list4.pop();

    // Filter by BRAND
    const listBR = list.filter(item => {
      const name = item.brand.toLowerCase();
      return (list2.indexOf(name) > -1 || x === 0);
    });

    // Filter by OPTIONS
    let count = 0;
    const len = list4.length;

    const listOP = listBR.filter(item => {
              let optionItem = item.features;
              let x = this.sayCondition(optionItem, list4);
              return (x || x1 === 0);
    });
    return listOP;
  }
};
