import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import NavBar from '../capital/NavBar';
import { Outlet,Link } from "react-router-dom";
import axios from 'axios';
import Swal from 'sweetalert2';
class ViewNews extends Component {
    constructor(props){
       super(props);
       //defining variable and array or objects to return to react js view
      this.state = {
        message:'',
        news:[],
        increase:1,
      }
      this.DeleteNews = this.DeleteNews.bind(this);
    }
    //function react js
      onGetValue=() => {
        axios.get("http://127.0.0.1:8000/api/getNews")
        .then((response) => {
          if (response.status === 200) {
            this.setState({
             news: response.data.data,
            });
          //   console.log(this.state.category);
          }
        })
        .catch((error) => {
          console.error(error);
        });
      }
      DeleteNews(id){
        axios.post('http://127.0.0.1:8000/api/DeleteNews/'+id).then(res => {
            this.setState(prevState => ({
                news: prevState.news.filter(el => el.id !== id )
              }));
          var a = this.setState({
               message:res.data.message,
            })
            Swal.fire({
                icon: 'success',
                text:this.state.message,
                showCancelButton: true,
                confirmButtonText: 'Ok',
                confirmButtonColor: '#e3342f',
            })
            window.location.reload(true);
         })
         .catch(error => alert(error.message));
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
                        <h1 className="text-primary text-center" style={{color:"white"}}>Welcome to Service View</h1>
                        <div className="col-md-5 float-left text-success">
                            <Link to="/addNews" >Add new News</Link>
                        </div>
                        <table className="table table-bordered table-hover">
                            <thead>
                                <tr>
                                    <th>No.</th>
                                    <th>Heading</th>
                                    <th>Image</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.news.length >0 ? (
                                        this.state.news.map((ne)=>(
                                            <tr key={ne.id}>
                                            <td>{this.state.increase++}</td>
                                            <td>{ne.heading}</td>
                                            <td><img src={"uploads/"+ne.image} width="70" height="60" /></td>
                                            <td>
                                                <Link to={"/editNews/"+ne.id} className="btn btn-primary">Edit</Link>
                                                <button onClick={() =>this.DeleteNews(ne.id)} className="btn btn-danger">Delete</button>
                                            </td>
                                           </tr>
                                        ))
                                    ):(<span>empty</span>)
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
export default ViewNews;
