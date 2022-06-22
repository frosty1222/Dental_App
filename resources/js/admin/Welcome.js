import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import NavBar from './capital/NavBar';
import { Outlet,Navigate,Link } from "react-router-dom";
import Cookies from 'js-cookie';
class Welcome extends Component {
    constructor(props){
       super(props);
       //defining variable and array or objects to return to react js view
      this.state = {
        email:Cookies.get('email'),
      }
      this.checkUser = this.checkUser.bind(this)
    }
    checkUser = () =>{
        this.state.username = 0;
    }
    //function react js
    componentDidMount(){
        this.checkUser();
    }
    render(){
        return (
                     <div  className="container-admin">
                       <div  className="row-admin">
                        <NavBar />
                        <div className="main-admin">
                            <div className="col-md-12">
                                <div className="col-auto">
                                    <h1 className="text-primary text-center" style={{color:"white"}}>Welcome to admin center</h1>
                                    </div>
                                </div>
                        </div>
                   </div>
            </div>
      );
    }
}

export default Welcome;
