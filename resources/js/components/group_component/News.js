import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';
import Header from '../layouts/Header';
import Footer from '../layouts/Footer';
import Banner from '../suppliment/Banner';
import Leftbar from '../layouts/Leftbar';
const largerSign ='>';
class News extends Component {
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
                         <Banner bannerWord="tin tức" />
                         <div className="clearfix"></div>
                           <div className="inner-main">
                           <legend className="hint-word">Home { largerSign } Chỉnh nha chuyên khoa</legend>
                               <div className="child-inner-main">
                                  <div className="clearfix"></div>
                                     <Leftbar />
                                      <div className="right-list-container">
                                         <legend className="news-legend">Tin tức</legend>
                                         <div className="news-list-group">
                                              <div className="news-main">
                                                     <ul className="news-list">
                                                            <li>
                                                                <div className="left-img-news">
                                                                    <img src="/img/images/middle_1a.jpg" />
                                                                </div>
                                                                <div className="right-text-news">
                                                                     <legend>máy lấy cao răng aruko:thương hiệu nhật bản được tin dùng</legend>
                                                                     <p>
                                                                        Để có được một hàm răng thật trắng sáng, chắc khỏe với nụ cười tỏa nắng
                                                                         thì việc thường xuyên lấy cao răng là việc làm vô cùng cần thiết.
                                                                     </p>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="left-img-news">
                                                                    <img src="/img/images/Nha-khoa_11a.jpg" />
                                                                </div>
                                                                <div className="right-text-news">
                                                                     <legend>máy lấy cao răng aruko:thương hiệu nhật bản được tin dùng</legend>
                                                                     <p>
                                                                        Để có được một hàm răng thật trắng sáng, chắc khỏe với nụ cười
                                                                         tỏa nắng thì việc thường xuyên lấy cao răng là việc làm vô cùng cần thiết.
                                                                     </p>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="left-img-news">
                                                                    <img src="/img/images/middle_1a.jpg" />
                                                                </div>
                                                                <div className="right-text-news">
                                                                     <legend>máy lấy cao răng aruko:thương hiệu nhật bản được tin dùng</legend>
                                                                     <p>
                                                                        Để có được một hàm răng thật trắng sáng, chắc khỏe với nụ cười tỏa nắng
                                                                         thì việc thường xuyên lấy cao răng là việc làm vô cùng cần thiết.
                                                                     </p>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="left-img-news">
                                                                    <img src="/img/images/Nha-khoa_11a.jpg" />
                                                                </div>
                                                                <div className="right-text-news">
                                                                     <legend>máy lấy cao răng aruko:thương hiệu nhật bản được tin dùng</legend>
                                                                     <p>
                                                                        Để có được một hàm răng thật trắng sáng, chắc khỏe với nụ cười tỏa nắng
                                                                         thì việc thường xuyên lấy cao răng là việc làm vô cùng cần thiết.
                                                                     </p>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="left-img-news">
                                                                    <img src="/img/images/middle_1a.jpg" />
                                                                </div>
                                                                <div className="right-text-news">
                                                                     <legend>máy lấy cao răng aruko:thương hiệu nhật bản được tin dùng</legend>
                                                                     <p>
                                                                        Để có được một hàm răng thật trắng sáng, chắc khỏe với nụ
                                                                         cười tỏa nắng thì việc thường xuyên lấy cao răng là việc làm vô cùng cần thiết.
                                                                     </p>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="left-img-news">
                                                                    <img src="/img/images/Nha-khoa_11a.jpg" />
                                                                </div>
                                                                <div className="right-text-news">
                                                                     <legend>máy lấy cao răng aruko:thương hiệu nhật bản được tin dùng</legend>
                                                                     <p>
                                                                        Để có được một hàm răng thật trắng sáng, chắc khỏe với nụ cười tỏa nắng thì
                                                                         việc thường xuyên lấy cao răng là việc làm vô cùng cần thiết.
                                                                     </p>
                                                                </div>
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
export default News;
