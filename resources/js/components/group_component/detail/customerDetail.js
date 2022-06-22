import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';
import Leftbar from '../../layouts/Leftbar';
import Banner from '../../suppliment/Banner';
import Header from '../../layouts/Header';
import Footer from '../../layouts/Footer';
const largerSign = '>';
class CustomerDetail extends Component {
    constructor(props){
       super(props);
       //defining variable and array or objects to return to react js view
      this.state = {
        name:'',
        image:'',
        advantage:'',
        disadvantage:'',
        another:'',
        message:'',
        customer:[],
        newCustomer:[],
      }
    }
    //function react js
    onSelectValue = ()=>{
        const url = window.location.pathname
        const strs = url.split('/');
        const id = strs.at(-1);
        axios.get('http://127.0.0.1:8000/api/cgetID/'+id)
        .then((response) =>{
           this.setState({
            customer: response.data.data,
           })
           this.state.customer.map((n)=>{
            this.state.newCustomer.push(n);
           })

           this.state.newCustomer.map((m) =>{
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
    // this method will call to those functions has defined inside this method when it reload page
    componentDidMount(){
        this.onSelectValue();
    }
    render(){
        return (
            <div className="container-app">
            <div className="row-app">
                <div className="child-container">
                    <Header />
                       {/* code content */}
                       <div className="child-main">
                        <Banner bannerWord="Chỉnh nha chuyên khoa chi tiết" />
                       <div className="inner-main">
                           <legend className="hint-word">Home { largerSign } Chỉnh nha chuyên khoa chi tiết</legend>
                               <div className="child-inner-main">
                                  <Leftbar />
                                  <div className="clearfix"></div>
                                  <div className="right-list-container">
                                        <legend className="eo-detail-legend">
                                      {this.state.name}
                                        </legend>
                                        <div className="main-oe-detail">
                                             <div className="above-oedetail-img">
                                             <img src={"/uploads/"+this.state.image} />
                                                   <p>Những điều cần biết khi chỉnh nha </p>
                                             </div>
                                             <div className="oe-group">
                                                <ul className="list-oe">
                                                     <li className="list-oe-child">
                                                        1.những ưu điểm
                                                        <br></br>
                                                        <p className="text-success">
                                                           {this.state.advantage}
                                                        </p>
                                                     </li>
                                                     <li className="list-oe-child">
                                                        2.những nhược điểm
                                                        <br></br>
                                                        <p className="text-success">
                                                        {this.state.disadvantage}
                                                        </p>
                                                     </li>
                                                     <li className="list-oe-child">
                                                       3.những Hậu Quả khi không áp chữa chị sớm các bệnh về răng, lợi
                                                        <br></br>
                                                        <p className="text-success">
                                                         {this.state.another}
                                                        </p>
                                                     </li>
                                                </ul>
                                             </div>
                                        </div>
                                  </div>
                              </div>
                           </div>
                       </div>
                     {/*end code */}
                    <Footer/>
                </div>
            </div>
        </div>
      );
    }
}
export default CustomerDetail;
