import React, { Component } from 'react';
import PhoneList from './PhoneList';
import Footer from '../Footer/Footer';
import Carousel from '../Carousel/Carousel';
import {phones} from '../../data/phones'
import SearchBar from '../SearchBar/SearchBar';
import swal from 'sweetalert';

export default class Home extends Component {
  state={
    phones:phones, 
    term:''
}
handleSubmit = (e) =>{
  this.setState({term:e.target.value})          
}
handleSearch = (e) =>{
  e.preventDefault() 
  this.setState({term:''})
}    

addToFavorites = phone => {
  const oldFavorites=JSON.parse(localStorage.getItem('phones')) || []
   if (this.checkPhone(oldFavorites,phone)){ 
    swal ( "Warning" ,  "Deja ajouté!" ,  "warning" )
  return false   } 
  oldFavorites.push(phone)
  let phones = oldFavorites
  localStorage.setItem('phones',JSON.stringify(phones))
}

addToChart = phone => {
  const oldFavorites=JSON.parse(localStorage.getItem('chart')) || []
   if (this.checkPhone(oldFavorites,phone)){ 
    swal ( "Warning" ,  "Deja ajouté!" ,  "warning" )
  return false   } 
  oldFavorites.push(phone)
  let phones = oldFavorites
  localStorage.setItem('chart',JSON.stringify(phones))
}

 checkPhone = (phones,phone) => {
  let found = phones.some(item=>{
   return  item.id===phone.id
  })
  return found
} 
  render() {
    const {phones}=this.state;    
    const filtreItems=phones.filter(phone=>phone.title.toLowerCase().indexOf(this.state.term.toLowerCase())!==-1) 
     const ListItems=filtreItems.map((phone,index)=>{
      return(
      <PhoneList key ={index} phone={phone}
        addToFavorites={this.addToFavorites}
        addToChart={this.addToChart}
      />      )
    })
    return (
      <div style={{minHeight:'510px'}}>
      <Carousel/>
      <div className='container'>
        <SearchBar handleSubmit={this.handleSubmit} handleSearch={this.handleSearch} term={this.state.term}/>
        <div className='row mt-2' id='list'>
         {ListItems}
         </div>
      </div> 
      </div>
    );
  }
}
