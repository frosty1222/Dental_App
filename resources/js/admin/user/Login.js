import React,{Component} from 'react';
import Swal from 'sweetalert2';
import axios from 'axios';
import {Link,Navigate} from 'react-router-dom';
import Cookies from 'js-cookie';
const email = Cookies.get('email');
class Login extends Component{
   constructor(props){
    super(props);
    this.state = {
        emailCheck:email,
        email:'',
        password:'',
        message: '',
        status: '',
    }

   }
   onChangeEmail = (e) => {
    this.setState({email: e.target.value});
   }
   onChangePassword = (e) => {
    this.setState({password: e.target.value});
   }
   onSubmitLogin = (e)=>{
      e.preventDefault();
        const data = {
        email:this.state.email,
        password:this.state.password
      }
      axios.post('http://127.0.0.1:8000/api/Mlogin',data).then((res)=>{
        this.setState({
            message:res.data.message,
            status:res.data.status,
        });
        if(res.data.status == 'true'){
            Swal.fire({
            icon: 'success',
            text:this.state.message,
            showCancelButton: true,
            confirmButtonText: 'Ok',
            confirmButtonColor: '#e3342f',
             });
             Cookies.set('email', this.state.email)
        }
        console.log(this.state.email,this.state.password)
      }).catch(err=>{
        alert(err.message);
      })
   }
   componentDidMount(){
  }
  render(){
    return (
        <div  className="container-admin">
            {this.state.emailCheck == null ?(
                <span style={{color: 'red',textAlign: 'center'}}>You Need to login first</span>
            ):( <span style={{color: 'red',textAlign: 'center'}}>you have logged in</span>)
        }
            {this.state.status == 'true' ? (
                  <Navigate to="/about " />
            ):(<span></span>)
        }
            <div  className="row-admin">
                <div className="main-admin">
                        <div className="col-md-12">
                            <div className="col-auto">
                                  <div className="col-md-10"  style={{marginLeft:'auto',marginRight:'auto',marginTop:'20px'}}>
                                     {this.state.emailCheck == this.state.email ?(
                                         <div className="text-center" style={{color:'#fff',marginLeft:'auto',marginRight:'auto',fontSize:'20px',fontWeight:'700',textAlign:'center',width:'100%'}}>
                                            you have logged in
                                            <br/>
                                            <br/>
                                            <Link to="/" style={{color:'#fff'}}>Return to Home Page</Link>
                                         </div>
                                     ):(
                                        <form action="#" onSubmit={this.onSubmitLogin} method="POST" role="form">
                                        <legend className="text-center"  style={{color:'#fff'}}>Form Login</legend>
                                        <div className="form-group">
                                            <label htmlFor="email">Email</label>
                                            <input type="email" className="form-control" name="email" value={this.state.email} onChange={this.onChangeEmail} placeholder="Email..." />
                                        </div>
                                        <div className="form-group">
                                           <label htmlFor="password">Password</label>
                                             <input type="password" className="form-control" name="password" value={this.state.password} onChange={this.onChangePassword} placeholder="Password..." />
                                         </div>
                                         <button type="submit" className="btn btn-primary">Submit</button>
                                         <Link to="/myregister" className="btn btn-primary" style={{color:'#fff'}}>go to register</Link>
                                     </form>
                                     )
                                    }
                                 </div>
                            </div>

                    </div>

             </div>

       </div>
       </div>

    )
  }
}
export default Login;
