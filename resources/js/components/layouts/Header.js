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
            </div>
        );
    }
}
export default Header;
