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
      <div className="checkboxes">
      <p>Phone finder</p>
      <p className="check_option">Brand:</p>
        <div>
          <label>
          <input type="checkbox" checked={data[0].status}  onChange={() => this.getData("nokia")} />Nokia</label>
        </div>
          <div>
            <label>
            <input type="checkbox" checked={data[1].status}  onChange={() => this.getData("lg")}/>LG</label>
          </div>
          <div>
            <label>
            <input type="checkbox" checked={data[2].status}  onChange={() => this.getData("samsung")}/>Samsung</label>
          </div>
          <p className="check_option">Features:</p>
          <div>
            <label>
            <input type="checkbox" checked={opt[0].status}  onChange={() => this.getOpt("camera")}/>Camera</label>
          </div>
          <div>
            <label>
            <input type="checkbox" checked={opt[1].status}  onChange={() => this.getOpt("radio")}/>Radio</label>
          </div>
          <div>
            <label>
            <input type="checkbox" checked={opt[2].status}  onChange={() => this.getOpt("mp3")} />MP3 Player</label>
          </div>
          <div>
            <label>
            <input type="checkbox" checked={opt[3].status} onChange={() => this.getOpt("internet")} />Mobile Internet</label>
          </div>
      </div>
    );
  }
}
