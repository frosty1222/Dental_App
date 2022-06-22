import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';
import Header from '../../layouts/Header';
import Footer from '../../layouts/Footer';
import Leftbar from '../../layouts/Leftbar';
import Banner from '../../suppliment/Banner';
const largerSign ='>';
class NewsDetail extends Component {
    constructor(props){
       super(props);
       //defining variable and array or objects to return to react js view
      this.state = {
        id:'',
        heading: '',
        image: '',
        intro_text: '',
        origin: '',
        advantage:'',
        reputation_proof: '',
        news:[],
        newArr:[],
      }
    }
    //function react js
    onSelectValue = (e)=>{
        const url = window.location.pathname
        const strs = url.split('/');
        const id = strs.at(-1);
        axios.get('http://127.0.0.1:8000/api/getIdValue/'+id)
        .then((response) =>{
           this.setState({
            news: response.data.data,
           })
           this.state.news.map((n)=>{
            this.state.newArr.push(n);
           })
           this.state.newArr.map((m) =>{
                this.setState({
                    id:m.id,
                    heading:m.heading,
                    image:m.image,
                    intro_text :m.intro_text,
                    origin:m.origin,
                    advantage :m.advantage,
                    reputation_proof :m.reputation_proof,
                })
           })
           }).catch((error) =>{
            alert(error.message);
        })
    }
    // this method will call to those functions has defined inside this method when it reload page
    componentDidMount(){
        this.onSelectValue();
    }
    render(){
        return (
            <div className="container-app">
            <div className="row-app">
                <div className="child-container">
                    <Header />
                        {/* code content */}
                          <div className="child-main">
                              <Banner bannerWord="tin tức chi tiết" />
                              <div className="clearfix"></div>
                              <div className="inner-main">
                           <legend className="hint-word">Home { largerSign } Tin tức chi tiết</legend>
                               <div className="child-inner-main">
                                  <Leftbar />
                                  <div className="clearfix"></div>
                                  <div className="right-list-container">
                                  <legend className="news-detail-legend">
                                            {this.state.heading}
                                        </legend>
                                  <div className="ndetail-container">
                                        <div className="ndetail-main">
                                            <div className="above-dtail-img">
                                                <p>
                                                   {this.state.description}
                                                </p>
                                                <div className="img-container-dtail">
                                                    <img src={"/uploads/"+this.state.image} />
                                                </div>
                                            </div>
                                            <div className="below-intro-text-dtail">
                                                <h4 style={{color:'black'}} className="h4-detail">1.Xuất sứ của máy cao răng Aruko</h4>
                                                   <p>
                                                      {this.state.origin}
                                                   </p>
                                            </div>
                                            <div className="child-detail-text">
                                            <h4 style={{color:'black'}}  className="h4-detail">2.Ưu điểm </h4>
                                                   <p>
                                                     {this.state.advantage}
                                                   </p>
                                             <div className="below-dtail-img">
                                                <div className="img-container-dtail-below">
                                                    <img src={"/uploads/"+this.state.image} />
                                                </div>
                                            </div>
                                            <h4 style={{color:'black'}}  className="h4-detail" >3.Danh hiệu</h4>
                                                   <p>
                                                       {this.state.reputation_proof}
                                                   </p>
                                            </div>
                                            <div className="relation-detail">
                                            <div className="news-list-group">
                                              <div className="news-main">
                                                     <ul className="news-list">
                                                            <li>
                                                                <div className="left-img-news">
                                                                    <img src="/img/images/middle_1a.jpg" />
                                                                </div>
                                                                <div className="right-text-news">
                                                                     <legend><Link to={"/news_detail/"+this.state.id} className="text-primary">{this.state.heading}</Link></legend>
                                                                     <p>
                                                                       {this.state.description}                                                                     </p>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    </div>
                                            </div>
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
export default NewsDetail;
