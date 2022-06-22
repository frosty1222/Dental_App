import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';
import Leftbar from '../../layouts/Leftbar';
import Banner from '../../suppliment/Banner';
import Header from '../../layouts/Header';
import Footer from '../../layouts/Footer';
const largerSign = '>';
class EoDetail extends Component {
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
                        <Banner bannerWord="Chỉnh nha chuyên khoa chi tiết" />
                       <div className="inner-main">
                           <legend className="hint-word">Home { largerSign } Chỉnh nha chuyên khoa chi tiết</legend>
                               <div className="child-inner-main">
                                  <Leftbar />
                                  <div className="clearfix"></div>
                                  <div className="right-list-container">
                                        <legend className="eo-detail-legend">
                                        NHỮNG ĐIỀU CẦN BIẾT KHI LÀM RĂNG GIẢ
                                        </legend>
                                        <div className="main-oe-detail">
                                             <div className="above-oedetail-img">
                                                <img src="/img/images/middle_1c.jpg"/>
                                                   <p>Những điều cần biết khi chỉnh nha </p>
                                             </div>
                                             <div className="oe-group">
                                                <ul className="list-oe">
                                                     <li className="list-oe-child">
                                                        1.những ưu điểm
                                                        <br></br>
                                                        <p className="text-success">
                                                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam aperiam reiciendis quae nulla ea quod consectetur soluta provident
                                                         voluptate deleniti atque ipsum autem magni totam officia fugiat commodi, pariatur repudiandae.
                                                        </p>
                                                     </li>
                                                     <li className="list-oe-child">
                                                        2.những nhược điểm
                                                        <br></br>
                                                        <p className="text-success">
                                                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam aperiam reiciendis quae nulla ea quod consectetur soluta provident
                                                         voluptate deleniti atque ipsum autem magni totam officia fugiat commodi, pariatur repudiandae.
                                                        </p>
                                                     </li>
                                                     <li className="list-oe-child">
                                                       3.những Hậu Quả khi không áp chữa chị sớm các bệnh về răng, lợi
                                                        <br></br>
                                                        <p className="text-success">
                                                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam aperiam reiciendis quae nulla ea quod consectetur soluta provident
                                                         voluptate deleniti atque ipsum autem magni totam officia fugiat commodi, pariatur repudiandae.
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
export default EoDetail;
