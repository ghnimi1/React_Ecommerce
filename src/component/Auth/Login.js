import React, { Component } from 'react';
import './Login.css'
class Login extends Component {
    state = {
        email: '',
        password: '',
        disable: false,
        error:false,
        errorMessage:'Email ou Password incorrect'
    }
    onconnect = () => {
        this.setState({ disable: true });

        //Faking API call here
        setTimeout(() => {
            this.setState({ disable: false });
        }, 2000);
    }
    render() {
        const { email, password, disable,error,errorMessage} = this.state;
        return (
            <div style={{minHeight:'510px'}}>
                <div className='authcontainer'>
                    <h2>DÉJÀ INSCRIT?
</h2>

                    <form >
                        <div className="imgcontainer">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQDHEOUPdPL2GG390WQwlRsIcf1SDW25zGTfuGS3oXijehKr9KH&usqp=CAU" alt="Avatar" className="avatar" />
                        </div>

                        <div className="container">
                            <label ><b>Username</b></label>
                            <input type="text" placeholder="Enter Username" disabled={this.state.disable} name="uname" value={this.state.email} required
                                onChange={(e) => {

                                    this.setState({ email: e.target.value }); console.log(this.state.email)
                                }} />

                            <label ><b>Password</b></label>
                            <input type="password" placeholder="Enter Password" disabled={this.state.disable} value={this.state.password} name="psw" required onChange={(e) => {

                                this.setState({ password: e.target.value }); console.log(this.state.password)
                            }} />
                            <div style={{color:'red'}}>
                                {error ? errorMessage : null}
                            </div>
                            <label>
                                <input type="checkbox" name="remember" /> Remember me
                        </label>
                            <button type="submit" disabled={this.state.disable}
                            onClick={()=>{this.onconnect()}}
                            >
                                {disable && (
                                    <i
                                        className="fa fa-refresh fa-spin"
                                        style={{ marginRight: "5px" }}
                                    />
                                )}

                                Connexion</button>
                            
                        </div>
                        <div className="container" style={{ backgroundColor: "#f1f1f1" }}>
                            <button type="button" className="cancelbtn" >


                                Cancel</button>
                            <span className="psw">Forgot <a href="#">password?</a></span>
                        </div>
                    
                    </form>

                </div>
            </div>


        );
    }
}

export default Login;