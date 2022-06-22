import React,{Component} from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import NavBar from '../capital/NavBar';
class CAdd extends Component{
   constructor(props){
    super(props);
    this.state = {
        name:'',
        image:'',
        advantage:'',
        disadvantage:'',
        another:'',
        message:'',
    }
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeImage = this.onChangeImage.bind(this);
    this.onChangeAdvantage = this.onChangeAdvantage.bind(this);
    this.onChangeDisAdvantage = this.onChangeDisAdvantage.bind(this);
    this.onChangeAnother = this.onChangeAnother.bind(this);
   }
   onChangeName=(e)=>{
    this.setState({name:e.target.value})
   }
   onChangeImage =(e)=>{
    this.setState({image:e.target.files[0]})
   }
   onChangeAdvantage=(e)=>{
    this.setState({advantage:e.target.value})
   }
   onChangeDisAdvantage=(e)=>{
    this.setState({disadvantage:e.target.value})
   }
   onChangeAnother=(e)=>{
    this.setState({another:e.target.value})
   }
   onSubmit = (e)=>{
    e.preventDefault()
    const data = new FormData();
    data.append('name',this.state.name);
    data.append('upload',this.state.image);
    data.append('advantage', this.state.advantage);
    data.append('disadvantage',this.state.disadvantage);
    data.append('another',this.state.another);
    axios.post('http://127.0.0.1:8000/api/cadd',data).then((res)=>{
        this.setState({message:res.data.message});
        Swal.fire({
            icon: 'success',
            text:this.state.message,
            showCancelButton: true,
            confirmButtonText: 'Ok',
            confirmButtonColor: '#e3342f',
        })
    }).catch(err=>{
        console.log(err.message)
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
                  <legend className="text-success" style={{color: 'white'}}>Welcome to Customer question add form</legend>

                  <form action="#" onSubmit={this.onSubmit} method="POST" role="form">
                    <legend>Form CAdd New Orthodontic</legend>

                    <div class="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" class="form-control" name="name" placeholder="Name..." onChange={this.onChangeName} />
                    </div>

                    <div class="form-group">
                        <label htmlFor="image">Image</label>
                        <input type="file" class="form-control" name="image" placeholder="Image..." onChange={this.onChangeImage} />
                    </div>

                    <div class="form-group">
                        <label htmlFor="advantage">Advantage</label>
                        <textarea type="text" class="form-control" name="advantage" placeholder="Advantage..." onChange={this.onChangeAdvantage}/>
                    </div>

                    <div class="form-group">
                        <label htmlFor="disadvantage">DisAdvantage</label>
                        <textarea type="text" class="form-control" name="disadvantage" placeholder="DisAdvantage..." onChange={this.onChangeDisAdvantage} />
                    </div>
                    <div class="form-group">
                        <label htmlFor="another">Another</label>
                        <textarea type="text" class="form-control" name="another" placeholder="Another..." onChange={this.onChangeAnother} />
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                  </form>

                </div>
            </div>
         </div>
        </div>
    </div>
    )
  }
}
export default CAdd;
