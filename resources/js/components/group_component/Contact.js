import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';
import Header from '../layouts/Header';
import Footer from '../layouts/Footer';
import Banner from '../suppliment/Banner';
const largerSign ='>';
class Contact extends Component {
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
                         <Banner bannerWord="liên hệ" />
                         <div className="contact-controller">
                            <div className="contact-container">
                                <legend>Home {largerSign} liên hệ</legend>
                                <div className="contact-content">
                                    <legend>liên hệ chúng tôi</legend>
                                    <div className="contact-below-form">
                                         <form action="#" method="post" enctype="multipart/form" role="form">
                                            <div className="form">
                                                <div className="form-group-left">
                                                    <img src="/img/images/name.jpg" />
                                                    <input name="name" placeholder="họ tên"/>
                                                    <br/>
                                                    <img src="/img/images/phone.jpg" />
                                                    <input name="phone" placeholder="điện thoại" />
                                                    <br/>
                                                     <img src="/img/images/email.jpg" />
                                                    <input name="email" placeholder="email" />
                                               </div>
                                               <div className="form-group-right">
                                                    <img src="/img/images/pen.jpg" />
                                                    <input name="title" placeholder="tiêu đề "/>
                                                    <br/>
                                                    <img src="/img/images/contact.jpg" />
                                                    <textarea name="content" placeholder="nội dung liên hệ"/>
                                               </div>
                                            </div>
                                               <br/>
                                               <button className="button-contact">gửi liên hệ <img src="/img/images/air.jpg"/></button>
                                         </form>
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
export default Contact;
