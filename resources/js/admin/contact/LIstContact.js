import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import NavBar from '../capital/NavBar';
import { Outlet,Link } from "react-router-dom";
import axios from 'axios';
import Swal from 'sweetalert2';
class ListContact extends Component {
    constructor(props){
       super(props);
       //defining variable and array or objects to return to react js view
      this.state ={
        addup:'0',
       contact:[],
      }
      this.DeleteS = this.DeleteS.bind(this);
    }
    //function react js
      onGetValue=() => {
        axios.get("http://127.0.0.1:8000/api/getallcontact")
        .then((response) => {
          if (response.status === 200) {
            this.setState({
             contact: response.data.data,
            });
          //   console.log(this.state.category);
          }
        })
        .catch((error) => {
          console.error(error);
        });
      }
      DeleteS(id){
        axios.post('http://127.0.0.1:8000/api/deletecontact/'+id).then(res => {
            this.setState(prevState => ({
                contact: prevState.contact.filter(el => el.id !== id )
              }));
          var a = this.setState({
               message:res.data.message,
            })

            Swal.fire({
                icon: 'success',
                text:this.state.message,
                showCancelButton: true,
                confirmButtonText: 'Ok',
                confirmButtonColor: '#e3342f',
            })
            window.location.reload(true);
         })
         .catch(error => alert(error.message));
     }
    // this method will call to those functions has defined inside this method when it reload page
    componentDidMount(){
      this.onGetValue();
    }
    render(){
        return (
        <div  className="container-admin">
            <div  className="row-admin">
            <NavBar />
             <div className="main-admin">
                <div className="col-md-12">
                    <div className="col-auto">
                        <h1 className="text-primary text-center" style={{color:"white"}}>Welcome to Contact View</h1>
                        <table className="table table-bordered table-hover">
                            <thead>
                                <tr>
                                    <th>No.</th>
                                    <th>Name</th>
                                    <th>Phone</th>
                                    <th>Email</th>
                                    <th>Title</th>
                                    <th>Message</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.contact.length >0 ?(
                                        this.state.contact.map((val)=>(
                                            <tr key={val.id}>
                                            <td>{this.state.addup++}</td>
                                            <td>{val.name}</td>
                                            <td>{val.phone}</td>
                                            <td>{val.title}</td>
                                            <td>{val.message}</td>
                                            <td>
                                                <button onClick={() =>this.DeleteS(val.id)} className="btn btn-danger">Delete</button>
                                            </td>
                                        </tr>
                                        ))
                                    ):(<span className="btn btn-primary">notthing to show here</span>)
                                }
                            </tbody>
                        </table>

                    </div>
                </div>
             </div>
            </div>
        </div>
      );
    }
}

export default ListContact;
