import React, { Component } from 'react';
import PhoneListItem from './PhoneListItem';
import './PhoneList.css'

export default class PhoneList extends Component {
    
        
  render() {
    const {phone,index}=this.props 
    return (
         <PhoneListItem key={index} phone={phone} 
          addToChart={this.props.addToChart} 
          addToFavorites={this.props.addToFavorites}/>
    )
  }
}
