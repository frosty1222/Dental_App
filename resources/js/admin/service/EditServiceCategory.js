import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import NavBar from '../capital/NavBar';
import { Outlet } from "react-router-dom";
import Swal from 'sweetalert2';
class EditServiceCategory extends Component {
    constructor(props){
       super(props);
       //defining variable and array or objects to return to react js view
      this.state = {
        Category:{},
        newCategory:[],
        name:'',
        service_type:'',
        status:'',
        message:''
      }
      this.onChangeExpenseName = this.onChangeExpenseName.bind(this);
      this.onChangeExpenseServiceType = this.onChangeExpenseServiceType.bind(this);
      this.onChangeExpenseStatus = this.onChangeExpenseStatus.bind(this);
      this.onSubmit = this.onSubmit.bind(this);
    }
    //function react js
    onChangeExpenseName(e) {
        this.setState({name: e.target.value})
      }
     onChangeExpenseServiceType(e) {
        this.setState({service_type: e.target.value})
      }
      onChangeExpenseStatus(e) {
        this.setState({status: e.target.value})
      }
    onGetValue = () => {
        const url = window.location.pathname
        const strs = url.split('/');
        const id = strs.at(-1);
        // console.log(id);
        axios.get('http://127.0.0.1:8000/api/getIdReactCategoryEdit/'+id).then((response)=>{
            this.setState({
                Category:response.data.data,
            })
            this.state.Category.map((cate)=>{
                this.state.newCategory.push(cate);
            })
            this.state.newCategory.map((newcate)=>{
                this.setState({
                 name : newcate.name,
                service_type : newcate.service_type,
                status : newcate.status,
                })
            })
        }).catch(err=>{
            alert(err);
        })
    }
    onSubmit = (e)=>{
        e.preventDefault()
        const url = window.location.pathname
        const strs = url.split('/');
        const id = strs.at(-1);
        const editdata = {
            name:this.state.name,
            service_type :this.state.service_type,
            status :this.state.status,
        }
        axios.post('http://127.0.0.1:8000/api/EditCategory/'+id,editdata).then((res)=>{
            this.setState({
               message:res.message,
            })
            Swal.fire({
                icon: 'success',
                text:'update successfully',
                showCancelButton: true,
                confirmButtonText: 'Ok',
                confirmButtonColor: '#e3342f',
            })
        }).catch(err=>{
            alert(err.message);
        })
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
                        <h1 className="text-primary text-center" style={{color:"white"}}>Welcome to EditServiceCategory</h1>
                        <form action="#"onSubmit={this.onSubmit} method="post" role="form" encType="multipart/form-data">
                            <legend>FormAdd Service</legend>

                            <div className="form-group">
                                <label htmlFor="">Service Category Name</label>
                                <input type="text" className="form-control" name="name" value={this.state.name}  onChange={this.onChangeExpenseName} placeholder="Name..." />
                            </div>
                            <div class="form-group">
                                <label htmlFor="">Service Image</label>
                                <input type="text" className="form-control" name="service_type" value={this.state.service_type}  onChange={this.onChangeExpenseServiceType} placeholder="Image..." />
                            </div>
                            <div class="form-group">
                                <label htmlFor="">Service Status</label>
                                <input type="text" className="form-control" name="status" value={this.state.status}  onChange={this.onChangeExpenseStatus} placeholder="Status..." />
                            </div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </div>
             </div>
            </div>
        </div>
      );
    }
}
export default EditServiceCategory
