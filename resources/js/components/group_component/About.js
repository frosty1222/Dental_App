import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';
import Header from '../layouts/Header';
import Footer from '../layouts/Footer';
import Leftbar from '../layouts/Leftbar';
import Banner from '../suppliment/Banner';
const largerSign ='>';
class About extends Component {
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
                               <Banner bannerWord="giới thiệu" />
                               <div className="clearfix"></div>
                               <div className="about-container">
                                <div className="main-about">
                                    <legend>Home {largerSign} Giới thiệu</legend>
                                    <div className="about-content">
                                         <legend>Về chúng tôi</legend>
                                         <div className="wrap-inner-content">
                                              <div className="left-text-about">
                                                     <p>
                                                         Nha khoa Rose thành lập vào tháng 9/2004, với mong muốn mang lại cho khách hàng những dịch vụ nha khoa đúng chuẩn quốc tế.
                                                         Phương châm phục vụ của Nha khoa Rose với mong muốn mang lại cho khách hàng những dịch vụ nha khoa đúng chuẩn quốc tế Chất
                                                         lượng dịch vụ và sự tận tâm của bác sĩ mới là chìa khóa cho mọi thành công.Chính sự hài lòng của khách hàng sẽ đưa thương
                                                         hiệu Á Âu đến với mỗi gia đình.
                                                         <br/>
                                                         <br/>
                                                        “Hãy chăm sóc khách hàng thật tốt, họ sẽ tự hào giới thiệu chúng ta đến với bạn bè và người thân”:Chất lượng dịch vụ và sự
                                                         tận tâm của bác sĩ mới là chìa khóa cho mọi thành công. Chính sự hài lòng của khách hàng sẽ đưa thương hiệu Nha khoa Rose
                                                         đến với mỗi gia đình.“Hãy chăm sóc khách hàng thật tốt, họ sẽ tự hào giới thiệu chúng ta đến với bạn bè và người thân”
                                                     </p>
                                              </div>
                                              <div className="right-picture-about">
                                                   <img src="/img/images/about.jpg" />
                                              </div>
                                         </div>
                                         <div className="clearfix"></div>
                                         <div className="about-reason">
                                              <legend>Lý do chọn nha khoa Rose</legend>
                                              <ul className="about-cards">
                                                  <li>
                                                    <div className="above-about-icon">
                                                        <img src="/img/images/doctori.jpg" />
                                                    </div>
                                                    <div className="below-about-head">
                                                        <legend>bác sĩ chuyên khoa đầu ngành</legend>
                                                    </div>
                                                    <div className="bottom-about-text">
                                                        <p>
                                                        Chất lượng và giá thành của một dịch vụ nha khoa phụ thuộc rất
                                                        nhiều vào chất liệu của các vật liệu được sử dụng. Vật liệu nha
                                                        khoa cao cấp chính hãng là một trong những ưu thế vượt trội...
                                                        </p>
                                                    </div>
                                                  </li>
                                                  <li>
                                                   <div className="above-about-icon">
                                                    <img src="/img/images/microscope.jpg" />
                                                   </div>
                                                    <div className="below-about-head">
                                                        <legend>trang thiết bị hiện đại</legend>
                                                    </div>
                                                    <div className="bottom-about-text">
                                                        <p>
                                                        Chất lượng và giá thành của một dịch vụ nha khoa phụ thuộc rất
                                                        nhiều vào chất liệu của các vật liệu được sử dụng. Vật liệu nha
                                                        khoa cao cấp chính hãng là một trong những ưu thế vượt trội...
                                                        </p>
                                                    </div>
                                                  </li>
                                                  <li>
                                                  <div className="above-about-icon">
                                                    <img src="/img/images/teeth.jpg" />
                                                  </div>
                                                    <div className="below-about-head">
                                                        <legend>vật liệu nha khoa cao cấp</legend>
                                                    </div>
                                                    <div className="bottom-about-text">
                                                        <p>
                                                        Chất lượng và giá thành của một dịch vụ nha khoa phụ thuộc rất
                                                        nhiều vào chất liệu của các vật liệu được sử dụng. Vật liệu nha
                                                        khoa cao cấp chính hãng là một trong những ưu thế vượt trội...
                                                        </p>
                                                    </div>
                                                  </li>
                                                  <li>
                                                   <div className="above-about-icon">
                                                      <img src="/img/images/liked.jpg" />
                                                   </div>
                                                    <div className="below-about-head">
                                                        <legend>chế độ hậu mãi tận tâm</legend>
                                                    </div>
                                                    <div className="bottom-about-text">
                                                        <p>
                                                        Chất lượng và giá thành của một dịch vụ nha khoa phụ thuộc rất
                                                        nhiều vào chất liệu của các vật liệu được sử dụng. Vật liệu nha
                                                        khoa cao cấp chính hãng là một trong những ưu thế vượt trội...
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
export default About;
