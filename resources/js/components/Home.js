import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';
import Aidsection from './aidsection';
import { Outlet } from "react-router-dom";
import axios from 'axios';
// import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router'
class Home extends Component{
    constructor(props){
       super(props);
       //defining variable and array or objects to return to react js view
      this.state = {
        countTime:0,
        gallery:[],
      }
      this.showBar= this.showBar.bind(this);
    }
    getImages = () => {
        axios.get("http://127.0.0.1:8000/api/images")
          .then((response) => {
            if (response.status === 200) {
              this.setState({
                gallery: response.data.data,
              });

            }
          })
          .catch((error) => {
            console.error(error);
          });
      };
      showBar= ()=>{
        $('#header-bar').show()
      }
    //function react js
    // mouseover1(){
    //     $('#identical-class-li-bar1').on('mouseenter',function(){
    //         $('#list-group1').show('slow');
    //     })
    //     $('#list-group1').on('mouseleave',function(){
    //         $(this).hide('fast');
    //     })
    // }
    // mouseover2(){
    //     $('#identical-class-li-bar2').on('mouseenter',function(){
    //         $('#list-group2').show('slow');
    //     })
    //     $('#list-group2').on('mouseleave',function(){
    //         $(this).hide('fast');
    //     })
    // }
    // mouseover3(){
    //     $('#identical-class-li-bar3').on('mouseenter',function(){
    //         $('#list-group3').show('slow');
    //     })
    //     $('#list-group3').on('mouseleave',function(){
    //         $(this).hide('fast');
    //     })
    // }
    // mouseover4(){
    //     $('#identical-class-li-bar4').on('mouseenter',function(){
    //         $('#list-group4').show('slow');
    //     })
    //     $('#list-group4').on('mouseleave',function(){
    //         $(this).hide('fast');
    //     })
    // }
    // forClose(){
    //     $('#header-bar').on('mouseleave',function(){
    //         $('#list-group1').hide();
    //         $('#list-group2').hide();
    //         $('#list-group3').hide();
    //         $('#list-group4').hide();
    //     })
    // }
    // this method will call to those functions has defined inside this method when it reload page
    componentDidMount(){
        // this.mouseover1();
        // this.mouseover2();
        // this.mouseover3();
        // this.mouseover4();
        // this.forClose();
        this.getImages();
    }
    render(){
        return (
        <div  className="container-home">
            <div  className="row-home">
                  <div className="header">
                      <div className="logo-img">
                        <img id="logo-img" src="/img/images/logo.jpeg" alt="" />
                          <h3 className="under-logo-text">chuy??n gia ch???nh nha h??ng ?????u</h3>
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
                      {/* <div id="icon-menu" tabIndex="1"></div> */}
                      <div id="icon-menu" onClick={()=>this.showBar()}></div>
                      <div className="header-bar" id="header-bar">
                          <ul className="main-bar" id="main-bar">
                               <li className="identical-class-li-bar"><i className="fa fa-home"><Link className="link" to="/">Home</Link></i></li>
                               <li className="identical-class-li-bar"  id="identical-class-li-bar1">
                                <Link className="link" to="/eorthodontic">Ch???nh Nha chuy??n gia</Link>
                                   <ul className="list-group" id="list-group1">
                                           <li>C??c Lo???i H??nh Ch???nh Nha</li>
                                           <li>Chuy??n Gia</li>
                                           <li>C??c Ca Ch???nh Nha Th??nh C??ng</li>
                                   </ul>
                               </li>
                               <li className="identical-class-li-bar" id="identical-class-li-bar2">
                                <Link className="link" to="/service">D???ch V??? nha khoa</Link>
                                <ul className="list-group" id="list-group2">
                                           <li>Ch???nh Nha</li>
                                           <li>Ch???nh H??nh X????ng</li>
                                           <li>Nha Khoa Th???m M???</li>
                                           <li>Nha Khoa Tr??? Em</li>
                                           <li>Nha Khoa T???ng Qu??t</li>
                                           <li>Ph???c H??nh x????ng</li>
                                   </ul>
                               </li>
                               <li className="identical-class-li-bar"  id="identical-class-li-bar3">
                                <Link className="link" to="/icustomer">Kh??ch h??ng</Link>
                                  <ul className="list-group" id="list-group3">
                                           <li>H???i ????p</li>
                                           <li>?????t L???ch H???n</li>
                                   </ul>
                                </li>
                               <li className="identical-class-li-bar"><Link className="link" to="/discount">B???ng Gi?? - khuy???n m??i</Link></li>
                               <li className="identical-class-li-bar"  id="identical-class-li-bar4">
                                <Link className="link" to="/about">Gi???i thi???u</Link>
                                <ul className="list-group" id="list-group4">
                                        <li>V??? Ch??ng T??i</li>
                                        <li>G???p G??? T.S V?? Th??? Th??y H???ng</li>
                                        <li>Tham Quan Nha Khoa Rose</li>
                                        <li>Th?? Vi???n N??? C?????i</li>
                                   </ul>
                               </li>
                               <li className="identical-class-li-bar"><Link className="link" to="/news">Tin t???c</Link></li>
                               <li className="identical-class-li-bar"><Link className="link" to="/contact">Li??n h???</Link></li>
                          </ul>
                      </div>
                  </div>
            </div>
            <div className="clearfix"></div>
            <Aidsection />
               <div className="clearfix"></div>
                <div className="under-tag">
                <ul className="main-tag">
                    <li className="service-tag">d???ch v??? t???i nha khoa rose</li>
                    <li className="appoint-tag">
                        g???p g??? ti???n s?? r??ng h??m m???t
                        <br></br>
                        <br></br>
                        <span>v?? th??? th??y h???ng</span>
                    </li>
                    <li className="visit-tag">tham quan v??n ph??ng</li>
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
                            Ch??o m???ng b???n ?????n v???i nhan Nha khoa Rose, m???t nh?? cung c???p ???????c k??nh
                            tr???ng trong c???ng ?????ng ch??m s??c ch???nh nha c???a b???n. T???a l???c t???i H?? N???i,
                            ??u ti??n h??ng ?????u c???a c?? s??? th???c h??nh l?? cung c???p cho b???n d???ch v??? ch??m
                            s??c ch???nh nha ch???t l?????ng cao nh???t trong m???t m??i tr?????ng th??n thi???n,
                            tho???i m??i. Ch??ng t??i s??? d???ng nh???ng ti???n b??? c??ng ngh??? m???i nh???t trong ng??nh,
                            ch???ng h???n nh?? m???c c??i s???, c??ng v???i c??ng ngh??? m??y t??nh m???i nh???t
                            (h??nh ???nh k??? thu???t s??? v?? ????? h???a m??y t??nh ti??n ti???n) ????? ?????m b???o r???ng b???n
                                           <br/>  nh???n ???????c s??? ch??m s??c hi???u qu??? nh???t c?? th???.
                            <br/>
                            <br/>
                            Ch??ng t??i nh???n ra r???ng m???i b???nh nh??n ?????u c?? nh???ng nhu c???u kh??c nhau v??
                            ch??ng t??i t??? h??o v??? d???ch v??? l???ch s??? m?? ch??ng t??i cung c???p cho m???i ng?????i
                            ?????n kh??m b???nh. Cho d?? b???n l?? ng?????i l???n, thanh thi???u ni??n hay tr??? em, b??c
                            s?? v?? nh??n vi??n am hi???u c???a ch??ng t??i, v???i g???n 10 n??m kinh nghi???m k???t h???p,
                            cam k???t gi??p b???n
                                      <br/> ?????t ???????c n??? c?????i x???ng ????ng - m???t n??? c?????i kh???e ?????p!
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
                    <legend>li??n h??? v???i <span>ch??ng t??i</span></legend>
                    <ul className="infor-section">
                        <li>?????a ch???
                            <br />
                            <span>A8 ng?? 217,la th??nh,?????ng ??a, h?? n???i</span>
                        </li>
                        <li>th???i gian l??m vi???c
                            <br/>
                        <span>8h00 ?????n 18h00 t??? th??? 2 ?????n th??? 7</span>
                        </li>
                        <li>??i???n tho???i
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
                            ?????t l???ch h???n
                            <br/>
                            <span>nha khoa rose s??? li??n h??? v???i qu?? kh??ch h??ng trong th???i gian s???m nh???t</span>
                        </li>
                    </ul>
                </div>
                <div className="clearfix"></div>
                <div className="copyright">
                    <em>?? 2022. Ba??n quy????n thu????c v???? Nha Khoa Rose.</em>
                </div>
                <div className="clearfix"></div>
                <div className="gallery">
                    <legend>
                        th?? vi???n n??? c?????i t???i <br/>
                         <span>nha khoa rose</span>
                    </legend>

                    <div className="inner-gallery">

                        <ul className="first-image-collumes">
                             {
                            this.state.gallery.length >0 ? (
                                this.state.gallery.map((g)=>(
                        <li><img src={"uploads/"+g.image} /></li>
                        ))
                        ):(
                            <span className="btn btn-danger">empty</span>
                        )
                    }
                        </ul>
                         {/* <ul className="first-image-collumes">
                         <li><img src={"uploads/"+g.image} /></li>
                         </ul> */}
                         {/* <ul className="second-image-collumes">
                         <li><img src={"uploads/"+g.image} /></li>
                         </ul>
                         <ul className="third-image-collumes">
                         <li><img src={"uploads/"+g.image} /></li>
                         </ul> */}
                    </div>

                </div>
            </div>
            <Outlet />
        </div>
      );
    }
}
export default Home;
