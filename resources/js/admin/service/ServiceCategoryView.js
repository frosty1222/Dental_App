import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import NavBar from '../capital/NavBar';
import { Outlet,Link } from "react-router-dom";
class ServiceCategoryView extends Component {
    constructor(props){
       super(props);
       //defining variable and array or objects to return to react js view
      this.state = {
        category:[],
        increase:1,
      }
    }
    getCategory = () => {
        axios.get("http://127.0.0.1:8000/api/getAllCategory")
          .then((response) => {
            if (response.status === 200) {
              this.setState({
               category: response.data.data,
              });
            //   console.log(this.state.category);
            }
          })
          .catch((error) => {
            console.error(error);
          });
      };
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
    //function react js
    // this method will call to those functions has defined inside this method when it reload page
    componentDidMount(){
        this.getCategory();
    }
    render(){
        return (
        <div  className="container-admin">
            <div  className="row-admin">
            <NavBar />
             <div className="main-admin">
                <div className="col-md-12">
                    <div className="col-auto">
                        <h1 className="text-primary text-center" style={{color:"white"}}>Welcome to ServiceCategoryView</h1>
                        <div className="col-md-5 float-left" style={{color:"white"}}><Link to="/addSVCTGR">add new service category</Link></div>
                        <table className="table table-bordered table-hover">
                            <thead>
                                <tr>
                                    <th>No.</th>
                                    <th>Name</th>
                                    <th>Service Type</th>
                                    <th>Service Status</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                            {
                                this.state.category.length >0 ? (
                                 this.state.category.map((cate)=>(
                                <tr>
                                    <td>{this.state.increase++}</td>
                                    <td>{cate.name}</td>
                                    <td>{cate.service_type}</td>
                                    <td>{cate.status}</td>
                                    <td>
                                        <Link to={"/editserviceCtg/"+cate.id} className="btn btn-primary">Edit</Link>
                                        <from>
                                            <button type="button" className="btn btn-danger">Delete</button>
                                        </from>
                                    </td>
                                </tr>
                                 ))
                                 ) : (<h6 className="text-danger text-center">No Image Found </h6>)
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
export default ServiceCategoryView;
