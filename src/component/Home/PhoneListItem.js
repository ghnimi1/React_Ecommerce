import React, { Component } from 'react';
import './PhoneListItem.css'
import { Link } from 'react-router-dom';

export default class PhoneListItem extends Component {
  
  render() {
      const {price,images,title,id}=this.props.phone      
    return (
        <div className="col-md-3 col-6  my-2" >
          <div className='list-item '>
            <Link to={`/details/${id}`} style={{color:'none'}}><img src={images[0]} className="card-img-top " style={{height:'300px'}} alt="phone"/>
           </Link> <p className="card-text">{title}</p><br/>
            <div className="card-body mb-0">
              <h5 className="card-title">{Math.round(price.toFixed(0)/3)} TND</h5>
              <i onClick={()=>this.props.addToFavorites(this.props.phone)} className="fa fa-heart"></i>
              <i onClick={()=>this.props.addToChart(this.props.phone)} className="fa fa-cart-plus" ></i>
            </div>
          </div>
        
      </div>
    );
  }
}
