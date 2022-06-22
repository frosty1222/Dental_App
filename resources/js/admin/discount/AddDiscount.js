import NavBar from '../capital/NavBar';
import React,{Component} from 'react';
import axios from "axios";
import Swal from 'sweetalert2';
class AddDiscount extends Component {
      constructor(props){
        super(props);
        //defining variable and array or objects to return to react js view
       this.state ={
        name:'',
        image:'',
        description:'',
        expired_date:'',
        discount_percent:'',
        message:'',
       }
       this.onChangeName  = this.onChangeName.bind(this)
       this.onChangeImage = this.onChangeImage.bind(this);
       this.onChangeDescription  = this.onChangeDescription.bind(this)
       this.onChangeExpiredDate = this.onChangeExpiredDate.bind(this)
       this.onChangeDiscountPercent = this.onChangeDiscountPercent.bind(this)
       this. onSubmitDiscount= this.onSubmitDiscount.bind(this)
      }
        onChangeName(e){
            this.setState({name: e.target.value})
        }
        onChangeImage(e){
            this.setState({image: e.target.files[0]})
        }
        onChangeDescription(e){
            this.setState({description: e.target.value})
        }
        onChangeExpiredDate(e){
            this.setState({expired_date: e.target.value})
        }
        onChangeDiscountPercent(e){
            this.setState({discount_percent: e.target.value})
        }
       onSubmitDiscount = (e)=>{
        e.preventDefault();
       const data = new FormData()
       data.append('name', this.state.name)
       data.append('upload', this.state.image)
       data.append('description', this.state.description)
       data.append('expired_date', this.state.expired_date)
       data.append('discount_percent', this.state.discount_percent)
        axios.post('http://127.0.0.1:8000/api/discount_add',data).then((response) => {
        this.setState({
          message: response.data.message,
        })
        Swal.fire({
            icon: 'success',
            text:this.state.message,
            showCancelButton: true,
            confirmButtonText: 'Ok',
            confirmButtonColor: '#e3342f',
        });
     })
     .catch(err=>{
        alert(err.message);
     })
    }
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

                        <form onSubmit={this.onSubmitDiscount} method="post" role="form" encType="multipart/form-data" action="#">
                              <legend style={{color:"white"}}>Form add Discount</legend>
                              <div className="form-group">
                                 <label htmlFor="name">Name</label>
                                <input type="text" className="form-control" name="name" value={this.state.name} onChange={this.onChangeName} placeholder="Name..." />
                              </div>

                              <div className="form-group">
                                 <label htmlFor="image">Image</label>
                                <input type="file" className="form-control" name="upload"   onChange={this.onChangeImage} placeholder="Image..."/>
                              </div>

                              <div className="form-group">
                                 <label htmlFor="description">Description</label>
                                <textarea type="text" className="form-control" name="description" value={this.state.description}  onChange={this.onChangeDescription} placeholder="Description..." />
                              </div>
                              <div className="form-group">
                                 <label htmlFor="expired_date">Expired Date</label>
                                <input type="date" className="form-control" name="expired_date" value={this.state.expired_date} onChange={this.onChangeExpiredDate} placeholder="Expired Date..." />
                              </div>
                              <div className="form-group">
                                 <label htmlFor="discount_percent">Discount Percent</label>
                                <input type="text" className="form-control" name="discount_percent" value={this.state.discount_percent}  onChange={this.onChangeDiscountPercent} placeholder="Discount Percent..." />
                              </div>
                            <button type="submit" className="btn btn-primary" onClick={this.onFileUpload}>Submit</button>
                        </form>
                    </div>
                </div>
             </div>
            </div>
        </div>
      );
    }
}
export default AddDiscount;
