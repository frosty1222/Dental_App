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
                                                            <legend>implant</legend>
                                                       </div>
                                                       <div className="service-text">
                                                            <p>
                                                             Cấy ghép Implant là phương pháp trồng răng giả cố định ưu viết nhất hiện nay, một trụ implant titanium được cấy ghép trực tiếp vào xương hàm và tích hợp hoàn toàn vào xương hàm có chức năng như chân răng thật, sau đó cố định mão sứ lên trên trụ implant.
                                                             Kết quả: răng được khôi phục hoàn toàn.
                                                             <br/>
                                                             <br/>
                                                             Ưu điểm vượt trội của răng Implant: tuổi thọ trọn đời, sức nhai khỏe, không mài các răng kế cận, thẩm mỹ cao, ngắn tiêu xương hàm, hóp má và tựu nướu.
                                                            </p>
                                                       </div>
                                                       <div className="service-img">
                                                             <img src="/img/images/Nha-khoa_03b.jpg" />
                                                       </div>
                                                       <div className="item2-heading">
                                                           <legend>ưu điểm</legend>
                                                       </div>
                                                       <div className="item2-text">
                                                           <p>
                                                            Sử dụng trọn đời
                                                            <br/>
                                                            Thoải mái về lâu dài khi implant hoàn toàn ổn định
                                                            <br/>
                                                            Ngăn ngừa sự tiêu xương do mất răng
                                                            <br/>
                                                            Kỹ thuật bảo tồn nhất, không phải mài răng, lấy tủy
                                                            <br/>
                                                            Tránh những khuyết điểm mà hàm giả tháo lắp gặp phải (lỏng léo, vướng víu)
                                                            <br/>
                                                            Chức năng ăn nhai tốt như răng thật
                                                            <br/>
                                                            Gần giống như răng thật về thẩm mỹ lẩn chức năng
                                                           </p>
                                                       </div>
                                                   </li>
                                                   <li  className="service-item2">
                                                        <div className="item3-heading">
                                                            <legend>các dịch vụ khác</legend>
                                                        </div>
                                                        <div className="item-img">
                                                             <ul className="item-img-ul">
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
                                                             </ul>
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
