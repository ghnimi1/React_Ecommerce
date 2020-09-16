import React, { Component } from 'react';
import './SearchBar.css'

export default class SearchBar extends Component {
   
  render() {
   
    return (
      <div className='searchbar'>
       <div className="form-inline mr-auto my-2 my-lg-0" onSubmit={this.props.handleSearch}>
      <input style={{width:"90%"}} value={this.props.term} onChange={this.props.handleSubmit} className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
    </div>
      </div>
    );
  }
}
