import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';
import axios from 'axios';
class Leftbar extends Component {
    constructor(props){
       super(props);
       //defining variable and array or objects to return to react js view
      this.state = {
        category:[],
        news:[],
      }
    }
    getCategory = () => {
        axios.get("http://127.0.0.1:8000/api/getAllCategory")
          .then((response) => {
            if (response.status === 200) {
              this.setState({
               category: response.data.data,
              });
            //   console.log(this.state.category);
            }
          })
          .catch((error) => {
            console.error(error);
          });
      };
      onGetValue=() => {
        axios.get("http://127.0.0.1:8000/api/getNews2")
        .then((response) => {
          if (response.status === 200) {
            this.setState({
             news: response.data.data,
            });
          //   console.log(this.state.category);
          }
        })
      }
    //function react js
    // this method will call to those functions has defined inside this method when it reload page
    componentDidMount(){
        this.getCategory();
        this.onGetValue();
    }
    render(){
        return (
            <div className="left-list-container">
            <ul className="list-1">
              <legend className="special-heading">dich vụ nha khoa</legend>
              {
                this.state.category.length >0 ?(
                    this.state.category.map((cate)=>(
                         <li>
                            <Link to="/service">{cate.name}</Link>
                        <hr></hr>
                         </li>
                    ))
                ):(<span className="text-success">empty</span>)
              }
              {/* <li>chỉnh hình
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
              </li> */}
            </ul>
            <legend className="list2 legend">bài viết xem nhiều</legend>
            <ul className="list-2">
            {
                    this.state.news.length >0 ?(
                        this.state.news.map((n)=>(
                            <li><div className="left-img"><img src={"/uploads/"+n.image} /></div>
                            <div className="right-text">
                                <p><Link to={"/news_detail/"+n.id}>{n.heading}</Link></p>
                            </div></li>
                        ))
                    ):(<span className="btn btn-primary">empty</span>)
                }
               {/* <li>
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
                  </div></li>*/}
            </ul>
            <legend className="list3 legend">tin mới nhất</legend>
            <ul className="list-3">
                {
                    this.state.news.length >0 ?(
                        this.state.news.map((n)=>(
                            <li><div className="left-img"><img src={"/uploads/"+n.image} /></div>
                            <div className="right-text">
                                <p><Link to={"/news_detail/"+n.id}>{n.heading}</Link></p>
                            </div></li>
                        ))
                    ):(<span className="btn btn-primary">empty</span>)
                }

               {/* <li><div className="left-img"><img src="/img/images/Nha-khoa_22b.jpg"/></div>
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
                  </div></li> */}
            </ul>
         </div>
      );
    }
}
export default Leftbar;
