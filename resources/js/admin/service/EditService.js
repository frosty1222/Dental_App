import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import NavBar from '../capital/NavBar';
import { Outlet } from "react-router-dom";
import axios from "axios";
import Swal from 'sweetalert2';
class EditService extends Component {
    constructor(props){
       super(props);
       //defining variable and array or objects to return to react js view
      this.state = {
        name:'',
        image:'',
        description:'',
        type:'',
        advantage_text:'',
        message:'',
        service:[],
        newService:[],
      }
      this.onChangeName = this.onChangeName.bind(this);
      this.onChangeImage = this.onChangeImage.bind(this);
      this.onChangeDescription = this.onChangeDescription.bind(this);
      this.onChangeType = this.onChangeType.bind(this);
      this.onChangeAdvantageText = this.onChangeAdvantageText.bind(this);
      this.onSubmitService = this.onSubmitService.bind(this);
    }
    onChangeName(e){
        this.setState({name: e.target.value})
    }
    onChangeImage(e){
        this.setState({image: e.target.value})
    }
    onChangeDescription(e){
        this.setState({description: e.target.value})
    }
    onChangeType(e){
        this.setState({type: e.target.value})
    }
    onChangeAdvantageText(e){
        this.setState({advantage_text: e.target.value})
    }
    //function react js
    onGetValue = () => {
        const url = window.location.pathname
        const strs = url.split('/');
        const id = strs.at(-1);
        // console.log(id);
        axios.get('http://127.0.0.1:8000/api/getIdReactServiceEdit/'+id).then((response)=>{
            this.setState({
                service:response.data.data,
            })
            this.state.service.map((sv)=>{
                this.state.newService.push(sv);
            })
            this.state.newService.map((newsv)=>{
                this.setState({
                 name : newsv.name,
                 image : newsv.image,
                 description :newsv.description,
                 type: newsv.type,
                 advantage_text : newsv.advantage_text,
                })
            })
        }).catch(err=>{
            alert(err);
        })
    }
    onSubmitService = (e)=>{
        e.preventDefault();
       const data ={
        name: this.state.name,
        image: this.state.image,
        description: this.state.description,
        type: this.state.type,
        advantage_text: this.state.advantage_text,
       }
        const url = window.location.pathname
        const strs = url.split('/');
        const id = strs.at(-1);
        axios.post('http://127.0.0.1:8000/api/EditService/'+id,data).then(response => {
         var a = this.setState({
          message: response.data.message,
        })
        Swal.fire({
            icon: 'success',
            text:this.state.message,
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
      this.onGetValue()
    }
    render(){
        return (
        <div  className="container-admin">
            <div  className="row-admin">
            <NavBar />
             <div className="main-admin">
                <div className="col-md-12">
                    <div className="col-auto">
                        <h1 className="text-primary text-center" style={{color:"white"}}>Welcome to EditService</h1>
                        <form action="#" onSubmit={this.onSubmitService} method="post" role="form" encType="multipart/form-data">
                            <legend>FormAdd Service</legend>

                            <div className="form-group">
                                <label htmlFor="">Service Name</label>
                                <input type="text" class="form-control" name="name" value={this.state.name} onChange={this.onChangeName} placeholder="Name..." />
                            </div>
                            <div class="form-group">
                                <label htmlFor="">Service Image</label>
                                <input type="text" class="form-control" name="image" value={this.state.image} onChange={this.onChangeImage} placeholder="Image..." readonly />
                            </div>
                            <div class="form-group">
                                <label htmlFor="">Service Description</label>
                                <input type="text" class="form-control" name="description" value={this.state.description} onChange={this.onChangeDescription} placeholder="Description..." />
                            </div>
                            <div class="form-group">
                                <label htmlFor="">Service Type</label>
                                <textarea type="text" class="form-control" name="type" value={this.state.type} onChange={this.onChangeType} placeholder="Description..." />
                            </div>
                            <div class="form-group">
                                <label htmlFor="">Service Benefit</label>
                                <textarea type="text" class="form-control" name="advantage_text" value={this.state.advantage_text} onChange={this.onChangeAdvantageText} placeholder="Benefit..." />
                            </div>
                            <button type="submit" class="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </div>
             </div>
            </div>
        </div>
      );
    }
}
export default EditService
