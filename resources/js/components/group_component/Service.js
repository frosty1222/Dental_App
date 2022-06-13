import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';
import Header from '../layouts/Header';
import Footer from '../layouts/Footer';
import Banner from '../suppliment/Banner';
const  largerSign='>';
const  bannerWord ='service';
class Service extends Component {
    constructor(props){
       super(props);
       //defining variable and array or objects to return to react js view
      this.state = {
        list:[],
      }
    }
    //function react js
    ExampleFunction(){
    }
    // this method will call to those functions has defined inside this method when it reload page
    componentDidMount(){
        this.ExampleFunction();
    }
    render(){
        return (
            <div className="container">
            <div className="row justify-content-center">
                <div className="child-container">
                    <Header />
                       {/* code content */}
                       <div className="clearfix"></div>
                       <div className="child-main">
                            <Banner bannerWord="dịch vụ nha khoa" />
                           <div className="service-container">
                                 <div className="main-service">
                                      <div className="hint-service-word"><legend>Home {largerSign} dịch vụ nha khoa</legend></div>
                                       <div className="list-image-group-service">
                                             <ul className="inner-service-img-list">
                                                   <li>
                                                      <img src="/img/images/nieng_rang.jpg" />
                                                      <span><Link className="link-service"  to="/servicedetail/1">Chỉnh hình</Link></span>
                                                   </li>
                                                   <li>
                                                      <img  src="/img/images/Nha-khoa_06a.jpg" />
                                                      <span><Link className="link-service"  to="/servicedetail/1">Chỉnh nha</Link></span>
                                                   </li>
                                                   <li>
                                                      <img  src="/img/images/Nha-khoa_22b.jpg"/>
                                                      <span><Link className="link-service"  to="/servicedetail/1">Niểng răng trong suốt</Link></span>
                                                   </li>
                                                   <li>
                                                      <img  src="/img/images/implant.jpg" />
                                                      <span><Link className="link-service"  to="/servicedetail/1">Răng sứ thẩm mỹ</Link></span>
                                                   </li>
                                                   <li>
                                                      <img  src="/img/images/Nha-khoa_03b.jpg" />
                                                      <span><Link className="link-service"  to="/servicedetail/1">Implant</Link></span>
                                                   </li>
                                                   <li>
                                                      <img  src="/img/images/Nha-khoa_29b.jpg" />
                                                      <span><Link className="link-service" to="/servicedetail/1">Tráng răng</Link></span>
                                                   </li>
                                             </ul>
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
export default Service;
