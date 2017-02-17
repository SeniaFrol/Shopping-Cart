import React, {Component} from 'react';

export default class Search extends Component {

  onSubmitForm(e) {
    e.preventDefault();
    const searchText = this.refs.searchText.value;

    this.refs.searchText.value = '';
    this.props.onFormChange(searchText);
  }
  // Renders search form
  render() {
    return(
      <div>
        <form onSubmit={e => this.onSubmitForm(e)} >
          <input type="search" ref="searchText" placeholder="Search" />
          <button className="button">Go</button>
        </form>
      </div>
    );
  }
}
