import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';
import Header from '../layouts/Header';
import Footer from '../layouts/Footer';
import Leftbar from '../layouts/Leftbar';
import Banner from '../suppliment/Banner';
const largerSign ='>';
class Discount extends Component {
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
                          <Banner bannerWord="bảng giá - khuyến mại" />
                       <div className="inner-main">
                           <legend className="hint-word">Home { largerSign } Bảng giá khuyến mãi</legend>
                               <div className="child-inner-main">
                                  <div className="clearfix"></div>
                                   <Leftbar />
                                  <div className="right-list-container">
                                         <div className="header-name"><legend>Bảng giá -khuyến mãi</legend></div>
                                         <div className="main-content-discount">
                                             <legend>Cập nhật các Ưu đãi và Bảng giá khuyến mãi mới nhất từ nha khoa Rose</legend>
                                         </div>
                                       <div className="list-content-discount">
                                            <ul className="list-main-dis">
                                                <li>
                                                   <div className="dis-image-left">
                                                       <img src="/img/images/discount1.jpg"/>
                                                   </div>
                                                   <div className="dis-text-right">
                                                        <legend><Link className="linksub" to="/discountdetail/1">khuyến mãi tẩy trắng răng</Link></legend>
                                                        <p>
                                                            Với phương châm hoạt động phát triển kinh tế tư nhân và định hướng mạnh mẽ và chuyên nghiệp...
                                                        </p>
                                                   </div>
                                                </li>
                                                <hr />
                                                <li>
                                                    <div className="dis-image-left">
                                                       <img src="/img/images/discount2.jpg"/>
                                                    </div>
                                                    <div className="dis-text-right">
                                                        <legend><Link className="linksub" to="/discountdetail/1">khuyến mãi chỉnh nha và niềng răng</Link></legend>
                                                        <p>
                                                            Với phương châm hoạt động phát triển kinh tế tư nhân và định hướng mạnh mẽ và chuyên nghiệp...
                                                        </p>
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
export default Discount;
