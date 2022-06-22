import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import {Link } from 'react-router-dom'
class Header extends Component {
    constructor(props){
        super(props);
        this.state ={

        }
        this.showBar = this.showBar.bind(this);
    }
    // mouseover1(){
    //     $('#identical-class-li-bar1').on('mouseenter',function(){
    //         $('#list-group1').show('slow');
    //     })
    //     $('#list-group1').on('mouseleave',function(){
    //         $(this).hide('slow');
    //     })
    // }
    // mouseover2(){
    //     $('#identical-class-li-bar2').on('mouseenter',function(){
    //         $('#list-group2').show('slow');
    //     })
    //     $('#list-group2').on('mouseleave',function(){
    //         $(this).hide('slow');
    //     })
    // }
    // mouseover3(){
    //     $('#identical-class-li-bar3').on('mouseenter',function(){
    //         $('#list-group3').show('slow');
    //     })
    //     $('#list-group3').on('mouseleave',function(){
    //         $(this).hide('slow');
    //     })
    // }
    // mouseover4(){
    //     $('#identical-class-li-bar4').on('mouseenter',function(){
    //         $('#list-group4').show('slow');
    //     })
    //     $('#list-group4').on('mouseleave',function(){
    //         $(this).hide('slow');
    //     })
    // }
    // forClose(){
    //     $('header-bar').on('mouseleave',function(){
    //         $('#list-group1').hide();
    //         $('#list-group2').hide();
    //         $('#list-group3').hide();
    //         $('#list-group4').hide();
    //     })
    // }
    showBar= ()=>{
        $('#header-bar').show()
      }
    // this method will call to those functions has defined inside this method when it reload page
    componentDidMount(){
        // this.mouseover1();
        // this.mouseover2();
        // this.mouseover3();
        // this.mouseover4();
        // this.forClose();
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
                      <div id="icon-menu" onClick={()=>this.showBar()}></div>
                      <div className="header-bar" id="header-bar">
                          <ul className="main-bar" id="main-bar">
                               <li className="identical-class-li-bar"><i className="fa fa-home"><Link className="link" to="/">Home</Link></i></li>
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
            </div>
        );
    }
}
export default Header;
