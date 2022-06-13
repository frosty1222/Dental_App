import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';
import Aidsection from './aidsection';
// import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router'
class Home extends Component {
    constructor(props){
       super(props);
       //defining variable and array or objects to return to react js view
      this.state = {
        list:[],
      }
    }
    //function react js
    mouseover1(){
        $('#identical-class-li-bar1').on('mouseenter',function(){
            $('#list-group1').show('slow');
        })
        $('#list-group1').on('mouseleave',function(){
            $(this).hide('fast');
        })
    }
    mouseover2(){
        $('#identical-class-li-bar2').on('mouseenter',function(){
            $('#list-group2').show('slow');
        })
        $('#list-group2').on('mouseleave',function(){
            $(this).hide('fast');
        })
    }
    mouseover3(){
        $('#identical-class-li-bar3').on('mouseenter',function(){
            $('#list-group3').show('slow');
        })
        $('#list-group3').on('mouseleave',function(){
            $(this).hide('fast');
        })
    }
    mouseover4(){
        $('#identical-class-li-bar4').on('mouseenter',function(){
            $('#list-group4').show('slow');
        })
        $('#list-group4').on('mouseleave',function(){
            $(this).hide('fast');
        })
    }
    forClose(){
        $('header-bar').on('mouseleave',function(){
            $('#list-group1').hide();
            $('#list-group2').hide();
            $('#list-group3').hide();
            $('#list-group4').hide();
        })
    }
    // this method will call to those functions has defined inside this method when it reload page
    componentDidMount(){
        this.mouseover1();
        this.mouseover2();
        this.mouseover3();
        this.mouseover4();
        this.forClose();
    }
    render(){
        return (
        <div  className="container-home">
            <div  className="row-home">
                  <div className="header">
                      <div className="logo-img">
                        <img id="logo-img" src="/img/images/logo.jpeg" alt="" />
                          <h3 className="under-logo-text">chuyên gia chỉnh nha hàng đầu</h3>
                          <div className="under-logo">
                            <ul className="social-link">
                              <li className="li-text">connect with us:</li>
                              <li><i className="fa fa-facebook"></i></li>
                              <li><i className="fa fa-google-plus-circle"></i></li>
                              <li><i className="fa fa-twitter"></i></li>
                              <li><i className="fa fa-youtube-square"></i></li>
                              <li><i className="fa fa-phone">01234567899</i></li>
                          </ul>
                          </div>
                      </div>
                      <div className="clearfix"></div>
                      <div className="header-bar" id="header-bar">
                          <ul className="main-bar" id="main-bar">
                               <li className="home-fa"><i className="fa fa-home"><Link className="link" to="/">Home</Link></i></li>
                               <li className="identical-class-li-bar"  id="identical-class-li-bar1">
                                <Link className="link" to="/eorthodontic">Chỉnh Nha chuyên gia</Link>
                                   <ul className="list-group" id="list-group1">
                                           <li>Các Loại Hình Chỉnh Nha</li>
                                           <li>Chuyên Gia</li>
                                           <li>Các Ca Chỉnh Nha Thành Công</li>
                                   </ul>
                               </li>
                               <li className="identical-class-li-bar" id="identical-class-li-bar2">
                                <Link className="link" to="/service">Dịch Vụ nha khoa</Link>
                                <ul className="list-group" id="list-group2">
                                           <li>Chỉnh Nha</li>
                                           <li>Chỉnh Hình Xương</li>
                                           <li>Nha Khoa Thẩm Mỹ</li>
                                           <li>Nha Khoa Trẻ Em</li>
                                           <li>Nha Khoa Tổng Quát</li>
                                           <li>Phục Hình xương</li>
                                   </ul>
                               </li>
                               <li className="identical-class-li-bar"  id="identical-class-li-bar3">
                                <Link className="link" to="/icustomer">Khách hàng</Link>
                                  <ul className="list-group" id="list-group3">
                                           <li>Hỏi Đáp</li>
                                           <li>Đặt Lịch Hẹn</li>
                                   </ul>
                                </li>
                               <li className="identical-class-li-bar"><Link className="link" to="/discount">Bảng Giá - khuyến mãi</Link></li>
                               <li className="identical-class-li-bar"  id="identical-class-li-bar4">
                                <Link className="link" to="/about">Giới thiệu</Link>
                                <ul className="list-group" id="list-group4">
                                        <li>Về Chúng Tôi</li>
                                        <li>Gặp Gỡ T.S Võ Thị Thúy Hồng</li>
                                        <li>Tham Quan Nha Khoa Rose</li>
                                        <li>Thư Viện Nụ Cười</li>
                                   </ul>
                               </li>
                               <li className="identical-class-li-bar"><Link className="link" to="/news">Tin tức</Link></li>
                               <li className="identical-class-li-bar"><Link className="link" to="/contact">Liên hệ</Link></li>
                          </ul>
                      </div>
                  </div>
            </div>
            <div className="clearfix"></div>
            <Aidsection />
               <div className="clearfix"></div>
                <div className="under-tag">
                <ul className="main-tag">
                    <li className="service-tag">dịch vụ tại nha khoa rose</li>
                    <li className="appoint-tag">
                        gặp gỡ tiến sĩ răng hàm mặt
                        <br></br>
                        <br></br>
                        <span>võ thị thúy hồng</span>
                    </li>
                    <li className="visit-tag">tham quan văn phòng</li>
                </ul>
            </div>
            <div className="clearfix"></div>
            <div className="text-section">
                <div className="main-text-section">
                    <div className="inner-sec">
                      <div className="left-text-img">
                        <img src="/img/images/middle_2.jpg" />
                       </div>
                        <div className="center-text-lines">
                            Chào mừng bạn đến với nhan Nha khoa Rose, một nhà cung cấp được kính
                            trọng trong cộng đồng chăm sóc chỉnh nha của bạn. Tọa lạc tại Hà Nội,
                            ưu tiên hàng đầu của cơ sở thực hành là cung cấp cho bạn dịch vụ chăm
                            sóc chỉnh nha chất lượng cao nhất trong một môi trường thân thiện,
                            thoải mái. Chúng tôi sử dụng những tiến bộ công nghệ mới nhất trong ngành,
                            chẳng hạn như mắc cài sứ, cùng với công nghệ máy tính mới nhất
                            (hình ảnh kỹ thuật số và đồ họa máy tính tiên tiến) để đảm bảo rằng bạn
                                           <br/>  nhận được sự chăm sóc hiệu quả nhất có thể.
                            <br/>
                            <br/>
                            Chúng tôi nhận ra rằng mỗi bệnh nhân đều có những nhu cầu khác nhau và
                            chúng tôi tự hào về dịch vụ lịch sự mà chúng tôi cung cấp cho mỗi người
                            đến khám bệnh. Cho dù bạn là người lớn, thanh thiếu niên hay trẻ em, bác
                            sĩ và nhân viên am hiểu của chúng tôi, với gần 10 năm kinh nghiệm kết hợp,
                            cam kết giúp bạn
                                      <br/> đạt được nụ cười xứng đáng - một nụ cười khỏe đẹp!
                        </div>
                        <div className="right-text-img">
                            <img src="/img/images/middle_img.jpg" />
                        </div>
                    </div>

                </div>
            </div>
            <div className="clearfix"></div>
            <br/>
            <br/>
            <div className="youtube-related">
              <div className="youtube-container">
                 <video width="500" controls>
                  <source src="/video/pieces.mp4" type="video/mp4" />
                  </video>
               </div>
            </div>
            <div className="clearfix"></div>
            <div className="footer">
                <div className="inner-footer">
                    <legend>liên hệ với <span>chúng tôi</span></legend>
                    <ul className="infor-section">
                        <li>Địa chỉ
                            <br />
                            <span>A8 ngõ 217,la thành,đống đa, hà nội</span>
                        </li>
                        <li>thời gian làm việc
                            <br/>
                        <span>8h00 đến 18h00 từ thứ 2 đến thứ 7</span>
                        </li>
                        <li>điện thoại
                            <br/>
                        <span>tell:09323423434-mobile:342535345-hotline:32423545634</span>
                        </li>
                        <li>email
                            <br/>
                        <span>nhakhoarose@gmail.com</span>
                        </li>
                        <li>website
                            <br/>
                        <span>nhakhoarose.com</span>
                        </li>
                        <li className="book-appointment">
                            Đặt lịch hẹn
                            <br/>
                            <span>nha khoa rose sẽ liên hệ với quý khách hàng trong thời gian sớm nhất</span>
                        </li>
                    </ul>
                </div>
                <div className="clearfix"></div>
                <div className="copyright">
                    <em>© 2022. Bản quyền thuộc về Nha Khoa Rose.</em>
                </div>
                <div className="clearfix"></div>
                <div className="gallery">
                    <legend>
                        thư viện nụ cười tại <br/>
                         <span>nha khoa rose</span>
                    </legend>
                    <div className="inner-gallery">
                         <ul className="first-image-collumes">
                                <li><img src="/img/images/Nha-khoa_03.jpg" /></li>
                                <li><img src="/img/images/Nha-khoa_16.jpg" /></li>
                                <li><img src="/img/images/Nha-khoa_26.jpg" /></li>
                         </ul>
                         <ul className="second-image-collumes">
                                 <li><img src="/img/images/Nha-khoa_06.jpg" /></li>
                                 <li><img src="/img/images/Nha-khoa_13.jpg" /></li>
                                 <li><img src="/img/images/Nha-khoa_23.jpg" /></li>
                         </ul>
                         <ul className="third-image-collumes">
                                <li><img src="/img/images/Nha-khoa_09.jpg" /></li>
                                <li><img src="/img/images/Nha-khoa_19.jpg" /></li>
                         </ul>
                    </div>
                </div>
            </div>
        </div>
      );
    }
}
export default Home;
