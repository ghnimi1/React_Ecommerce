import React, { Component } from 'react';
import './Footer.css'

export default class Footer extends Component {
  render() {
    return (
      <div className='footer'>
          <div className='social-media'>
              <i className='fa fa-facebook'></i>
              <i className='fa fa-twitter'></i>
              <i className='fa fa-linkedin'></i>
              <i className='fa fa-youtube'></i>
          </div>
        <p> © Copyrights phones 2020</p>
        
      </div>
    );
  }
}
