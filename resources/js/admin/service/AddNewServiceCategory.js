import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import NavBar from '../capital/NavBar';
import { Outlet } from "react-router-dom";
import Swal from 'sweetalert2';
class AddNewServiceCategory extends Component {
    constructor(props){
       super(props);
       //defining variable and array or objects to return to react js view
      this.state = {
            name:'',
            service_type:'',
            status:'',
      }
      this.onChangeExpenseName = this.onChangeExpenseName.bind(this);
      this.onChangeExpenseServiceType = this.onChangeExpenseServiceType.bind(this);
      this.onChangeExpenseStatus = this.onChangeExpenseStatus.bind(this);
      this.onSubmit = this.onSubmit.bind(this);
    }
    onChangeExpenseName(e) {
        this.setState({name: e.target.value})
      }
     onChangeExpenseServiceType(e) {
        this.setState({service_type: e.target.value})
      }
      onChangeExpenseStatus(e) {
        this.setState({status: e.target.value})
      }
      onSubmit(e) {
        e.preventDefault()
         const expense = {
          name: this.state.name,
          service_type: this.state.service_type,
          status: this.state.status
        };
        axios.post('http://127.0.0.1:8000/api/addNewCategory/',expense)
          .then(res => console.log(res.data));
        // console.log(`Expense successfully created!`);
        // console.log(`Name: ${this.state.name}`);
        // console.log(`Amount: ${this.state.amount}`);
        // console.log(`Description: ${this.state.description}`);
        Swal.fire(
        'Awesome !',
        'Category Added Successfully',
        'success'
        )

        this.setState({name: '', servive_type: '', status: ''})
      }
    //function react js
    // this method will call to those functions has defined inside this method when it reload page
    componentDidMount(){

    }
    render(){
        return (
        <div  className="container-admin">
            <div  className="row-admin">
            <NavBar />
             <div className="main-admin">
                <div className="col-md-12">
                    <div className="col-auto">
                        <h1 className="text-primary text-center" style={{color:"white"}}>Welcome to AddNewServiceCategory</h1>
                        <form onSubmit={this.onSubmit} role="form" encType="multipart/form-data" method="post" action="#">
                            <legend style={{color:"white"}}>FormAdd Service</legend>

                            <div className ="form-group">
                                <label htmlFor="">Service Category Name</label>
                                <input type="text" className="form-control" name="name" placeholder="Name..." value={this.state.name} onChange={this.onChangeExpenseName}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="">Service Type</label>
                                <input type="text" className="form-control" name="service_type" value={this.state.service_type} placeholder="Type..." onChange={this.onChangeExpenseServiceType} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="">Service Status</label>
                                <input type="text" className="form-control" name="description" value={this.state.status} placeholder="Status..." onChange={this.onChangeExpenseStatus} />
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
export default AddNewServiceCategory
