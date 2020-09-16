import React, { Component } from 'react';
import {phones} from '../../data/phones'
import './Details.css'
import Footer from '../Footer/Footer';
import swal from 'sweetalert';

export default class Details extends Component {
    state={
        phones:phones
    }
    
  render() {  
    const id=this.props.match.params.id;
    const phones=this.state.phones;
     const renderDetails = phones.filter(phone=>{
       return phone.id==id
        }).map(lis=>{
            return(
                <div key={lis.id}>
                      <div className='title'><h3>{lis.title}</h3></div>
                        <div class="row" >
                            <div className='col-6' id='premier'>
                              <img src={lis.images[0]} alt="phone" />
                            </div>
                            <div className='col-6'>
                               <h5 id='brand'>Marque : {lis.brand}</h5>
                               <p className='description my-3'>
                                   Memory : <span>{lis.memory}</span> Camera : <span>{lis.camera}</span>  CPU : <span>{lis.cpu}</span> Size : <span>{lis.size}</span> Weight : <span>{lis.weight}</span> Batterie : <span>{lis.battery} </span>{lis.display}
                               </p>
                               <div className='livr'>Livraison <span>Gratuite</span>  à partir de 300DT d'Achat</div>
                             <h5 className='my-4'>Facilité de paiement</h5> 
                             <table class="table table-striped">
                            <thead>
                                <tr>
                                <th scope="col">3 mois</th>
                                <th scope="col">6 mois</th>
                                <th scope="col">12 mois</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                <td>{Math.round(lis.price.toFixed(0)/3/3)} DT</td>
                                <td>{Math.round(lis.price.toFixed(0)/3/6)} DT</td>
                                <td>{Math.round(lis.price.toFixed(0)/3/12)} DT</td>
                                </tr>
                                
                            </tbody>
                            </table>
                            <div className='paiement'>
                                <p>{Math.round(lis.price.toFixed(0)/3)} DT</p>
                                <span>Disponible</span>
                                <button className='btn btn-info' 
                                onClick={()=>swal("Good!", "Add To Cart", "success")}>
                                    <i className="fa fa-cart-plus" 
                                    ></i> Acheter
                                </button>
                            </div>
                            </div>
                        </div>
                        <div>
                            <h5>Fiche Technique</h5>
                            <div className='card my-2'>
                            <table className="table">
                                <tbody>
                                    <tr>
                                    <td>CPU</td>
                                    <td>{lis.cpu}</td>
                                    </tr>
                                    <tr>
                                    <td>Memory</td>
                                    <td>{lis.memory}</td>
                                    </tr>
                                    <tr>
                                    <td>Camera</td>
                                    <td>{lis.camera}</td>
                                    </tr>
                                    <tr>
                                    <td>Size</td>
                                    <td>{lis.size}</td>
                                    </tr>
                                    <tr>
                                    <td>Batterie</td>
                                    <td>{lis.battery}</td>
                                    </tr>
                                    <tr>
                                    <td>Weight</td>
                                    <td>{lis.weight}</td>
                                    </tr>
                                    <tr>
                                    <td>Display</td>
                                    <td>{lis.display}</td>
                                    </tr>
                                </tbody>
                                </table>
                            </div>
                        </div>
  
                </div>
                
            )
        })
    return (
        <>
      <div className='container' id='deta'>
           {renderDetails} 
        
        </div>
        </>
    );
  }
}
