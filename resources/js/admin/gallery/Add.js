import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import NavBar from '../capital/NavBar';
class Add extends Component {
    constructor(props){
       super(props);
       //defining variable and array or objects to return to react js view
      this.state = {
        image:'',
        responseMsg: {
            status: "",
            message: "",
            error: "",
        },
      }
    }
    handleChange = (e) => {
        this.setState({
            image: e.target.files[0]
        })
    }
    submitHandler = (e) => {
        e.preventDefault();
        const data = new FormData()
        data.append('upload', this.state.image)

        axios.post("http://127.0.0.1:8000/api/upload", data)
        .then((response) => {
            if (response.status === 200) {
            this.setState({
                responseMsg: {
                status: response.data.status,
                message: response.data.message,
                },
            });
            setTimeout(() => {
                this.setState({
                image: "",
                responseMsg: "",
                });
            }, 2000);

            document.querySelector("#imageForm").reset();
            // getting uploaded images
            }
        })
        .catch((error) => {
            console.error(error);
        });
        console.log(this.state.image);
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

                        <form action="#" onSubmit={this.submitHandler}  role="form" encType="multipart/form-data" id="imageForm">
                        <div className="card shadow">
                            {this.state.responseMsg.status === "success" ? (
                            <div className="alert alert-success">
                                {this.state.responseMsg.message}
                            </div>
                            ) : this.state.responseMsg.status === "failed" ? (
                            <div className="alert alert-danger">
                                {this.state.responseMsg.message}
                            </div>
                            ) : (
                            ""
                            )}
                           </div>
                            <legend>Form Add Image</legend>

                            <div className="form-group">
                                <label htmlFor="images">Image</label>
                                <input type="file" className="form-control" name="upload"  onChange={this.handleChange} />
                            </div>
                            <button  className="btn btn-primary" onClick={this.onFileUpload}>Submit</button>
                        </form>

                    </div>
                </div>
             </div>
            </div>
        </div>
      );
    }
}
export default Add;
