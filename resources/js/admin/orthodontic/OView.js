import React,{Component} from 'react';
import Swal from 'sweetalert2';
import axios from 'axios';
import {Link} from 'react-router-dom';
import NavBar from '../capital/NavBar';
class OView extends Component{
   constructor(props){
    super(props);
    this.state = {
        orthodontic:[],
        message:'',
        increase:1,
    }
   }
   onValue =() =>{
     axios.get('http://127.0.0.1:8000/api/oGetAll')
     .then(res=>{
        this.setState({orthodontic:res.data.data});
       })
       .catch(err=>{
        console.log(err);
       })
   }
   Delete(id){
       axios.post('http://127.0.0.1:8000/api/odelete/'+id)
       .then(res=>{
        this.setState({message:res.data.message});
        alert(this.state.message);
        window.location.reload(true);
       })
       .catch(err=>{
        console.log(err);
       })
   }
   componentDidMount(){
    this.onValue();
  }
  render(){
    return (
        <div  className="container-admin">
        <div  className="row-admin">
        <NavBar />
         <div className="main-admin">
            <div className="col-md-12">
                <Link className="btn btn-primary" to="/oAdd">Add new</Link>
                <div className="col-auto">
                  <legend className="text-success" style={{color: 'white'}}>Welcome to orthodontic View</legend>

                   <table className="table table-hover">
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
                           this.state.orthodontic.length >0 ?(
                            this.state.orthodontic.map((o)=>(
                               <tr key={o.id}>
                                <td>{this.state.increase++}</td>
                                <td>{o.name}</td>
                                <td><img src={"uploads/"+o.image} width="70" height="60" /></td>
                                <td>
                                    <Link className="btn btn-primary" to={"/oEdit/"+o.id}>Edit</Link>
                                    <button  onClick={()=>this.Delete(o.id)} className="btn btn-danger">Delete</button>
                                </td>
                            </tr>
                            ))
                           ):(<span className="text-danger">empty</span>)
                        }

                    </tbody>
                   </table>

                </div>
            </div>
         </div>
        </div>
    </div>
    )
  }
}
export default OView;
