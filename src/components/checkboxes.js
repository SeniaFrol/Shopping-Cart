import React, {Component} from 'react';

export default class checkBoxes extends Component {
  constructor(props) {
    super(props);


  }
  getData(name) {
    this.props.boxes(name);
  }
  getOpt(option) {
    this.props.option(option);
  }

  render() {
    let data = this.props.data;
    let opt = this.props.opt;
    return(
      <div>
        <div>
          <label>
          <input type="checkbox" checked={data[0].status}  onChange={() => this.getData("nokia")} />Nokia</label>
        </div>
          <div>
            <label>
            <input type="checkbox" checked={data[1].status}  onChange={(e) => this.getData("lg")}/>LG</label>
          </div>
          <div>
            <label>
            <input type="checkbox" checked={data[2].status}  onChange={(e) => this.getData("samsung")}/>Samsung</label>
          </div>
          <div>
            <label>
            <input type="checkbox" checked={opt[0].status}  onChange={(e) => this.getOpt("camera")}/>Camera</label>
          </div>
          <div>
            <label>
            <input type="checkbox" checked={opt[1].status}  onChange={(e) => this.getOpt("radio")}/>Radio</label>
          </div>
          <div>
            <label>
            <input type="checkbox" checked={opt[2].status}  onChange={(e) => this.getOpt("mp3")} />MP3 Player</label>
          </div>
          <div>
            <label>
            <input type="checkbox" checked={opt[3].status} onChange={(e) => this.getOpt("internet")} />Mobile Internet</label>
          </div>
      </div>
    );
  }
}
