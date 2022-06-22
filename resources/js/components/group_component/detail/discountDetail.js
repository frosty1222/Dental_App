import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';
import Leftbar from '../../layouts/Leftbar';
import Banner from '../../suppliment/Banner';
import Header from '../../layouts/Header';
import Footer from '../../layouts/Footer';
const largerSign = '>';
class ServiceDetail extends Component {
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
            <div className="container-app">
            <div className="row-app">
                <div className="child-container">
                    <Header />
                       {/* code content */}
                       <div className="child-main">
                        <Banner bannerWord="Giảm giá chi tiết" />
                       <div className="inner-main">
                           <legend className="hint-word">Home { largerSign } giảm giá chi tiết</legend>
                               <div className="child-inner-main">
                                  <Leftbar />
                                  <div className="clearfix"></div>
                                  <div className="right-list-container">
                                        <legend className="discount-detail-legend">
                                            khuyến mại tẩy trắng răng
                                            <br/>
                                            các bài viết liên quan
                                        </legend>
                                        <div className="main-discount-detail">
                                             <div className="above-discountdetail-img">
                                                  <img src="/img/images/discount2.jpg" />
                                                   <p>khuyến mãi chỉnh nha, niềng răng trong suốt</p>
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
export default ServiceDetail;
