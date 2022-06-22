import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import NavBar from '../capital/NavBar';
import { browserHistory } from "react-router-dom";
import axios from 'axios';
import Swal from 'sweetalert2';
class View extends Component {
    constructor(props){
       super(props);
       //defining variable and array or objects to return to react js view
      this.state = {
        images:[],
        message:'',
        increase:1,
      }
      this.Delete = this.Delete.bind(this);
    }
    getImages = () => {
        axios
          .get("http://127.0.0.1:8000/api/images")
          .then((response) => {
            if (response.status === 200) {
              this.setState({
                images: response.data.data,
              });

            }
          })
          .catch((error) => {
            console.error(error);
          });
      };
      Delete(id){
         axios.post('http://127.0.0.1:8000/api/deleteI/'+id).then(res => {
            this.setState(prevState => ({
              images: prevState.images.filter(el => el.id !== id )
            }));
            var a = this.setState({
                message:res.data.message,
             })
             alert(this.state.message);
          })
          .catch(error => console.log(error));
      }
    //function react js
    // this method will call to those functions has defined inside this method when it reload page
    componentDidMount(){
        this.getImages();
    }
    render(){
        return (
        <div  className="container-admin">
            <div  className="row-admin">
            <NavBar />
             <div className="main-admin">
                <div className="col-md-12">
                    <div className="col-md-10">
                    <table className="table table-responsive">
                        <thead>
                            <tr>
                                <th>No.</th>
                                <th>Images</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.images.length >0 ? (
                                 this.state.images.map((image)=>(
                                    <tr key={image.id}>
                                    <td>{this.state.increase++}</td>
                                    <td><img src={"uploads/"+image.image} width="70"/></td>
                                    <td>
                                        <a href={"/editgal/"+image.id} className="btn btn-primary">Edit</a>
                                        <button onClick={() =>this.Delete(image.id)} className="btn btn-danger">Delete</button>
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
export default View;
