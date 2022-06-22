import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';
import Header from '../layouts/Header';
import Footer from '../layouts/Footer';
import Leftbar from '../layouts/Leftbar';
import Banner from '../suppliment/Banner';
const  largerSign='>';
import axios from 'axios';
class Eorthodontic extends Component {
    constructor(props){
       super(props);
       //defining variable and array or objects to return to react js view
      this.state = {
        orthodontic:[],
      }
    }
    //function react js
    onValue =() =>{
        axios.get('http://127.0.0.1:8000/api/oGetAll')
        .then(res=>{
           this.setState({orthodontic:res.data.data});
          })
          .catch(err=>{
           console.log(err);
          })
      }
    // this method will call to those functions has defined inside this method when it reload page
    componentDidMount(){
        this.onValue();
    }
    render(){
        return (
            <div className="container-app">
            <div className="row-app">
                <div className="child-container">
                    <Header />
                       {/* code content */}
                       <div className="child-main">
                            <Banner bannerWord="chỉnh nha chuyên gia" />
                        <div className="clearfix"></div>
                           <div className="inner-main">
                           <legend className="hint-word">Home { largerSign } Chỉnh nha chuyên khoa</legend>
                               <div className="child-inner-main">
                                  <div className="clearfix"></div>
                                     <Leftbar />
                                   <div className="right-list-container">
                                         <legend>Chỉnh nha chuyên gia</legend>
                                         <div className="below-list-container">
                                            <ul className="below-content">
                                                {
                                                    this.state.orthodontic.length > 0 ?(
                                                        this.state.orthodontic.map((o)=>(
                                                         <li className="bellow-child" key={o.key}>
                                                            <div className="left-below-image">
                                                                <img src={"/uploads/"+o.image} />
                                                            </div>
                                                            <div className="right-below-text">
                                                                <legend><Link to={"/eodetail/"+o.id}>{o.name}</Link></legend>
                                                                <p>
                                                                   {o.advantage}
                                                                </p>
                                                            </div>
                                                         </li>
                                                        ))
                                                    ):(<span className="btn btn-primary">empty</span>)
                                                }

                                                {/* <li className="bellow-child">

                                                      <div className="left-below-image">
                                                          <img src="/img/images/middle_1c.jpg"/>
                                                      </div>
                                                      <div className="right-below-text">
                                                      <legend><Link to="#">những điều cần biết khi làm răng giả</Link></legend>
                                                      <p>
                                                            răng giả được xem là biện pháp hữu hiệu mà nhiều người sử dụng hiện
                                                            nay khi bị mất răng.Như các bác sĩ rất khuyến cáo
                                                        </p>
                                                      </div>
                                                </li>
                                                <li className="bellow-child">

                                                      <div className="left-below-image">
                                                           <img src="/img/images/middle_1a.jpg"/>
                                                      </div>
                                                      <div className="right-below-text">
                                                      <legend><Link to="#">những điều cần biết khi làm răng giả</Link></legend>
                                                      <p>
                                                            răng giả được xem là biện pháp hữu hiệu mà nhiều người sử dụng hiện
                                                            nay khi bị mất răng.Như các bác sĩ rất khuyến cáo
                                                        </p>
                                                      </div>
                                                </li>
                                                <li className="bellow-child">

                                                       <div className="left-below-image">
                                                           <img src="/img/images/nieng_rang.jpg"/>
                                                       </div>
                                                      <div className="right-below-text">
                                                      <legend><Link to="#">những điều cần biết khi làm răng giả</Link></legend>
                                                      <p>
                                                           răng giả được xem là biện pháp hữu hiệu mà nhiều người sử dụng hiện
                                                            nay khi bị mất răng.Như các bác sĩ rất khuyến cáo
                                                        </p>
                                                      </div>
                                                </li>
                                                <li className="bellow-child">

                                                      <div className="left-below-image">
                                                          <img src="/img/images/middle_2.jpg"/>
                                                      </div>
                                                      <div className="right-below-text">
                                                      <legend><Link to="#">những điều cần biết khi làm răng giả</Link></legend>
                                                      <p>
                                                            răng giả được xem là biện pháp hữu hiệu mà nhiều người sử dụng hiện
                                                            nay khi bị mất răng.Như các bác sĩ rất khuyến cáo
                                                        </p>
                                                      </div>
                                                </li>
                                                <li className="bellow-child">

                                                      <div className="left-below-image">
                                                           <img src="/img/images/Nha-khoa_26.jpg"/>
                                                      </div>
                                                      <div className="right-below-text">
                                                      <legend><Link to="#">những điều cần biết khi làm răng giả</Link></legend>
                                                      <p>
                                                            răng giả được xem là biện pháp hữu hiệu mà nhiều người sử dụng hiện
                                                            nay khi bị mất răng.Như các bác sĩ rất khuyến cáo
                                                        </p>
                                                      </div>
                                                </li> */}
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
export default Eorthodontic;
// Eorthodontic:expert orthodontic: chuyên gia chỉnh nha
