import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import NavBar from '../capital/NavBar';
import { Outlet } from "react-router-dom";
import axios from 'axios';
import Swal from 'sweetalert2';
class AddNewService extends Component {
    constructor(props){
       super(props);
       //defining variable and array or objects to return to react js view
      this.state = {
        category:[],
        name:'',
        image:'',
        description:'',
        type:'',
        advantage_text:'',
        message:'',
      }
      this.onChangeName = this.onChangeName.bind(this);
      this.onChangeImage = this.onChangeImage.bind(this);
      this.onChangeDescription = this.onChangeDescription.bind(this);
      this.onChangeType = this.onChangeType.bind(this);
      this.onChangeAdvantageText = this.onChangeAdvantageText.bind(this);
      this.onSubmitService = this.onSubmitService.bind(this);
    }
    //function react js

    onChangeName(e){
        this.setState({name: e.target.value})
    }
    onChangeImage(e){
        this.setState({image: e.target.files[0]})
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
    onSelectType =()=>{
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
    }

    onSubmitService = (e)=>{
        e.preventDefault();
       const data = new FormData()
        data.append('name', this.state.name)
        data.append('upload', this.state.image)
        data.append('description', this.state.description)
        data.append('type', this.state.type)
        data.append('advantage_text', this.state.advantage_text)
        axios.post('http://127.0.0.1:8000/api/addNewService',data).then((response) => {
        this.setState({
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
        this.onSelectType();
    }
    render(){
        return (
        <div  className="container-admin">
            <div  className="row-admin">
            <NavBar />
             <div className="main-admin">
                <div className="col-md-12">
                    <div className="col-auto">
                        <h1 className="text-primary text-center" style={{color:"white"}}>Welcome to AddNewService</h1>

                        <form action="#" onSubmit={this.onSubmitService} method="post" role="form" encType="multipart/form-data">
                            <legend>FormAdd Service</legend>

                            <div className="form-group">
                                <label htmlFor="">Service Name</label>
                                <input type="text" className="form-control" name="name" placeholder="Name..." onChange={this.onChangeName} />
                            </div>
                            <div className="form-group">
                                <label  htmlFor="">Service Image</label>
                                <input type="file" className="form-control" name="upload" placeholder="Image..." onChange={this.onChangeImage} />
                            </div>
                            <div className="form-group">
                                <label  htmlFor="">Service Description</label>
                                <textarea type="text" className="form-control" name="description" placeholder="Description..." onChange={this.onChangeDescription} />
                            </div>
                            <div className="form-group">
                                 <label  htmlFor="">Service Type</label>
                                    <select name="type"  className="form-control" required="required" onChange={this.onChangeType}>
                                    <option value=""></option>
                                        {
                                        this.state.category.length >0 ? (
                                        this.state.category.map((cate)=>(
                                        <option value={cate.service_type} key={cate.id}>{cate.name}</option>
                                        ))
                                    ):(
                                    'nothing there'
                                    )
                                    }
                                    </select>
                            </div>
                            <div className="form-group">
                                <label  htmlFor="">Service Description</label>
                                <textarea type="text" className="form-control" name="advantage_text" placeholder="Advantage..." onChange={this.onChangeAdvantageText} />
                            </div>
                            <button type="submit" className="btn btn-primary"  onClick={this.onFileUpload}>Submit</button>
                        </form>
                    </div>
                </div>
             </div>
            </div>
        </div>
      );
    }
}
export default AddNewService
