import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';
class Footer extends Component {
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
            </div>
      );
    }
}
export default Footer;
