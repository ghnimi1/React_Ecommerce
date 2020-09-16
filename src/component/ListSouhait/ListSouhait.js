import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class ListSouhait extends Component {
  state={
    phones:[]
}

componentDidMount = () => {
let phones =  localStorage.getItem('phones')
this.setState({phones:JSON.parse(phones)})
};
delete = (id) =>{
  const phones=this.state.phones.filter(phone=>phone.id!==id)
  this.setState({phones:phones})
  localStorage.setItem('phones',JSON.stringify(phones))
}
renderList=()=>{
  const {phones}=this.state
  return phones && phones.length ? 
  (phones.map((phone)=>{
      return(
        <div className="col-md-3 col-6  my-2" key={phone.id}>
        <div className='list-item '>
          <Link to={`/details/${phone.id}`} style={{color:'none'}}><img src={phone.images[0]} className="card-img-top " style={{height:'300px'}} alt="phone"/>
         </Link> <p className="card-text">{phone.title}</p><br/>
          <div className="card-body mb-0">
            <h5 className="card-title">{Math.round(phone.price.toFixed(0)/3)} TND</h5>
            <i className='fa fa-trash' 
            onClick={()=>this.delete(phone.id)} style={{color:'green'}}></i>
          </div>
        </div>
      
    </div>
      )
  })):null
}
  render() {    
    return (
      <div>
        <div className='container'>
        <div className='row mt-2' id='list' style={{minHeight:'510px'}}>
        {this.state.phones.length===0 ? 
           <div style={{fontWeight:'bold' ,margin:'auto',padding:'10px'}}>Il n'y a plus d'articles dans votre panier</div> :
         this.renderList()}
      </div>
      </div>
      
      </div>
      
    );
  }
}
