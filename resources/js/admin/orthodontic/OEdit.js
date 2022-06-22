import React,{Component} from 'react';
import Swal from 'sweetalert2';
import axios from 'axios';
import NavBar from '../capital/NavBar';
class OEdit extends Component{
   constructor(props){
    super(props);
    this.state = {
        name:'',
        image:'',
        advantage:'',
        disadvantage:'',
        another:'',
        message:'',
        Or:[],
        NewO:[],
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
   onSelectValue = ()=>{
    const url = window.location.pathname
    const strs = url.split('/');
    const id = strs.at(-1);
    axios.get('http://127.0.0.1:8000/api/ogetID/'+id)
    .then((response) =>{
       this.setState({
        Or: response.data.data,
       })
       this.state.Or.map((n)=>{
        this.state.NewO.push(n);
       })

       this.state.NewO.map((m) =>{
            this.setState({
                name:m.name,
                image:m.image,
                advantage :m.advantage,
                disadvantage:m.disadvantage,
                another :m.another,
            })
       })
       }).catch((error) =>{
        alert(error.message);
    })
   }
   onSubmit = (e)=>{
    e.preventDefault()
    const url = window.location.pathname
    const strs = url.split('/');
    const id = strs.at(-1);
    const data = {
        name:this.state.name,
        image:this.state.image,
        advantage:this.state.advantage,
        disadvantage:this.state.disadvantage,
        another:this.state.another,
    }
    axios.post('http://127.0.0.1:8000/api/oedit/'+id,data).then((res)=>{
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
    this.onSelectValue();
  }
  render(){
    return (
        <div  className="container-admin">
        <div  className="row-admin">
        <NavBar />
         <div className="main-admin">
            <div className="col-md-12">
                <div className="col-auto">
                  <legend className="text-success" style={{color: 'white'}}>Welcome to orthodontic Oadd form</legend>

                  <form action="#" onSubmit={this.onSubmit} method="POST" role="form">
                    <legend>Form OAdd New Orthodontic</legend>

                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" className="form-control" name="name" placeholder="Name..." value={this.state.name} onChange={this.onChangeName} />
                    </div>

                    <div className="form-group">
                        <label htmlFor="image">Image</label>
                        <input type="text" className="form-control" name="image" placeholder="Image..." value={this.state.image} onChange={this.onChangeImage} readOnly />
                    </div>

                    <div className="form-group">
                        <label htmlFor="advantage">Advantage</label>
                        <textarea type="text" className="form-control" name="advantage" placeholder="Advantage..." value={this.state.advantage} onChange={this.onChangeAdvantage}/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="disadvantage">DisAdvantage</label>
                        <textarea type="text" className="form-control" name="disadvantage" placeholder="DisAdvantage..." value={this.state.disadvantage} onChange={this.onChangeDisAdvantage} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="another">Another</label>
                        <textarea type="text" className="form-control" name="another" placeholder="Another..." value={this.state.another} onChange={this.onChangeAnother} />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                  </form>

                </div>
            </div>
         </div>
        </div>
    </div>
    )
  }
}
export default OEdit;
