import React,{Component} from 'react';
import Swal from 'sweetalert2';
import axios from 'axios';
import {Link} from 'react-router-dom';
import Cookies from 'js-cookie';
const email = Cookies.get('email');
class UserCustom extends Component{
   constructor(props){
    super(props);
    this.state = {
        email:email,
    }
   }
   componentDidMount(){
  }
  render(){
    return (
        <div  className="container-admin">
            <div  className="row-admin">
                <div className="main-admin">
                        <div className="col-md-12">
                            <div className="col-auto">
                                  <div className="col-md-10"  style={{marginLeft:'auto',marginRight:'auto',marginTop:'20px'}}>
                                     {this.state.email != "lodong601@gmail.com" ?(
                                         <div className="text-center" style={{color:'#fff',marginLeft:'auto',marginRight:'auto',fontSize:'20px',fontWeight:'700',textAlign:'center',width:'100%'}}>
                                            you have logged in
                                            <br/>
                                            <br/>
                                            <Link to="/" style={{color:'#fff'}}>Return to Home Page</Link>
                                         </div>
                                     ):(
                                        <table class="table table-hover">
                                            <thead>
                                                <tr>
                                                    <th></th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td></td>
                                                </tr>
                                            </tbody>
                                        </table>
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
export default UserCustom;
