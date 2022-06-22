import React,{Component} from 'react';
import Swal from 'sweetalert2';
import axios from 'axios';
import {Link,Navigate} from 'react-router-dom';
import Cookies from 'js-cookie';
class Register extends Component{
   constructor(props){
    super(props);
    this.state = {
        name:'',
        email: '',
        password: '',
        confirm_password: '',
    }
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onRegister = this.onRegister.bind(this);
   }
   onChangeName =(e)=>{
    this.setState({name: e.target.value});
   }
   onChangeEmail =(e)=>{
    this.setState({email:  e.target.value});
   }
   onChangePassword=(e)=>{
    this.setState({password: e.target.value});
   }
    onRegister=(e) => {
     e.preventDefault()
      const data = new FormData();
      data.append('name', this.state.name)
      data.append('email', this.state.email)
      data.append('password', this.state.password)
      axios.post('http://127.0.0.1:8000/api/Mregister',data)
        .then((response) => {
            this.setState({
                message: response.data.message,
            })
                Swal.fire({
                icon: 'success',
                text:this.state.message,
                showCancelButton: true,
                confirmButtonText: 'Ok',
                confirmButtonColor: '#e3342f',
               });
               Cookies.set('username',this.state.name);
               Cookies.set('email',this.state.email);
        }).catch((error) => {
            console.log(error.message);
        })
    }
   componentDidMount(){
  }
  render(){
    return (
        <div  className="container-admin">
            <div  className="row-admin">
             <div className="main-admin">
              <div className="col-md-12 ">
                    <div className="col-sm-10" style={{marginLeft:'auto',marginRight:'auto'}}>
                    {this.state.username == "Lò Văn Đồng" ?(
                            <div className="text-center" style={{color:'#fff',marginLeft:'auto',marginRight:'auto',fontSize:'20px',fontWeight:'700',textAlign:'center',width:'100%'}}>
                            you have logged in
                            <br/>
                            <br/>
                            <Link to="/" style={{color:'#fff'}}>Return to Home Page</Link>
                            </div>
                        ):(
                        <form action="#" onSubmit={this.onRegister} method="POST" role="form">
                        <legend className="text-center" style={{color:'#fff'}}>Form Register</legend>

                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input type="text" className="form-control" name="name"  onChange={this.onChangeName} placeholder="Name..." />
                        </div>
                        <div className="form-group">
                            <label htmlFor="">Email</label>
                            <input type="email" className="form-control" name="email"  onChange={this.onChangeEmail} placeholder="Email..." />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" className="form-control" name="password"  onChange={this.onChangePassword} placeholder="Password..." />
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                        )
                    }
                    </div>
              </div>
        </div>
        </div>
        </div>
    )
  }
}
export default Register;
