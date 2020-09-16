import React, { Component } from 'react';
import './NotFound.css'
import { Link } from 'react-router-dom';
export default class NotFound extends Component {
  render() {
    return (
      <div className='notfound'> 
          <div className='errorpage'>404 error</div>
          <div className='pagenotfound'>Page not found <i class="fa fa-search fa-2x"></i></div>
          <Link className='linkhome' to='/'>Home page</Link>
      </div>
    );
  }
}
