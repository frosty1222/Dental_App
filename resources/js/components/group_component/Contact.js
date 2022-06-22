import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';
import Header from '../layouts/Header';
import Footer from '../layouts/Footer';
import Banner from '../suppliment/Banner';
import axios from "axios";
import Swal from 'sweetalert2';
const largerSign ='>';
class Contact extends Component {
    constructor(props){
       super(props);
       //defining variable and array or objects to return to react js view
      this.state = {
        name:'',
        phone:'',
        email:'',
        title:'',
        message:'',
        notify:'',
      }
      this. onSubmitContact = this.onSubmitContact.bind(this);
      this.onChangeName = this.onChangeName.bind(this);
      this.onChangePhone = this.onChangePhone.bind(this);
      this.onChangeEmail = this.onChangeEmail.bind(this);
      this.onChangeTitle = this.onChangeTitle.bind(this);
      this. onChangeContent = this.onChangeContent.bind(this);
    }
    onChangeName(e){
        this.setState({name: e.target.value});
    }
    onChangePhone(e){
        this.setState({phone: e.target.value})
    }
    onChangeEmail(e){
       this.setState({email: e.target.value});
    }
    onChangeTitle(e){
        this.setState({title: e.target.value});
     }

     onChangeContent(e){
        this.setState({message: e.target.value});
     }

    //function react js
    onSubmitContact =(e)=>{
        e.preventDefault();
         const data ={
            name: this.state.name,
            phone: this.state.phone,
            email: this.state.email,
            title: this.state.title,
            message: this.state.message,
         }
        axios.post('http://127.0.0.1:8000/api/addcontact',data).then((response) => {
        this.setState({notify: response.data.notify})
        Swal.fire({
            icon: 'success',
            text:this.state.notify,
            showCancelButton: true,
            confirmButtonText: 'Ok',
            confirmButtonColor: '#e3342f',
        })
        document.querySelector("#imageForm").reset();
      }).catch(err=>{
        console.log(err);
      })
    }
    // this method will call to those functions has defined inside this method when it reload page
    componentDidMount(){
    }
    render(){
        return (
            <div className="container-app">
            <div className="row-app">
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
                                         <form action="#" onSubmit={this.onSubmitContact} method="post" role="form" id="imageForm">
                                            <div className="form">
                                                <div className="form-group-left">
                                                    <img src="/img/images/name.jpg" />
                                                    <input name="name" placeholder="họ tên" required="required" onChange={this.onChangeName} type="text"/>
                                                    <br/>
                                                    <img src="/img/images/phone.jpg" />
                                                    <input name="phone" placeholder="điện thoại" required="required"  onChange={this.onChangePhone} type="number" />
                                                    <br/>
                                                     <img src="/img/images/email.jpg" />
                                                    <input name="email" placeholder="email" required="required"  onChange={this.onChangeEmail} type="email" />
                                               </div>
                                               <div className="form-group-right">
                                                    <img src="/img/images/pen.jpg" />
                                                    <input name="title" placeholder="tiêu đề" type="text"  onChange={this.onChangeTitle} required="required" />
                                                    <br/>
                                                    <img src="/img/images/contact.jpg" />
                                                    <textarea name="message" placeholder="nội dung liên hệ" type="text"  onChange={this.onChangeContent} required="required" />
                                               </div>
                                            </div>
                                               <br/>
                                               <button type="submit" className="button-contact">gửi liên hệ <img src="/img/images/air.jpg"/></button>
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
