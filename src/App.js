import React from 'react';
import './App.css';
import NavBar from './component/Navbar/NavBar';
import Home from './component/Home/Home';
import {BrowserRouter, Route,Switch} from 'react-router-dom'
import ListSouhait from './component/ListSouhait/ListSouhait';
import Details from './component/Details/Details';
import Panier from './component/panier/Panier';
import NotFound from './component/NotFound/NotFound';
import Contact from './component/Contact/Contact';
import Footer from './component/Footer/Footer';
import Login from './component/Auth/Login';
import CreateCpt from './component/Auth/CreateCpt';


class App extends React.Component {
  
/* searchPhone = (term) =>{
  const phones=this.state.phones
  phones.filter((data)=>{
    if(data.title.toLowerCase().includes(term.toLowerCase())){
        return data
    }
    this.setState({phones:data})
  })} */
render(){
  return (
    <BrowserRouter >
      <NavBar/>
      <Switch>        
        <Route path='/' exact component={Home}/>
        <Route path='/panier' exact component={Panier}/>
        <Route path='/souhait' exact component={ListSouhait}/>
        <Route path='/details/:id' exact component={Details}/>
        <Route path='/contact' exact component={Contact}/>
        <Route path='/login' exact component={Login}/>
        <Route path='/create' exact component={CreateCpt}/>
        <Route component={NotFound}/>
      </Switch>
      <Footer/>
    </BrowserRouter>
  );
}
    
}

export default App
