import React, { Component } from 'react';
import './panier.css'
import swal from 'sweetalert';
import PanierItem from './PanierItem';
export default class Panier extends Component {
  state={
    phones:[],
    total:0
}

componentDidMount = () => {
let phones =  localStorage.getItem('chart')
this.setState({phones:JSON.parse(phones)})
};
delete = (id) =>{
  const phones=this.state.phones.filter(phone=>phone.id!==id)
  this.setState({phones:phones})
  localStorage.setItem('chart',JSON.stringify(phones))
  window.location.reload()

}
increment = (id) => {
  let phones=this.state.phones;
  const selected=phones.find(item=>item.id===id);
  const index = phones.indexOf(selected);
  const product = phones[index];
  product.count=product.count + 1; 
  this.setState({phones})
}
decrement = (id) => {
  let phones=this.state.phones;
  const selected=phones.find(item=>item.id===id);
  const index = phones.indexOf(selected);
  const product = phones[index];
  if(product.count===1) return false
  product.count=product.count - 1;
  this.setState({phones})  
}


renderList=()=>{
  let {phones}=this.state
  return phones && phones.length ? 
  (phones.map((phone)=>{
      return(
   <PanierItem  key={phone.id} phone={phone} 
    increment={this.increment}
    decrement={this.decrement}
    delete={this.delete}
    />
      )
  })):null
}
  render() {    
    return (
      <div style={{minHeight:'510px'}}>
      <div className='container'>
        <div className='row' style={{marginTop:'100px'}} id='list'>
        <table className="table table-striped">
  <thead>
    <tr>
      <th scope="col">Produit</th>
      <th scope="col">Prix unitaire</th>
      <th scope="col">Quantité</th>
      <th scope="col">Prix total</th>
      <th scope="col"></th>
    </tr>
  </thead>
  <tbody>
    {this.state.phones.length===0 ? 
    <tr><td>Il n'y a plus d'articles dans votre panier</td>
    <td></td><td></td><td></td><td></td>
    </tr>:
         this.renderList()}
         </tbody>
  </table>
  <div className="totalttc">
    <span >Total TTC : <span>{this.state.totalPrice} DT</span></span>
    <button onClick={()=>swal("Good!", "You clicked the button!", "success")}>
  Acheter</button>
  </div>
  
      </div>
      
      </div>
      </div>
      
    );
  }
}
