import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';
import Header from '../../layouts/Header';
import Footer from '../../layouts/Footer';
import Leftbar from '../../layouts/Leftbar';
import Banner from '../../suppliment/Banner';
const largerSign ='>';
class ServiceDetail extends Component {
    constructor(props){
       super(props);
       //defining variable and array or objects to return to react js view
      this.state = {
        name:'',
        image:'',
        description:'',
        type:'',
        advantage_text:'',
        service:[],
        newService:[],
        service2:[],
      }
    }
    //function react js
    onGetValue = () => {
        const url = window.location.pathname
        const strs = url.split('/');
        const id = strs.at(-1);
        // console.log(id);
        axios.get('http://127.0.0.1:8000/api/getIdReactServiceEdit/'+id).then((response)=>{
            this.setState({
                service:response.data.data,
            })
            this.state.service.map((sv)=>{
                this.state.newService.push(sv);
            })
            this.state.newService.map((newsv)=>{
                this.setState({
                 name : newsv.name,
                 image : newsv.image,
                 description :newsv.description,
                 type: newsv.type,
                 advantage_text : newsv.advantage_text,
                })
            })
        }).catch(err=>{
            alert(err);
        })
    }
    onGetValue2 =() => {
        axios.get("http://127.0.0.1:8000/api/getAll2")
        .then((response) => {
          if (response.status === 200) {
            this.setState({
             service2: response.data.data,
            });
          //   console.log(this.state.category);
          }
        })
        .catch((error) => {
          console.error(error);
        });
      }
    // this method will call to those functions has defined inside this method when it reload page
    componentDidMount(){
        this.onGetValue();
        this. onGetValue2();
    }
    render(){
        return (
            <div className="container-app">
            <div className="row-app">
                <div className="child-container">
                    <Header />
                        {/* code content */}
                          <div className="child-main">
                              <Banner bannerWord="dịch vụ chi tiết" />
                              <div className="clearfix"></div>
                              <div className="inner-main">
                           <legend className="hint-word">Home { largerSign } Dịch vụ chi tiết</legend>
                               <div className="child-inner-main">
                                  <Leftbar />
                                  <div className="clearfix"></div>
                                  <div className="right-list-container">
                                         <div className="service-container">
                                              <ul className="service-content">
                                                   <li className="service-item1">
                                                       <div className="service-heading">
                                                            <legend>{this.state.name}</legend>
                                                       </div>
                                                       <div className="service-text">
                                                            <p>
                                                            {this.state.description }
                                                            </p>
                                                       </div>
                                                       <div className="service-img">
                                                             <img src={"/uploads/"+this.state.image} />
                                                       </div>
                                                       <div className="item2-heading">
                                                           <legend>ưu điểm</legend>
                                                       </div>
                                                       <div className="item2-text">
                                                           <p style={{textAlign:'justify'}}>
                                                              {this.state.advantage_text}<br/>
                                                           </p>
                                                       </div>
                                                   </li>
                                                   <li  className="service-item2">
                                                        <div className="item3-heading">
                                                            <legend>các dịch vụ khác</legend>
                                                        </div>
                                                        <div className="item-img">

                                                            <ul className="item-img-ul">
                                                                 {
                                                                this.state.service2.length > 0 ?(
                                                                    this.state.service2.map((sv2)=>(
                                                                 <li>
                                                                    <img  src={"/uploads/"+sv2.image}/>
                                                                    <br></br>
                                                                    <span><Link to={"/servicedetail/"+sv2.id}>{sv2.name}</Link></span>
                                                                 </li>
                                                               ))
                                                               ):(<span className="text-success">empty</span>)
                                                             }
                                                             </ul>

                                                             {/* <ul className="item-img-ul">
                                                                 <li>
                                                                    <img  src="/img/images/Nha-khoa_06a.jpg"/>
                                                                    <br></br>
                                                                    <span>chỉnh nha</span>
                                                                 </li>
                                                                 <li>
                                                                    <img  src="/img/images/Nha-khoa_22b.jpg"/>
                                                                    <br></br>
                                                                    <span>niềng răng trong suốt</span>
                                                                 </li>
                                                                 <li>
                                                                    <img  src="/img/images/Nha-khoa_29b.jpg"/>
                                                                    <br></br>
                                                                    <span>trắng răng</span>
                                                                 </li>
                                                                 <li>
                                                                    <img  src="/img/images/Nha-khoa_26b.jpg"/>
                                                                    <br></br>
                                                                    <span>implant</span>
                                                                 </li>
                                                             </ul> */}
                                                        </div>
                                                   </li>
                                              </ul>
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
export default ServiceDetail;
