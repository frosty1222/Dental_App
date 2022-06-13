import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';
import Header from '../layouts/Header';
import Footer from '../layouts/Footer';
import Banner from '../suppliment/Banner';
const largerSign = '>';
class Icustomer extends Component {
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
                       <div className="child-main"></div> {/* code content */}
                       <div className="child-main">
                           <Banner bannerWord="khách hàng hỏi đáp" />
                           <div className="clearfix"></div>
                        <div className="customer-controller">
                             <div className="customer-main">
                                    <div className="customer-title">
                                          Home {largerSign} khách hàng
                                    </div>
                               <div className="customer-content">
                                       <legend>Hỏi đáp</legend>
                                      <ul className="customer-list">
                                           <li>
                                              <div className="left-image-cus">
                                                  <img src="/img/images/Nha-khoa_11a.jpg" />
                                              </div>
                                              <div className="right-text-cus">
                                                 <p>
                                                    Máy lấy cao răng thương hiệu nhật bản đưuọc nhiều người tin dùng
                                                    <br/>
                                                    để có được một hàm răng thật trắng sáng,chắc khỏe với nụ cười tỏa sáng
                                                 </p>
                                              </div>
                                           </li>
                                           <li>
                                            <div className="left-image-cus">
                                                  <img src="/img/images/Nha-khoa_11a.jpg" />
                                              </div>
                                              <div className="right-text-cus">
                                                 <p>
                                                    Máy lấy cao răng thương hiệu nhật bản đưuọc nhiều người tin dùng
                                                    <br/>
                                                    để có được một hàm răng thật trắng sáng,chắc khỏe với nụ cười tỏa sáng
                                                 </p>
                                              </div>
                                           </li>
                                           <li>
                                            <div className="left-image-cus">
                                                  <img src="/img/images/Nha-khoa_11a.jpg" />
                                              </div>
                                              <div className="right-text-cus">
                                                 <p>
                                                    Máy lấy cao răng thương hiệu nhật bản đưuọc nhiều người tin dùng
                                                    <br/>
                                                    để có được một hàm răng thật trắng sáng,chắc khỏe với nụ cười tỏa sáng
                                                 </p>
                                              </div>
                                           </li>
                                           <li>
                                            <div className="left-image-cus">
                                                  <img src="/img/images/Nha-khoa_11a.jpg" />
                                              </div>
                                              <div className="right-text-cus">
                                                 <p>
                                                    Máy lấy cao răng thương hiệu nhật bản đưuọc nhiều người tin dùng
                                                    <br/>
                                                    để có được một hàm răng thật trắng sáng,chắc khỏe với nụ cười tỏa sáng
                                                 </p>
                                              </div>
                                           </li>
                                           <li>
                                            <div className="left-image-cus">
                                                  <img src="/img/images/Nha-khoa_11a.jpg" />
                                              </div>
                                              <div className="right-text-cus">
                                                 <p>
                                                    Máy lấy cao răng thương hiệu nhật bản đưuọc nhiều người tin dùng
                                                    <br/>
                                                    để có được một hàm răng thật trắng sáng,chắc khỏe với nụ cười tỏa sáng
                                                 </p>
                                              </div>
                                           </li>
                                           <li>
                                            <div className="left-image-cus">
                                                  <img src="/img/images/Nha-khoa_11a.jpg" />
                                              </div>
                                              <div className="right-text-cus">
                                                 <p>
                                                    Máy lấy cao răng thương hiệu nhật bản đưuọc nhiều người tin dùng
                                                    <br/>
                                                    để có được một hàm răng thật trắng sáng,chắc khỏe với nụ cười tỏa sáng
                                                 </p>
                                              </div>
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
export default Icustomer;
