import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';
import Header from '../layouts/Header';
import Footer from '../layouts/Footer';
class Leftbar extends Component {
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
            <div className="left-list-container">
            <ul className="list-1">
              <legend className="special-heading">dich vụ nha khoa</legend>
              <li>chỉnh hình
                <hr></hr>
              </li>
              <li>chỉnh nha
              <hr></hr>
              </li>
              <li>niềng rằng trong suốt
              <hr></hr>
              </li>
              <li>răng sứ thẩm mỹ
              <hr></hr>
              </li>
              <li>implant
              <hr></hr>
              </li>
              <li>trắng răng
              </li>
            </ul>
            <legend className="list2 legend">bài viết xem nhiều</legend>
            <ul className="list-2">
               <li>
                  <div className="left-img"><img src="/img/images/Nha-khoa_26.jpg"/></div>
                  <div className="right-text">
                      <p>Quy trình bọc răng sứ đưuọc thực hiện như thế nào?</p>
                  </div>
               </li>
               <li>
               <div className="left-img"><img src="/img/images/Nha-khoa_22b.jpg"/></div>
                  <div className="right-text">
                      <p>Quy trình bọc răng sứ đưuọc thực hiện như thế nào?</p>
                  </div>
               </li>
               <li>
               <div className="left-img"><img src="/img/images/Nha-khoa_06a.jpg"/></div>
                  <div className="right-text">
                      <p>Quy trình bọc răng sứ đưuọc thực hiện như thế nào?</p>
               </div>
               </li>
               <li><div className="left-img"><img src="/img/images/Nha-khoa_10a.jpg"/></div>
                  <div className="right-text">
                      <p>Quy trình bọc răng sứ đưuọc thực hiện như thế nào?</p>
                  </div></li>
            </ul>
            <legend className="list3 legend">tin mới nhất</legend>
            <ul className="list-3">
               <li><div className="left-img"><img src="/img/images/Nha-khoa_26.jpg"/></div>
                  <div className="right-text">
                      <p>Quy trình bọc răng sứ đưuọc thực hiện như thế nào?</p>
                  </div></li>
               <li><div className="left-img"><img src="/img/images/Nha-khoa_22b.jpg"/></div>
                  <div className="right-text">
                      <p>Quy trình bọc răng sứ đưuọc thực hiện như thế nào?</p>
                  </div></li>
               <li><div className="left-img"><img src="/img/images/Nha-khoa_06a.jpg"/></div>
                  <div className="right-text">
                      <p>Quy trình bọc răng sứ đưuọc thực hiện như thế nào?</p>
                  </div></li>
               <li><div className="left-img"><img src="/img/images/Nha-khoa_10a.jpg"/></div>
                  <div className="right-text">
                      <p>Quy trình bọc răng sứ đưuọc thực hiện như thế nào?</p>
                  </div></li>
            </ul>
         </div>
      );
    }
}
export default Leftbar;
