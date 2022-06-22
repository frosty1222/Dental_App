import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import NavBar from '../capital/NavBar';
import { Outlet,Link } from "react-router-dom";
import axios from 'axios';
import Swal from 'sweetalert2';
class ServiceViewList extends Component {
    constructor(props){
       super(props);
       //defining variable and array or objects to return to react js view
      this.state = {
        service:[],
        increase:1,
        message:'',
      }
      this.DeleteS = this.DeleteS.bind(this);
    }
    //function react js
      onGetValue=() => {
        axios.get("http://127.0.0.1:8000/api/getAll")
        .then((response) => {
          if (response.status === 200) {
            this.setState({
             service: response.data.data,
            });
          //   console.log(this.state.category);
          }
        })
        .catch((error) => {
          console.error(error);
        });
      }
      DeleteS(id){
        axios.post('http://127.0.0.1:8000/api/DeleteS/'+id).then(res => {
            this.setState(prevState => ({
                service: prevState.service.filter(el => el.id !== id )
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
                        <h1 className="text-primary text-center" style={{color:"white"}}>Welcome to Service View</h1>
                        <div className="col-md-5 float-left text-success">
                            <Link to="/addSV" >Add new service</Link>
                        </div>
                        <table className="table table-bordered table-hover">
                            <thead>
                                <tr>
                                    <th>No.</th>
                                    <th>Name</th>
                                    <th>Image</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.service.length >0 ?(
                                        this.state.service.map((val)=>(
                                            <tr key={val.id}>
                                            <td>{this.state.increase++}</td>
                                            <td>{val.name}</td>
                                            <td><img src={"uploads/"+val.image} width="70" height="60" /></td>
                                            <td>
                                                <Link to={"/editSV/"+val.id} className="btn btn-primary">Edit</Link>
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
<style scoped>
</style>
export default ServiceViewList;
