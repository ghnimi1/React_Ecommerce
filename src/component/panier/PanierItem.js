import React, { Component } from 'react';

export default class PanierItem extends Component {
  render() {
      const {phone}=this.props      
    return (
        <tr>
        <th scope="row"><img src={phone.images[0]} className="card-img-top " style={{height:'100px',width:'100px'}} alt="phone"/></th>
        <td>{Math.round(phone.price.toFixed(0)/3)} TND</td>
        <td className='quantity'><button onClick={()=>this.props.decrement(phone.id)}>-</button><div>{phone.count}</div><button onClick={()=>this.props.increment(phone.id)}>+</button>
        </td>
        <td>{Math.round(phone.price.toFixed(0)/3)*phone.count} TND</td>
        <td className='trash'><i onClick={()=>this.props.delete(phone.id)} className='fa fa-trash fa-2x'></i></td>
      </tr>
      
    );
  }
}
