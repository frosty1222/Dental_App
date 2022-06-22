import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import NavBar from '../capital/NavBar';
import { Outlet } from "react-router-dom";
import axios from 'axios';
import Swal from 'sweetalert2';
class AddNews extends Component {
    constructor(props){
       super(props);
       //defining variable and array or objects to return to react js view
      this.state = {
        message:'',
        heading: '',
        image: '',
        intro_text: '',
        origin: '',
        advantage:'',
        reputation_proof: '',
      }
      this.onChangeHeading = this.onChangeHeading.bind(this);
      this.onChangeImage = this.onChangeImage.bind(this);
      this.onChangeIntroText = this.onChangeIntroText.bind(this);
      this.onChangeOrigin = this.onChangeOrigin.bind(this);
      this.onChangeAdvantage = this.onChangeAdvantage.bind(this);
      this.onChangeReputationProof = this.onChangeReputationProof.bind(this);
      this.onSubmitNews = this.onSubmitNews.bind(this);
    }
    //function react js

    onChangeHeading(e){
        this.setState({heading: e.target.value})
    }
    onChangeImage(e){
        this.setState({image: e.target.files[0]})
    }
    onChangeIntroText(e){
        this.setState({intro_text: e.target.value})
    }
    onChangeOrigin(e){
        this.setState({origin: e.target.value})
    }
    onChangeAdvantage(e){
        this.setState({advantage: e.target.value})
    }
    onChangeReputationProof(e){
        this.setState({reputation_proof: e.target.value})
    }

    onSubmitNews = (e)=>{
        e.preventDefault();
       const data = new FormData()
        data.append('heading', this.state.heading)
        data.append('upload', this.state.image)
        data.append('intro_text', this.state.intro_text)
        data.append('origin', this.state.origin)
        data.append('advantage', this.state.advantage)
        data.append('reputation_proof', this.state.reputation_proof)
        axios.post('http://127.0.0.1:8000/api/Addnews',data).then((response) => {
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

    }
    render(){
        return (
        <div  className="container-admin">
            <div  className="row-admin">
            <NavBar />
             <div className="main-admin">
                <div className="col-md-12">
                    <div className="col-auto">
                        <h1 className="text-primary text-center" style={{color:"white"}}>Welcome to AddNews;</h1>

                        <form action="#" onSubmit={this.onSubmitNews} method="post" role="form" encType="multipart/form-data">
                            <legend>FormAdd News</legend>

                            <div className="form-group">
                                <label htmlFor="">News Name</label>
                                <input type="text" className="form-control" name="heading" placeholder="heading..." onChange={this.onChangeHeading} />
                            </div>
                            <div className="form-group">
                                <label  htmlFor="">News Image</label>
                                <input type="file" className="form-control" name="upload" placeholder="Image..." onChange={this.onChangeImage} />
                            </div>
                            <div className="form-group">
                                <label  htmlFor="">News IntroText</label>
                                <textarea type="text" className="form-control" name="intro_text" placeholder="intro text..." onChange={this.onChangeIntroText} />
                            </div>
                            <div className="form-group">
                                <label  htmlFor="">Origin</label>
                                <textarea type="text" className="form-control" name="origin" placeholder="Origin..." onChange={this.onChangeOrigin} />
                            </div>
                            <div className="form-group">
                                <label  htmlFor="">Advantage</label>
                                <textarea type="text" className="form-control" name="advantage" placeholder="Advantage..." onChange={this.onChangeAdvantage} />
                            </div>
                            <div className="form-group">
                                <label  htmlFor="">Reputation Proof</label>
                                <textarea type="text" className="form-control" name="reputation_proof" placeholder="Reputation Proof..." onChange={this.onChangeReputationProof} />
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
export default AddNews;
