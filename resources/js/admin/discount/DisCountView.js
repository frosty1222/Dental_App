import React,{Component} from 'react';
import NavBar from '../capital/NavBar';
import axios from 'axios';
import {Link} from 'react-router-dom';
class DiscountView extends Component {
    constructor(props){
       super(props);
       //defining variable and array or objects to return to react js DiscountView
      this.state = {
       discount:[],
        message:'',
        increase:1,
      }
      this.Delete = this.Delete.bind(this);
    }
    getImages = () => {
        axios.get("http://127.0.0.1:8000/api/GetAllDiscountData")
          .then((response) => {
              this.setState({
                discount: response.data.data,
              });

          })
          .catch((error) => {
            console.error(error);
          });
      };
      Delete(id){
         axios.post('http://127.0.0.1:8000/api/DeleteDiscount/'+id).then(res => {
            this.setState(prevState => ({
              discount: prevState.discount.filter(el => el.id !== id )
            }))
            var a = this.setState({
                message:res.data.message,
             })
             alert(this.state.message);
             window.location.reload(true);
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
                        <Link to="/add_discount" style={{color:"white"}}>add new discount</Link>
                    <table className="table table-responsive">
                        <thead>
                            <tr>
                                <th>No.</th>
                                <th>Images</th>
                                <th>Expired Date</th>
                                <th>Discount Percent</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.discount.length >0 ? (
                                 this.state.discount.map((d)=>(
                                    <tr key={d.id}>
                                    <td>{this.state.increase++}</td>
                                    <td><img src={"uploads/"+d.image} width="70"/></td>
                                    <td>{d.expired_date}</td>
                                    <td>{d.discount_percent}</td>
                                    <td>
                                        <Link to={"/edit_discount/"+d.id} className="btn btn-primary">Edit</Link>
                                        <button onClick={() =>this.Delete(d.id)} className="btn btn-danger">Delete</button>
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
export default DiscountView;
